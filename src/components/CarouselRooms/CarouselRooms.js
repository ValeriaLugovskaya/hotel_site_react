import './carouselRooms.scss';
import { Carousel } from 'react-bootstrap';
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
}

chooseRoom = (id) =>{
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
    const {char:{id, price, description, links}} = this.state;
    let startDate = price ? price.price.start_date: null;
    let finishDate = price ? price.price.finish_date: null;
    startDate = Date.parse(startDate);
    let startMonth = new Date(startDate);
    let finishMonth = new Date(finishDate);

    finishMonth = new Date(finishDate).toLocaleString('ru', {month: 'long'});
    startMonth = new Date(startDate).toLocaleString('ru', {month: 'long'}); 

    return(
      <> 
		<div className="block_wr">
		<div className="arrows_change_rooms">
				<div className="arrows_change_rooms_left">
					<svg className={id === 1 ? 'changeroom_left hidden': 'changeroom_left'} viewBox="0 0 9 14"
						onClick={this.changeRoomReverse}>
						<path className="svg-arrow" d="M6.660,8.922 L6.660,8.922 
						L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515
						L2.350,0.592 L8.507,7.000 L6.660,8.922 Z" />
					</svg> 
				</div>
				<div className="arrows_change_rooms_rigth">
					<svg className={id === 4 ? 'changeroom_right hidden': 'changeroom_right'}
						onClick={this.changeRoom} viewBox="0 0 9 14">
							<path className="svg-arrow" d="M6.660,8.922 L6.660,8.922 L2.350,13.408 
							L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 
							L6.660,8.922 Z" />
					</svg>
				</div>
		<h5 className="carousel_title" id = "carousel-rooms"> Выберите комнату</h5>
			
				<div className="block_rooms">
					<div className="block_rooms_img">
						<Carousel>
						{links != null ? this.CarouselItemHTML(links[0].link) : null}
						{links != null ? this.CarouselItemHTML(links[1].link) : null}
						{links != null ? this.CarouselItemHTML(links[2].link) : null}
						{links != null ? this.CarouselItemHTML(links[3].link) : null}
						{/*<Carousel.Item>
							<img
							className="d-block"
							src = {links ? links[0].link : null} 
							alt = 'sdfdsf'/>  
						</Carousel.Item> */}
					</Carousel>
					</div>

				<div className="block_rooms_text_content">
					<h6 className="title_content title">
						Комната №{id}
					</h6>
					<p className="text_content description">
						{description}
					</p>		
				</div>

				<div className="block_wr_prices">
					<div className="wr_prices_text">
					<p> Цена за {startMonth} - {finishMonth}: <br className='br_prices'/>
					{ price ? price.price.price: null } 
				
					₽ <br/>
					<span>за ночь</span></p>
					</div>
					<a href="#booking" className="carousel_button"> Забронировать </a>
				</div>
			</div>
		</div>

		</div>

			
	</>
  )}
}

export default CarouselRooms;