import './carouselRooms.scss';
import { Carousel } from 'react-bootstrap';
import img1 from "../../resources/img/m.jpg";



const CarouselRooms = () =>{

  return(

    <div className="block_wr">
      
      <h5 className="carousel_title" id = "carousel-rooms">
        Выберите номер
      </h5>
      <div className="block_rooms">
        <div className="block_rooms_img">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src= {img1}
                alt="First slide"/>  
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
                src={img1}
                alt="Third slide"/>
            </Carousel.Item>
        </Carousel>
      </div>

     { <div className="block_rooms_text_content">
          <h6 className="title_content title">
              Номер с балконом
          </h6>
          <p className="text_content description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/>Ea sunt ab provident odio ullam. 
              Ea doloribus nulla reprehenderit odio voluptas at tempore<br/> velit? Atque alias quidem praesentium aperiam iure perspiciatis.
          </p>
      </div> }
    </div>
  </div>
)
}

export default CarouselRooms;