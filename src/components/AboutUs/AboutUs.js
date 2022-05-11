import './aboutUs.scss';
import aboutUs_img from '../../resources/img/a6.jpg';


const AboutUs = () =>{

    return(
       <>
       <h2>О нас</h2>

       <div className="wrapper_block">
       <div className="wrapper">
       
        <p className="one">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo fugiat, maxime dignissimos accusamus veniam consequuntur architecto obcaecati porro quisquam quam ducimus, officia veritatis nulla facere repellendus explicabo. Animi quaerat dolorum nemo eius officiis ipsa vitae illo vero, perspiciatis ducimus porro voluptate quae alias dolorem, voluptatem fugit maxime vel repellat praesentium?</p>
       <img className='wrapper_img' src={aboutUs_img} alt="ss" />
      </div>
      
      <div class="wrapper">
        <img className='wrapper_img sec' src={aboutUs_img} alt="ss" />
       <p className="one">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo fugiat, maxime dignissimos accusamus veniam consequuntur architecto obcaecati porro quisquam quam ducimus, officia veritatis nulla facere repellendus explicabo. Animi quaerat dolorum nemo eius officiis ipsa vitae illo vero, perspiciatis ducimus porro voluptate quae alias dolorem, voluptatem fugit maxime vel repellat praesentium?</p>
      </div>
      <div class="wrapper">
        <p className="one">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo fugiat, maxime dignissimos accusamus veniam consequuntur architecto obcaecati porro quisquam quam ducimus, officia veritatis nulla facere repellendus explicabo. Animi quaerat dolorum nemo eius officiis ipsa vitae illo vero, perspiciatis ducimus porro voluptate quae alias dolorem, voluptatem fugit maxime vel repellat praesentium?</p>
       <img className='wrapper_img' src={aboutUs_img} alt="ss" />
      </div>
      </div>
      </>
    )
}

export default AboutUs;
