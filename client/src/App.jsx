import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/homepage";
import Footer from "./components/footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
