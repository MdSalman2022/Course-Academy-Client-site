import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import CourseCard from '../CourseCard/CourseCard';

const Home = () => {

    const courses = useLoaderData()
    courses.map(course => <Course key={course.id} course={course}></Course>)


    return (
        <div>
            <div className="hero min-h-screen " style={{ backgroundImage: `url("https://i.ibb.co/0FZgQmJ/study.jpg")` }}>
                <div className="hero-overlay bg-opacity-90 "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-5xl font-bold">Study Online is now much easier</h1>
                        <Link to="/register"><button className="btn btn-primary">Join for free</button></Link>
                    </div>
                </div>
            </div>
            <div>
                <div className='my-10'>
                    <div className="grid lg:grid-cols-3 gap-5 place-items-center ">
                        <div className="card bg-primary text-white dark:bg-neutral"    >
                            <div className="card-body items-center text-center ">
                                <p className='text-xl'>10,000 Online Courses</p>
                            </div>
                        </div>
                        <div className="card bg-primary text-white dark:bg-neutral"    >
                            <div className="card-body items-center text-center">
                                <p className='text-xl'>Expert Instruction</p>
                            </div>
                        </div>
                        <div className="card bg-primary text-white dark:bg-neutral"    >
                            <div className="card-body items-center text-center">
                                <p className='text-xl' > Lifetime Access</p>
                            </div >
                        </div >
                    </div >
                </div >
            </div >
            <div className='mx-5 lg:mx-20'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 h-full w-full place-items-center">
                    {
                        courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                    }

                </div>
            </div>
        </div >
    );
};

export default Home;