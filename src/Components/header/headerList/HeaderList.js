import React from "react";
import data from "../../../data/index";
import { HeaderListStyled } from "./HeaderListStyled";
import colors from "../../../styles/colors";

const HeaderList = () => {
    return (
        <HeaderListStyled colors={colors}>
            {data.header.map((item) => (
                  <li key={item} className="headerListItem">
                  <a href="/#" className="headerListLink">
                    {item}
                  </a>
                </li>
            ))}
        </HeaderListStyled>
    );
}

export default HeaderList;