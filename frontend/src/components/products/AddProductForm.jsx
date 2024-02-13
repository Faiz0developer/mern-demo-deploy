/* eslint-disable react/prop-types */
import { useRef } from "react";
import Styles from "./AddProdcutForm.module.css";
import CustomWrapper from "../../UI/CustomWrapper";

const AddProductForm = ({ onGetData }) => {
  const productName_ref = useRef();
  const productImage_ref = useRef();
  const productPrice_ref = useRef();
  const productDescription_ref = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const product_name = productName_ref.current.value;
    const product_image = productImage_ref.current.value;
    const product_price = productPrice_ref.current.value;
    const product_description = productDescription_ref.current.value;
    const productData = {
      product_name,
      product_image,
      product_price,
      product_description,
    };

    onGetData(productData);
  };

  return (
    <CustomWrapper>
      <form className={Styles.form} onSubmit={submitHandler}>
        <div className={Styles.groups}>
          <label htmlFor="productName">Product Name</label>
          <input type="text" id="productName" ref={productName_ref} />
        </div>
        <div className={Styles.groups}>
          <label htmlFor="image" placeholder="Paste image url">
            Image
          </label>
          <input type="text" id="image" ref={productImage_ref} />
        </div>
        <div className={Styles.groups}>
          <label htmlFor="price">Price</label>
          <input type="text" id="price" ref={productPrice_ref} />
        </div>
        <div className={Styles.groups}>
          <label htmlFor="description">Descritption</label>
          <input type="text" id="description" ref={productDescription_ref} />
        </div>
        <div className={Styles.btn}>
          <button>Add</button>
        </div>
      </form>
    </CustomWrapper>
  );
};

export default AddProductForm;
