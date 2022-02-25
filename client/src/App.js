import './App.css';
import Navigation from "./components/User/Nav/Navigation";
import ProductList from "./components/User/Product/ProductList";
import LogInAction from "./components/LogIn/LogInAction";
import Cart from "./components/User/Cart/Cart";
import Order from "./components/User/Order/Order";
import { Map } from './components/Map/Map';
import {
    useCookies
} from "react-cookie";
import {
    useState
} from "react";
import supplies from "./components/mock-up/MockUp";



function App() {
    const [cookies, setCookie] = useCookies(['cart', 'order'], );
    const [activePage, setActivePage] = useState(sessionStorage.getItem('page') || 'Главная');

    console.log(cookies)

    let content = null;
    /* beautify ignore:start */
    switch (activePage) {
        case 'Главная':
            content = <ProductList cookies={{cookies, setCookie}}/>
            break;
        case 'Корзина':
            content = <Cart cookies={{cookies, setCookie}}/>
            break;
        case 'Мои заказы':
            content = <Order {...{cookies, setCookie}}/>
            break;
        case 'Контакты':
            content = <Map cookies={{cookies, setCookie}}/>
            break;
        case 'Войти':
            content = <LogInAction cookies={{cookies, setCookie}}/>
            break;
        default:
            content = <ProductList cookies={{cookies, setCookie}}/>
            break;
    }
    /* beautify ignore:end */
    function changePage(e) {
        e.preventDefault();
        if (e.target.text === activePage) return
        setActivePage(e.target.dataset.page);
        sessionStorage.setItem('page', e.target.dataset.page)
    }
    /* beautify ignore:start */
    return (
        <>
            <header>
                <Navigation page={activePage} coocki={{cookies, setCookie}} repage={changePage}/>
            </header>
            <main>
                <div className="container mt-5">
                    <h3>{activePage === 'Главная' ? 'Продукты' : activePage}</h3>
                    {content}
                </div>
            </main>
        </>
    );
    /* beautify ignore:end */
}

export default App;