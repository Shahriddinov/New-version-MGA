import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ScrollTop from "./hoc/ScrollTop";
import Layout from "./components/Layout/Layout";
import Spinner from "./components/Spinner";

const Home = lazy(() => import("./pages/Home/home"));
const About = lazy(() => import("./pages/About/about"));
const catalogBook = lazy(() => import("./pages/CatalogBook"));
const Serves = lazy(() => import("./pages/Serves"));
const Gallery = lazy(() => import("./pages/Gallery/gallery"));
const Contact = lazy(() => import("./pages/Contact/contact"));


const routes = [
    {path: "/", element: Home},
    {path: "/catalogBook", element: catalogBook},

    {path: "/about", element: About},
    {path: "/serves", element: Serves},
    {path: "/gallery", element: Gallery},
    {path: "/contact", element: Contact},


];
const RoutesContainer = () => (
    <Router>
        <Layout>
            <Suspense fallback={<Spinner position="full"/>}>

                <Routes>
                    {routes.map((route, key) => {
                        const RouteComponent = ScrollTop(route.element);
                        return (
                            <Route key={key} path={route.path} element={<RouteComponent/>}/>
                        );
                    })}
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </Suspense>
        </Layout>
    </Router>
);

export default RoutesContainer;
