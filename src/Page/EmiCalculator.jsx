import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import react, { useState } from 'react'

const EmiCalculator = () => {
    const [intrest, setintrest] = useState("");
    const [loanamount, setloanamount] = useState("");
    const [tenure, settenure] = useState("");

    // - where E is EMI,

    // - P is Principal Loan Amount
    // - r is monthly rate of interest (For eg. If rate of interest is 14% per annum, then r = 14/12/100=0.011667)
    // - n is loan duration in number of months.
    // - For example, if you borow ₹1,00,000 from the bank at 14% annual interest for a period of 3 years (i.e., 36 months), then
    // EMi*36
    // EMI = ₹1,00,000 * 0.011667* (1 + 0.011667)36 / ((1 + 0.011667)36 - 1) = ₹3418.
    // EMI:  P x r x(1 + r)*n / ((1 + r)*n - 1 )

    let P = loanamount
    let R = intrest / 12 / 100
    let N = tenure

    let r = 1 + R*36
    console.log('r: ', r);
    // let EMI = P * R *r/ r - 1
   let EMI= P * r *(1 + r)*N / ((1 + r)*N - 1 )
    console.log('EMI: ', EMI);
    let total=EMI*N



    return (
        <>
            <Flex width="80%" margin="auto" gap="30px" >
                <Box width="30%" margin={"auto"} mt="20px" textAlign={"center"}>
                    <Input type="number" placeholder='Loan Amount' onChange={(e) => setloanamount(e.target.value)} />
                    <Input type="number" placeholder='Intrest rate' onChange={(e) => setintrest(e.target.value)} />
                    <Input type="number" placeholder='Tenure' onChange={(e) => settenure(e.target.value)} />
                    <Button mt={"10px"}>Submit</Button>
                </Box>

                <Box width="50%" margin={"auto"} mt="20px" textAlign={"center"}>
                    <Text>Emi:</Text>
                    <Text>Intrest Payable: </Text>
                    <Text> Total Payable: </Text>
                </Box>
            </Flex>
        </>
    )
}

export default EmiCalculator