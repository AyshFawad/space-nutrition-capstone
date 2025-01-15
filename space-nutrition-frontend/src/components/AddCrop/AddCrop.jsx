import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../utilities/utilities.js"
import { useNavigate } from 'react-router-dom';

function AddCrop() {
  const [crop, setCrop] = useState(""); // The selected crop name
  const [growthStage, setGrowthStage] = useState(""); // The selected growth stage
  const [isFormValid, setIsFormValid] = useState(true);
  const [crops, setCrops] = useState([]); // To store all fetched crops
  const [loading, setLoading] = useState(false); // To track loading state
  const navigate = useNavigate();
  

  // Fetch all crops when the component is mounted
  useEffect(() => {
    const fetchCrops = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseURL}/api/plants`);
        setCrops(response.data); // Store the crops data
      } catch (error) {
        console.error("Error fetching crops:", error);
        alert("An error occurred while fetching crops.");
      } finally {
        setLoading(false);
      }
    };

    fetchCrops();
  }, []); // Empty dependency array means it runs once when the component is mounted

  // Handle changes in the crop selection
  function handleChangeCrop(event) {
    setCrop(event.target.value);
  }

  // Handle changes in the growth stage selection
  function handleChangeGrowthStage(event) {
    setGrowthStage(event.target.value);
  }

  // Handle form submission
  async function handleSubmit(event) {
    event.preventDefault();

    if (!crop || !growthStage) {
      alert("You must fill out all fields");
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true);
    setLoading(true);

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

      alert("Crop added successfully!");

      setCrop("");
      setGrowthStage("");
    } catch (error) {
      console.error("Error submitting crop data:", error);
      alert("An error occurred while submitting the crop data.");
    } finally {
      setLoading(false); // Stop loading
    }
      navigate('/plants/myplants');
  }

  // Get available growth stages for each crop
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
        <label htmlFor="crop">Choose a crop:</label>
        <select
          id="crop"
          name="crop"
          value={crop}
          onChange={handleChangeCrop}
          required
        >
          <option value="">Select a crop</option>
          {crops.map((cropItem) => (
            <option key={cropItem.id} value={cropItem.name}>
              {cropItem.name}
            </option>
          ))}
        </select>

        <label htmlFor="growthStage" className="form__label">
          Growth Stage:
          <select
            id="growthStage"
            name="growthStage"
            value={growthStage}
            onChange={handleChangeGrowthStage}
            required
            disabled={!crop} 
          >
            <option value="">Select a growth stage</option>
            {getGrowthStages(crop).map((stage) => (
              <option key={stage} value={stage}>
                {stage}
              </option>
            ))}
          </select>
        </label>

        <button className="form__button" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </>
  );
}

export default AddCrop;
