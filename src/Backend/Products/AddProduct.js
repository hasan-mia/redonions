import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import JoditEditor from 'jodit-react'
import useCategories from '../../Hooks/useCategories';
// import uuid from 'uuid/v4';
import { v4 as uuidv4 } from 'uuid';

const config = {
  buttons: ['bold', 'italic', 'link', 'unlink', 'underline', 'source']
}

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const { v5: uuidv5 } = require('uuid');
  const{categories}=useCategories();

  // =========Text Editor=======
  const initialValue = "Description"
  const editor = useRef(null);
  // Short Description
	const [shortdesc, setShortDesc] = useState("");
  const getShortDesc = (shortdesc) => {setShortDesc(shortdesc);};

  // Description
	const [description, setDescription] = useState("");
  const getDescription = (description) => {setDescription(description);};

  // =============React Hok Forms=======
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const imageBBKey='91ffb587f5e2033431bd88e856e0dde6';

  const onSubmit = async data => {
        const image = data.image[0];
        console.log(data);
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageBBKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const product = {
                    id: uuidv4(),
                    title: data.title,
                    shortdesc: shortdesc,
                    description: description,
                    img: img,
                    category: data.category,
                    price: data.price,
                    quantity: data.quantity
                }
  
                // Send to your database 
                fetch('http://localhost:5000/product', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `${user?.email} ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('Post successfully')
                        reset();
                    }
                    else{
                        toast.error('Failed to add Post');
                    }
                })

            }
            
        })
    }

	return (
    <section>
			<div className='grid grid-flow-col'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-1'>
            <div className="p-2">
              <label htmlFor="title" className='text-xl uppercase'>Title</label>
              <input type="text" placeholder='Add Title' className='w-full mt-2 p-2 border'
                {...register("title")}
              required/>
            </div>

            <div className='grid lg:flex lg:flex-nowrap'>
               
              <div className='p-2 w-12/12 lg:w-6/12 h-full'>
                <label htmlFor="shortdesc" className='text-xl uppercase'>Short Desciption</label>
                <JoditEditor
                  ref={editor}
                  placeholder={initialValue}
                  config={config}
                  tabIndex={1}
                  onChange={(newContent) => getShortDesc(newContent)}
                /> 
              </div>

              <div className='p-2 w-12/12 lg:w-6/12 h-full'>
                <label htmlFor="description" className='text-xl uppercase'>Desciption</label>
                <JoditEditor
                  ref={editor}
                  placeholder={initialValue}
                  config={config}
                  tabIndex={1}
                  onChange={(newContent) => getDescription(newContent)}
                /> 
              </div>
            </div>

            <div className='grid grid-cols-2 gap-2'>
               <div class="grid">
                <label htmlFor="image" className='text-lg uppercase'>Image</label>
                <input type="file" placeholder='image' className='w-full mt-2 p-2 border'
                  {...register("image")}
                required/>
               </div>

                {/* ===Select Category== */}
                <div class="grid">
                  <label htmlFor="category" className='text-lg uppercase'>Category</label>
                    <select {...register('category')} class="form-select form-select-lg appearance-none block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-lg example">
                      <option selected>Select Category</option>
                      {
                          categories.map(category => <option
                              key={category._id}
                              value={category.title}
                          >{category.title}</option>)
                      }
                    </select>
                </div>
            </div>  
            <div className='grid grid-cols-2 gap-2'>
                <div class="grid">
                  <label htmlFor="price" className='text-lg uppercase'>Price</label>
                  <input type="text" placeholder='price' className='w-full mt-2 p-2 border'
                    {...register("price")}
                  required/>
              </div>
                  
                <div class="grid">
                <label htmlFor="quantity" className='text-lg uppercase'>Quantity</label>
                <input type="number" placeholder='quantity' className='w-full mt-2 p-2 border'
                  {...register("quantity")}
                required/>
              </div>
            </div>

          </div>
          <button className='btn w-full max-w-x mt-6 bg-green-500 p-1.5 uppercase rounded-md text-2xl text-white font-semibold' type="submit">Add Product</button>
        </form>
      </div>
    </section>
	);
};

export default AddProduct;