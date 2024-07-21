import { Logo } from "../elements/logo";
import { Menu } from "../elements/menu";

export const Footer = () => {
    const socialMedia = [
        { href: 'https://www.instagram.com', image: `${process.env.PUBLIC_URL}/Instagram.svg`, alt: 'icon instagram' },
        { href: 'https://www.x.com', image: `${process.env.PUBLIC_URL}/Twitter.svg`, alt: 'icon twitter' },
        { href: 'https://www.linkedin.com', image: `${process.env.PUBLIC_URL}/LinkedIN.svg`, alt: 'icon linkedin' },
        { href: 'https://www.facebook.com', image: `${process.env.PUBLIC_URL}/facebook.svg`, alt: 'icon facebook' },
    ];
    
    return (
        <footer className="footer">
            <Logo />
            <Menu />
            <address className="footer-address">
                <a href="https://www.google.com/maps?q=ul.Wislicka+5" className="footer-address-street" target="_blank" rel="noopener noreferrer">ul.Wislicka 5</a>
                <a href="tel:+1234567890" className="footer-address-tel">+1 (234) 567-890</a>
                <a href="mailto:nkoblianskyi@gmail.com" className="footer-address-email">nkoblianskyi@gmail.com</a>
            </address>
            <div className="footer-social">
                {socialMedia.map((link, index) => (
                    <div className="footer-social-item" key={index}>
                        <a
                            href={link.href}
                            className="footer-social-item-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="footer-social-item-link-icon"
                                src={link.image}
                                alt={link.alt}
                            />
                        </a>
                    </div>
                ))}
            </div>
            <div className="footer-producer">
                <p className="footer-producer-text">© 2024 Nykyta Koblianskyi - All rights reserved.</p>
            </div>
        </footer>
    );
};
