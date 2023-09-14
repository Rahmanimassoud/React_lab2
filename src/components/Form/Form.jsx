
import { useState } from 'react';
import './form.css'



const Form = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // state variable to store submitted data
    const [submittedData, setSubmittedData] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault()

        // the assignment asked for all the console.log statements 
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);

        // store the submitted data in to a state variable so you can use it to display.
        setSubmittedData({
            firstName: firstName,
            lastName: lastName,
            email: email
        })
    };

    return(
        <>
            <h1><marquee>Submit your info</marquee></h1>

            <form className='form_main'  onSubmit={handleSubmit} action="">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" onChange={(e)=>{setFirstName(e.target.value)}}/>

                <label htmlFor="lastName">Last Name:</label>
                <input type="text" onChange={(e)=>{setLastName(e.target.value)}}/>

                <label htmlFor="email">Email:</label>
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}}/>

                <label htmlFor="password">Password:</label>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>

                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" onChange={(e)=>{setConfirmPassword(e.target.value)}} />

                <input id='btn' type="submit" />
            </form>

            <div>
                <h4>First Name: {submittedData.firstName}</h4>
                <h4>Last Name: {submittedData.lastName}</h4>
                <h4>Email: {submittedData.email}</h4>
            </div>
        </>

    )
};

export default Form;
