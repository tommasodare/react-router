import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Recipe() {

    const [recipe, setRecipe] = useState([])
    const navigate = useNavigate()
    const { slug } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/blog_posts/${slug}`)
            .then(res => res.json())
            .then(data => setRecipe(data))
            .catch(err => console.log(err))

    }, [])

    return (

        <>


            <div className="container m-4">
                <h1>{recipe.title}</h1>
                <img style={{ width: "400px" }} src={recipe.image} alt={recipe.slug} />
                <p>{recipe.content}</p>
                <button className="back btn btn-primary p-1" onClick={() => navigate("/blog")}>
                    Torna alla lista delle ricette
                </button>
            </div>


        </>




    )
}