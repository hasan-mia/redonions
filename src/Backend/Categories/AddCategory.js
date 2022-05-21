import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const AddCategory = () => {
  const [user] = useAuthState(auth)
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const imageBBKey='91ffb587f5e2033431bd88e856e0dde6';

  const onSubmit = async data => {
        const image = data.image[0];
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
                const category = {
                    title: data.title,
                    description: data.description,
                    img: img
                }
                console.log(category);
                // send to your database 
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
                        toast.success('Doctor added successfully')
                        reset();
                    }
                    else{
                        toast.error('Failed to add the doctor');
                    }
                })

            }
            
        })
    }

	return (
			<div className='grid grid-flow-col'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='border'>
            <div className="px-2">
              <label htmlFor="title" className='text-2xl'>Add Title</label>
              <input type="text" className='w-full p-2 border'
                {...register("title", {
                  required: {
                      value: true,
                      message: 'Name is Required'
                  }
                })}
              />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <div className='p-2'>
                <label htmlFor="description" className='text-2xl'>Desciption</label>
                <textarea type="text" cols={80} rows={3} className="border p-2" placeholder="Description"
                  {...register("description", {
                    required: {
                      value: true,
                      message: 'Image is Required'
                    }
                  })}
                />
              </div>

              <div className='p-2'>
                <label htmlFor="image" className='text-2xl'>Image</label>
                <input type="file" className='w-full p-2 border'
                  {...register("image", {
                    required: {
                      value: true,
                      message: 'Image is Required'
                    }
                  })}
                />

              </div>

            </div>
          </div>
          <button className='btn w-full max-w-x' type="submit">Add </button>
        </form>
      </div>
	);
};

export default AddCategory;