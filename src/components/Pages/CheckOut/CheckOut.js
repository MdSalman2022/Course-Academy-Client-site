import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {

    const course = useLoaderData()

    let { title, image, description, id, price } = course;
    price = parseInt(price)
    console.log(price)
    const notify = () => toast.success('Ordered', {
        position: toast.POSITION.BOTTOM_RIGHT
    });

    return (
        <div className='h-screen grid grid-cols-2 justify-items-center dark:text-white container mx-auto'>
            <div className='p-5 mb-5 w-full'>
                <p className='text-2xl font-bold text-left mb-5'>Check Out</p>
                <div className="">
                    <p className='text-2xl text-left mb-5'>Payment Method</p>
                    <div className="form-control w-full border rounded-lg p-2 mb-5">
                        <label className="label cursor-pointer">
                            <span className="label-text dark:text-white">Credit/Debit Card</span>
                            <input type="radio" name="radio-6" className="radio dark:border-white checked:bg-primary" />
                        </label>
                    </div>
                    <div className="form-control w-full border rounded-lg p-2">
                        <label className="label cursor-pointer ">
                            <span className="label-text dark:text-white">Bkash</span>
                            <input type="radio" name="radio-6" className="radio  dark:border-white checked:bg-primary" />
                        </label>
                    </div>
                </div>
                <div className="overflow-x-auto  my-5">
                    <p className='text-2xl text-left mb-5'>Order</p>
                    <table className="table w-full">
                        <div className='rounded-lg border'>
                            <tr className=''>
                                <td><img className='w-14' src={image} alt="" /></td>
                                <td>{title}</td>
                                <td>Price: {price}</td>
                            </tr>
                        </div>

                    </table>
                </div>

            </div>

            <div className="summary p-10 w-full">
                <div className="overflow-x-auto mb-5">
                    <table className="table w-full ">
                        <thead>
                            <tr>
                                <th className='dark:bg-slate-800'>Summary</th>
                                <th className='dark:bg-slate-800'></th>
                                <th className='dark:bg-slate-800'></th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr>
                                <td className='dark:bg-slate-800'>Original Price</td>
                                <td className='dark:bg-slate-800'></td>
                                <td className='dark:bg-slate-800'>৳ {price + 200}</td>
                            </tr>
                            <tr>
                                <td className='dark:bg-slate-800'>Discounts</td>
                                <td className='dark:bg-slate-800'></td>
                                <td className='dark:bg-slate-800'>-৳ 200</td>
                            </tr>
                            <tr>
                                <td className='dark:bg-slate-800'>Total: </td>
                                <td className='dark:bg-slate-800'></td>
                                <td className='dark:bg-slate-800'>৳ {price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Link onClick={notify} className="btn bg-primary text-white  border-0 dark:bg-slate-800">Complete Checkout</Link>

                <ToastContainer />

            </div>
        </div>
    );
};

export default CheckOut;