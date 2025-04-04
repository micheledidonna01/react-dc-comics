// function Header(){
//     return (<header>Sono header</header>);
// }
import Logo from "./Logo";
import Menu from "./Menu";
import LogoImage from "../assets/img/dc-logo.png"

function Header(){

return <header>
    <figure>
        <img src={LogoImage} alt="Logo"/>
    </figure>
    <nav>
        <Menu />
    </nav>
</header>;
}
export default Header;