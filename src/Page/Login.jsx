import { Box, Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setemail] = useState("");

    const [password, setpass] = useState("");
    const url = "http://localhost:8080/user/login"
    const navigate = useNavigate()

    const handleLogin = async () => {
        if (email && password) {

            const payload = {
                email, password
            }
            // console.log(payload)
            let res = await fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(payload)
            })
            let data = await res.json()
            // console.log('data: ', data.token);
            // console.log('data: ', data.name);
            if (data.token) {
                // let date = new Date()

                localStorage.setItem("name", data.name)
                localStorage.setItem("token", data.token)
                localStorage.setItem("email", data.email)
                localStorage.setItem("time",  Date())
                navigate("/profile")
            }

            // if(data.token)


        } else {
            alert("Empty feilds")
        }

    }
    return (
        <Box width="40%" margin="auto">
            <Input placeholder='Enter Email' type="email" onChange={(e) => setemail(e.target.value)} />
            <Input placeholder='Enter PassWord' type="password" onChange={(e) => setpass(e.target.value)} />

            <Button onClick={handleLogin}>Login</Button>
        </Box>
    )
}

export default Login