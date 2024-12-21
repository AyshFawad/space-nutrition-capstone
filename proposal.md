# Project Title
Space Nutrition
## Overview

Space Nutrition is an innovative application designed to help astronauts manage their diet intake and maintain optimal nutrition while living in space. It combines essential elements of nutrition tracking, meal planning, and plant cultivation, which are critical for astronauts to ensure they receive adequate sustenance and vitamins. The app offers astronauts nutritional recipes, calorie counting tools, and a planting feature for growing food in space.

### Problem Space
Astronauts face unique challenges in maintaining a balanced and healthy diet while living in space. Due to the limitations of space travel, the lack of fresh food, and the need for self-sufficiency, astronauts often struggle with nutrition and proper food intake. This can lead to health issues like nutrient deficiencies and a lack of energy, which can affect their performance on missions. Space Nutrition seeks to solve this by providing astronauts with the tools to carefully manage and optimize their diet.

### User Profile

-Primary Users: Astronauts on space missions who need to maintain a balanced diet.
-Secondary Users: Space mission support teams on Earth who will provide guidance and adjust nutrition plans based on astronaut needs.

### Features

-Nutritional Recipes:
    Users can access a library of space-optimized recipes.
    Recipes will consider the constraints of space food preparation and storage.

-Calorie Counter:
    The app will track calories consumed from meals and snacks.
    It will provide recommendations to meet nutritional needs.

-Planting Feature:
    Astronauts can track and manage crops grown in space.
    The app will provide detailed instructions on planting, maintaining, and harvesting crops.
    Users can add new crops, check on their growth status, and ensure they meet daily food requirements.
## Implementation

### Tech Stack
-React 
-Express
-MySQL

### APIs

-Research NASA
-Recipe Api
-research calorie Api

### Sitemap

-Homepage:
    An introductory page with navigation to the app's main features: recipe, calorie counter, farming.

-Recipe Page:
    Displays available recipes optimized for astronauts. Includes calorie and nutrient data.

-Farming Page:
    A page to view and manage crops.
    Includes an option to add new crops with data on care instructions.
    -Add Crop Page:
        Form to add a new crop, including the crop name, planting date, and necessary care steps.
        Calorie Counter Page:

-Calorie tracker
    A tracker for daily caloric intake and suggestions to ensure astronauts meet nutritional goals.

### Mockups
refer mockups.png
### Data

refer data.png
### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.
get /plants
post /plants
put /plants/:id
delete /plant/:id

get /calories
get /calories/id
post /calories
put /calories/:id
delete /calories/:id

get/recipe



## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date. 
-research
-build database
-build homepage in react 
-build plants page
-farming features
-calorie counter

---

## Future Implementations
Your project will be marked based on what you committed to in the above document. Here, you can list any additional features you may complete after the MVP of your application is built, or if you have extra time before the Capstone due date.
-Mood and health monitoring: Integrate a system to track astronauts’ health and mood based on nutrition, ensuring that diet intake impacts overall well-being.

-Multilingual support:To cater to astronauts from different countries, offer multilingual support to ensure that all astronauts can use the app effectively.

-Voice Commands: Implement voice commands to help astronauts manage the app hands-free, which is crucial in zero-gravity environments where hands-on interaction may be challenging.


