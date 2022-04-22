import './footer.scss';

const Footer = () =>{

    return(
        <>
        <div className="footer_block" id = "contacts">
            
        <div className="footer_block_map">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2208.229560577556!2d39.58321237036653!3d43.70075891812759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f431644102d4b7%3A0xde93d8e880288e75!2z0JvQvtC-LCDQodC-0YfQuCwg0JrRgNCw0YHQvdC-0LTQsNGA0YHQutC40Lkg0LrRgNCw0LksIDM1NDIwOA!5e0!3m2!1sru!2sru!4v1649848719639!5m2!1sru!2sru" 
            width="300" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title = "map"></iframe> */}
        </div>  
        <div className="footer_block_content">
                <ul>
                Номера для связи
                    <li>8(977) 827-44-31 - Игорь Артемович</li>
                    <li>8(977) 827-44-31 - Игорь Артемович</li>
                </ul>
            </div>

            
        </div>
        </>
    )
}

export default Footer;