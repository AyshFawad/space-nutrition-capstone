import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import CalorieCounterPage from "./pages/CalorieCounterPage/CalorieCounterPage";
import NavComponent from "./components/NavComponent/NavComponent";

function App() {
  
  return (

    <>
     
    <BrowserRouter>
      <Header />
      <NavComponent />
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/calories" element={<CalorieCounterPage />} />
        
      </Routes>
    
    </BrowserRouter>
    
  </>
   
  )
}

export default App
