import React from 'react'
import data from '../../data';
import LaptopListItem from './laptopListItem/LaptopListItem';

const LaptopList = () => {
    return (
        <ul>
        {data.laptops.map((laptop) => (
            <LaptopListItem laptop={laptop} key={laptop.id}/>
            ))}
    </ul>
    );
}

export default LaptopList;