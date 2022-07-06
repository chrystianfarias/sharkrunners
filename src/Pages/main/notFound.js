import logo from './Assets/logo.png';
import video from './Assets/video.mp4';
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const StyledLogo = styled.img`
  max-width: 500px;
  user-select: none;
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
        <StyledLogo src={logo}/>
        <h1>Página não encontrada!</h1>
      </Container>
    </StyledApp>
  );
}

export default NotFoundPage;
