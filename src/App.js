import './App.css';
import {Header} from "./components/header/header";
import "./index.css"
import {Footer} from "./components/footer/footer";
import RouteManager from "./routes/routes";
import {HomePage} from "./components/HomePage/homePage";

function App() {
  return (
    <div className="App">
      <Header/>
      <RouteManager/>
      <Footer/>
    </div>
  );
}

export default App;
