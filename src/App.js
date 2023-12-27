import './App.css';
import {Header} from "./components/header/header";
import "./index.css"
import {Footer} from "./components/footer/footer";
import RouteManager from "./routes/routes";
import SmoothScroll from "./components/SmoothScroll/smooth-scroll";

function App() {
  return (
    <div className="App">
      <SmoothScroll>
        <Header/>
        <RouteManager/>
        <Footer/>
      </SmoothScroll>
    </div>
  );
}

export default App;
