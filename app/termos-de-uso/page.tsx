import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { LegalPage, Note, H2, P, UL, Fill, CrossLinks } from '@/components/legal/LegalContent'

export const metadata: Metadata = {
  title: 'Termos de Uso — Notura',
  description: 'Condições de uso do app Notura e do combo Notura + Método R.E.U.N.I.R., incluindo garantia, propriedade intelectual e responsabilidades.',
}

export default function TermosDeUsoPage() {
  return (
    <>
      <Navbar />
      <LegalPage
        title="Termos de Uso — Notura"
        updated={<Fill>{/* TODO: preencher antes de publicar */}[PREENCHER: data]</Fill>}
      >
        <Note>
          Campos <strong>[PREENCHER: ...]</strong> precisam ser completados. Base específica do Notura;{' '}
          <strong>recomenda-se revisão jurídica</strong> antes de publicar.
        </Note>

        <H2>1. Aceitação</H2>
        <P>
          Ao acessar ou usar o Notura e/ou adquirir o combo Notura + Método R.E.U.N.I.R., você concorda com estes
          Termos. Se não concordar, não utilize o serviço.
        </P>

        <H2>2. Quem oferece o serviço</H2>
        <P>
          O Notura é fornecido por <Fill>{/* TODO: preencher antes de publicar */}[PREENCHER: razão social]</Fill>,
          CNPJ <Fill>{/* TODO: preencher antes de publicar */}[PREENCHER]</Fill>, com contato em{' '}
          <Fill>{/* TODO: preencher antes de publicar */}[PREENCHER: e-mail]</Fill>.
        </P>

        <H2>3. O que é o Notura</H2>
        <P>
          O Notura é um aplicativo de produtividade que grava, transcreve e resume reuniões com auxílio de
          inteligência artificial, gerando resumos, decisões, tarefas e histórico pesquisável. Disponível via web,
          com versões para iOS e Android em desenvolvimento.
        </P>

        <H2>4. A oferta adquirida</H2>
        <P>O combo comercializado inclui:</P>
        <UL>
          <li>Acesso vitalício ao material do <strong>Método R.E.U.N.I.R.</strong> (e-books/guias em formato digital);</li>
          <li><strong>1 (um) mês</strong> de acesso ao plano <strong>Notura PRO</strong>;</li>
          <li>Bônus descritos na página de oferta no momento da compra.</li>
        </UL>
        <P>
          O preço, condições de parcelamento e bônus vigentes são os exibidos na página de vendas no ato da compra.
          O pagamento é processado pela plataforma{' '}
          <Fill>{/* TODO: preencher antes de publicar */}[PREENCHER: Kiwify]</Fill>.
        </P>

        <H2>5. Conta e elegibilidade</H2>
        <P>
          Você deve fornecer informações verdadeiras, manter a confidencialidade do seu acesso e ser maior de 18
          anos ou estar autorizado a contratar. Você é responsável pelas atividades realizadas na sua conta.
        </P>

        <H2>6. Período PRO gratuito e renovação</H2>
        <P>
          O acesso ao Notura PRO incluído na oferta tem duração de 1 mês.{' '}
          <Fill>
            {/* TODO: preencher antes de publicar */}
            [PREENCHER conforme seu modelo: descreva o que acontece ao fim do período — se há renovação automática
            em plano pago, qual o valor, e como cancelar. Se houver cobrança recorrente após o período, isso
            <strong> deve</strong> estar claro aqui e no checkout, conforme o CDC.]
          </Fill>
        </P>

        <H2>7. Responsabilidade ao gravar reuniões</H2>
        <P>
          Você é o único responsável por garantir que tem o direito de gravar e processar as reuniões que envia ao
          Notura, incluindo informar os participantes e obter consentimento quando exigido por lei. O Notura é uma
          ferramenta; o uso conforme a legislação aplicável é de sua responsabilidade. Veja também a Política de
          Privacidade.
        </P>

        <H2>8. Uso aceitável</H2>
        <P>Você concorda em <strong>não</strong>:</P>
        <UL>
          <li>usar o Notura para fins ilícitos;</li>
          <li>processar conteúdo sem autorização;</li>
          <li>violar direitos de terceiros;</li>
          <li>tentar burlar segurança, fazer engenharia reversa ou revender o serviço sem autorização; ou</li>
          <li>sobrecarregar a infraestrutura.</li>
        </UL>

        <H2>9. Propriedade intelectual</H2>
        <P>
          Todo o conteúdo do Método R.E.U.N.I.R., a marca Notura, o software e os materiais são protegidos por
          direitos de propriedade intelectual e licenciados a você apenas para uso pessoal/profissional próprio. A
          compra dos e-books concede licença de uso individual e <strong>não</strong> autoriza redistribuição,
          revenda ou compartilhamento do material.
        </P>

        <H2>10. Direito de arrependimento e garantia</H2>
        <P>
          Conforme o Art. 49 do Código de Defesa do Consumidor, em compras pela internet você pode desistir em até{' '}
          <strong>7 (sete) dias</strong> a contar da compra. Oferecemos garantia de reembolso de 100% dentro desse
          prazo, mediante solicitação por{' '}
          <Fill>{/* TODO: preencher antes de publicar */}[PREENCHER: e-mail/canal]</Fill>.
        </P>

        <H2>11. Disponibilidade e isenções</H2>
        <P>
          Empenhamo-nos para manter o serviço disponível e preciso, mas a transcrição e os resumos gerados por IA
          podem conter imprecisões e <strong>não substituem revisão humana</strong> para decisões críticas. O
          serviço é fornecido &quot;no estado em que se encontra&quot;, sem garantia de disponibilidade
          ininterrupta.
        </P>

        <H2>12. Limitação de responsabilidade</H2>
        <P>
          Na máxima extensão permitida em lei, o Notura não se responsabiliza por danos indiretos, lucros cessantes
          ou perda de dados decorrentes do uso ou da impossibilidade de uso do serviço.{' '}
          <Fill>
            {/* TODO: preencher antes de publicar */}
            [Ajustar com seu advogado — cláusulas de limitação têm limites perante o CDC.]
          </Fill>
        </P>

        <H2>13. Encerramento</H2>
        <P>
          Você pode encerrar sua conta a qualquer momento. Podemos suspender ou encerrar contas que violem estes
          Termos.
        </P>

        <H2>14. Alterações dos Termos</H2>
        <P>
          Podemos atualizar estes Termos; mudanças relevantes serão comunicadas. O uso continuado após a
          atualização implica concordância.
        </P>

        <H2>15. Lei aplicável e foro</H2>
        <P>
          Estes Termos são regidos pela lei brasileira. Fica eleito o foro de{' '}
          <Fill>{/* TODO: preencher antes de publicar */}[PREENCHER: comarca]</Fill>, salvo competência diversa
          garantida ao consumidor pelo CDC.
        </P>

        <H2>16. Contato</H2>
        <P><Fill>{/* TODO: preencher antes de publicar */}[PREENCHER: e-mail de suporte]</Fill>.</P>

        <CrossLinks current="termos" />
      </LegalPage>
      <Footer />
    </>
  )
}
