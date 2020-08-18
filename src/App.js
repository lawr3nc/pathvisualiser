import React from 'react';
import { Box } from "@chakra-ui/core";
import { Visualiser } from './visualiser';

export function App(){
    return <Box width="100vw" minHeight={"100vh"} bg="gray.100">
        <Visualiser/>
    </Box>
}