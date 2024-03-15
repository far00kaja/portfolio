import { createBrowserRouter } from "react-router-dom";
import Introduction from "./pages/introduction";
import Works from "./pages/works";
import Contact from "./pages/contact";
import App from "./App";

export const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            {
                path: '',
                element: <Introduction />
            },
            {
                path: 'introduction',
                element: <Introduction />
            },
            {
                path: 'works',
                element: <Works />

            },
            {
                path: 'contact',
                element: <Contact />
            },
        ]
    },
    // {
    //     path: '*',
    //     element: <section className="h-screen w-full flex items-center justify-center"><h1 className="font-semibold text-6xl"> Page Not Found  |  404</h1></section>
    // }
])