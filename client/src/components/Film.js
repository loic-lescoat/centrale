import React from "react";
import "./Film.css";
// import StarRatings from 'react-star-ratings';


const Film = () => {
    var imgurl = "https://images-na.ssl-images-amazon.com/images/I/81eKg7lCeYL._AC_SL1100_.jpg";
    var title = "mon titre";
    var anneeSortie = "2015";

    // changeRating( newRating, name ) {
    //     this.setState({
    //       rating: newRating
    //     });
    //   };

    return (
    <div>
        <div class="container">

<h1 class="my-4">{title}
</h1>

<div class="row">

  <div class="col-md-8">
    <img class="img-fluid" src={imgurl} alt="img here" />
  </div>

  <div class="col-md-4">
    <h3 class="my-3">{title}</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
    {/* <StarRatings
        //   rating={this.state.rating}
          starRatedColor="blue"
          changeRating={alert}
          numberOfStars={6}
          name='rating'
        /> */}
      );
  </div>

</div>
    </div>
    </div>
    
  );
};

export default Film;
