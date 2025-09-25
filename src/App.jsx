import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import ProductCard from "./components/ProguctCard";

function App() {
  const [products, setProducts] = useState([]);
const API = "https://68d269b5cc7017eec543c2b5.mockapi.io/api/v1/products";

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
     
    const respons = await axios.delete(`${API}/${id}`)
    console.log(respons);
    
    if(respons.status == 200){
      getProducts()
      
    }
  }

  useEffect(() => {
    getProducts();
  }, []);



  return (
    <div>
      {products.map((obj, index) => (
        <ProductCard product={obj} key={index} deleteProduct={deleteProduct}/>
        
      ))}
   </div>
  );
}

export default App;
