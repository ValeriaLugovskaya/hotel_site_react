import './aboutUs.scss';
import aboutUs_img from '../../resources/img/main1.jpg';


const AboutUs = () =>{

    return(
        <>
        <div className="wrapper">
            <div className="info">
                <div className="info_content">
                    <div className="info_element">
                        <div className="info_content_text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, 
                            ex dolorum quisquam, placeat culpa vel repudiandae eum eligendi
                            ipsam cumque ipsum accusamus veritatis soluta dolores impedit
                            consequuntur aspernatur perspiciatis autem.
                        </div>
                        <div className="info_content_img">
                            <img src = {aboutUs_img} alt = 'sads'/>
                        </div>
            </div>

                    <div className="info_element">
                        <div className="info_content_img1">
                            <img src = {aboutUs_img} alt = 'sads'/>
                        </div>
                        <div className="info_content_text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, 
                            ex dolorum quisquam, placeat culpa vel repudiandae eum eligendi
                            ipsam cumque ipsum accusamus veritatis soluta dolores impedit
                            consequuntur aspernatur perspiciatis autem.
                        </div>
            </div>

            <div className="info_element">
                <div className="info_content_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, 
                    ex dolorum quisquam, placeat culpa vel repudiandae eum eligendi
                    ipsam cumque ipsum accusamus veritatis soluta dolores impedit
                    consequuntur aspernatur perspiciatis autem.
                </div>
                
                <div className="info_content_img">
                <img src = {aboutUs_img} alt = 'sads'/>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default AboutUs;