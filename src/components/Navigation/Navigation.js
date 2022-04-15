import './navigation.scss';
import AboutUs from '../AboutUs/AboutUs';


const Navigation = () =>{
    
    const a = function(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
    }

    return(
        <>
            <nav className="NavigationBlock" id = "Up">
                <ul>
                    <li><a href='#aboutus'> О нас </a></li>
                    <li><a href="#carousel"> Номера </a></li>
                    <li><a href="#booking"> Забронировать </a></li>
                    <li><a href="example.html"> Контакты </a></li>
                </ul>
            </nav>

            <button id="upper"
            onClick={a}
            >&nbsp; </button>
        </>
    )
}

export default Navigation;