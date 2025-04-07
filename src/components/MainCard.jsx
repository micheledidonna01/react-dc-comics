
function MainCard({thumb, title}){
    return <li className="card">
        <img src={thumb} alt={title} className="comic-image"/>
        <h6>{title}</h6>
    </li>
}

export default MainCard