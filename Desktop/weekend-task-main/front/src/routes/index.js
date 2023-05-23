import AddProduct from "../Pages/Client/AddProduct";
import { Home } from "../Pages/Client/Home";
import { MainRoot } from "../Pages/Client/MainRoot";

export const Routes=[
    {
        path:"",
        element:<MainRoot/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:'/add-product',
                element:<AddProduct/>
            }
        ]

    }
]