import './App.css';
import { ThemeProvider } from './global/WeatherData';
import Weather from './ui/Weather';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Weather />
      </ThemeProvider>
    </div>
  );
}

export default App