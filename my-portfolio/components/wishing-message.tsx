import {Box, Flex, Text, useColorModeValue} from "@chakra-ui/react";

const WishingMessage = () => {

    return (
        <Flex w={'100%'} direction={'column'} bg={useColorModeValue('gray.100', 'gray.700')} py={['32px','72px','72px','96px']}>
            <Box flex="1"
                 alignSelf="center"
                // @ts-ignore
                 align="center"
            >
                <Text w={'100%'} textAlign={'center'} fontWeight={'bold'} fontSize={['26px', '32px', '32px', '50px']}
                      textColor={useColorModeValue('#2D2D82', '#CACAED')}>Hi, my name is Ali Shiyyab</Text>
                <Text w={'100%'} textAlign={'center'} fontWeight={'500'} fontSize={['20px', '26px', '26px', '40px']}
                      textColor={useColorModeValue('#2D2D82', '#CACAED')}>I'm Software Engineer.</Text>
            </Box>
        </Flex>
    );
}

export default WishingMessage;