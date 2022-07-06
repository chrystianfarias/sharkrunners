import styled from "styled-components";
import logo from '../main/assets/logo_black.png';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        max-width: 300px;
        opacity: .2;
    }
`;

const MainPage = () => {
    return (
        <Container>
            <img alt="logo" src={logo}/>
        </Container>
    )
}
export default MainPage;