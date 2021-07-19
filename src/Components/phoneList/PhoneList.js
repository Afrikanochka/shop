import React from 'react'
import data from '../../data';
import PhoneListItem from './phoneListItem/PhoneListItem';

const PhoneList = () => {
    return (
        <ul>
            {data.phones.map((phone) => (
                <PhoneListItem phone={phone} key={phone.id}/>
                ))}
        </ul>
    );
}

export default PhoneList;
