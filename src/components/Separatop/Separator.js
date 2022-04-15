import './separatorPage.scss';
import icon_sea from '../../resources/svg/sea_icon.svg';

const SeparatorPage =() =>{

    return(

        <>
        <div className="block_separator">
            <div className="block_separator_blue">
                <div className="block_separator_icons">
                    <div className="t"><img className="block_separator icon_sea" src = {icon_sea} alt = 'море'/>
                    <p className="icons_descr">kjsdjfjksdfkjjds</p>    
                    </div>

                    <div className="t"><img className="block_separator icon_sea" src = {icon_sea} alt = 'море'/>
                    <p className="icons_descr">kjsdjfjksdfkjjds</p>    
                    </div>

                    <div className="t"><img className="block_separator icon_sea" src = {icon_sea} alt = 'море'/>
                    <p className="icons_descr">kjsdjfjksdfkjjds</p>    
                    </div>

                   
            </div>
            </div>
        </div>
        </>
    )
}

export default SeparatorPage;