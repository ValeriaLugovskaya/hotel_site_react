import './carouselRooms.scss';
import { Carousel } from 'react-bootstrap';
import img1 from "../../resources/img/m.jpg";
import { Component } from 'react';
import HostelService from '../../services/HostelService';

class CarouselRooms extends Component{

  state =  {
  char: {}
}

  componentDidMount(id){
    this.a();
    console.log(this.state.char.links);
  }

hotelService = new HostelService();
 
changeState = (char) =>{
    this.setState({char});  
}

/*  pictureLoad = (id) =>{
   console.log(this.state.char.links[0].link);
  return this.state.char.links[id].link;
}
  */


    a = () =>{
      this.hotelService
      .getRoom(4)
      .then(this.changeState)
    } 

     
    

  render(){
    const {char:{id, title, description, price, links}} = this.state;
    
    
    return(
      <div className="block_wr">
        
        <h5 className="carousel_title" id = "carousel-rooms"
        >
        </h5>
        <div className="block_rooms">
          <div className="block_rooms_img">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src = {links ? links[0].link : null}
                  alt = {title}/>  
              </Carousel.Item>
              
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img1}
                  alt="Second slide"/>
              </Carousel.Item>
              
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={links ? links[0].link : null}
                  alt="Third slide"/>
              </Carousel.Item>
          </Carousel>
        </div>
  
        <div className="block_rooms_text_content">
            <h6 className="title_content title">
                Номер с балконом
            </h6>
            <p className="text_content description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/>Ea sunt ab provident odio ullam. 
                Ea doloribus nulla reprehenderit odio voluptas at tempore
            </p>
           
            <div className="person">
             <div className="persons_max">
                <div 
              className="person_icon">
            </div>
            <p>5 спальных мест</p>
            </div>
            
            <p className="prices">
              Цена: {price} рублей за ночь
            </p>
            </div>
           

        </div> 
      </div>
    </div>
  )
  }
}

export default CarouselRooms;