import React from 'react';
import { Box, Button, Image, Flex, Stack, Heading, Text } from "@chakra-ui/core";
import { Brand } from './components/brand';
import { PageHeader } from './components/page-header';
import PathfindingGrid from './components/pathfinding-grid';

export function Visualiser() {
    return <Box maxWidth='1200px' mx='auto'>
        <PageHeader/>
        <PathfindingGrid/>
    </Box>
}