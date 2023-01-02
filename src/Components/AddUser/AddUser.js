import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    // const mobileRef = useRef()
    const handleAddUser = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        // const mobile = mobileRef.current.value;
        const newUser = { name: name, email: email }

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('User Added Successfully')
                    e.target.reset()
                }
            })
        e.preventDefault()

    }
    return (
        <div>
            <h2>Please add an user</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" ref={nameRef} placeholder='Enter Your Name' /><br />
                <input type="email" name="" id="" ref={emailRef} placeholder='Enter Your Email' /><br />
                {/* <input type="number" name="" id="" ref={mobileRef} placeholder='Enter Your Mobile Number' /><br /> */}
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddUser;