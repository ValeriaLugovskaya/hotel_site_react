import MainPage from "../MainPage/MainPage";
import Navigation from "../Navigation/Navigation";
/* import SeparatorPage from "../Separatop/Separator"; */
import AboutUs from "../AboutUs/AboutUs";
import CarouselRooms from "../CarouselRooms/CarouselRooms";
import BookingRooms from "../Booking/BookingRooms";
import Footer from "../Footer/Footer";

import './App.scss';

const App = () => {
    return (
        <div className="app">
           
           <Navigation/>
           
           <MainPage />
           {/* <div>
               <SeparatorPage/>
           </div> */}
           <AboutUs/>
           
        <CarouselRooms/> 
        <BookingRooms/>

        <Footer/>
        </div>
    );
}

export default App;