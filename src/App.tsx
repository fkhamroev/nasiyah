import { BrowserRouter, Route, Routes } from "react-router";
import { MainLayout } from "./pages/landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<MainLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
