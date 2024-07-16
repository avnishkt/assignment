Overview
The Carousel component is a React component that displays a list of dishes, allowing users to toggle between published and unpublished states. The component fetches data from an API and updates the display every second to ensure real-time updates.

Features
Fetches dish data from an API.
Displays a list of dishes with their images and titles.
Allows toggling the publish status of each dish.
Updates the display every second for real-time updates.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/your-repo.git
Navigate to the project directory:

bash
Copy code
cd your-repo
Install the dependencies:

bash
Copy code
npm install
Usage
Start the development server:

bash
Copy code
npm start
The application will be available at http://localhost:3000.

API Endpoints
The component interacts with the following API endpoints:

GET /api/dishes: Fetches all dishes.
PUT /api/toggle/:id: Toggles the publish status of a dish by ID.
