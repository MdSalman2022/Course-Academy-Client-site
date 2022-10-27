import React from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import LeftSideNav from '../RightSideNav/LeftSideNav';

const Course = () => {

    const courses = useLoaderData()


    return (
        <div>

            <h1 className='text-5xl font-bold  lg:mt-5 lg:mb-20 mx-auto'>Courses</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-auto justify-center lg:place-items-start place-items-center ">
                <div className="sidebar mx-auto my-5">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="courses col-span-3">
                    <div className='mx-5 lg:mx-20'>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10 h-full w-full place-items-center">
                            {
                                courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                            }
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Course;
