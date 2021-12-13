import "./App.css";
import Movies from "./components/movies_front";
import { useState, useEffect } from "react";
// import Store from "./store";

const FEA_API ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8867ee32e88d72e6d21ef084a3df3e44";

const SEARCH = "https://api.themoviedb.org/3/search/movie?&api_key=8867ee32e88d72e6d21ef084a3df3e44&query=";

function App() {
  const [movies, setmovies] = useState([]);
  const [search,setsearch] = useState('')

  useEffect(() => {
    fetch(FEA_API)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setmovies(data.results);
      });
  }, []);

  const SubmitHandler = (e)=>{
    e.preventDefault();

    fetch(SEARCH + search)
    .then((res)=>res.json())
    .then((data)=>{
      setmovies(data.results)
    });
    setsearch(''); 
  

  }
  const ChangeHandler =(e)=>{
      setsearch(e.target.value)
  }
  console.log(search);

  return (
    <div>
      <header>
        <div className="row bg-dark p-5">
          <div className="col-md-8">
            <h1>Moviebuzz</h1>
          </div>
          <div className="d-flex justify-content-end">
          <button><i className="fa fa-search col m-auto" onClick={SubmitHandler} /></button>
          <input className="form-control ml-1" onChange ={ChangeHandler}placeholder="Type movie name" />
          </div> 
          </div>
        
      </header>
      {movies.length > 0 &&
        movies.map((movies) => <Movies key={movies.id} {...movies} />)}
{/* 
        <Store movies ={movies}/> */}
    </div>
  );
}

export default App;
