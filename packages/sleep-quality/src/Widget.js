import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";

import { usePrifina, Op, _fn, buildFilter } from "@prifina/hooks";

// import GoogleTimeline from "@prifina/google-timeline/";
// import SleepQuality from "prifina-package/sleep-quality";
import activityMockup from "prifina/sleep-quality";

import SleepQuality from "prifina/sleep-quality";

import { Flex, ChakraProvider, Text, Box, Image } from "@chakra-ui/react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import SheepImage from "./assets/sheep.svg";
import { fontSize, width } from "styled-system";

const styles = {
  background:
    "linear-gradient(180deg, #231345 36.28%, #2B2362 89.8%, #32327E 105.56%)",
  borderRadius: "10px",
  paddingTop: "6px",
  paddingLeft: "19px",
};

const appID = "sleepQuality";

const Widget = (props) => {
  const { data } = props;

  ////widget state management
  const [opacity, setOpacity] = useState({
    deepSleep: 1,
    screenTime: 1,
  });
  const handleMouseEnter = (o) => {
    const { dataKey } = o;
    setOpacity({ ...opacity, [dataKey]: 0.5 });
  };
  const handleMouseLeave = (o) => {
    const { dataKey } = o;
    setOpacity({ ...opacity, [dataKey]: 1 });
  };
  /////////////////////////

  // init hook and get provider api services...
  const { onUpdate, Prifina, API, registerHooks } = usePrifina();

  // init provider api with your appID
  const prifina = new Prifina({ appId: appID });
  const [sleepQualityData, setSleepQualityData] = useState({});

  useEffect(async () => {
    // init callback function for background updates/notifications
    onUpdate(appID, dataUpdate);
    // register datasource modules
    registerHooks(appID, [SleepQuality]);
  }, []);

  useEffect(async () => {
    const result = await API[appID].SleepQuality.queryActivities();

    const newResult = result.data.getS3Object.content;
    setSleepQualityData(newResult);
  }, []);

  console.log("NEW DATAAA", sleepQualityData);

  return (
    <ChakraProvider>
      <Flex w="312px" height="144px" style={styles} flexDirection="column">
        <Text color="white" fontSize={12}>
          Sleep Quality
        </Text>
        <Box paddingRight="13px" paddingLeft="95px">
          <Text fontSize="10px" color="#72DDFF" textAlign="right">
            To improve your quality and quantity of sleep, try avoiding screens
            before going to bed.
          </Text>
        </Box>
        <Flex alt="graph" flexDirection="column">
          <Text fontSize={7} color="white">
            Hours
          </Text>
          <LineChart
            width={275}
            height={68}
            // data={sleepQualityData}
            margin={{
              top: 0,
              right: 40,
              left: -40,
              bottom: 0,
            }}
          >
            <CartesianGrid
              horizontal={false}
              vertical={false}
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tick={{ fontSize: 7, fill: "white" }}
              tickLine={false}
            />
            <YAxis
              type="number"
              axisLine={false}
              tick={{ fontSize: 7, fill: "white" }}
              tickLine={false}
              domain={[0, "dataMax + 1"]}
            />

            <Legend
              verticalAlign="top"
              layout="vertical"
              align="right"
              wrapperStyle={{
                paddingLeft: 10,

                fontSize: 7,
              }}
              iconType="line"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              // payload={[
              //   {
              //     id: "deepSleep",
              //     value: "Deep Sleep",
              //     type: "line",
              //     color: "#FF7601",
              //   },
              //   {
              //     id: "screenTime",
              //     value: "Screen Time",
              //     type: "line",
              //     color: "#FFC700",
              //   },
              // ]}
            />
            <Line
              type="linear"
              dataKey="deepSleep"
              name="Deep Sleep"
              strokeOpacity={opacity.deepSleep}
              stroke="#FF7601"
              activeDot={{ r: 8 }}
              dot={false}
            />
            <Line
              type="linear"
              dataKey="screenTime"
              name="Screen Time"
              strokeOpacity={opacity.screenTime}
              stroke="#FFC700"
              dot={false}
            />
          </LineChart>
        </Flex>
        <Box position="absolute" alignSelf="flex-end" top={144 - 63}>
          <Image src={SheepImage} />
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Widget;
