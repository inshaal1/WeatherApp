# Weather App

A simple **Weather App** built with **React** that allows users to search for the current weather of any city in the world. The app fetches data from the **OpenWeatherMap API** and displays temperature, weather description, and wind speed.

---

## Features

- Search for a city by name and country.
- Displays:
  - City name and country
  - Weather description
  - Temperature in Celsius
  - Wind speed
- Responsive and centered layout.
- Reusable React components:
  - `Header`
  - `Footer`
  - `DataInput`
  - `WeatherDisplay`
- Form validation (cannot submit empty city input).

---

## Tech Stack

- **React** (functional components, hooks)
- **CSS** for styling
- **Fetch API** for HTTP requests
- **OpenWeatherMap API** for weather data

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```
2. Install dependencies:

npm install


3. Create a .env file in the root directory and add your OpenWeatherMap API key:
```
VITE_WEATHER_API_KEY=your_api_key_here
```

4. Start the development server:
```
npm run dev
```
Open  ```http://localhost:5173``` in your browser.


# Folder Structure
```
src/
│
├─ components/
│  ├─ Header.jsx
│  ├─ Footer.jsx
│  ├─ DataInput.jsx
│  └─ WeatherDisplay.jsx
│
├─ data/
│  └─ countries.js
│
├─ App.jsx
└─ index.css
```
# Usage

1. Enter the city name.

2. Select the country from the dropdown.

3. Click Find to fetch the weather data.

4. The weather information will be displayed below the form.