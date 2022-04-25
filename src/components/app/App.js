import MainPage from "../MainPage/MainPage";
import Navigation from "../Navigation/Navigation";
import { Component } from 'react';
import AboutUs from "../AboutUs/AboutUs";
import CarouselRooms from "../CarouselRooms/CarouselRooms";
import BookingRooms from "../Booking/BookingRooms";
import Footer from "../Footer/Footer";
import './App.scss';

class App extends Component{
    
    

    render(){
        return (
        <div className="app">
           <div className="main_img">
           <Navigation/>
           
           <MainPage />
           </div>
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
}

export default App;