import Price from "./Price"
import "./Product.css"


const Product = ({title, description, price, indx}) => {
    return (
    <div className="Product">
      <h1>Product</h1>
      <p>Name: {title}</p>
      <p>Description: {description[indx]}</p>
      <Price price={price} indx={indx} />
    </div>
  )
}

export default Product
