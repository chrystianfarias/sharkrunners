import styled from "styled-components";
import background from "./assets/bg-chat-tile-light.png";
import MessageBox from "./message";

const StyledChat = styled.div`
    background-color: #ede7dc;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    box-sizing: border-box;
    padding: 50px;
    gap: 5px;
    position: relative;
    &::after {
        content: "";
        background: url(${background});
        opacity: 0.1;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
    }
`;

const Chat = ({messages}) => {
    return (
        <StyledChat>
            {messages.map(msg => <MessageBox message={msg}/>)}
        </StyledChat>)
};
export default Chat;