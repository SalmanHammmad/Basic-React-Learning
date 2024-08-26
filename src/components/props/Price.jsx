const Price = ({ price, indx }) => {
  let newPriceStyle = {
    color: price.newPrice[indx] > 1000 ? "red" : "green",
    fontSize: "20px",
  };

  let oldPriceStyle = {
    color: "white",
    fontSize: "20px",
    textDecoration: "line-through",
  };

  return (
    <div>
      <p style={oldPriceStyle}>Old Price: {price.oldPrice[indx]}</p>
      <p style={newPriceStyle}>
        New Price:
        {price.newPrice[indx] < 1000
          ? price.newPrice[indx] * 10
          : price.newPrice[indx] < 2000
          ? price.newPrice[indx] * 5
          : price.newPrice[indx]}
      </p>
    </div>
  );
};

export default Price;
