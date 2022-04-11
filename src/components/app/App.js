import MainPage from "../MainPage/MainPage";
import Navigation from "../Navigation/Navigation";
import Separator from "../Separatop/Separator";
import AboutUs from "../AboutUs/AboutUs";

const App = () => {
    return (
        <div className="app">
           <Navigation/>
           <MainPage />
           <div className="separator_app">
               <Separator/>
           </div>
           <AboutUs/>
        </div>
    );
}

export default App;