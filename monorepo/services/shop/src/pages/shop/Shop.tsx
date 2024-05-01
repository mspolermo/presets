import {shopRoutes} from '@packages/shared/src/routes/shop';
import {Btn} from '@packages/shared/src/ui/button/Btn';
import { Link } from 'react-router-dom';

const Shop = () => {
    return (
        <div>
            <h1> Shop main page</h1>
            <div>
                <Link to={shopRoutes.second}>Link to Second Page</Link>
                <Btn text='Жёлтая кнопка из shared' yellow />
            </div>
        </div>
    )
}

export default Shop;