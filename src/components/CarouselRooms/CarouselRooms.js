import './carouselRooms.scss';
import { Carousel } from 'react-bootstrap';
import img1 from "../../resources/img/m.jpg";
import { Component } from 'react';
import HostelService from '../../services/HostelService';

class CarouselRooms extends Component{

  state =  {
  char: {}
}

componentDidMount(){
    this.chooseRoom(1);
}

hotelService = new HostelService();
 
changeState = (char) =>{
    this.setState({char});  
    console.log(this.state.char);
}

chooseRoom = (room_number) =>{
      console.log(`room_number = ${room_number}`);
      this.hotelService
      .getRoom(room_number)
      .then(this.changeState)
} 

chooseRoomReverse = (room_number) =>{
      this.setState({
        room_number:--room_number
});
  this.hotelService
  .getRoom(room_number-1)
  .then(this.changeState)
    }

changeRoom = () =>{
      this.state.char.room_number === 4 ? this.chooseRoom(0):this.chooseRoom(this.state.char.room_number); 
} 

changeRoomReverse = () =>{
      this.chooseRoomReverse(this.state.char.room_number);
} 

CarouselItemHTML(lin){
      return(
        <Carousel.Item>
                <img
                  className="d-block"
                  src= {`${lin}`} /* links ? links[3].link : null */
                  alt="Third slide"/>
              </Carousel.Item>
      )
}

  render(){
    const {char:{room_number, title, description, price, links}} = this.state;  
    
    return(
      <> 
       <svg className={room_number === 1 ? 'changeroom_right hidden': 'changeroom_right'}
        onClick={this.changeRoomReverse} viewBox="0 0 9 14">
            <path className="svg-arrow" d="M6.660,8.922 L6.660,8.922 L2.350,13.408 
            L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 
            L6.660,8.922 Z" />
        </svg>
        <svg className={room_number === 4 ? 'changeroom_left hidden': 'changeroom_left'} viewBox="0 0 9 14"
          onClick={this.changeRoom}>
          <path className="svg-arrow" d="M6.660,8.922 L6.660,8.922 
          L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515
          L2.350,0.592 L8.507,7.000 L6.660,8.922 Z" />
        </svg> 

    
    <div className="block_wr">
      <h5 className="carousel_title" id = "carousel-rooms"></h5>
        <div className="block_rooms">
          <div className="block_rooms_img">
            <Carousel>
            {links != null ? this.CarouselItemHTML(links[0].link) : null}
            {links != null ? this.CarouselItemHTML(links[1].link) : null}
            {links != null ? this.CarouselItemHTML(links[2].link) : null}
            {links != null ? this.CarouselItemHTML(links[3].link) : null}
             
              {/* 

               <Carousel.Item>
                <img
                  className="d-block"
                  src = {links ? links[0].link : null} 
                  alt = 'sdfdsf'/>  
              </Carousel.Item>

               <Carousel.Item>
                <img
                  className="d-block"
                  src={links ? links[1].link : null} 
                  alt="Second slide"/>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block"
                  src={links ? links[2].link : null} 
                  alt="Third slide"/>
              </Carousel.Item>  */}

              
          </Carousel>

          </div>

        <div className="block_rooms_text_content">
            <h6 className="title_content title">
                Комната №{room_number}
            </h6>
            <p className="text_content description">
          `` {description} 
            </p>
           
                   
      </div>
      <div className="block_wr_prices">
        <div className="wr_prices_text">
        <p> Цена (май - июль): <br className='br_prices'/> {price} рублей <br/>
        <span>за ночь</span></p>
        </div>
        <button className="carousel_button"> Забронировать</button>
      </div>
    </div> 
    
    
    
  </div>


    </>
  )
  }
}

export default CarouselRooms;