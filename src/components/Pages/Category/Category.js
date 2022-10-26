import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
// import CourseList from '../CourseList/CourseList';

const Category = () => {

    const categoryList = useLoaderData()

    return (
        <div>
            <h1>Category name: {categoryList.length}</h1>
            {
                categoryList.map(course => <CourseCard
                    key={course.id}
                    course={course}
                ></CourseCard>)
            }

        </div>
    );
};

export default Category;