import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { LegalPage, Note, H2, P, UL, Table, Thead, Tr, Th, Td, Fill, CrossLinks } from '@/components/legal/LegalContent'

export const metadata: Metadata = {
  title: 'Política de Privacidade — Notura',
  description: 'Como o Notura coleta, usa e protege seus dados pessoais e o conteúdo das suas reuniões, em conformidade com a LGPD.',
}

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <Navbar />
      <LegalPage
        title="Política de Privacidade — Notura"
        updated={<Fill>{/* TODO: preencher antes de publicar */}[PREENCHER: data]</Fill>}
      >
        <Note>
          Campos entre colchetes <strong>[PREENCHER: ...]</strong> precisam ser completados antes de publicar.
          Esta é uma base sólida e específica do Notura, mas <strong>não substitui revisão por advogado</strong> —
          especialmente porque o Notura processa áudio de reuniões, que envolve dados de terceiros.
        </Note>

        <H2>1. Quem somos</H2>
        <P>
          Esta Política descreve como o <strong>Notura</strong> (&quot;Notura&quot;, &quot;nós&quot;) trata dados pessoais.
          O controlador dos dados de cadastro e cobrança é:
        </P>
        <UL>
          <li><strong>Razão social:</strong> <Fill>{/* TODO: preencher antes de publicar */}[PREENCHER: razão social]</Fill></li>
          <li><strong>CNPJ:</strong> <Fill>{/* TODO: preencher antes de publicar */}[PREENCHER: CNPJ]</Fill></li>
          <li><strong>Endereço:</strong> <Fill>{/* TODO: preencher antes de publicar */}[PREENCHER: endereço]</Fill></li>
          <li><strong>Contato / Encarregado (DPO):</strong> <Fill>{/* TODO: preencher antes de publicar */}[PREENCHER: e-mail, ex. privacidade@notura.com.br]</Fill></li>
        </UL>
        <P>
          Tratamos dados em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — &quot;LGPD&quot;).
        </P>

        <H2>2. Dois papéis diferentes (importante)</H2>
        <P>
          O Notura atua em <strong>dois papéis distintos</strong>, e isso muda quem é responsável por quê:
        </P>
        <P>
          <strong>a) Como Controlador</strong> — sobre os dados que coletamos diretamente de você para operar a conta
          e a relação comercial: nome, e-mail, dados de acesso, dados de uso do app e informações de pagamento
          (processadas por nosso parceiro de pagamento).
        </P>
        <P>
          <strong>b) Como Operador</strong> — sobre o <strong>conteúdo das suas reuniões</strong> (áudio, vídeo,
          transcrições, resumos e tarefas geradas). Esse conteúdo é processado <strong>sob sua instrução</strong>.
          Em relação a ele, <strong>você é o Controlador</strong> e o Notura é o Operador: nós processamos esse
          material apenas para entregar o serviço que você contratou (transcrever, resumir, organizar), e não o
          usamos para finalidades próprias.
        </P>
        <P>
          Isso significa que <strong>a responsabilidade por ter base legal para gravar e processar a reunião —
          inclusive avisar e/ou obter o consentimento dos participantes — é sua</strong>, como Controlador desse
          conteúdo. Veja a Seção 8.
        </P>

        <H2>3. Quais dados coletamos</H2>
        <P><strong>Dados de cadastro e conta:</strong> nome, e-mail, senha (armazenada de forma criptografada), e preferências.</P>
        <P><strong>Dados de pagamento:</strong> processados pela plataforma de pagamento; não armazenamos dados completos de cartão.</P>
        <P><strong>Conteúdo de reuniões:</strong> áudio e/ou vídeo que você envia ou grava, e os dados derivados (transcrição, resumo, decisões, tarefas, histórico pesquisável).</P>
        <P>
          <strong>Dados de uso e técnicos:</strong> registros de acesso (logs), endereço IP, tipo de dispositivo e
          navegador, e dados de comportamento de navegação coletados por ferramentas de analytics (ex.: Microsoft
          Clarity), para melhorar o produto.
        </P>

        <H2>4. Para que usamos os dados (finalidades e bases legais)</H2>
        <Table>
          <Thead>
            <Th>Finalidade</Th>
            <Th>Base legal (LGPD)</Th>
          </Thead>
          <tbody>
            <Tr><Td>Criar e manter sua conta; fornecer o serviço</Td><Td>Execução de contrato (Art. 7º, V)</Td></Tr>
            <Tr><Td>Processar pagamento e emitir comprovantes</Td><Td>Execução de contrato / obrigação legal</Td></Tr>
            <Tr><Td>Transcrever, resumir e organizar suas reuniões</Td><Td>Execução de contrato (sob sua instrução)</Td></Tr>
            <Tr><Td>Enviar comunicações sobre o serviço</Td><Td>Execução de contrato / legítimo interesse</Td></Tr>
            <Tr><Td>Enviar conteúdo e ofertas por e-mail (newsletter)</Td><Td>Consentimento (Art. 7º, I)</Td></Tr>
            <Tr><Td>Melhorar o produto e garantir segurança</Td><Td>Legítimo interesse (Art. 7º, IX)</Td></Tr>
            <Tr><Td>Cumprir obrigações legais e regulatórias</Td><Td>Obrigação legal (Art. 7º, II)</Td></Tr>
          </tbody>
        </Table>

        <H2>5. Com quem compartilhamos</H2>
        <P>
          Compartilhamos dados apenas com fornecedores que viabilizam o serviço (suboperadores), sob obrigação
          contratual de confidencialidade e segurança. Os principais são:
        </P>
        <Table>
          <Thead>
            <Th>Fornecedor</Th>
            <Th>Função</Th>
            <Th>Localização</Th>
          </Thead>
          <tbody>
            <Tr>
              <Td><Fill>{/* TODO: preencher antes de publicar */}[PREENCHER: provedor de transcrição, ex. AssemblyAI]</Fill></Td>
              <Td>Transcrição de áudio</Td>
              <Td><Fill>{/* TODO: preencher antes de publicar */}[confirmar — possivelmente EUA]</Fill></Td>
            </Tr>
            <Tr>
              <Td><Fill>{/* TODO: preencher antes de publicar */}[PREENCHER: provedor de IA, ex. Google Gemini]</Fill></Td>
              <Td>Geração de resumos</Td>
              <Td><Fill>{/* TODO: preencher antes de publicar */}[confirmar — possivelmente EUA]</Fill></Td>
            </Tr>
            <Tr>
              <Td>Supabase</Td>
              <Td>Banco de dados e autenticação</Td>
              <Td><Fill>{/* TODO: preencher antes de publicar */}[confirmar região]</Fill></Td>
            </Tr>
            <Tr>
              <Td>Cloudflare</Td>
              <Td>Infraestrutura e segurança</Td>
              <Td>Global</Td>
            </Tr>
            <Tr>
              <Td><Fill>{/* TODO: preencher antes de publicar */}[PREENCHER: Kiwify]</Fill></Td>
              <Td>Processamento de pagamento</Td>
              <Td>Brasil</Td>
            </Tr>
            <Tr>
              <Td><Fill>{/* TODO: preencher antes de publicar */}[PREENCHER: Resend]</Fill></Td>
              <Td>Envio de e-mails</Td>
              <Td><Fill>{/* TODO: preencher antes de publicar */}[confirmar — possivelmente EUA]</Fill></Td>
            </Tr>
            <Tr>
              <Td>Microsoft Clarity</Td>
              <Td>Analytics de uso</Td>
              <Td><Fill>{/* TODO: preencher antes de publicar */}[confirmar]</Fill></Td>
            </Tr>
          </tbody>
        </Table>
        <Note>Mantenha esta tabela atualizada conforme sua stack mudar. Liste apenas fornecedores realmente em uso.</Note>
        <P>Não vendemos seus dados nem o conteúdo das suas reuniões a terceiros.</P>

        <H2>6. Transferência internacional de dados</H2>
        <P>
          Alguns dos fornecedores acima podem processar dados <strong>fora do Brasil</strong> (por exemplo, em
          servidores nos Estados Unidos). Nesses casos, a transferência ocorre com base nas hipóteses do Art. 33 da
          LGPD e adotamos salvaguardas contratuais (como cláusulas-padrão de proteção de dados) para manter o nível
          de proteção exigido pela lei brasileira. Se você precisar que o tratamento ocorra exclusivamente em
          território nacional, entre em contato pelo canal da Seção 1.
        </P>

        <H2>7. Por quanto tempo guardamos</H2>
        <P>
          Mantemos os dados pelo tempo necessário às finalidades acima ou conforme exigido por lei. O
          <strong> conteúdo das suas reuniões</strong> é mantido enquanto sua conta estiver ativa e você pode
          excluí-lo a qualquer momento pelo app. Após o encerramento da conta, os dados são eliminados ou
          anonimizados em prazo razoável, salvo obrigação legal de retenção.
        </P>

        <H2>8. Sua responsabilidade ao gravar reuniões</H2>
        <P>
          Como você decide quais reuniões processar, <strong>você é responsável por ter base legal para isso</strong>,
          incluindo, quando aplicável, informar os participantes de que a reunião será gravada/transcrita e obter o
          consentimento necessário. O Notura oferece a ferramenta; o uso conforme a LGPD em relação aos participantes
          é de responsabilidade de quem grava.
        </P>

        <H2>9. Seus direitos como titular</H2>
        <P>
          Nos termos do Art. 18 da LGPD, você pode solicitar: confirmação da existência de tratamento; acesso aos
          dados; correção; anonimização, bloqueio ou eliminação; portabilidade; informação sobre compartilhamento; e
          revogação do consentimento. Para exercer, escreva para{' '}
          <Fill>{/* TODO: preencher antes de publicar */}[PREENCHER: e-mail do encarregado]</Fill>. Responderemos nos
          prazos legais.
        </P>

        <H2>10. Segurança</H2>
        <P>
          Adotamos medidas técnicas e organizacionais para proteger os dados, como criptografia em trânsito e
          controle de acesso. Nenhum sistema é 100% imune; em caso de incidente relevante, comunicaremos os
          titulares e a ANPD conforme exigido.
        </P>

        <H2>11. Cookies</H2>
        <P>
          Usamos cookies e tecnologias similares para autenticação, funcionamento do site e analytics. Você pode
          gerenciar cookies nas configurações do seu navegador.
        </P>

        <H2>12. Alterações</H2>
        <P>
          Podemos atualizar esta Política. Mudanças relevantes serão comunicadas pelos nossos canais. A data no
          topo indica a última revisão.
        </P>

        <H2>13. Contato</H2>
        <P>
          Dúvidas sobre privacidade ou para exercer seus direitos:{' '}
          <Fill>{/* TODO: preencher antes de publicar */}[PREENCHER: e-mail]</Fill>.
        </P>

        <CrossLinks current="privacidade" />
      </LegalPage>
      <Footer />
    </>
  )
}
