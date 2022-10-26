import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Course from '../Course/Course';

const RightSideNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/category-list')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (

        <div>
            <div className="category">
                <ul className="menu shadow-2xl bg-base-200 dark:bg-slate-800  w-56 p-2 rounded-box text-center">
                    <h4 className='text-xl font-bold mb-2'>Category</h4>

                    <div>
                        {
                            // categories.map(category => <p key={category.id}> <Link to={`/category/${category.id}`}>{category.name}</Link></p>)
                            categories.map(category => <li key={category.id}><NavLink to={`/category/${category.id}`}>{category.name}</NavLink></li>)
                        }

                    </div>

                </ul>
            </div>

        </div>
    );
};

export default RightSideNav;