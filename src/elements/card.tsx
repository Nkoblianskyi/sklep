import React from 'react';


interface Item {
    id: number;
    src: string;
    name: string;
    price: string;
}

interface CardProps {
    item: Item;
}

export const Card: React.FC<CardProps> = ({ item }) => {
    return (
        <div className="card">
            <div className="card-wrap">
                <img src={item.src} alt={item.name} className="card-wrap-img" />
                <div className="card-wrap-text">
                    <h2 className="card-wrap-text-name">{item.name}</h2>
                    <p className="card-wrap-text-price">{item.price}</p>
                </div>
            </div>
        </div>
    );
};
