import { useEffect, useState } from "react";
import ProductList from "../components/products/ProductList";


const Product = () => {
  const  [prodcutItem, setProductItem] = useState([])
  const [isDataFetching,setIsDataFetching] = useState(true)

  useEffect(()=>{
    setIsDataFetching(true);
    const productFetcing = async()=> {
      const result = await fetch('http://localhost:3004/products')
      const response = await result.json()

      setIsDataFetching(false)
      setProductItem(response.data)
      console.log(response)
    }

    productFetcing()
  },[])
  if(isDataFetching){
    return <div style={{textAlign:"center", marginTop:"100px", fontSize:"40px"}}>Loading...</div>
  }
  return (
    <div style={{ textAlign: "center" }}>
      <ProductList product={prodcutItem} />
    </div>
  );
};

export default Product;
