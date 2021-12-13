const Movies = ({ title, poster_path, overview, vote_average }) => {
  const IMG = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="containers">
      <div className="movie">
        <img src={IMG + poster_path} alt={title} />
        <div className="movie-info">
         <h4>{title}</h4>
          <span>Ratings:{vote_average}</span>
        </div>
        </div>
        <div className="movie-over">
            <h2>Overview</h2>
            <p>{overview}</p>
        </div>
      </div>
      
  );
};

export default Movies;
