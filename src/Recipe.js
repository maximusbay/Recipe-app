import React from "react"
import "./App.css";

function Recipe({recipe, deleteRecipe}) {
   
    return (
    <tr>
    <td>{recipe.name}</td>
    <td>{recipe.cuisine}</td>
    <td><img src={recipe.photo} alt="img-of-food" /></td>
    <td>{recipe.ingredients}</td>
    <td>{recipe.preparation}</td>
    <td><button onClick={deleteRecipe} name="delete">Delete</button></td>
    </tr>
    );
}

export default Recipe