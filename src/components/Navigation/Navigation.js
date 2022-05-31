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
                <div className="menu__content">
                    <ul> 
                    <li><a href="#aboutus" onClick = {this.menuStatus}
                    className="href">О нас</a></li>
                    <li><a href="#carousel-rooms" 
                    onClick = {this.menuStatus}
                    className="href">Номера</a></li>
                    <li><a href="#booking"
                    onClick = {this.menuStatus}
                     className="href">Бронирование</a></li>
                    <li><a href="#contacts"
                    onClick = {this.menuStatus}
                     className="href">Контакты</a></li> 
                </ul>    
                </div>
        </div>
        </>
        )
    }
}

export default Navigation;