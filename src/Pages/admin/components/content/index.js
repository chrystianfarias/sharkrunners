import styled from "styled-components"
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px;
    box-sizing: border-box;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
`;
const Title = styled.h1`
    font-size: 20px;
    font-weight: bold;
`;
const ContentContainer = styled.div`
    width: 100%;
    height: 100%;

    @media only screen and (min-width: 600px) {
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
        border-radius: 5px;
        background: ${props => props.theme.palette.background.default};
        padding: 20px;
        box-sizing: border-box;
    }
`;

const Content = ({children, title, navButtons}) => {
    let navigate = useNavigate();
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Breadcrumbs>
                {navButtons.map(btn => btn.href 
                ? <Link
                    underline="hover"
                    onClick={() => navigate(btn.href)}>
                        {btn.text}
                    </Link>
                :<>{btn.text}</>)}
            </Breadcrumbs>
            <ContentContainer>
                {children}
            </ContentContainer>
        </Container>
    )
}
export default Content;