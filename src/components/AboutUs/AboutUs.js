import './aboutUs.scss';
import aboutUs_img from '../../resources/img/a6.jpg';


const AboutUs = () =>{

    return(
       <>
       <h2>О нас</h2>

       <div className="wrapper_block" id = "aboutus">
       <div className="wrapper">
       
        <p className="one">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo fugiat,</p>
       <img className='wrapper_img' src={aboutUs_img} alt="ss" />
      </div>
      
      <div className="wrapper">
        <img className='wrapper_img sec' src={aboutUs_img} alt="ss" />
       <p className="one">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo fugiat,</p>
      </div>
      <div className="wrapper">
        <p className="one">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo fugiat,</p>
       <img className='wrapper_img' src={aboutUs_img} alt="ss" />
      </div>
      </div>
      </>
    )
}

export default AboutUs;
