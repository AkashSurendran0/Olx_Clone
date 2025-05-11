import './home.scss'

function Cards() {
  return (
    <div className="container">
        <div className="row g-3 products">
            <div className="col-md-3">
                <div className="productCard">
                    <div className="productImage">
                        <img src="/olx_logo.png"/>
                    </div>
                    <div className="productDetails">
                        <div className="productAmount">
                            ₹7000
                        </div>
                        <div className="productName">
                            Shoes
                        </div>
                        <div className="productDesc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora expedita velit quia eum fuga earum itaque minima, quis nam eos sunt illo quas repellendus veniam deleniti accusamus labore ab rem.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Cards
