
import './App.scss';
import icon_luxuary from './images/icon-luxury.svg'
import icon_sedans from './images/icon-sedans.svg'
import icon_suvs from './images/icon-suvs.svg'
function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="App-container--card-1">
          <img src={icon_sedans} alt="icon_sedans" />
          <h1>SEDANS</h1>
          <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
          <button>Learn More</button>
        </div>
        <div className="App-container--card-2">
        <img src={icon_suvs} alt="icon_suvs" />
        <h1>SUVS</h1>
          <p>Take an SUV for its spacious interior, power and versatility. Perfect for your next family vacation and off-road adventures.</p>
          <button>Learn More</button>
        </div>
        <div className="App-container--card-3">
        <img src={icon_luxuary} alt="icon_luxuary" />

        <h1>LUXURY</h1>
          <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxuiry rental and arrive in style.</p>
        <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default App;
