import React from 'react';
import { Brand } from './brand';
import { FaStarOfLife } from 'react-icons/fa';
import { FiShare2 } from "react-icons/fi";
import { GiFamilyTree } from "react-icons/gi";
import { GrGraphQl } from "react-icons/gr";
import { Button, Flex, Stack } from '@chakra-ui/core';

export function PageHeader(){
    return (
        <Flex justifyContent='space-between' alignItems='center' pt='15px'>
            <Brand/>
            <Stack isInline>
                <Button leftIcon={GrGraphQl} variantColor='red'>Dijkstra</Button>
                <Button leftIcon={FaStarOfLife} variantColor='teal'>A*</Button>
                <Button leftIcon={FiShare2} variantColor='green'>Breadth-First Search</Button>
                <Button leftIcon={GiFamilyTree} variantColor='yellow'>Depth-First Search</Button>
            </Stack>
        </Flex>
    );
}