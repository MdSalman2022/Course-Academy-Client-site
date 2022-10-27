import React from 'react';
import { Link } from 'react-router-dom';
import CourseContent from '../CourseContent/CourseContent';

const CourseCard = ({ course }) => {

    const { description, id, image, title, instructor } = course;

    return (
        <div className="card w-full h-80 bg-base-100 shadow-xl image-full border-2">
            <figure><img className='opacity-70 object-fit' src={image} alt="Shoes" /></figure>
            <div className="card-body ">
                <p className='text-2xl font-bold text-white'>{title}</p>
                <p className='text-white'>
                    {description.length > 100 ?
                        <>{description.slice(0, 100) + '...'}</>
                        :
                        <>{description}</>
                    }
                    <p className='text-white font-bold'>Created By <span className='text-info'>{instructor}</span> </p>
                </p>
                <div className="card-actions justify-center ">
                    <Link to={`/course-content/${id}`}>
                        <button className="btn btn-primary dark:btn-neutral">Preview Course</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default CourseCard;