// function Header(){
//     return (<header>Sono header</header>);
// }
import Logo from "./Logo";
import Menu from "./Menu";
import LogoImage from "../assets/img/dc-logo.png"

const Header = () => 
<header>
    <figure>
        <img src={LogoImage} alt="Logo"/>
    </figure>
    <nav>
        <ul className="menu-li">
            <li><a href="#">CHARACTERS</a></li>
            <li><a href="#">COMICS</a></li>
            <li><a href="#">MOVIES</a></li>
            <li><a href="#">TV</a></li>
            <li><a href="#">GAMES</a></li>
            <li><a href="#">COLLECTIBLES</a></li>
            <li><a href="#">VIDEOS</a></li>
            <li><a href="#">FANS</a></li>
            <li><a href="#">NEWS</a></li>
            <li><a href="#">SHOP</a></li>
        </ul>
    </nav>
</header>;

export default Header;