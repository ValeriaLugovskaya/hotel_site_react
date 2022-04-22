import './aboutUs.scss';
import aboutUs_img from '../../resources/img/main1.jpg';


const AboutUs = () =>{

    return(
        <div className = "color_wrapper">
        <div className="wrapper" id = "aboutus">
            <div className="info">
                <div className="info_content">
                    <h2 className="info_contetnt_title">О нас</h2>
                <div className="info_element">
                        
                        
                        
                        <div className="info_content_text">    <img src = {aboutUs_img} alt = 'sads'  className = 'rigth'/>
                        <div className="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, 
                            ex dolorum quisquam, placeat culpa vel repudiandae eum eligendi
                            ipsam cumque ipsum accusamus veritatis soluta dolores impedit
                            consequuntur aspernatur perspiciatis autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, 
                            ex dolorum quisquam, placeat culpa vel repudiandae eum eligendi
                            </div>
                        </div>
            </div>

                    <div className="info_element">
                        
                        
                        
                        <p className="info_content_text">    <img src = {aboutUs_img} alt = 'sads' className = 'left'/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, 
                            ex dolorum quisquam, placeat culpa vel repudiandae eum eligendi
                            ipsam cumque ipsum accusamus veritatis soluta dolores impedit
                            consequuntur aspernatur perspiciatis autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, 
                            ex dolorum quisquam, placeat culpa vel repudiandae eum eligendi
                            
                        </p>
            </div>

            <div className="info_element">
                        
                        
                        
                        <p className="info_content_text">    <img src = {aboutUs_img} alt = 'sads'  className ='rigth'/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, 
                            ex dolorum quisquam, placeat culpa vel repudiandae eum eligendi
                            ipsam cumque ipsum accusamus veritatis soluta dolores impedit
                            consequuntur aspernatur perspiciatis autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, 
                            ex dolorum quisquam, placeat culpa vel repudiandae eum eligendi
                            ipsam cumque ipsum accusamus veritatis soluta dolores impedit
                            
                        </p>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}

export default AboutUs;