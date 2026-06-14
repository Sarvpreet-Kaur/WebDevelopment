import React, {useState} from 'react';
const ReactForm = ()=>{
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({})


    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
    };

    const validate = () =>{ 
        let tempErrors = {};

        if(!formData.name) tempErrors.name = "Name required!!"
        
    }
}