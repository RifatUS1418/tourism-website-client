import React from 'react';
import { useForm } from 'react-hook-form';
import './AddServices.css';

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)

        fetch('https://bloodcurdling-castle-90813.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })

    };
    return (
        <div className="form-container mt-5 mb-5">
            <div className="entire-div">
                <form onSubmit={handleSubmit(onSubmit)} className="add-form">
                    <h3>Add New Services</h3>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <input type="number" {...register("price")} placeholder="Price" />
                    <input {...register("img")} placeholder="Image url" />
                    <input {...register("key")} placeholder="Key" />
                    <textarea {...register("short_description")} placeholder="Short Description" />
                    <textarea {...register("description")} placeholder="Description" />
                    <input type="submit" value="Add Service" className="btn btn-success button" />
                </form>
            </div>
        </div>
    );
};

export default AddServices;