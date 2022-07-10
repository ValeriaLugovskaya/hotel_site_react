import "./carouselRooms.scss";
import { Carousel } from "react-bootstrap";
import { Component } from "react";
import HostelService from "../../services/HostelService";

class CarouselRooms extends Component {
  state = {
    char: {},
  };

  componentDidMount() {
    this.chooseRoom(1);
  }

  hotelService = new HostelService();

  changeState = (char) => {
    this.setState({ char });
  };

  chooseRoom = (id) => {
    this.hotelService.getRoom(id).then(this.changeState);
  };

  chooseRoomReverse = (id) => {
    this.setState({
      id: --id,
    });
    this.hotelService.getRoom(id - 1).then(this.changeState);
  };

  changeRoom = () => {
    this.state.char.id === 4
      ? this.chooseRoom(0)
      : this.chooseRoom(this.state.char.id);
  };

  changeRoomReverse = () => {
    this.chooseRoomReverse(this.state.char.id);
  };


	
  render() {
    return (
      <>
        <div className="block_wr">
          <div className="block_wr_content">
		  	  
		  {/* <div className="arrows_change_rooms">		  
			<div className="arrows_change_rooms_left">
				<div className="arrows_change_rooms_left_svg">
				<svg
                className={
                  id === 1 ? "changeroom_left hidden" : "changeroom_left"
                }
                viewBox="0 0 9 14"
                onClick={this.changeRoomReverse}
              >
                <path
                  className="svg-arrow"
                  d="M6.660,8.922 L6.660,8.922 
						L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515
						L2.350,0.592 L8.507,7.000 L6.660,8.922 Z"
                />
              </svg>
				</div>
				<p className="arrow_title previous">
					Предыдущая
				</p>
			
            </div>
            <div className="arrows_change_rooms_rigth">
				
			<div className="arrows_change_rooms_rigth_svg"> 
			<svg
                className={
                  id === 4 ? "changeroom_right hidden" : "changeroom_right"
                }
                onClick={this.changeRoom}
                viewBox="0 0 9 14"
              >
                <path
                  className="svg-arrow"
                  d="M6.660,8.922 L6.660,8.922 L2.350,13.408 
							L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 
							L6.660,8.922 Z"
                />
              </svg>
			  </div>

			  </div>	
              <p className="arrow_title next">Следущая</p>
            </div> */}


			

			<div className="choose_room_block">
				<div className="choose_room_block_arrows">					
				<div className="arrow_left_content_svg">
						<a href="#b" className={this.state.char.id === 1 ? "effect left hidden": "effect left"}
						onClick={this.changeRoomReverse}>Предыдущая</a>
						</div>	
						<h5 className="carousel_title" id="carousel-rooms">
							{" "}
							Выберите комнату
						</h5><div className={this.state.char.id === 4 ? "arrows_right_content_svg hidden": "arrows_right_content_svg"}
						onClick={this.changeRoom}>
							<a href="#b" className="effect effect-5 right">Следующая</a>
						</div>			
											
					
				</div>
				
			</div>

      {renderContent(this.state)}	
      
          </div>
        </div>
      </>
    );
  }
}

export default CarouselRooms;
  

export const renderContent = (char) => {

	function CarouselItemHTML(lin) {
		return (
		  <Carousel.Item>
			<img
			  className="d-block"
			  src={`${lin}`} 
			  alt="Third slide"
			/>
		  </Carousel.Item>
		);
	  }

	const { char: { id, price, description, links },} = char;
	  let startDate = price ? price.price.start_date : null;
	  let finishDate = price ? price.price.finish_date : null;
	  startDate = Date.parse(startDate);
	  let startMonth = new Date(startDate);
	  let finishMonth = new Date(finishDate);
  
	  finishMonth = new Date(finishDate).toLocaleString("ru", { month: "long" });
	  startMonth = new Date(startDate).toLocaleString("ru", { month: "long" });
	
		return (<div className="block_rooms"> 
              <div className="block_rooms_img">
                <Carousel>
                  {links != null ? CarouselItemHTML(links[1].link) : null}
                  {links != null ? CarouselItemHTML(links[0].link) : null}
                  {links != null ? CarouselItemHTML(links[2].link) : null}
                  {links != null ? CarouselItemHTML(links[3].link) : null}
                  {/*<Carousel.Item>
							<img
							className="d-block"
							src = {links ? links[0].link : null} 
							alt = 'sdfdsf'/>  
						</Carousel.Item> */}
                </Carousel>
              </div>

              <div className="block_rooms_text_content">
                <h6 className="title_content title">Комната №{id}</h6>
                <p className="text_content description">{description}</p>
              </div>

              <div className="block_wr_prices">
                <div className="wr_prices_text">
                  <p>
                    {" "}
                    Цена за {startMonth} - {finishMonth}:{" "}
                    <br className="br_prices" />
                    {price ? price.price.price : null}
                    руб. <br />
                    <span>за ночь</span>
                  </p>
                </div>
                <div className="wrapper">
                  <div className="btn-groups">
                    <a href="#booking" className="carousel_button">
                      {" "}
                      Забронировать{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>	
) }
