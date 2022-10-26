import React from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import RightSideNav from '../RightSideNav/RightSideNav';

const Course = () => {

    const courses = useLoaderData()


    return (
        <div>

            <h1 className='text-5xl font-bold  mt-5 mb-20'>Courses</h1>
            <div className="grid grid-cols-4">
                <div className="courses col-span-3">
                    <div className='mx-20'>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 h-full w-full place-items-center">
                            {
                                courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                            }
                        </div>
                    </div>
                </div>
                <div className="sidebar">
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default Course;
