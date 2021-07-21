import React from 'react';
import colors from "../../../styles/colors";
import { ProductListItemStyled } from './ProductListItemStyled';

const ProductListItem = ({product}) => {
  const {name, image, description, isSale, price} = product;
    return (
        <ProductListItemStyled colors={colors}>
        <div className="productListItemWrapper">
        <h3 className="productListItemTitle">{name}</h3>
        <img src={image} alt={name} className="productListItemImg" />
        <p className="productListItemSale">
          <span className="productListItemName">Sale:</span>{" "}
          {isSale ? "Действует акционная цена" : "В акции не участвует"}
        </p>
        <p className="productListItemDescription">
          <span className="productListItemName">Description: </span>
          {description}
        </p>
        <p className="productListItemPrice">
          <span className="productListItemName">Price:</span>{" "}
          <span>{price}</span>
        </p>
        <div className="productListItemButtonsGroup">
          <button type="button" className="addToCartButton">
            Add to Cart
          </button>
          <button type="button" className="detailsButton">
            Details
          </button>
        </div>
      </div>
        </ProductListItemStyled>
    );
    };

    export default ProductListItem;
