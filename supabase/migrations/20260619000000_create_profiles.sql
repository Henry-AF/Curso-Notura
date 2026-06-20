-- Tabela de perfis vinculada ao Supabase Auth
create table if not exists public.profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  email         text unique not null,
  plan          text not null default 'free' check (plan in ('free', 'pro')),
  plan_status   text check (plan_status in ('active', 'canceled', 'late')),
  plan_source   text,
  plan_renews_at timestamptz,
  kiwify_order_id        text unique,
  kiwify_subscription_id text,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- Trigger para manter updated_at sincronizado
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

-- RLS: usuários lêem/editam apenas o próprio perfil
alter table public.profiles enable row level security;

create policy "usuarios leem proprio perfil"
  on public.profiles for select
  using (auth.uid() = id);

create policy "usuarios editam proprio perfil"
  on public.profiles for update
  using (auth.uid() = id);

-- Service role ignora RLS por padrão; não precisa de policy para inserção via admin
