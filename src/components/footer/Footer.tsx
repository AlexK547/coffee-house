import { FC } from "react";
import "./Footer.scss";
import iconTwitter from "/img/svg/twitter.svg";
import iconInstagram from "/img/svg/instagram.svg";
import iconFacebook from "/img/svg/facebook.svg";
import iconPin from "/img/svg/pin-alt.svg"
import iconPhone from "/img/svg/phone.svg"
import iconClock from "/img/svg/clock.svg"

const Footer: FC = () => {
  return (
    <footer className="contacts" id="contacts">
      <div className="contacts__content">
        <h2 className="contacts__title">
          Sip, Savor, Smile. <span>It’s coffee time!</span>
        </h2>
        <div className="contacts__socials">
          <div className="contacts__btn">
            <img src={iconTwitter} alt="twitter" />
          </div>
          <div className="contacts__btn">
            <img src={iconInstagram} alt="instagram" />
          </div>
          <div className="contacts__btn">
            <img src={iconFacebook} alt="facebook" />
          </div>
        </div>
      </div>

      <div className="contacts__info">
        <h3 className="contacts__info-title">Contact us</h3>
        <ul>
          <li>
            <a
              className="contacts__info-link"
              href="https://www.google.com/maps/search/8558+Greene+Rd+LA"
              target="_blank"
            >
                <img src={iconPin} alt="pin-alt" />
              <span>8558 Green Rd., LA</span>
            </a>
          </li>
          <li>
            <a className="contacts__info-link" href="tel:+16035550123">
                <img src={iconPhone} alt="phone" />
              <span>+1 (603) 555-0123</span>
            </a>
          </li>
          <li className="contacts__info-link">
            <img src={iconClock} alt="clock" />
            Mon-Sat: 9:00 AM – 23:00 PM</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
