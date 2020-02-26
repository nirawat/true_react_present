import layoutComponent from "../components/layouts/layout";
import home from "../components/pages/home";
//import products from "../components/pages/products";

const routes = [
    {
        path: "/pages",
        component: home,
        routes: [
            {
                path: "/pages/home",
                component: layoutComponent
            }
        ]
    },
];

export default routes;