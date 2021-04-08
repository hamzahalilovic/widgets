import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { usePrifina } from "@prifina/hooks";

import { Flex, ChakraProvider, Text, Box, Image } from "@chakra-ui/react";

import BedIcon from "./assets/bed.svg";
import ClockIcon from "./assets/clock.svg";

import Clock from "./components/Clock";
import Graph from "./components/Graph";

const styles = {
  background: "black",
  borderRadius: "10px",
  paddingTop: "17px",
  paddingLeft: "12px",
};

const Alarm = () => {
  return (
    <ChakraProvider>
      <Flex w="320px" h="320px" style={styles} flexDirection="column">
        <Flex alt="upperBox" flexDirection="row" justifyContent="space-between">
          <Box flex={2}>
            <Text color="#FF2574" fontSize={12} paddingBottom="12px">
              Smart Alarm
            </Text>
            <Image src={BedIcon} paddingBottom="5px" />
            <Text fontSize={10} paddingBottom="10px" color="white">
              Recommended schedule based on your sleep history:
            </Text>
            <Box>
              <Text fontSize={10} color="white" as="b">
                11:00 PM bedtime
              </Text>
            </Box>
            <Text fontSize={10} color="white" as="b">
              6:30 AM wake time
            </Text>
          </Box>
          <Clock />
        </Flex>
        <Flex alt="downBox" flexDirection="row" justifyContent="space-between">
          <Box>
            <Flex>
              <Image src={ClockIcon} paddingRight={1} />
              <Text fontSize={10} color="grey">
                Bedtime History
              </Text>
            </Flex>
            <Graph />
          </Box>
          <Box></Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default Alarm;
