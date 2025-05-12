import './details.scss'

function ProductDetails({product}) {
    

    return (
        <div className="container">
            <div className='productDetailsInfo mt-5 row'>
                <div className="productDetailsImage col-md-6">
                    <img src={product.imageUrl}/>
                </div>
                <div className="details col-md-6">
                    <div className="heading">
                        <h2>{product.name}</h2>
                    </div>
                    <div className="price">
                        <h5>₹ {product.price}</h5>
                    </div>
                    <div className="description">
                        <p>{product.description}</p>
                    </div>
                    <div className="cartBtn">
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
