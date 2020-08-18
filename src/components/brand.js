import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/core';

export function Brand(){
    return (
        <Flex alignItems='center'>
            <Image src='/logo.png' size='70px'/>
            <Box>
                <Heading fontSize='24px'>Pathfinding Visualiser</Heading>
                <Text color='gray.600'>Quickest path from A to B</Text>
            </Box>
        </Flex>
    );
}