import LiMainFooter1 from "./LiMainFooter1";
import LiMainFooter2 from "./LiMainFooter2";
import LiMainFooter3 from "./LiMainFooter3";
import LiMainFooter4 from "./LiMainFooter4";

function DivMainFooter(props){
// let elements= ['Characters', 'Comics', 'Movies', 'TV', 'Games', 'Videos', 'News'];
let arrayMainFooter=[
    {
        title:'DC COMICS',
        element: ['Characters', 'Comics', 'Movies', 'TV', 'Games', 'Videos', 'News']
    },
    {
        title:'SHOP',
        element: ['Shop DC', 'Shop DC Collectibles']
    },
    {
        title:'DC',
        element: ['Terms Of Use', 'Privacy policy(New)', 'Ad Choices', 'Adverting', 'Jobs', 'Subscriptions', 'Talent Workshops', 'CPSC Certificates', 'Ratings', 'Shop Help', 'Contact Us']
    },
    {
        title:'SITES',
        element: ['DC', 'MAD', 'DC Kids', 'DC Universe', 'DC Power Visa']
    }
];

    return <>
            <div>
                    <h3>{props.title[0]}</h3>
                        <LiMainFooter1 element1 = {arrayMainFooter[0].element}/>
            </div>
            <div>
                    <h3>{props.title[1]}</h3>
                        <LiMainFooter2 element2 = {arrayMainFooter[1].element}/>
            </div>
            <div>
                    <h3>{props.title[2]}</h3>
                        <LiMainFooter3 element3 = {arrayMainFooter[2].element}/>
            </div>
            <div>
                    <h3>{props.title[3]}</h3>
                        <LiMainFooter4 element4 = {arrayMainFooter[3].element}/>
            </div>
        </>
            
}

export default DivMainFooter;