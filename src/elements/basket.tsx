

export const Basket = () => {

    return ( 
        <div className="basket">
            <button className="basket-btn">
                <img src={`${process.env.PUBLIC_URL}/bag.svg`} alt="bag-basket" />
            </button>
        </div>
    )
}