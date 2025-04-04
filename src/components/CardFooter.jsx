function CardFooter(props){
    return <li><img src={props.src} alt={props.desc} /> <p>{props.desc}</p> </li>
}

export default CardFooter