import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {

    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();


    // const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleNameBlur = event => {
        setName(event.target.value);
    }
   

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handelCreateUser = event => {
        event.preventDefault();

    }

    const handlePhoneBlur = event => {
        setPhone(event.target.value);
        const shipping = {name , email , address , phone};
        console.log(shipping);
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping information</h2>

                <form onSubmit={handelCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="text" name="phone" id="" required />
                    </div>


                    <p style={{ color: 'red' }}>{error}</p>

                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>

            </div>
        </div>
    );
};

export default Shipment;