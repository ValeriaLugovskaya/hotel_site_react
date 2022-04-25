import './aboutUs.scss';
import aboutUs_img from '../../resources/img/a6.jpg';


const AboutUs = () =>{

    return(
       <>
       <div class="wrapper">
        <p class="one">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo fugiat, maxime dignissimos accusamus veniam consequuntur architecto obcaecati porro quisquam quam ducimus, officia veritatis nulla facere repellendus explicabo. Animi quaerat dolorum nemo eius officiis ipsa vitae illo vero, perspiciatis ducimus porro voluptate quae alias dolorem, voluptatem fugit maxime vel repellat praesentium?</p>
       <img src={aboutUs_img} alt="ss" />
      </div>
      
      <div class="wrapper">
        <img src={aboutUs_img} alt="ss" />
       <p class="one">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo fugiat, maxime dignissimos accusamus veniam consequuntur architecto obcaecati porro quisquam quam ducimus, officia veritatis nulla facere repellendus explicabo. Animi quaerat dolorum nemo eius officiis ipsa vitae illo vero, perspiciatis ducimus porro voluptate quae alias dolorem, voluptatem fugit maxime vel repellat praesentium?</p>
      </div>

      </>
    )
}

export default AboutUs;

/* 

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
</div> */