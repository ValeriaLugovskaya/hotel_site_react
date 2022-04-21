import './navigation.scss';
import { Component } from 'react';
import '../../services/HostelService';

class Navigation extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            menuActiveStatus: false,
        }
    }

    menuStatus = () =>{
        this.setState({
            menuActiveStatus:! this.state.menuActiveStatus 
        });
    }


     a = () =>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
    }

    render (){

        return(
        <>
            <nav className="NavigationBlock" id = "Up">
                <div className="burger-btn"
                onClick = {this.menuStatus}>
                    <span/>
                </div>    
            </nav>
           

            <div className={this.state.menuActiveStatus ? 'menu active': 'menu'}>
            <div className="blur"/>
            <div className="menu__content">
                <ul> 
                <li><a href="#aboutus" className="href">О нас</a></li>
                <li><a href="#carousel-rooms" className="href">Номера</a></li>
                <li><a href="#booking" className="href">Бронирование</a></li>
                <li><a href="#contacts" className="href">Контакты</a></li> 
            </ul>    
            </div>
        </div>

            

            <button id="upper"
            onClick={this.a}> </button>
        </>
        )
    }
}

export default Navigation;