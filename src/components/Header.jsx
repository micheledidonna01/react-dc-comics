// function Header(){
//     return (<header>Sono header</header>);
// }
import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => <header>
    <Logo />
    <Menu />
</header>;

export default Header;