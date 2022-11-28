import './AppSaas.css';
import Menu from "./components/Menu";
import browsersData from "./data/browsersData.json"

function App() {
  return (
      <Menu browsers={browsersData}/>
  );

}

export default App;
