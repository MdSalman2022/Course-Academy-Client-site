import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext)

    const course = useLoaderData()

    let { title, image, price } = course;
    price = parseInt(price)
    const notify = () => toast.success('Ordered', {
        position: toast.POSITION.BOTTOM_RIGHT
    });

    return (
        <div className='h-screen grid grid-cols-1 lg:grid-cols-2 justify-items-center container mx-auto '>
            <div className='p-5 mb-5 lg:w-full w-96'>
                <p className='text-2xl font-bold text-left mb-5'>Check Out</p>
                <div className="">
                    <div className="form-control lg:w-full w-80 rounded-lg mb-5">
                        <p className='text-left font-bold '>Deliver to: {user?.displayName}</p>
                        <p className='text-left font-bold '>{user?.email}</p>
                    </div>
                    <p className='text-2xl text-left mb-5'>Payment Method</p>
                    <div className="form-control lg:w-full w-80 border rounded-lg p-2 mb-5">
                        <label className="label cursor-pointer">
                            <span className="label-text">Credit/Debit Card</span>
                            <input type="radio" name="radio-6" className="radio  checked:bg-primary" />
                        </label>
                    </div>
                    <div className="form-control lg:w-full w-80 border rounded-lg p-2">
                        <label className="label cursor-pointer ">
                            <span className="label-text">Bkash</span>
                            <input type="radio" name="radio-6" className="radio  checked:bg-primary" />
                        </label>
                    </div>
                </div>
                <br />
                <p className='text-2xl text-left mb-5'>Order</p>
                <div className="overflow-x-auto  my-5">
                    <table className="table w-full">
                        <div className='rounded-lg border'>
                            <tr className='hidden lg:block'>
                                <td><img className='lg:w-14 w-max' src={image} alt="" /></td>
                                <td className=''>{title}</td>
                                <td>Price: {price}</td>
                            </tr>
                            <div className="grid grid-cols-4 gap-3 p-2 items-center block lg:hidden">
                                <img className='object-cover' src={image} alt="" />
                                <div className='col-span-3'>
                                    <p>{title}</p>
                                    <p>Price: ৳ {price}</p>
                                </div>
                            </div>
                            {/* <p className='flex'><img src={image} alt="" /> {title} {price}</p> */}
                        </div>

                    </table>
                </div>

            </div>

            <div className="summary p-10 w-full">
                <div className="overflow-x-auto mb-5">
                    <table className="table w-full ">
                        <thead>
                            <tr>
                                <th className=' '>Summary</th>
                                <th className=' '></th>
                                <th className=' '></th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr>
                                <td className=' '>Original Price</td>
                                <td className=' '></td>
                                <td className=' '>৳ {price + 200}</td>
                            </tr>
                            <tr>
                                <td className=' '>Discounts</td>
                                <td className=' '></td>
                                <td className=' '>-৳ 200</td>
                            </tr>
                            <tr>
                                <td className=' '>Total: </td>
                                <td className=' '></td>
                                <td className=' '>৳ {price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Link onClick={notify} className="btn bg-primary text-white  border-0">Complete Checkout</Link>

                <ToastContainer />

            </div>
        </div>
    );
};

export default CheckOut;