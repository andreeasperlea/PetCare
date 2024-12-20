import { useState } from 'react';
import validateInfo from './ValidateForm';

const UseForm = () => {
    const [values, setValues] = useState({
        username: '',
        username2: '',
        email: '',
        phoneNumber: '',
        password: '',
        role: ''
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const validationErrors = validateInfo(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted successfully', values);
        } else {
            console.log('Validation errors', validationErrors);
        }
    };

    return { handleChange, values, handleSubmit, errors };
};

export default UseForm;
