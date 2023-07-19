import {Flex, Text, useColorModeValue, Image, Box, VStack} from "@chakra-ui/react";

const Summary = () => {
    return (
        <Flex bg={useColorModeValue('gray.200', 'gray.700')} gap={'30px'} direction={['column', 'column', 'row', 'row']}
              px={['6px', '38px', '56px', '96px']} py={['32px', '32px', '32px', '32px']}>
            <Flex direction={'column'} w={'100%'}>
                <Text w={'100%'} textAlign={'start'} fontWeight={'700'} fontSize={['20px', '25px', '25px', '32px']}
                      textColor={useColorModeValue('#2D2D82', '#CACAED')}>Summary</Text>

                <Box flex="1"
                     alignSelf="center"
                    // @ts-ignore
                     align="center"
                >
                    <Text w={'100%'} textAlign={'start'} fontWeight={'300'}
                          fontSize={['16px', '16px', '22px', '24px']}
                          textColor={useColorModeValue('#2D2D82', '#CACAED')}>With two years of experience in
                        software
                        engineering, I have honed my skills in utilizing the Flask Framework and cutting-edge
                        frontend
                        technologies such as NextJs, React, CMS, and GraphQl. I am proficient in crafting clean code
                        that adheres to high code standards, employing the MVC architecture pattern alongside
                        repository
                        and services.</Text>
                </Box>


            </Flex>
            <VStack
                border={'1px solid'}
                w={'1px'}
                maxHeight={'1000px'}
                borderColor={useColorModeValue("#2D2D82", "white")}
            />
            <Flex direction={'column'} w={'100%'}>
                <Text w={'100%'} textAlign={'start'} fontWeight={'700'} fontSize={['20px', '25px', '25px', '32px']}
                      textColor={useColorModeValue('#2D2D82', '#CACAED')}>Contact Info</Text>

                <Box flex="1"
                >
                    <Text w={'100%'} textAlign={'start'} fontWeight={'300'}
                          fontSize={['16px', '16px', '22px', '24px']}
                          textColor={useColorModeValue('#2D2D82', '#CACAED')}>
                        <b>Gmail:</b> <u>aliakefsh@gmail.com</u>
                    </Text>
                    <Text w={'100%'} textAlign={'start'} fontWeight={'300'}
                          fontSize={['16px', '16px', '22px', '24px']}
                          textColor={useColorModeValue('#2D2D82', '#CACAED')}>
                        <b>Phone Number:</b> <u>+962780704421</u>
                    </Text>
                    <Text w={'100%'} textAlign={'start'} fontWeight={'300'}
                          fontSize={['16px', '16px', '22px', '24px']}
                          textColor={useColorModeValue('#2D2D82', '#CACAED')}>
                        <b>Adress:</b> <u>Amman, Jordan</u>
                    </Text>
                    <Text w={'100%'} textAlign={'start'} fontWeight={'300'}
                          fontSize={['16px', '16px', '22px', '24px']}
                          textColor={useColorModeValue('#2D2D82', '#CACAED')}>
                        <b>Date of birth:</b> <u>22-Feb-1998</u>
                    </Text>
                </Box>
            </Flex>
        </Flex>
    );
}

export default Summary;