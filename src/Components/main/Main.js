import React, {Component} from "react";
import CartList from "../cartList/CartList";
import ProductList from "../productList/ProductList";
import Section from "../section/Section";
import { MainStyled } from "./MainStyled";
import AdminForm from "../admin/AdminForm";
import { getAllAdvByCategory } from "../../services/api.js";


const getDataByCategory = async (category) => {
  const response = await getAllAdvByCategory(category);
  return response.data
    ? Object.keys(response.data).map((key) => ({
        id: key,
        ...response.data[key],
      }))
    : [];
};

class Main extends Component {
  state = {
    cart: [],
    products: { phones: [], laptops: [] },
  };

  async componentDidMount() {
    const phones = await getDataByCategory("phones");
    const laptops = await getDataByCategory("laptops");
    this.setState({ products: { laptops, phones } });
  }

  addNewAdv = (product) => {
    this.setState((prev) => ({
      products: {
        ...prev.products,
        [product.category]: [...prev.products[product.category], product],
      },
    }));
  };

  addToCart = (product) => {
    this.setState((prev) => ({
      cart: [...prev.cart, product],
    }));
  };

  removeFromCart = (id) => {
    this.setState((prev) => ({
      cart: prev.cart.filter((product) => product.id !== id),
    }));
  };

  removeAllFromCart = () => {
    this.setState({ cart: [] });
  };

  render() {
    return (
      <MainStyled>
        <Section title="Администрирование">
          <AdminForm addNewAdv={this.addNewAdv} />
        </Section>
        <Section title={"Корзина"}>
          <CartList
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
            removeAllFromCart={this.removeAllFromCart}
          />
        </Section>
        <Section title={"Мобильные телефоны"}>
          <ProductList
            products={this.state.products.phones}
            addToCart={this.addToCart}
          />
        </Section>
        <Section title={"Ноутбуки"}>
          <ProductList
            products={this.state.products.laptops}
            addToCart={this.addToCart}
          />
        </Section>
      </MainStyled>
    );
  }
}

export default Main;
