import About from "../pages/client/About";
import AddProduct from "../pages/client/AddProduct";
import Contact from "../pages/client/Contact";
import Detailpage from "../pages/client/DetailPage";
import Home from "../pages/client/Home";
import MainRoot from "../pages/client/MainRoot";
import News from "../pages/client/News";
import Price from "../pages/client/Price";
import Service from "../pages/client/Service";
import SignIn from "../pages/client/SignIn";
import Team from "../pages/client/Team";


export const ROUTER = [
    {
        path : "/",
        element : <MainRoot/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/service",
                element : <Service/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/:id",
                element : <Detailpage/>
            },
            {
                path : "/add-product",
                element : <AddProduct/>
            },
            {
                path : "/price",
                element : <Price/>
            },
            {
                path : "/team",
                element : <Team/>
            },
            {
                path : "/news",
                element : <News/>
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path : "/sign-in",
                element : <SignIn/>
            },
        ]
    }
]