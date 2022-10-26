import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../../components/Pages/Blog/Blog';
import Category from '../../components/Pages/Category/Category';
import CheckOut from '../../components/Pages/CheckOut/CheckOut';
import Course from '../../components/Pages/Course/Course';
import CourseContent from '../../components/Pages/CourseContent/CourseContent';
import FAQ from '../../components/Pages/FAQ/FAQ';
import Home from '../../components/Pages/Home/Home';
import Login from '../../components/Pages/Login/Login';
import Register from '../../components/Pages/Register/Register';
import Logout from '../../components/Pages/Register/Register';
import Main from '../../layout/Main';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch("http://localhost:5000/course/"),
                element: <Home></Home>
            },
            {
                path: '/home',
                loader: () => fetch("http://localhost:5000/course/"),
                element: <Home></Home>
            },
            {
                path: '/course',
                loader: () => fetch("http://localhost:5000/course/"),
                element: <Course></Course>
            },
            // {
            //     path: '/course',
            //     loader: () => fetch("http://localhost:5000/course/"),
            //     element: <Course></Course>
            // },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Course></Course>
            },
            {
                path: '/course-content/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
                element: <CourseContent></CourseContent>
            },
            {
                path: '/checkout/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
                element: <CheckOut></CheckOut>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])