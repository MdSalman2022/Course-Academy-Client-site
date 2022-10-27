import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaPrint, FaStar } from 'react-icons/fa';
import Pdf from "react-to-pdf";
const ref = React.createRef();


const CourseContent = () => {

    const course = useLoaderData()

    const { title, image, description, id, instructor, category, rating, details } = course;
    const options = {
        orientation: 'portrait',
        unit: 'in',
        format: [22, 20]
    };


    return (
        <div>
            <Pdf targetRef={ref} filename="post.pdf" options={options} x={0.5} y={0.5} scale={1}>
                {({ toPdf }) => <button onClick={toPdf} className="text-2xl border-2 border-black p-2 rounded"><FaPrint /></button>}
            </Pdf>
            <div ref={ref} className='flex flex-col items-center justify-center'>
                <div className="container text-left" >
                    <p className='lg:text-6xl font-bold mb-5 text-center'>{title}</p>
                    <div className='lg:px-40'><img className='w-full mb-10  lg:rounded-xl px-5 lg:p-0 rounded-3xl' src={image} alt="" /></div>
                    <div className=' lg:p-0 px-5'>
                        <div className="badge border-0 bg-primary text-yellow-400"><FaStar /> &nbsp;{rating}</div>&nbsp;&nbsp;
                        <div className="badge badge-primary">{category}</div>&nbsp;&nbsp;
                        <div className="badge badge-primary">{instructor}</div>

                        <br />
                        <p className='text-xl mt-5 leading-loose'>{description} <br /> <br /> {details}</p>
                        <br />
                        <Link to={`/checkout/${id}`} className="btn bg-primary text-white  border-0 dark:bg-primary">Get Premium Access</Link>
                    </div>
                </div>
            </div >
        </div>

    );
};

export default CourseContent;