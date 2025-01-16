import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
import Astronaut from "../../assets/images/astronaut.png";
import Fruits from "../../assets/images/fruit.png"
import Greehouse from "../../assets/images/greenhouse.png"
import Scale from "../../assets/images/weighing-scale.png"
function HomePage() {
           
    const navigate = useNavigate();
    const scrollToSection = () => {
       const section = document.getElementById("explore-section");
       section?.scrollIntoView({ behavior: "smooth" });
    }
    const handleCaloriesClick = () => {
        navigate("/calories"); // Navigate to the /plants page
      };
    const handlePlantsClick = () => {
        navigate("/plants"); // Navigate to the /plants page
      };
    const handleRecipesClick = () => {
        navigate("/recipes"); // Navigate to the /plants page
      };
    
  return (
    <>
      <div className="homepage">
        <main className="hero__content">
          <div className="hero__container">
            <h1 className="hero__title">Welcome to Astrobites</h1>
            <p className="hero__subtitle">
              Your gateway to space nutrition and farming
            </p>
            <button onClick={scrollToSection} className="hero__button">EXPLORE</button>
          </div>
          <img src={Astronaut} alt="astronaut" className="hero__image" />
        </main>

        <section className="features" id="explore-section">
         
          <div className="card">
            <img
              src={Scale}
              alt="Calorie Counter"
              className="card__image"
            />
            <div className="card__container">
            <h2 className="card__title">Calorie Counter</h2>
            <p className="card__details">
              Track your nutrition and ensure you're getting the right intake.
            </p>
            <button onClick = {handleCaloriesClick} className="cta-button">Track Calories</button>
            </div>
          </div>
          <div className="card">
            <img
              src={Greehouse}
              alt="Space Farming"
              className="card__image"
            />
            <div className="card__container">
            <h2 className="card__title">Space Farming</h2>
            <p className="card__details">
              Learn how to cultivate food in the harshest environments of space.
            </p>
            <button onClick = {handlePlantsClick} className="cta-button">Start Farming</button>
            </div>
          </div>
          <div className="card">
            <img
              src={Fruits}
              alt="Space Recipes"
              className="card__image"
            />
            <div className="card__container">
            <h2 className="card__title">Space Recipes</h2>
            <p className="card__details">
              Discover innovative recipes tailored for
              astronauts!
            </p>
            <button onClick = {handleRecipesClick} className="cta-button">Explore Recipes</button>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>&copy; 2025 Astrobites. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default HomePage;
