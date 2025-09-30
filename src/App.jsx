import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import ProductCard from "./components/ProguctCard";

function App() {
  const [products, setProducts] = useState([]);
  const API = "https://68d269b5cc7017eec543c2b5.mockapi.io/api/v1/products";
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    img: "",
    description: ""
  });

  async function getProducts() {
    const { data } = await axios.get(API);
    setProducts(data);
  }

  async function deleteProduct(id) {
    //  const confirimChek = confirm("Are you sure want to delete product")
    //  console.log(confirimChek);
    // if(confirmChek){
    //   const respons = await axios.delete(`${API}/${id}`);
    //   console.log(respons);

    //   if (respons.status == 200) {
    //     getProducts();
    //   }
    // }

    const respons = await axios.delete(`${API}/${id}`);
    console.log(respons);

    if (respons.status == 200) {
      getProducts();
    }
  }
console.log(newProduct);

 async function addProduct(){
  if(newProduct.title.trim && newProduct.price && newProduct.img.trim && newProduct.description){
    const res = await axios.post(API, newProduct);
    console.log(res);
    if (res.status == 200) {
      setNewProduct({
        title: "",
        price: "",
        img: "",
        description: "",
      });
      getProducts();
    }
  }
  
}
async function updateProduct(id, updateProductInfo){
  console.log(id);

  const res = await axios.put(`${API}/${id}`, updateProductInfo);

if(res.status == 200){
  getProducts();
}

}

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="form">
        <h1>Add new Product</h1>

        <input
          type="text"
          placeholder="Product Title"
          value={newProduct.title}
          onChange={(e) =>
            setNewProduct({ ...newProduct, title: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Product Image"
          value={newProduct.img}
          onChange={(e) =>
            setNewProduct({ ...newProduct, img: e.target.value })
          }
        />
        <textarea
          type="text"
          placeholder="Product Description"
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
        ></textarea>
        <button onClick={addProduct}>Add Product</button>
      </div>
      <div className="link">
        {products.map((obj, index) => (
          <ProductCard
            product={obj}
            key={index}
            deleteProduct={deleteProduct}
            updateProduct={updateProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
