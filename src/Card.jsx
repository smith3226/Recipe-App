import React from "react";

const Card = ({ recipe }) => {
  return (
    <section className="cardSection">
      
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow-sm">
              <img
                src={recipe.recipe.image}
                className="card-img-top"
                alt={recipe.recipe.label}
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.recipe.label}</h5>
                <p className="card-text">
                  <h5>{recipe.recipe.cuisineType}</h5>
                  <li>{recipe.recipe.dietLabels[0]}</li>
                  <li>{recipe.recipe.totalWeight.toFixed(0)}</li>
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary left"
                      onClick={() => {
                        window.open(recipe.recipe.url);
                      }}
                    >
                      View Full Recipes
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      {recipe.recipe.calories.toFixed(1)} Calories
                    </button>
                  </div>
                  <small className="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </section>
  );
};

export default Card;
