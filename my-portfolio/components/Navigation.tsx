import React from 'react';
import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    Text
} from '@chakra-ui/react';
import {MoonIcon, SunIcon} from '@chakra-ui/icons';

const Navigation = () => {
    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <>
            <Box bg={useColorModeValue('gray.200', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <Text fontSize={"18px"} color={colorMode === 'light' ? "#2D2D82" : "#CACAED"} fontWeight={'bold'}>
                            Ali's Portfolio
                        </Text>
                    </Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={4}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
                            </Button>
                            <Button onClick={() => window.open("https://github.com/AliShiyyab", "_blank")}>
                                <svg viewBox="0 0 20 20" style={{width: 20}} className="chakra-icon css-1pqhvv7">
                                    <path fill="currentColor"
                                          d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"/>
                                </svg>
                            </Button>
                            <Button
                                onClick={() => window.open("https://www.linkedin.com/in/ali-shiyyab-0a415a20b", "_blank")}>
                                <svg style={{width: 20}} fill="currentColor"
                                     viewBox="0 0 450 450"
                                     focusable="false" className="chakra-icon css-9t64xk"
                                >
                                    <path fill="currentColor"
                                          d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"/>
                                </svg>
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default Navigation;