import React, { useEffect, useState } from "react";
//import api key and id from key.js
import { APP_ID, API_KEY } from "./key.js";

import axios from "axios";

import cardImg from "./hero.jpg";

// css
import "./App.css";
import Carousel from "./component/Carousel.jsx";
import Card from "./Card.jsx";

const Receipe = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [label, setLabel] = useState("vegan");
  const[error,setError] = useState("");

  //declaring function to fetch the data frm api
  const fetchData = async () => {
    try {
      //api endpoint

      const APP_ID = "cf565901";
      const API_KEY = "ae3884174db20daec586113679b1f5e4";

      const apiUrl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}&health=${label}`;

      const response = await axios.get(apiUrl);
      setData(response.data.hits);
      console.log(response.data.hits);


      //error handling if the user enter wrong query
      if(response.data.hits.length===0){
        setError("No recipes found for the entered query");
      }else{
        setError("");
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    await fetchData();
    if(!query){
      console.log("No Recipe Found")
    }
  };

  

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            FOODIES
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Receipes
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search For Receipes"
                aria-label="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>

              <select className="healthLabels" id="">
                <option
                  value="vegan"
                  onClick={() => {
                    setLabel("Vegan");
                  }}
                >
                  Vegan
                </option>

                <option
                  value="dairyFree"
                  onClick={() => {
                    setLabel("Dairy-Free");
                  }}
                >
                  Dairy-Free
                </option>

                <option
                  value="alcoholFree"
                  onClick={() => {
                    setLabel("Alcohol-Free");
                  }}
                >
                  Egg-Free
                </option>

                <option
                  value="eggFree"
                  onClick={() => {
                    setLabel("Egg-Free");
                  }}
                >
                  Alcohol-Free
                </option>
              </select>
            </form>
          </div>
        </div>
      </nav>

      <Carousel />

      <section className="cardSection">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {error && <p className="errorHand" style={{ color: "red" }}>{error}</p>}
        {data.map((recipe) => (
          <div className="card" style={{ width: "18rem" }} key={recipe.recipe.uri}>
            <img
              src={recipe.recipe.image}
              className="card-img-top"
              alt={recipe.recipe.label}
            />
            <div className="card-body">
              <h5 className="card-title">{recipe.recipe.label.toUpperCase()}</h5>
              <p className="card-text">
                <h5 className="cuisineLabel">{recipe.recipe.cuisineType}</h5>
                <li>{recipe.recipe.dietLabels[0]}</li>
                <li>{recipe.recipe.totalWeight.toFixed(0)}</li>
              </p>
              <div className="btnContainer">
              <a
                href="#"
                className="btn btn-primary left" style={{background:"green"}}
                onClick={() => {
                  window.open(recipe.recipe.url);
                }}
              >
                View Full Receipe
              </a>
              <a href="#" className="btn btn-primary right" style={{background:"green"}}>
                {recipe.recipe.calories.toFixed(1)} Calories
              </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    
     
    </>
  );
};

export default Receipe;
