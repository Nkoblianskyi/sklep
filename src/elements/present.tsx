import React, { useState } from 'react';

interface CardProps {
    src: string;
    alt: string;
    back: string;
    text: string;
}

interface PresentProps {
    itemPresent: CardProps[];
}

export const Present: React.FC<PresentProps> = ({ itemPresent }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    return (
        <div className="present">
            {itemPresent.map((link, index) => (
                <div
                    className="present-item"
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={link.src} alt={link.alt} />
                    <div className={`overlay ${activeIndex === index ? 'active' : ''}`}>
                        <div className="text">{link.text}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};
