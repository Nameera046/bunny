import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Statistics />} />
        </Routes>
    );
}

export default App;