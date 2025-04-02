import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function BlogPost() {

    const [recipes, setRecipes] = useState([]) // -> non so perchè ma devo passargli un array vuoto []


    fetch('http://localhost:3000/api/v1/blog_posts')
        .then(res => res.json())
        .then(data => {

            setRecipes(data)
        })

    return (

        <>


            {recipes.map(recipe => {
                return (
                    <div key={recipe.slug} className="m-4">
                        <div>
                            <img src={recipe.image} style={{ width: "400px" }} alt={recipe.title} />
                            <div>
                                <h5>{recipe.title}</h5>
                                <p>{recipe.content}</p>
                            </div>
                            <Link to={`/blog/${recipe.slug}`}>
                                <button className="btn btn-info">Cliccami</button>
                            </Link>
                        </div>
                    </div>
                )
            })}

        </>

    )


}