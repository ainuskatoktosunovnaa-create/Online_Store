 import "./style.css"

function ProductCard({product, index, deleteProduct}){
  

    return (

        <div className="link">
        <div className="card">
          {/* <img src={product.img} alt="" /> */}
          <h3 key={index}>{product.title}</h3>
          <button>{product.price}</button>
          <h4>{product.description}</h4>
          <div >
            <button >Edit</button>
            <button  onClick={() => deleteProduct(product.id)} >Delete</button>
          </div>
        </div>
      </div>
    );
}
export default ProductCard