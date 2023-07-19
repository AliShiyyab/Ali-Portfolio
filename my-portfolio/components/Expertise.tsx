import {Box, Flex, Grid, GridItem, useColorModeValue, Text} from "@chakra-ui/react";

const Expertise = () => {

    const listOfExpertise = ["Data Structure", "Algorithme",
        "Agile Software Development", "Python Flask Framework", "Java Spring Boot",
        "MariaDB", "MySql", "PGSql", "MongoDb", "react.Js", "Next.Js",
        "Backbone.Js", "Strapi CMS", "GraphQl", "React Native", "Git", "Jira",
        "Backbone.Js", "Github", "S3"]

    return (
        <Flex bg={useColorModeValue('gray.200', 'gray.700')} w={'100%'} direction={'column'}
              px={['6px', '38px', '56px', '96px']}
              py={['32px', '32px', '32px', '32px']} gap={'10px'}>
            <Text w={'100%'} textAlign={'start'} fontWeight={'700'} fontSize={['20px', '25px', '25px', '32px']}
                  textColor={useColorModeValue('#2D2D82', '#CACAED')}>Expertise</Text>
            <Grid
                templateColumns={[
                    "repeat(4, 1fr)",
                    "repeat(5, 1fr)",
                    "repeat(5, 1fr)",
                ]}
                w={["100%", "100%", "90%", "90%", "90%"]}
                gap={["4px", "8px", "12px", 4, 4, 4]}
            >
                {listOfExpertise && listOfExpertise.length > 0 &&
                    listOfExpertise.map((val: string) => (
                        <GridItem colSpan={1} w={"100%"}>
                            <Box p={'8px'} border={'1px solid'} borderColor={'#A8A8E1'} borderRadius={"8px"}>
                                <Text p={'2px'} textAlign={'center'} fontWeight={'300'}
                                      fontSize={['16px', '16px', '18px', '18px']}
                                      textColor={useColorModeValue('#2D2D82', '#CACAED')}>
                                    {val}
                                </Text>
                            </Box>
                        </GridItem>
                    ))}
            </Grid>
        </Flex>
    );
}
export default Expertise;
