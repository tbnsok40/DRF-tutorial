import React, {useState} from 'react';
import axios from "axios";

const InputPlace = () => {
    const [inputs, setInputs] = useState({
        user_id: '', password: '', address: ''
    });

    const {user_id, password, address} = inputs;

    const onChange = (e) => {
        const {value, name} = e.target;
        console.log(value, name);
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onClick = () => {
        console.log(inputs)
        axios.post("http://localhost:8000/users/", {
            user_id: user_id,
            password: password,
            address: address
        }).then(r => console.log(r));
    }

     return (
        <div>
            <input value={user_id} name="user_id" type="text" placeholder="user_id" onChange={onChange}/> <br/>
            <input value={password} name="password" type="text" placeholder="password" onChange={onChange}/><br/>
            <input value={address} name="address" type="text" placeholder="address" onChange={onChange}/><br/>
            <input type="submit" value="제출" onClick={onClick}/>
        </div>);
}

export default InputPlace;