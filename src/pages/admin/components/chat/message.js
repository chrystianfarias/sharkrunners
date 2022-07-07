import styled from "styled-components";

const StyledMessageBox = styled.div`
    display: flex;
    background-color: #fff;
    box-shadow: 0 1px .5px rgba(var(11,20,26),.13);
    border-radius: 7.5px;
    box-sizing: border-box;
    max-width: 300px;
    max-height: 600px;
    z-index: 2;
    overflow: hidden;
    flex-direction: column;
`;
const StyledRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;
const StyledMedia = styled.div`
    box-sizing: border-box;
    padding: 3px;
    border-radius: 15px;
    overflow: hidden;
    width: 100%;
    img {
        width: 100%;
        object-fit: cover;
    }
`;
const StyledMessage = styled.div`
    padding: 12px;
    white-space: pre-line;
    line-height: 25px;
`;
const StyledHour = styled.span`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 10px;
    padding: 5px;
    opacity: .5;
`;
const MessageBox = ({message}) => {
    return (
        <StyledMessageBox>

            {message.media?
            <StyledMedia>
                <img alt="media" src={message.media}/>
            </StyledMedia>:<></>}
            <StyledRow>
                <StyledMessage>
                    {message.text}
                </StyledMessage>
                <StyledHour>
                    {message.hour}
                </StyledHour>
            </StyledRow>
        </StyledMessageBox>
    )
};
export default MessageBox;