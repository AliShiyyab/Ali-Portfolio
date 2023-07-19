import {Flex} from "@chakra-ui/react";
import React from "react";
import Navigation from "../components/Navigation";
import WishingMessage from "../components/wishing-message";
import Summary from "../components/summary";
import Experience from "../components/experience";
import Expertise from "../components/Expertise";

const HomePage = () => {
    return (
        <Flex w={'100%'} direction={'column'}>
            <Navigation />
            <WishingMessage />
            <Summary />
            <Experience />
            <Expertise/>
        </Flex>
    )
}

export default HomePage;