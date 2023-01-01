import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import BlueButton from "./components/blueButton.jsx";
import RedButton from "./components/redButton";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
      <RedButton></RedButton>
      <BlueButton></BlueButton>
  </React.StrictMode>,
)
