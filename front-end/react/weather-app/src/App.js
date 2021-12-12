import './App.css';
import { ThemeProvider } from './global/WeatherData';
import Weather from './ui/Weather';
import Location from './ui/Location';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Location />
        <Weather />
      </ThemeProvider>
    </div>
  );
}

export default App