import React from 'react'
import data from '../../data';
import LaptopListItem from './laptopListItem/LaptopListItem';
import { LaptopListStyled } from './LaptopListStyled';

const LaptopList = () => {
    return (
        <LaptopListStyled>
        {data.laptops.map((laptop) => (
            <LaptopListItem laptop={laptop} key={laptop.id}/>
            ))}
    </LaptopListStyled>
    );
}

export default LaptopList;