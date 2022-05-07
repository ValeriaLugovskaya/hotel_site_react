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
    this.chooseRoom(0);
  }

hotelService = new HostelService();
 
changeState = (char) =>{
    this.setState({char});  
    console.log(this.state.char);
}

    chooseRoom = (id) =>{
      console.log(`id = ${id}`);
      this.hotelService
      .getRoom(id)
      .then(this.changeState)
    } 

    chooseRoomReverse = (id) =>{
      this.setState({
        id:--id
      });

      this.hotelService
      .getRoom(id-1)
      .then(this.changeState)
    }

    changeRoom = () =>{
      this.state.char.id === 4 ? this.chooseRoom(0):this.chooseRoom(this.state.char.id); 
    } 
        
    changeRoomReverse = () =>{
      this.chooseRoomReverse(this.state.char.id);
    } 

    


  render(){
    const {char:{id, title, description, price, links}} = this.state;
    
    
    return(
      <>

        
      
       {/*  <svg className={id === 1 ? 'changeroom_right hidden': 'changeroom_right'}
        onClick={this.changeRoomReverse} viewBox="0 0 9 14">
            <path className="svg-arrow" d="M6.660,8.922 L6.660,8.922 L2.350,13.408 
            L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 
            L6.660,8.922 Z" />
        </svg>


      <svg className={id === 4 ? 'changeroom_left hidden': 'changeroom_left'} viewBox="0 0 9 14"
        onClick={this.changeRoom}>
        <path className="svg-arrow" d="M6.660,8.922 L6.660,8.922 
        L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515
         L2.350,0.592 L8.507,7.000 L6.660,8.922 Z" />
      </svg> */}

    
      <div className="block_wr">

        <h5 className="carousel_title" id = "carousel-rooms">
        </h5>
        <div className="block_rooms">

        
          <div className="block_rooms_img">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block"
                  src = {img1} /* links ? links[0].link : null */
                  alt = {title}/>  
              </Carousel.Item>
              
               <Carousel.Item>
                <img
                  className="d-block"
                  src={img1} /* links ? links[1].link : null */
                  alt="Second slide"/>
              </Carousel.Item>
              
              <Carousel.Item>
                <img
                  className="d-block"
                  src={img1} /* links ? links[3].link : null */
                  alt="Third slide"/>
              </Carousel.Item> 
          </Carousel>
        </div>
  
        <div className="block_rooms_text_content">
            <h6 className="title_content title">
                {title}
            </h6>
            <p className="text_content description">
               {description}
            </p>
           
            {/* <div className="person">
             <div className="persons_max">
                <div 
              className="person_icon">
            </div>
            <p>5 спальных мест</p>
            </div>
            
            <p className="prices">
              Цена: {price} рублей за ночь {id}
            </p>
            </div> */}        
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