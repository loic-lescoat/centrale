import React, { useState, useEffect } from "react";
import "./Film.css";


const Film = () => {

    const [response, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchAgain, setFetchAgain] = useState(false);

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const Name = params.get('Name');
    console.log({Name});

    const data = {"Name": Name, "Type": "movie"};

    var url = "https://cx6p5gwi6f.execute-api.eu-west-1.amazonaws.com/dev/items/movies";
  

    const fetchMovieInfo = async () => {
      fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log(typeof(data));
        console.log('Success:', data);
        setItems(data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
    useEffect(() => {
      setIsLoaded(false);
      fetchMovieInfo();
      console.log('hey');
      console.log(response);
      for (var key in response) {
        if (response.hasOwnProperty(key)) {
            /* useful code here */
            console.log({key});
        }
    }

    }, [fetchAgain]);


    // code pas utile pour cette question
    if (isLoaded){
      return (
      <div class="container">

  <h1 class="my-4">{response[0].Name}</h1>
  <p class="my-4">{response[0].Year}</p>

  <div class="row">

    <div class="col-md-8">
      <img class="img-fluid" src={response[0].Poster} alt="img here" width="400px"/>
    </div>

    <div class="col-md-4">
      <p class="synopsis">{response[0].Synopsis}</p>
      
    </div>

  </div>
      </div> 
      
    );
} else {
  return (<div class="text-center" id="loading-div"><div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>
</div>);
};

}
export default Film;


