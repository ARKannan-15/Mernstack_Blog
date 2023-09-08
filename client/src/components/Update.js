import React ,{useEffect,useState} from 'react';
import Header from './Header';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Senddata } from './Post';
function Update()
{
      
    const{
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    //getting the data from the forms
    function onSubmit(data){
        const path = "http://localhost:3001/update";
        Senddata(data,path);
        reset();
    }

    return(
        <div class='box0 box1'>
                <Header />
                <form onSubmit={handleSubmit(onSubmit)} class = "registerform">
                    <h1 class="d">Update</h1><br></br>
                    <div class="form-floating">
                        <input 
                            type="title" 
                            class="form-control" 
                            id="floatingInput"  
                            placeholder="Title" 
                            name="title" 
                            autoComplete='off'
                            {...register("title",{required: true})}
                        />
                        
                    </div>
                    <div class="form-floating">
                        <textarea
                            type="content" 
                            class="form-control" 
                            id="floatingpost" 
                            placeholder="content" 
                            name="content" 
                            autoComplete='off'
                            {...register("content",{required: true})}
                        />
                        
                    </div>
                    <button class="w-100 btn btn-lg btn-outline-light" type="submit">Update</button>
                </form>
                
        </div>
    );
}

export default Update;