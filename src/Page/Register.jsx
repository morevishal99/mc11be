import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setemail] = useState("");
    const [name, setname] = useState("");
    const [password, setpass] = useState("");
    const url = "http://localhost:8080/user/register"
    const navigate = useNavigate()

    const handleRegister = async () => {
        if (name && email && password) {

            const payload = {
                email, name, password
            }
            console.log(payload)
            let res = await fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(payload)
            })
            let data = await res.json()
            // console.log('data: ', data.msg);
            if (data) {
                alert(data.msg)
                navigate("/login")
            } else {
                // alert("Registration Done")
                navigate("/login")
            }
        
        } else {
            alert("Empty feilds")
        }

    }
    return (
        <Box width="40%" margin="auto">
            <Input placeholder='Enter Name' type="text" onChange={(e) => setname(e.target.value)} />
            <Input placeholder='Enter Email' type="email" onChange={(e) => setemail(e.target.value)} />
            <Input placeholder='Enter PassWord' type="password" onChange={(e) => setpass(e.target.value)} />

            <Button onClick={handleRegister}>Register</Button>
        </Box>
    )
}

export default Register