import { Link } from 'react-router-dom';

export const Menu = () => {
    const navigation = [
        { text: 'Home', href: '/' },
        { text: 'Shop', href: '/shop' }, // оновлено посилання на Shop
        { text: 'About US', href: '/about' }, // наприклад, якщо у вас є сторінка About
        { text: 'Contact', href: '/contact' }, // наприклад, якщо у вас є сторінка Contact
    ];

    return (
        <div className="menu">
            {navigation.map((link, index) => (
                <div key={index} className="menu-item">
                    <Link to={link.href} className='menu-item-link'>
                        {link.text}
                    </Link>
                </div>
            ))}
        </div>
    );
};
