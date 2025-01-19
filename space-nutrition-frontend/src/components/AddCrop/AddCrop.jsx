import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../utilities/utilities.js"
import { useNavigate } from 'react-router-dom';
import "./AddCrop.scss"
function AddCrop() {
  const [crop, setCrop] = useState(""); 
  const [growthStage, setGrowthStage] = useState(""); 
  const [isFormValid, setIsFormValid] = useState(true);
  const [crops, setCrops] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate();
  

  useEffect(() => {
    const fetchCrops = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseURL}/api/plants`);
        setCrops(response.data); 
      } catch (error) {
        setErrorMessage("An error occurred while fetching crops.")
        alert("An error occurred while fetching crops.");
      } finally {
        setLoading(false);
      }
    };

    fetchCrops();
  }, []); 
  function handleChangeCrop(event) {
    setCrop(event.target.value);
  }

  function handleChangeGrowthStage(event) {
    setGrowthStage(event.target.value);
  }

 
  async function handleSubmit(event) {
    event.preventDefault();

    if (!crop || !growthStage) {
      setErrorMessage("You must fill out all fields");
      setSuccessMessage("")
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true);
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      
      const selectedCrop = crops.find((item) => item.name === crop);
      if (!selectedCrop) {
        throw new Error("Crop not found");
      }

      
      const fullCropData = {
        name: selectedCrop.name,
        watering_frequency: selectedCrop.watering_frequency,
        temperature_range: selectedCrop.temperature_range,
        humidity_level: selectedCrop.humidity_level,
        photo: selectedCrop.photo,
        growth_stage: growthStage, 
      };

      
      const result = await axios.post(`${baseURL}/api/myPlants`, fullCropData);

      setSuccessMessage("Crop added successfully!");

      setCrop("");
      setGrowthStage("");
    } catch (error) {
      console.error("Error submitting crop data:", error);
      setErrorMessage("An error occurred while submitting the crop data.");
    } finally {
      setLoading(false); 
    }
    setTimeout(() => {
      navigate("/plants/myplants");
    }, 2000);
  }

 
  const getGrowthStages = (selectedCrop) => {
    switch (selectedCrop) {
      case "Tomato":
        return ["Seedling", "Vegetative", "Flowering", "Ripening"];
      case "Lettuce":
        return ["Germination", "Vegetative", "Mature"];
      case "Spinach":
        return ["Seedling", "Vegetative", "Mature"];
      case "Cucumber":
        return ["Germination", "Vegetative", "Flowering", "Fruit"];
      case "Carrot":
        return ["Germination", "Vegetative", "Root Development"];
      default:
        return [];
    }
  };

  return (
    <>
      <h2>Grow and Monitor Your Crop</h2>
      <form onSubmit={handleSubmit} className="form">
        <label className="form__label" >Choose a crop:</label>
        <select
          className="form__select"
          id="crop"
          name="crop"
          value={crop}
          onChange={handleChangeCrop}
          required
        >
          <option >Select a crop</option>
          {crops.map((cropItem) => (
            <option key={cropItem.id} value={cropItem.name}>
              {cropItem.name}
            </option>
          ))}
        </select>

        <label className="form__label">
          Growth Stage:
          <select
            className="form__select"
            id="growthStage"
            name="growthStage"
            value={growthStage}
            onChange={handleChangeGrowthStage}
            required
            disabled={!crop}
          >
            <option>Select a growth stage</option>
            {getGrowthStages(crop).map((stage) => (
              <option key={stage} value={stage}>
                {stage}
              </option>
            ))}
          </select>
        </label>
            
        <button className="form__button" type="submit" disabled={loading}>
        {loading ? "Adding Crop..." : "Add Crop"}
        </button>
      </form>
      
      {successMessage && <div className="message__success">{successMessage}</div>}
      {errorMessage && <div className="message__error">{errorMessage}</div>}
    </>
  );
}

export default AddCrop;
