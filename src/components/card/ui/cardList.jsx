export const CardList = ({item}) => {
  return (
    <>
      <h3 className="product_title">{item.name}</h3>
      <h4 className="product_price">{item.price}</h4>
    </>
  );
};
