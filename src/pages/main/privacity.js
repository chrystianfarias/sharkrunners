import video from './assets/video.mp4';
import styled from 'styled-components';

const StyledApp = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  h1 {
    color: #fff;
  }
`;

const Container = styled.div`
  background-color: rgba(0,0,0,0.8);
  color: #fff;
  padding: 100px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;
const Text = styled.div`
  text-align: justify;
  padding: 20px;
  max-width: 500px;
  height: 80%;
  overflow-y: scroll;
  h2 {
    margin: 10px;
    font-size: 30px;
  }
  h3 {
    margin: 10px;
    font-weight: bolder;
    font-size: 20px;
  }
  strong {
    font-weight: bolder;
  }
`;
const StyledVideo = styled.video`
  object-fit: cover;
  filter: blur(10px);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`

function NotFoundPage() {
  return (
    <StyledApp>
      <StyledVideo src={video} muted autoPlay loop/>
      <Container>
        <Text>
          <h2>Política Privacidade</h2>
          <p>A sua privacidade é importante para nós. É política do Shark Runners respeitar a sua privacidade em relação a
              qualquer informação sua que possamos coletar no site <a href='http://sharkrunners.com.br'>Shark Runners</a>, e outros
              sites que possuímos e operamos.</p>
          <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por
              meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como
              será usado. </p>
          <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos
              dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso,
              divulgação, cópia, uso ou modificação não autorizados.</p>
          <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
          </p>
          <p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle
              sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade. </p>
          <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer
              alguns dos serviços desejados.</p>
          <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de Aviso de Privacidad e informações
              pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em
              contacto connosco.</p>
          <h3>Compromisso do Usuário</h3>
          <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Shark Runners oferece no site e com
              caráter enunciativo, mas não limitativo:</p>
          <ul>
              <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
              <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, Onde Bola ou azar, qualquer tipo de pornografia ilegal, de
                  apologia ao terrorismo ou contra os direitos humanos;</li>
              <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Shark Runners, de seus
                  fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de
                  hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
          </ul>
          <h3>Mais informações</h3>
          <p>Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa
              ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso
              site.</p>
          <p>Esta política é efetiva a partir de <strong>July</strong>/<strong>2022</strong>.</p>
        </Text>
      </Container>
    </StyledApp>
  );
}

export default NotFoundPage;
