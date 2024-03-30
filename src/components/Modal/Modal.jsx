import React, { useState } from 'react';

export default function Modal() {
    const [display, setDisplay] = useState("none");
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        dob: "",
    });

    const validate = () => {
        const today = new Date();
        if (formData.phone.length < 10 || !formData.phone) {
            alert("Invalid phone number. Please enter a 10-digit phone number.");
            return false;
        }
        else if (!formData.username || !formData.email) {
            return false;
        }
        else if (new Date(formData.dob) > today || !formData.dob) {
            alert("Invalid Date of Birth. Date of birth cannot be in the future.");
            return false;
        }
        return true;
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (validate()) {
            setDisplay("none")
            setFormData({
                username: "",
                email: "",
                phone: "",
                dob: "",
            });
            e.target.reset();
        }
    }

    return (
        <div className='wrapper'>
            <h1>User Details Modal</h1>
            <button onClick={() => setDisplay("block")} className='btn-open-form'>Open Form</button>
            <div style={{display: `${display}`}} onClick={(e) => e.target.className === "modal" && setDisplay("none")} className={`modal`}>
                <div className='modal-content'>
                    <h2>Fill Details</h2>
                    <form onSubmit={submitHandler} className='modal-form'>
                        <label for="username">Username:</label>
                        <input onChange={(e) => setFormData((prev) => ({...prev, username: e.target.value}))} type="text" id="username" required />
                        <label for="email">Email Address:</label>
                        <input onChange={(e) => setFormData((prev) => ({...prev, email: e.target.value}))} type="email" id="email" required />
                        <label for="phone">Phone Number: </label>
                        <input onChange={(e) => setFormData((prev) => ({...prev, phone: e.target.value}))} type="number" id="phone" required />
                        <label for="dob">Date of Birth:</label>
                        <input onChange={(e) => setFormData((prev) => ({...prev, dob: e.target.value}))} type="date" id="dob" required />
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}