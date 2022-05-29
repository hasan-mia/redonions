import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const AddCategory = () => {
  const [user] = useAuthState(auth)
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  let html = '';
  const imageBBKey='91ffb587f5e2033431bd88e856e0dde6';

  const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageBBKey}`;
        fetch(url, {
            method: 'PUT',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const category = {
                    title: data.title,
                    description: data.description,
                    img: img
                }
  
                // Send to your database 
                fetch('http://localhost:5000/category', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `${user?.email} ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(category)
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
              <label htmlFor="title" className='text-xl uppercase'>Add Title</label>
              <input type="text" className='w-full mt-2 p-2 border'
                {...register("title")}
              required/>
            </div>
            <div className='flex flex-nowrap'>
              <div className='p-2 w-12/12 lg:w-8/12 h-full'>
                <label htmlFor="description" className='text-xl uppercase'>Desciption</label>
                <textarea type="text" className="border w-full mt-2 p-2 h-full" placeholder="Description"
                  {...register("description")}
                required/>
                {/* <Editor bind:html={html} /> */}
              </div>

              <div className='p-2 w-12/12 lg:w-4/12'>
                <label htmlFor="image" className='text-lg uppercase'>Image</label>
                <input type="file" className='w-full mt-2 p-2 border'
                  {...register("image")}
                required/>

              </div>

            </div>
          </div>
          <button className='btn w-full max-w-x mt-12 bg-green-500 p-1.5 uppercase rounded-md text-2xl text-white font-semibold' type="submit">Add Category</button>
        </form>
      </div>
    </section>
	);
};

export default AddCategory;