import { COPY_RIGHT_LOGO_URL } from '../assets/constant';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div className="footer">
        <div className="logo-container">
          <img className="copy-right" src={COPY_RIGHT_LOGO_URL}/>
        </div>
        <div className="nav-items" style={{color: "green"}}>
          <ul>
            <h3>Company</h3>
            <li>Team</li>
            <li>Careers</li>
          </ul>
          <ul>
            <h3>Contact us</h3>
            <li><Link to="./contact">Help & Support </Link></li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>
      </div>
    )
  }

  export default Footer;