import { useEffect, useState } from "react";
import { isGetAccessorDeclaration } from "typescript";
import Cart from "../../components/cart";
import { Container, Product } from "./style";

interface IProduct {
  _id: string;
  product: string;
  imageUrl: string;
  price: number;
}

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [shopList, setShopList] = useState<IProduct[]>([
    {
      _id: "607728f58b692e9e8a4a8552456",
      product: "Do it 4",
      imageUrl:
        "https://i.pinimg.com/564x/50/b1/6c/50b16c7e2f7c3b955811d32b3167d7ae.jpg",
      price: 0,
    },
  ]);
  const addToCart = (id: string) => {
    const prodToAdd = products.find((product) => product._id === id);
    if (prodToAdd) {
      setShopList([...shopList, prodToAdd]);
    }
  };
  const getProducts = () => {
    fetch("/api")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <Cart shopList={shopList} />
      <h3>Products</h3>
      <Container>
        {products
          ? products.map((product) => (
              <Product key={product._id}>
                <img src={product.imageUrl} />
                <p>Product: {product.product}</p>
                <p>Price: {product.price}</p>
                <button onClick={() => addToCart(product._id)}>
                  Add to cart
                </button>
              </Product>
            ))
          : null}
      </Container>
    </>
  );
};

export default Products;
