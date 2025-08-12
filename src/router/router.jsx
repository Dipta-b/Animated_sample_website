import Layout from "../components/Layouts/Layout";
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../components/Home/Home";
import LatestNews from "../components/LatestNews/LatestNews";
import Feedback from "../components/Feedback/Feedback";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: '/',
                element: <>
                    <Layout></Layout>
                    <LatestNews></LatestNews>
                    <Feedback></Feedback>
                </>
            },

        ],


    },

]);

export default router;