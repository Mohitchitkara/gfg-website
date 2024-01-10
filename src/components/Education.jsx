import {Box,Image,Heading,Container, Stack,Text, VStack} from "@chakra-ui/react";
import React from "react";
import { HStack } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, CardHeader, CardBody, CardFooter,StackDivider,Divider,ButtonGroup,Button } from '@chakra-ui/react'

import img1 from "../assests/1.jpg";
import img2 from "../assests/2.jpg";
import img3 from "../assests/3.jpg";
import img4 from "../assests/4.jpg";
// import img5 from "../assests/5.png";
import img_soil from "../assests/soil.jpeg"

const headingOptions={
    pos:"absolute",
    left:'50%',
    top:'50%',
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:'4',
    size:'4xl',

}

const Education=() =>{
    return <Box>
       <MyCarousel />

       <Container minH={'100vh'} maxW={"container.xl"} p="16">
        <Heading
         textTransform={"uppercase"}
         py="2"
         w={"fit-content"}
         borderBottom={"2px solid"}
         m={"auto"}
         >
            Courses for farming
        </Heading>

        <Stack>

        <VStack py={20}>

<HStack py={5}>
<MyCard1/ >
<MyCard2/>
<MyCard3/>
</HStack>

<HStack py={5}>
<MyCard1/>
<MyCard2/>
<MyCard3/>
</HStack>


</VStack>
        </Stack>

       




        
       </Container>

    </Box>

};

const MyCarousel = ()=>{
return(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>

    <Box w={'full'} h={'100vh'} >
        <Image src={img1} />
        <Heading bgColor={'blackAlpha.600'} color={'white'}  {...headingOptions}>
            Watch the future.
        </Heading>

    </Box>

    <Box w={'full'} h={'100vh'}>
        <Image src={img2} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
            Gaming is the future.
        </Heading>

    </Box>

    <Box w={'full'} h={'100vh'} >
        <Image src={img3} />
        <Heading bgColor={'blackAlpha.600'} color={'white'}  {...headingOptions}>
            Game for fun.
        </Heading>

    </Box>

    <Box w={'full'} h={'100vh'}>
        <Image src={img4} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
            Night life is cool.
        </Heading>

    </Box>
</Carousel>
);
}

const MyCard1=()=>{
    return(
        <Card maxW='sm'>
        <CardBody>
          <Image
            src={img_soil}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Types of Soil</Heading>
            <Text>
              This is the course about soil and which crop should we sown in which soil.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, asperiores eaque ducimus deserunt nobis accusantium!
              Lorem ipsum dolor sit.
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Wish to learn later
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    );
}
const MyCard2=()=>{
    return(
        <Card maxW='sm'>
        <CardBody>
          <Image
            src={img_soil}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Types of Soil</Heading>
            <Text>
              This is the course about soil and which crop should we sown in which soil.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, asperiores eaque ducimus deserunt nobis accusantium!
              Lorem ipsum dolor sit.
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Wish to learn later
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    );
}
const MyCard3=()=>{
    return(
        <Card maxW='sm'>
        <CardBody>
          <Image
            src={img_soil}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Types of Soil</Heading>
            <Text>
              This is the course about soil and which crop should we sown in which soil.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, asperiores eaque ducimus deserunt nobis accusantium!
              Lorem ipsum dolor sit.
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Wish to learn later
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    );
}




export default Education;


