/* eslint-disable react/prop-types */
const ProductLayout = ({product}) => {
  return (
    <>
      <li
        style={{
          width: "600px",
          padding: "20px",
          marginTop: "10px",
        }}
      >
        <h1>{product.product_name}</h1>
        <img
          src={product.product_image}
          alt={product.product_name}
          width="90%"
          style={{ marginLeft: "30px" }}
        />
        <p>{product.product_description}</p>
        <h4>
          price: <i>${product.product_price}</i>
        </h4>
      </li>
    </>
  );
};

export default ProductLayout;
