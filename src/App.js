import './css/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LocationList from './componts/locationList';

function App() {
  return (
    <MuiThemeProvider>
    <div className="App">
      <LocationList></LocationList>
     
      
    </div>
    </MuiThemeProvider>
  );
}

export default App;
