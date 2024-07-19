import { useEffect, useState, useRef } from 'react';
import { Card } from "../elements/card";
import itemsData from '../mocks/items.json';


interface Item {
    id: number;
    src: string;
    name: string;
    price: string;
}

export const Shop = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
            setItems(itemsData);
    }, []);;

    const itemsPerPage = 9; // Кількість товарів на сторінці
    const [currentPage, setCurrentPage] = useState(1);
    const shopTitleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        // Прокрутка до заголовку "Shop" після зміни сторінки
        if (shopTitleRef.current) {
            shopTitleRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [currentPage]);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <div className="shop">
            <h1 ref={shopTitleRef}>Shop</h1>
            <div className="shop-list">
                {items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map(item => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
            {totalPages > 1 && (
                <div className="pagination">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
                    <span>{currentPage} / {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
                </div>
            )}
        </div>
    );
};
