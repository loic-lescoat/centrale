import React, { useState, useEffect } from "react";

const ListeDeFilms = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [fetchAgain, setFetchAgain] = useState(false);
  const triggerFetchAgain = () => setFetchAgain(!fetchAgain);

  const fetchExample = async () => {
    try {
      // TODO remplacer par url de david
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const responseJson = await response.json();
      setIsLoaded(true);
      setError(false);
      setItems(responseJson.results);
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
    return (
      // <ul>
      //   {items.map((item) => (
      //     <li key={item.name}><a href={item.url}>{item.name}</a></li>
      //   ))}
      // </ul>
      <p>fasdf</p>
    );
  }


  return (
    <div>
    <p>hey ListeDeFilms.js</p>
    <div>
    {/* <button onClick={triggerFetchAgain}>Fetch again</button> */}
    {afficherFilms()}
  </div>
  </div>
  );
};

export default ListeDeFilms;
