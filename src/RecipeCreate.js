import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", formData)
    createRecipe(formData)
    setFormData({...initialFormState})
  }
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  console.log("Current value of formData:", formData)

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr style={{backgroundColor: "#fff0c7"}}>
            
            <td>
              <input 
                type="text" 
                placeholder="Name" 
                name="name" 
                onChange={handleChange}
                value={formData.name}  
                />
            </td>
            <td>
              <input 
                type="text" 
                placeholder="Cuisine" 
                name="cuisine" 
                onChange={handleChange}
                value={formData.cuisine}
                 />
            </td>
            <td>
              <input 
                type="text" 
                placeholder="URL" 
                name="photo" 
                onChange={handleChange}
                value={formData.photo}
                 />
            </td>
            <td>
              <textarea 
                placeholder="Ingredients" 
                row="2" name="ingredients" 
                onChange={handleChange}
                value={formData.ingredients} ></textarea>
            </td>
            <td>
              <textarea 
                placeholder="Preparation" 
                row="2" 
                name="preparation" 
                onChange={handleChange}
                value={formData.preparation}></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;