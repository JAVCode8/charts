import { Chart as ChartJS, defaults } from "chart.js/auto";
import { SalesChart } from "./components/SalesChart";
import './App.css'
import { WeatherChart } from "./components/WeatherChart";
import { StudentChart } from "./components/StudentChart";
import { SPChart } from "./components/SPChart";

defaults.plugins.title.display = true;
defaults.plugins.title.font.size = 20;
defaults.plugins.title.align = "center";
defaults.plugins.title.color = "black";

function App() {
  return (
    <div className='App'>
      <div className="card"><SalesChart /></div>
      <div className="card"><WeatherChart /></div>
      <div className="card"><StudentChart /></div>
      <div className="card"><SPChart /></div>
      <div className="card"></div>
    </div>
  )
}

export default App
