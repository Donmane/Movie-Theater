import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
    let API_key="&api_key=b02a6a803e1ffd4b310ba6dbcadf3c53";
    let base_url="https://api.themoviedb.org/3";
    let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
    const Home =()=>{
        const [movies, setMovies] = useState([])
        const [url_set,setUrl]=useState(url);
        const [search,setSearch]=useState();        
        function handleChange(e) {
            setSearch(e.currentTarget.value)
        }
        function submit() {
            setMovies(
              [...movies, search]
            )
        }
        useEffect(()=>{
            fetch(url_set).then(res=>res.json()).then(data=>{
                setMovies(data.results);
            });
        },[url_set])
        const searchMovie=(evt)=>{
            if(evt.key=="Enter")
            {
                url=base_url+"/search/movie?api_key=b02a6a803e1ffd4b310ba6dbcadf3c53&query="+search;
                setUrl(url);
                setSearch(" ");
            }
        }

        let img_path="https://image.tmdb.org/t/p/w500";
    return(        
           <main className="main1">
                <div className="header">
        
            <div className="search-btn">
                <input type="text" placeholder="Search Movie " 
                className="inputText" onChange={handleChange} 
                 onKeyPress={searchMovie}/>
                 <button onClick={submit}><i className="fas fa-search"></i></button>
            </div>
      
    </div>
                      <div  style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
                         {movies.map((item, index) => {

                return (
                    
                    <div className="movie"  key={index}>
                        <img src={img_path+item.poster_path} className="poster"></img>
                            <div className="movie-details">
                                 <div className="box" key={item.id}>
                                     <h4 className="title">{item.title}</h4>
                                    <p className="rating">{item.vote_average}</p>
                            </div>
                        <div className="overview">
                        <h1>overview</h1>
                        {item.overview}
                    </div>
                </div>
            </div>
                )
            })}
                        </div>     
           </main>
    );
}
export default Home;