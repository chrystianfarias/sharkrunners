import styled from "styled-components"
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
    flex-grow: 1;
    overflow-y: scroll;
    @media only screen and (min-width: 600px) {
        padding: 30px;
    }
`;
const BreadcrumbsContainer = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
    @media only screen and (min-width: 600px) {
        padding: 0px;
    }
`;
const Title = styled.h1`
    font-size: 20px;
    font-weight: bold;
`;
const ContentContainer = styled.div`
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
    padding: 30px;
    box-sizing: border-box;

    @media only screen and (min-width: 600px) {
        border-radius: 5px;
        background: ${props => props.theme.palette.background.default};
        padding: 20px;
    }
`;

const Content = ({children, title, navButtons}) => {
    let navigate = useNavigate();
    return (
        <Container>
            <BreadcrumbsContainer>
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
                    :<p>{btn.text}</p>)}
                </Breadcrumbs>
            </BreadcrumbsContainer>
            <ContentContainer>
                {children}
            </ContentContainer>
        </Container>
    )
}
export default Content;