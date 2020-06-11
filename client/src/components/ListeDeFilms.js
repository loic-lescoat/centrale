import React, { useState, useEffect } from "react";
import "./ListeDeFilms.css";

const ListeDeFilms = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [fetchAgain, setFetchAgain] = useState(false);
  const triggerFetchAgain = () => setFetchAgain(!fetchAgain);

  const fetchExample = async () => {
    try {
      var listurl = "https://cx6p5gwi6f.execute-api.eu-west-1.amazonaws.com/dev/items/movie";
      const response = await fetch(listurl);
      const responseJson = await response.json();
      setIsLoaded(true);
      setError(false);
      setItems(responseJson);
      console.log({responseJson});
    } catch (error) {
      setIsLoaded(true);
      setError(error);
    }
  };

  useEffect(() => {
    setIsLoaded(false);
    fetchExample();
    // The useEffect hook will retrigger every time an element in the dependency array changes.
    // changes = strict egality, so beware when mutating objects
  }, [fetchAgain]);

  const afficherFilms = () => {
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (<div class="text-center" id="loading-div"><div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    </div>);
    } else {
    //   return (


    //     <ul>
    //       {items.map((item) =>
    //       <li><a href={item.Poster}>{item.Name}</a></li>)}
    //     </ul>
    //   );
    // }
  
    // var url = "https://bnbnyn5fg5.execute-api.eu-west-1.amazonaws.com/dev/items/movies";
    var urlbase = "/film";
    return (
      // <ul>
      //   {items.map((item) => (
      //     <li key={item.name}><a href={item.url}>{item.name}</a></li>
      //   ))}
      // </ul>
      <main role="main">

      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Liste de films</h1>
          <p class="lead text-muted">Voici une liste de films que vous pouvez regarder</p>
          <p>
            {/* <a href="#" class="btn btn-primary my-2">Main call to action</a>
            <a href="#" class="btn btn-secondary my-2">Secondary action</a> */}
          </p>
        </div>
      </section>



      <div class="album py-5 bg-light">
        <div class="container">

          <div class="row">
            
          {items.map((item) => (
          <div class="col-md-4">
          <div class="card mb-4 box-shadow carteDeFilm">
          <form action={urlbase + "?Name=" + item.Name}>
<input class="card-img-top" type="image" 
src={item.Poster} alt="Movie Poster" />
            <div class="card-body">
              <p class="card-text">{item.Synopsis}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <input type="hidden" name="Name" value={item.Name}></input>
                  <button type="submit" class="btn btn-sm btn-outline-secondary">Voir</button>
                </div>

                
              </div>
            </div>
            </form>
          </div>
        </div>
        ))}

          </div>
        </div>
      </div>
    </main>
    );
  }
}


  return (
    <div>
    <div>
    {afficherFilms()}
  </div>
  </div>
  );
};

export default ListeDeFilms;
