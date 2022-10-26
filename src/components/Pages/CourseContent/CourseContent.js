import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaPrint, FaStar } from 'react-icons/fa';
import ReactToPdf from "react-to-pdf";
const ref = React.createRef();


const CourseContent = () => {

    // const { description, id, image, title } = course;
    // console.log(course)
    const course = useLoaderData()

    const { title, image, description, id, instructor, category, rating, details } = course;
    // console.log(course);
    const options = {
        orientation: 'portrait',
        unit: 'in',
        format: [22, 20]
    };


    return (
        <div >

            <div ref={ref} className='flex flex-col items-center justify-center'>
                <div className="container text-left" >
                    <ReactToPdf className="text-black" targetRef={ref} filename={`${title}.pdf`} options={options} x={0.5} y={0.5} scale={1}>
                        {({ toPdf }) => (
                            <button onClick={toPdf}><FaPrint /></button>
                        )}
                    </ReactToPdf>
                    <p className='text-6xl font-bold mb-5 text-center'>{title}</p>
                    <div className='px-40'><img className='w-full mb-10 rounded-lg' src={image} alt="" /></div>
                    <div className="badge border-0 bg-accent text-yellow-400"><FaStar /> &nbsp;{rating}</div>&nbsp;&nbsp;
                    <div className="badge badge-primary">{category}</div>&nbsp;&nbsp;
                    <div className="badge badge-primary">{instructor}</div>
                    <br />
                    <p className='text-xl mt-5 leading-loose dark:text-white text-black'>{description} <br /> <br /> {details}</p>
                    <br />
                    <Link to={`/checkout/${id}`} className="btn bg-primary text-white  border-0 dark:bg-primary">Get Premium Access</Link>
                </div>
            </div >
        </div>

    );
};

export default CourseContent;