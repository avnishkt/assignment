![Screenshot (336)](https://github.com/user-attachments/assets/921da401-e3bb-412c-8948-06d995557b3c)Overview
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
![Screenshot (336)](https://github.com/user-attachments/assets/88fe8389-67d1-4387-907e-22528820fa1b)
![Screenshot (337)](https://github.com/user-attachments/assets/9df92432-ca10-4a9f-9e1d-1d295812421a)
