# Imagify | MERN OpenAI Project
This project is a full-stack application built with MERN (MongoDB, Express, React, Node.js) and integrates OpenAI's API for various functionalities. The front-end is developed using React and Vite, while the back-end is built with Node.js and Express with MongoDB as the database.

## Features
- **React Frontend**: A dynamic user interface built with React, optimized with Vite for fast development and build times.
- **Node.js Backend**: Handles API requests, connects to OpenAI’s API, and interacts with MongoDB for data storage.
- **MongoDB**: Stores application data, including user inputs and responses from OpenAI’s API.
- **OpenAI API Integration**: Uses OpenAI’s DALL-E model to provide intelligent responses and automate tasks based on user input.
  
## Technologies Used
- **Frontend**: React, Vite
- **Backend:** Node.js, Express
- **Database**: MongoDB
- **API**: OpenAI

## Note on App Status
The app was previously deployed online using **Netlify** and **Cloudflare** but is no longer running. The project is still functional locally, and you can follow the installation instructions to run it on your own machine.

## Installation

### 1. Clone the repository:
To get started, clone the repository to your local machine:
```bash
git clone https://github.com/ktafesse2/mern-openai.git
cd mern-openai
```
### 2. Install Dependencies
Frontend:
```bash
cd client
npm install
```

Backend:
```bash
cd server
npm install
```

### 3. Set Up Environment Variables
Create a .env file in the root directory of the project and add your OpenAI API key:
```bash
OPENAI_API_KEY=your-openai-api-key
```
For MongoDB, configure your MongoDB connection URI in the backend .env file:
```bash
MONGO_URI=your-mongodb-connection-string
```

### 4. Start the Application
Run the backend and frontend concurrently.

Frontend:
```bash
cd client
npm run dev
```

Backend:
```bash
cd server
npm run dev
```
Visit http://localhost:3000 to interact with the app.
