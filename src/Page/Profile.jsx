import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Profile = () => {
    const name = localStorage.getItem("name")
    const email = localStorage.getItem("email")
    const time = localStorage.getItem("time")
    const navigate=useNavigate()
    const handleLogout = () => {
        localStorage.clear()
        setTimeout(()=>{

            navigate("/login")
        },1000)
    }
    return (
        <>
            <Box width={"80%"} margin="auto" padding={"20px"}>

                <Flex justify={"space-between"}>
                    <Text>Name: {name}</Text>
                    <Text>Email: {email}</Text>
                    <Text>Login Time: {time}</Text>
                </Flex>

                <Box textAlign={"center"} mt="50px">

                    <Button onClick={handleLogout}>Logout</Button>
                </Box>
            </Box>
        </>
    )
}

export default Profile