import ElementMenu from "./ElementMenu";

let arrayLink = [
    'CHARACTERS',
    'COMICS',
    'MOVIES',
    'TV',
    'GAMES',
    'COLLECTIBLES',
    'VIDEOS',
    'FANS',
    'NEWS',
    'SHOP'
];

const Menu = () => {

    return <ul className="menu-li">
                <ElementMenu voiceMenu = {arrayLink[0]} />
                <ElementMenu voiceMenu = {arrayLink[1]} />
                <ElementMenu voiceMenu = {arrayLink[2]} />
                <ElementMenu voiceMenu = {arrayLink[3]} />
                <ElementMenu voiceMenu = {arrayLink[4]} />
                <ElementMenu voiceMenu = {arrayLink[5]} />
                <ElementMenu voiceMenu = {arrayLink[6]} />
                <ElementMenu voiceMenu = {arrayLink[7]} />
                <ElementMenu voiceMenu = {arrayLink[8]} />
                <ElementMenu voiceMenu = {arrayLink[9]} />
        </ul>
}

export default Menu;