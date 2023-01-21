import Hero from './Hero';
import {Link} from 'react-router-dom';


const MovieCard = ({ movie }) => {
    let posterURL, detailURL;

    if (movie.poster_path) {
    posterURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    detailURL = `/movies/${movie.id}`;
  } else {
    posterURL =
    "https://images.unsplash.com/photo-1496268280706-ec91c5e133c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80";
  }
  return (
    <div className='col-lg-3 col-mid-3 col-2'>
      <div class="card">
        <img src={posterURL} class="card-img-top" alt={movie.original_title} />
        <div class="card-body">
        <h5 class="card-title">{movie.original_title}</h5>
        <Link to={detailURL} class="btn btn-primary">Show details</Link>
     </div>
   </div>
  </div>
  )
}



const SearchView = ({keyword, searchResults}) => {
  const title = `You are searching for ${keyword}`

  const resultsHTML = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />
  })
    
  return (
		<>
			{keyword ? <Hero text={title} /> : <Hero text="Search for a movie" />}

			{resultsHTML && keyword ? (
				<div className="container">
					<div className="row">{resultsHTML}</div>
				</div>
			) : (
				<></>
			)}

			{resultsHTML.length === 0 && keyword ? (
				<div className="container">
					<div className="row">
						<div className="col-10 offset-1">
							<p className="leed text-center mt-5 fs-1">
								No results found for: <strong>{keyword}</strong>
							</p>
							<p className="leed text-center fs-1">Search something else!</p>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	)
}




  export default SearchView;