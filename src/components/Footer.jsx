
import ImgFace from "../assets/img/footer-facebook.png"
import ImgTwit from "../assets/img/footer-twitter.png"
import ImgYou from "../assets/img/footer-youtube.png"
import ImgPinterest from "../assets/img/footer-pinterest.png"
import ImgPosit from "../assets/img/footer-periscope.png"

import InfoFooter from "./InfoFooter"
import DivMainFooter from "./DivMainFooter"

const Footer = () => {

let title = ['DC COMICS','SHOP','DC','SITES'];

return <footer>

    <div className="dad-info-footer">
        <InfoFooter />
    </div>

    <div className="dad-main-footer">
        <div className="main-footer">
            <nav>
                <DivMainFooter title = {title} />
            </nav>

            <div className="bg-image">    </div>

        </div>
    </div>

    <div className="dad-down-footer">
        <div className="down-footer">

            <button>SIGN-UP NOW!</button>

            <div>
                <p className="primo-el">FOLLOW US</p>
                <ul className="social">
                    <li><a href="#"><img src={ImgFace} alt="facebook"/></a></li>
                    <li><a href="#"><img src={ImgTwit} alt="twitter"/></a></li>
                    <li><a href="#"><img src={ImgYou} alt="you tube"/></a></li>
                    <li><a href="#"><img src={ImgPinterest} alt="pinterest"/></a></li>
                    <li><a href="#"><img src={ImgPosit} alt="position"/></a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
}


export default Footer;