import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
import Astronaut from "../../assets/images/astronaut.png";
function HomePage() {
           
    const navigate = useNavigate();
    const scrollToSection = () => {
       const section = document.getElementById("explore-section");
       section?.scrollIntoView({ behavior: "smooth" });
    }
    
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
          <div className="feature-card">
            <img
              src="https://example.com/space-recipes.jpg" // Replace with your image for space recipes
              alt="Space Recipes"
              className="feature-image"
            />
            <h2>Space Recipes</h2>
            <p>
              Discover innovative and nutritious recipes tailored for
              astronauts!
            </p>
            <button className="cta-button">Explore Recipes</button>
          </div>

          <div className="feature-card">
            <img
              src="https://example.com/space-farming.jpg" // Replace with your image for space farming
              alt="Space Farming"
              className="feature-image"
            />
            <h2>Space Farming</h2>
            <p>
              Learn how to cultivate food in the harshest environments of space.
            </p>
            <button className="cta-button">Start Farming</button>
          </div>

          <div className="feature-card">
            <img
              src="https://example.com/calorie-counter.jpg" // Replace with your image for calorie counter
              alt="Calorie Counter"
              className="feature-image"
            />
            <h2>Calorie Counter</h2>
            <p>
              Track your nutrition and ensure you're getting the right intake on
              your space journey.
            </p>
            <button className="cta-button">Track Calories</button>
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
