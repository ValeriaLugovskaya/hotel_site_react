import './aboutUs.scss';
import aboutUs_img1 from '../../resources/img/about_us2.jpg';
import aboutUs_img2 from '../../resources/img/about_us3.jpg';

const AboutUs = () => {
    return(
			<>
				<h2>О нас</h2>
				<div className="wrapper_block" id = "aboutus">
					<div className="wrapper">
						<p className="one">Lorem ipsum dolor sit amet, consecte tur adipisic ing elit. Illo fugiat,Lorem ipsum dolor sit amet consectetur adi pisicing elit. Reiciendis quidem moll itia expedita a fugit ad minima quae similique nobis!</p>
						<img className='wrapper_img' src={aboutUs_img2} alt="ss" />
					</div>
					<div className="wrapper">
						<img className='wrapper_img sec' src={aboutUs_img1} alt="ss" />
						<p className="one">Lorem ipsum dolor sit, amet consec tetur adipis icing elit. Reprehenderit fugiat accusamus hic pariatur esse eligendi accusantium, voluptatem nobis minima, tempora non nesciunt adipisci itaque consequuntur ratione eos possimus dolorum iusto. Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
					</div>
					<div className="wrapper">
						<p className="one">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo fugiat,</p>
						<img className='wrapper_img' src={aboutUs_img2} alt="ss" />
					</div>
				</div>
			</>
			)}

export default AboutUs;
