import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


export default function Prodotto() {

    const [product, setProdotto] = useState("")
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProdotto(data))
            .catch(err => console.log(err))

    }, [])

    return (

        <>


            <div className="container m-4">
                <h1>{product.title}</h1>
                <img style={{ width: "200px" }} src={product.image} alt="" />
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <button className="back btn btn-primary p-1" onClick={() => navigate("/post")}>
                    Torna alla lista dei prodotti
                </button>
            </div>


        </>




    )


}