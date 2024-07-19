import { useEffect, useState } from "react";

import { Card } from "../elements/card";
import { Link } from 'react-router-dom';


const itemsData: Item[] = require('../mocks/items.json');

interface Item {
    id: number;
    src: string;
    name: string;
    price: string;
}

const icons = [
    { src: '/shippingsvg.svg', title: 'Free Shipping', text: 'No charge for each delivery' },
    { src: '/wallet.svg', title: 'Quick Payment', text: '100% secure payment' },
    { src: '/support.svg', title: '10:00-19:00 Support', text: 'Quick support' },
];

const previewIds = [1, 5, 8];

export const Preview = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {

        setItems(itemsData);
    }, []);

    const itemsPreview = items.filter(item => previewIds.includes(item.id));

    return (
        <div className="preview">
            <div className="preview-icons">
                {icons.map((link, index) => (
                    <div key={index} className="preview-icon-wrap">
                        <img
                            src={link.src}
                            alt="icon"
                            className="preview-icon-img"
                        />
                        <div className="preview-icon-text">
                            <h1 className="preview-icon-title">{link.title}</h1>
                            <p className="preview-icon-text-span">{link.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="preview-popular">
                <div className="preview-popular-left">
                    <h1 className="preview-popular-left-title">
                        Best Seller Product
                    </h1>
                    <Link to="/shop" className="preview-popular-left-btn">
                        See all collection
                        <img
                            src="/vector.svg"
                            alt="vector"
                            className="preview-left-btn-img"
                        />
                    </Link>
                </div>
                <div className="preview-cards">
                    {itemsPreview.map(item => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};
