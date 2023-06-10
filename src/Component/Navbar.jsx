import { Box, Flex, } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Flex justifyContent={"space-between"} width="60%" margin={"auto"} padding="10px">
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/emi_calculator">Emi_Calculator</Link>
        </Flex>
    )
}

export default Navbar