import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import CalorieCounterPage from "./pages/CalorieCounterPage/CalorieCounterPage";
import NavComponent from "./components/NavComponent/NavComponent";
import PlantsPage from "./pages/PlantsPage/PlantsPage";
import PlantDetailsPage from "./components/PlantDetails/PlantDetails";
import RecipePage from "./pages/RecipePage/RecipePage";
import AddCropPage from "./pages/AddCropPage/AddCropPage";
import MyPlantsPage from "./pages/MyPlantsPage/MyPlantsPage";

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
        <Route path="/plants/myplants" element={<MyPlantsPage />} />
        <Route path="plants/addcrop" element={<AddCropPage />} />
        <Route path="/calories" element={<CalorieCounterPage />} />
        <Route path="/recipes" element={<RecipePage />} />
        
      </Routes>
    
    </BrowserRouter>
    
  </>
   
  )
}

export default App
