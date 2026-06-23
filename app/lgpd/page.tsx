import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { LegalPage, Note, H2, P, UL, Fill, CrossLinks } from '@/components/legal/LegalContent'

export const metadata: Metadata = {
  title: 'Central de Privacidade (LGPD) — Notura',
  description: 'Resumo direto de como o Notura trata seus dados pessoais e o conteúdo das suas reuniões, conforme a LGPD.',
}

export default function LgpdPage() {
  return (
    <>
      <Navbar />
      <LegalPage
        title="Aviso de LGPD — Central de Privacidade do Notura"
        updated={<Fill>{/* TODO: preencher antes de publicar */}[PREENCHER: data]</Fill>}
      >
        <Note>
          Esta página resume, em linguagem direta, como o Notura trata seus dados sob a LGPD. Ela complementa a{' '}
          <Link href="/politica-de-privacidade" className="text-[#5341CD] font-medium">Política de Privacidade</Link>{' '}
          completa. Campos <strong>[PREENCHER]</strong> a completar; revisão jurídica recomendada.
        </Note>

        <H2>Nosso compromisso</H2>
        <P>
          O Notura foi pensado para times brasileiros, e levar a sério a proteção de dados faz parte do produto.
          Tratamos dados pessoais de acordo com a <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018)</strong>.
        </P>

        <H2>O que isso significa na prática</H2>
        <P>
          <strong>Você é dono do conteúdo das suas reuniões.</strong> O áudio, as transcrições e os resumos são
          seus. O Notura processa esse material <strong>apenas para entregar o serviço</strong> que você
          contratou — transcrever, resumir e organizar — e nunca para finalidades próprias nem para venda a
          terceiros.
        </P>
        <P>
          <strong>Papéis bem definidos.</strong> Sobre os dados da sua conta e pagamento, o Notura é o
          Controlador. Sobre o conteúdo das suas reuniões, <strong>você é o Controlador e o Notura é o
          Operador</strong>, processando sob a sua instrução.
        </P>
        <P>
          <strong>Você decide e você pode apagar.</strong> O conteúdo das reuniões pode ser excluído a qualquer
          momento pelo app. Ao encerrar a conta, eliminamos ou anonimizamos seus dados em prazo razoável, salvo
          retenção exigida por lei.
        </P>

        <H2>Onde seus dados são processados</H2>
        <P>
          Para funcionar, o Notura usa fornecedores de transcrição, IA, hospedagem e pagamento. Alguns podem
          processar dados fora do Brasil, sempre com salvaguardas contratuais previstas no Art. 33 da LGPD. A lista
          atualizada de fornecedores e suas localizações está na{' '}
          <Link href="/politica-de-privacidade" className="text-[#5341CD] font-medium">Política de Privacidade</Link>,
          Seção 5.
        </P>
        <Note>
          Transparência: se o seu caso exige processamento exclusivamente em território nacional, fale com a gente
          antes de contratar — Seção de contato abaixo.
        </Note>

        <H2>Sua responsabilidade ao gravar</H2>
        <P>
          Como é você quem escolhe quais reuniões processar, cabe a você ter base legal para isso — incluindo,
          quando aplicável, <strong>avisar os participantes</strong> de que a reunião será gravada e transcrita. O
          Notura entrega a ferramenta; o uso conforme a LGPD em relação aos participantes é de quem grava.
        </P>

        <H2>Seus direitos</H2>
        <P>Pela LGPD (Art. 18), você pode solicitar a qualquer momento:</P>
        <UL>
          <li>Confirmação de que tratamos seus dados e acesso a eles</li>
          <li>Correção de dados incompletos ou desatualizados</li>
          <li>Anonimização, bloqueio ou eliminação</li>
          <li>Portabilidade</li>
          <li>Informação sobre com quem compartilhamos</li>
          <li>Revogação de consentimento</li>
        </UL>

        <H2>Como exercer seus direitos</H2>
        <P>Escreva para o nosso Encarregado de Proteção de Dados (DPO):</P>
        <P>
          <strong><Fill>{/* TODO: preencher antes de publicar */}[PREENCHER: e-mail, ex. privacidade@notura.com.br]</Fill></strong>
        </P>
        <P>
          Respondemos dentro dos prazos legais. Se entender que seus direitos não foram atendidos, você pode
          recorrer à <strong>ANPD (Autoridade Nacional de Proteção de Dados)</strong>.
        </P>

        <CrossLinks current="lgpd" />
      </LegalPage>
      <Footer />
    </>
  )
}
