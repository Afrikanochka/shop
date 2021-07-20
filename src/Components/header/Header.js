import React from "react";
import HeaderList from "./headerList/HeaderList";
import {HeaderStyled} from "./HeaderStyled";

const Header = () => {
    return (
        <HeaderStyled>
            <nav>
                <HeaderList />
            </nav>
        </HeaderStyled>
    );
}

export default Header;