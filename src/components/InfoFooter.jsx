import ImageDigital from "../assets/img/buy-comics-digital-comics.png"
import ImageMerch from "../assets/img/buy-comics-merchandise.png"
import ImageSub from "../assets/img/buy-comics-subscriptions.png"
import ImageShop from "../assets/img/buy-comics-shop-locator.png"
import ImagePower from "../assets/img/buy-dc-power-visa.svg"
import CardFooter from "./CardFooter"


function InfoFooter(){


    let arrayInfoFooter = [
        {
            src: ImageDigital,
            desc: 'DIGITAL COMICS'
        },
        {
            src: ImageMerch,
            desc: 'DC MERCHANDISE'
        },
        {
            src: ImageSub,
            desc: 'SUBSCRIPTION'
        },
        {
            src: ImageShop,
            desc: 'COMIC SHOP LOCATOR'
        },
        {
            src: ImagePower,
            desc: 'DC POWER VISA'
        },
    ];
    
    return <div className="info-footer">
            <ul>
                <CardFooter src = {arrayInfoFooter[0].src} desc = {arrayInfoFooter[0].desc}/>
                <CardFooter src = {arrayInfoFooter[1].src} desc = {arrayInfoFooter[1].desc}/>
                <CardFooter src = {arrayInfoFooter[2].src} desc = {arrayInfoFooter[2].desc}/>
                <CardFooter src = {arrayInfoFooter[3].src} desc = {arrayInfoFooter[3].desc}/>
                <CardFooter src = {arrayInfoFooter[4].src} desc = {arrayInfoFooter[4].desc}/>
            </ul>
            </div>
}

export default InfoFooter;
