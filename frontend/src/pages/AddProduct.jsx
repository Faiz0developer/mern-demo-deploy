import AddProductForm from "../components/products/AddProductForm";
import { useNavigate } from "react-router-dom"



const AddProduct = () => {
  const navigate = useNavigate()

  const sendProductData = (productData) => {
    fetch("https://mern-backend-xi.vercel.app/products", {
      method: "POST",
      body: JSON.stringify(productData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate('/',{replace:true})).catch(err => console.log(err))
  };
  return <AddProductForm onGetData={sendProductData} />;
};

export default AddProduct;
