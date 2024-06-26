import { App } from "@/components/App/App";
import { Shop } from "@/pages/shop";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
    {
        path: "/shop",
        element: <App />,
        children: [
            {
                path: '/shop/main',
                element: <Suspense fallback={'Loading...'}><Shop /></Suspense>
            },
            {
                path: '/shop/second',
                element: <Suspense fallback={'Loading...'}>
                    <div style={{color: 'red'}}>
                        SECOND SHOP PAGE
                    </div>
                </Suspense>
            }
        ]
    }
];

export const router = createBrowserRouter(routes);

export default routes;