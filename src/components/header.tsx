import { Basket } from "../elements/basket"
import { Logo } from "../elements/logo"
import { Menu } from "../elements/menu"

export const Header = () => {

    return (
        <header className="header">
                <div className="header-logo">
                    <Logo />
                </div>
                <div className="header-menu">
                    <Menu />
                </div>
                <div className="header-basket">
                    <Basket />
                </div>
        </header>
    )
}