import { useState } from "react";
import "./style.css";

function ProductCard({ product, index, deleteProduct , updateProduct}) {
  const [newProductInfo, setNewProductInfo] = useState({
    title: product.title,
    price: product.price,
    img: product.img,
    description: product.description,
  });
  const [isEdit, setIsEdit] = useState(false)

//   function edit(){
// console.log("edit");
// setIsEdit(true)

//   }
  function handlesSubmit(e){
    e.preventDefault()
    updateProduct(product.id,newProductInfo)
    setIsEdit(false)
  }

  return (
    <>
      {isEdit && (
        <form onSubmit={handlesSubmit}>
          <input
            type="text"
            placeholder="Product Title"
            value={newProductInfo.title}
            onChange={(e) =>
              setNewProductInfo({ ...newProductInfo, title: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Price"
            value={newProductInfo.price}
            onChange={(e) =>
              setNewProductInfo({ ...newProductInfo, price: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Product Image"
            value={newProductInfo.img}
            onChange={(e) =>
              setNewProductInfo({ ...newProductInfo, img: e.target.value })
            }
          />
          <textarea
            type="text"
            placeholder="Product Description"
            value={newProductInfo.description}
            onChange={(e) =>
              setNewProductInfo({
                ...newProductInfo,
                description: e.target.value,
              })
            }
          ></textarea>
          <button>Update Product</button>
        </form>
      )}

      <div className="card">
        <img src={product.img} alt="" /> 
        <h3 key={index}>{product.title}</h3>
        <button>{product.price}</button>
        <h4>{product.description}</h4>
        <div>
          <button onClick={() => setIsEdit(true)}>Edit </button>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
        </div>
      </div>
    </>
  );
}
export default ProductCard;
