import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./Pages/login";
import MainPage from "./Pages/main";
import NotFoundPage from "./Pages/main/notFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
