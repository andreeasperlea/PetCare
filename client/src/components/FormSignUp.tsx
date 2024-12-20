import React, { useState } from 'react';
import UseForm from './UseForm';
import { Button } from './Button';
import ValidateForm from './ValidateForm'
import "./Form.css"

const FormSignUp = () => {
    const [role, setRole] = useState('');
    const { handleChange, values , handleSubmit, errors} = UseForm();

    const handleRoleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setRole(event.target.value);
    };

    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Create your account by filling out the information below.</h1>
                <div className='form-inputs'>
                    <label className='form-label'>Are you a:</label>
                    <div className='form-radio'>
                        <input
                            type='radio'
                            id='doctor'
                            name='role'
                            value='Doctor'
                            checked={role === 'Doctor'}
                            onChange={handleRoleChange}
                        />
                        <label htmlFor='doctor' className='doctorLabel'>Doctor</label>

                        <input
                            type='radio'
                            id='pet-owner'
                            name='role'
                            value='Pet Owner'
                            checked={role === 'Pet Owner'}
                            onChange={handleRoleChange}
                        />
                        <label htmlFor='pet-owner'>Pet Owner</label>
                    </div>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='username' className='form-label'>First Name</label>
                    <input
                        id='username'
                        type='text'
                        name='username'
                        placeholder='First Name'
                        className='form-input'
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>(errrors.username</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='username2' className='form-label'>Last Name</label>
                    <input
                        type='text'
                        id='username2'
                        name='username2'
                        placeholder='Last Name'
                        className='form-input'
                        value={values.username2}
                        onChange={handleChange}
                    />
                    {errors.username2 && <p>(errrors.username2</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        placeholder='Email'
                        className='form-input'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>(errrors.email</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='phone-number' className='form-label'>Phone Number</label>
                    <input
                        type='text'
                        id='phone-number'
                        name='phoneNumber'
                        placeholder='Phone Number'
                        className='form-input'
                        value={values.phoneNumber}
                        onChange={handleChange}
                    />
                    {errors.phoneNumber && <p>(errrors.phoneNumber</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password' className='form-label'>Password</label>
                    <input
                        type='text'
                        id='password'
                        name='password'
                        placeholder='Password'
                        className='form-input'
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>(errrors.password</p>}
                </div>
                <Button buttonStyle='btn--outline' type='submit'>
                    Sign Up
                </Button>
                <span className='form-input-login'>
                    Already have an account? Login<a href='./pages/Login'> here</a>
                </span>
            </form>
        </div>
    );
};

export default FormSignUp;
