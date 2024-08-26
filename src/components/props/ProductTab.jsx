import Product from "./Product";

const ProductTab = () => {
    const titles = ["Product 1", "Product 2", "Product 3"];
    const description = ["This is a Product", "This is a Product 2", "This is a Product 3"];
    const price = {
        oldPrice: [1000, 2000, 3000],
        newPrice: [900, 1800, 2700]
    }

    const Price = [ {oldPrice: 1000, newPrice: 900}, {oldPrice: 2000, newPrice: 1800}, {oldPrice: 3000, newPrice: 2700} ]

  return (
    <>
      <Product
        title={titles[0]}
        description={description}
        indx={0}
        price={price}
        Price={Price}
      />
        <Product
            title={titles[1]}
            description={description}
            indx={1}
            price={price}
            Price={Price}
        />
        <Product
            title={titles[2]}
            description={description}
            indx={2}
            price={price}
            Price={Price}
        />
    </>
  );
};

export default ProductTab;
