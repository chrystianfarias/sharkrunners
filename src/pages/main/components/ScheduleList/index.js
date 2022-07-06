import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    max-width: 500px;
    flex-direction: column;
`;
const MonthList = styled.div`
    display: flex;
    padding: 10px;
    width: 100%;
    overflow-x: hidden;
    gap: 10px;
`;
const ResetButton = styled.button`
    border: none;
    outline: none;
    background: none;
`;
const MonthButton = styled(ResetButton)`
    padding: 10px;
    border-radius: 5px;
    background-color: #95a5a6;
    border: 1px solid #2c3e50;
    color: #ecf0f1;
`;

const ScheduleList = () => {
    const months = ["Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro", "Janeiro", "Fevereiro"];
    return <Container>
        <h1>Agenda 2022</h1>
        <MonthList>
            {months.map(month => <MonthButton>{month}</MonthButton>)}
        </MonthList>
    </Container>
}
export default ScheduleList;