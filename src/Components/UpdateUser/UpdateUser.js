import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    const handleUpdateUser = (e) => {
        const proceed = window.confirm('Are you sure data will be updated?')
        if (proceed) {
            const url = `http://localhost:5000/users/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            }).then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Successfully Updated')
                    }
                })
        }
        e.preventDefault()
    }
    const handleNameChanged = e => {
        const updateName = e.target.value;
        const updateUser = { name: updateName, email: user.email }
        setUser(updateUser)
    }
    const handleEmailChanged = e => {
        const updateEmail = e.target.value;
        const updateUser = { name: user.name, email: updateEmail }
        setUser(updateUser);
    }
    return (
        <div>
            <h2>This is Updated User</h2>
            <p>{user.name}</p>
            <form onSubmit={handleUpdateUser}>
                <input type="text" onChange={handleNameChanged} value={user.name || ''} />
                <input type="email" onChange={handleEmailChanged} value={user.email || ''} />
                {/* <input type="number" name="" id="" ref={mobileRef} placeholder='Enter Your Mobile Number' /><br /> */}
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;