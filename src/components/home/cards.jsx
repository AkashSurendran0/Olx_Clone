import './home.scss'
import { useNavigate } from 'react-router-dom'

function Cards({products}) {
    const navigate=useNavigate()
    const getProductDetails = (product) =>{
        navigate('/product-details', {state: product})
    }

    return (
        <div className="container">
            <div className="row g-3 products">
                { products && products.map(product=>{
                    return (
                        <div className="col-md-3" onClick={()=>getProductDetails(product)}>
                            <div className="productCard">
                                <div className="productImage">
                                    <img src={product.imageUrl}/>
                                </div>
                                <div className="productDetails">
                                    <div className="productAmount">
                                        ₹{product.price}
                                    </div>
                                    <div className="productName">
                                        {product.name}
                                    </div>
                                    <div className="productDesc">
                                        {product.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    }) 
                }
            </div>
        </div>
    )
}

export default Cards
