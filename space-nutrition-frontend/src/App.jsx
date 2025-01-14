import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import CalorieCounterPage from "./pages/CalorieCounterPage/CalorieCounterPage";
import NavComponent from "./components/NavComponent/NavComponent";
import PlantsPage from "./pages/PlantsPage/PlantsPage";
import PlantDetailsPage from "./components/PlantDetails/PlantDetails";

function App() {
  
  return (

    <>
     
    <BrowserRouter>
      <Header />
      <NavComponent />
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plants" element={<PlantsPage />} />
        <Route path="/plant/:id" element={<PlantDetailsPage />} />
        <Route path="/calories" element={<CalorieCounterPage />} />
        
      </Routes>
    
    </BrowserRouter>
    
  </>
   
  )
}

export default App
