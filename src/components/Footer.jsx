import ImageDigital from "../assets/img/buy-comics-digital-comics.png"
import ImageMerch from "../assets/img/buy-comics-merchandise.png"
import ImageSub from "../assets/img/buy-comics-subscriptions.png"
import ImageShop from "../assets/img/buy-comics-shop-locator.png"
import ImagePower from "../assets/img/buy-dc-power-visa.svg"
import ImgFace from "../assets/img/footer-facebook.png"
import ImgTwit from "../assets/img/footer-twitter.png"
import ImgYou from "../assets/img/footer-youtube.png"
import ImgPinterest from "../assets/img/footer-pinterest.png"
import ImgPosit from "../assets/img/footer-periscope.png"

const Footer = () => 
<footer>

    <div className="dad-info-footer">
        <div className="info-footer">
            <ul>
                <li><img src={ImageDigital} alt="digital comics" /> <p>DIGITAL COMICS</p> </li>
                <li><img src={ImageMerch} alt="dc merchandise" /> <p>DC MERCHANDISE</p></li>
                <li><img src={ImageSub} alt="subscription" /> <p>SUBSCRIPTION</p></li>
                <li><img src={ImageShop} alt="comic shop locator" /> <p>COMIC SHOP LOCATOR</p></li>
                <li><img src={ImagePower} alt="dc power visa" /> <p>DC POWER VISA</p></li>
            </ul>
        </div>
    </div>

    <div className="dad-main-footer">
        <div className="main-footer">
            <nav>
                <div>
                    <h3>DC COMICS</h3>
                    <ul>
                        <li><a href="#">Characters</a></li>
                        <li><a href="#">Comics</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Videos</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                </div>
                <div>
                    <h3>SHOP</h3>
                    <ul>
                        <li><a href="#">Shop DC</a></li>
                        <li><a href="#">Shop DC Collectibles</a></li>
                    </ul>
                </div>
                <div>
                    <h3>DC</h3>
                    <ul>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">Privacy policy(New)</a></li>
                        <li><a href="#">Ad Choices</a></li>
                        <li><a href="#">Adverting</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Subscriptions</a></li>
                        <li><a href="#">Talent Workshops</a></li>
                        <li><a href="#">CPSC Certificates</a></li>
                        <li><a href="#">Ratings</a></li>
                        <li><a href="#">Shop Help</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h3>SITES</h3>
                    <ul>
                        <li><a href="#">DC</a></li>
                        <li><a href="#">MAD Magazine</a></li>
                        <li><a href="#">DC Kids</a></li>
                        <li><a href="#">DC Universe</a></li>
                        <li><a href="#">DC Power Visa</a></li>
                    </ul>
                </div>
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

export default Footer;