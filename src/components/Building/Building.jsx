import building from "../../assets/building.png";
import logo from '../../assets/logo.png';

const Building = () => {
    return (
        <div className="building">
            <img className="bg" src={building} alt="building" />
            <div className="logo_wrap">
                <img className='logo' src={logo} alt="logo" />
                <span>Property</span>
            </div>
        </div>
    )
}

export default Building;