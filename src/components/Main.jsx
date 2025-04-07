
import MainCard from "./MainCard";
import comics from "./data/comics";

const Main = () => {

return <main>
    <div className="background-main">
        <span className="current-series">CURRENT SERIES</span>
    </div>
    <ul>
        {comics.map((comic) => <MainCard key = {comic.id} thumb = {comic.thumb} title = {comic.title}/>)}
    </ul>
    <a href="#" className="btn-more">LOAD MORE</a>  
</main>
}
export default Main;


