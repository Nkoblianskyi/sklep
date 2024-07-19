
import { Layout } from './layouts/layout';
import { Shop } from './shop/shop';

export const ShopPage = () => {
    return (
        <div className="shop-page">
            <Layout>
                <Shop/>
            </Layout>
        </div>
    );
};
