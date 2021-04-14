import { Product, Div } from "./cartStyle";

interface IProduct {
  shopList: {
    _id: string;
    product: string;
    imageUrl: string;
    price: number;
  }[];
}
const Cart = ({ shopList }: IProduct) => {
  return (
    <>
      <h3>ShopList</h3>
      <Div>
        {shopList
          ? shopList.map((product) => (
              <Product key={product._id}>
                <img src={product.imageUrl} />
                <p>Product: {product.product}</p>
                <p>Price: {product.price}</p>
              </Product>
            ))
          : null}
      </Div>
    </>
  );
};

export default Cart;
