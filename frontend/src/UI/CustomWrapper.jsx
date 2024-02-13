/* eslint-disable react/prop-types */
import Style from "./CustomWrapper.module.css";

const CustomWrapper = (props) => {
  return <div className={Style.customWrapper}>{props.children} </div>;
};

export default CustomWrapper;
