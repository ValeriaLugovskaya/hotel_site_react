import './footer.scss';
import { Component } from 'react';
import svg_viber from '../../resources/svg/viber_logo_icon.svg';
import svg_whatsapp from '../../resources/svg/whatsapp_logo_icon.svg';

class Footer extends Component{

      state =  {
        vis: false
      }

    visibilityMap = () =>{
        this.setState({
            vis: !this.state.vis
        })
        console.log(this.state.vis);
    }

    render(){
        return(
            <>
            <div className="footer_block" id = "contacts">
            
            
                  <div className = 'footer_block_contacts'> 
                    Номера для связи <br/>
                    <div className = 'phoneNumber'><a href="tel:+78142332211">+7(814)-233-22-11</a>  -  Игорь Артемович<br/></div>
                    <div className = 'phoneNumber'><a href="tel:+78142332211">+7(814)-233-22-11</a>  -  Игорь Артемович</div>
                    <img src = {svg_viber} className = 'icon_viber' alt = 'viber'></img> 
                    <img src = {svg_whatsapp} alt = 'whatsapp'></img> 
                    </div>
                    
                    <div className = 'footer_block_destination'>
            <p onClick={this.visibilityMap} className = {this.state.vis ? "arrow_up": "arrow_down"}>
                 Наше местоположение 	
                 </p>

            <div className={this.state.vis ? "footer_block_map": "footer_block_map hide"}>
            <iframe title = 'map' 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2039.5842727284949!2d39.58267303001949!3d43.70207486879613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f431644102d4b7%3A0xde93d8e880288e75!2z0JvQvtC-LCDQodC-0YfQuCwg0JrRgNCw0YHQvdC-0LTQsNGA0YHQutC40Lkg0LrRgNCw0LksIDM1NDIwOA!5e0!3m2!1sru!2sru!4v1652465934229!5m2!1sru!2sru" width="400" height="300"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
    
            </div>  
            </div>
    
             
            </>
        )
    }
    
}

export default Footer;