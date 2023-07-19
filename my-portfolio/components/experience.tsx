import {Flex, Text, useColorModeValue} from "@chakra-ui/react";

const Experience = () => {
    return (
        <Flex bg={useColorModeValue('gray.100', 'gray.700')} w={'100%'} direction={'column'}
              px={['6px', '38px', '56px', '96px']}
              py={['32px', '32px', '32px', '32px']}>
            <Flex direction={'column'} w={'70%'}>
                <Text w={'100%'} textAlign={'start'} fontWeight={'700'} fontSize={['20px', '25px', '25px', '32px']}
                      textColor={useColorModeValue('#2D2D82', '#CACAED')}>Experience</Text>

                <Flex direction={'column'}
                      flex="1"
                      gap={"8px"}
                >
                    <Text w={'100%'} textAlign={'start'} fontWeight={'300'}
                          fontSize={['16px', '16px', '18px', '18px']}
                          textColor={useColorModeValue('#2D2D82', '#CACAED')}>
                        Jan/2022 - Present
                    </Text>
                    <Text w={'100%'} textAlign={'start'} fontWeight={'300'}
                          fontSize={['16px', '16px', '18px', '18px']}
                          textColor={useColorModeValue('#2D2D82', '#CACAED')}>
                        Liwwa, Inc | Prince Mohammad Street</Text>
                    <Text w={'100%'} textAlign={'start'} fontWeight={'300'}
                          fontSize={['16px', '16px', '18px', '18px']}
                          textColor={useColorModeValue('#2D2D82', '#CACAED')}>
                        Intermediate Software Engineering</Text><Text w={'100%'} textAlign={'start'} fontWeight={'300'}
                                                                      fontSize={['16px', '16px', '18px', '18px']}
                                                                      textColor={useColorModeValue('#2D2D82', '#CACAED')}>
                    At Liwwa, Inc, I served as a Software Engineer at the intermediate level. During my tenure, I
                    had the opportunity to leverage my expertise in utilizing the Flask Python framework for backend
                    development. Additionally, I extensively worked with cutting-edge frontend technologies,
                    including CMS, Apollo GraphQL, NextJs, and ReactJs. This experience allowed me to contribute to
                    the development and implementation of innovative solutions within the company's software
                    ecosystem</Text>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Experience;