import { Button, Container, Heading, Input, VStack ,Text} from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
    <form>

        <VStack alignItems={'stretch'} spacing={'8'} w={["full","96"]} m={"auto"} my={"16"}>
            <Heading>Video Hub</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'} />

            <Input placeholder={'enter name'} type={'text'} required focusBorderColor={'purple.500'}/>

            <Input placeholder={'enter email'} type={'email'} required focusBorderColor={'purple.500'}/>

            <Input placeholder={'password'} type={'password'} required focusBorderColor={'purple.500'}/>

            <Button colorScheme={'purple'} type={'submit'}>Sign Up</Button>

            <Text textAlign={'right'} >Already Signed Up?{' '}
            <Button variant={'link'} alignSelf={'flex-end'}>
                <Link to={'/login'} >Log In</Link>
            </Button>
            </Text>


        </VStack>



    </form>


</Container>
  )
}

export default Signup;
