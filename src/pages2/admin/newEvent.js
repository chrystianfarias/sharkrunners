import Content from "./components/content";

const NewEventPage = () => {
    return (
        <Content title="Novo Evento" navButtons={[{text: "Dashboard", href:"/admin"}, {text: "Eventos", href:"/admin/eventos"}, {text: "Novo Evento"}]}>
            Novo
        </Content>
    )
}
export default NewEventPage;