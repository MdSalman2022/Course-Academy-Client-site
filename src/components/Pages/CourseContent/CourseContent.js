import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const CourseContent = () => {

    // const { description, id, image, title } = course;
    // console.log(course)
    const course = useLoaderData()

    const { title, image, description, id, instructor, category, rating, details } = course;
    // console.log(course);


    return (
        <div className='flex flex-col items-center justify-center'>

            <div className="container text-left">
                <p className='text-6xl font-bold mb-5 text-center'>{title}</p>
                <div className='px-40'><img className='w-full mb-10 rounded-lg' src={image} alt="" /></div>
                <div className="badge text-yellow-400"><FaStar /> &nbsp;{rating}</div>&nbsp;&nbsp;
                <div className="badge badge-primary">{category}</div>&nbsp;&nbsp;
                <div className="badge badge-primary">{instructor}</div>
                <br />
                <p className='text-xl mt-5 leading-loose'>{description} <br /> <br /> {details}</p>
                <br />
                <Link to={`/checkout/${id}`} className="btn bg-primary text-white  border-0 dark:bg-primary">Get Premium Access</Link>
            </div>
        </div >

    );
};

export default CourseContent;