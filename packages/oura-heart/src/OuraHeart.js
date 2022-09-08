import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { usePrifina, Op } from "@prifina/hooks";

import Oura from "@prifina/oura";

import {
  Flex,
  Text,
  Box,
  Image,
  IconButton,
  Icon,
  Select,
} from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import OuraIcon from "./assets/oura.svg";

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

const Container = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 10px;
  background: linear-gradient(180deg, #343434 0%, #d3bc69 149.83%);
  padding: 11px 8px 0px 8px;
`;

// unique appID for the widget....
const appID = "6dyqsLq4MEJC2sT9WNBGUs";

let falseData = [
  {
    score_resting_hr: 93,
  },
];

let asyncFalseData = [
  {
    summary_date: "2016-09-03",
    score_resting_hr: 93,
  },
  {
    summary_date: "2016-09-04",

    score_resting_hr: 55,
  },
  {
    summary_date: "2016-09-05",

    score_resting_hr: 82,
  },
];

const OuraHeart = (props) => {
  const { onUpdate, Prifina, API, registerHooks } = usePrifina();

  const [processedData, setProcessedData] = useState({});

  const [processedData2, setProcessedData2] = useState({});

  const [processedAsyncData, setProcessedAsyncData] = useState([]);

  const processData = (data) => {
    console.log("ORIGINAL PROCESS DATA", data);

    let newData = [data];
    let newData2 = data;
    console.log("newData", newData);
    console.log("newData2", newData2);

    setProcessedData2(newData2);
    setProcessedData(newData);
  };

  const processAsyncData = (data) => {
    console.log("ORIGINAL PROCESS ASYNC DATA", data);

    let newData = [data];
    console.log("newData ASYNC", newData);

    setProcessedAsyncData(newData);
  };

  console.log("processed data", processedData);

  const dataUpdate = async (payload) => {
    console.log("UPDATE ", payload);
    if (
      payload.hasOwnProperty("data") &&
      payload.data.hasOwnProperty("content")
    ) {
      // process async data
      if (
        payload.data.dataconnector === "Oura/queryReadinessSummariesAsync" &&
        payload.data.content.length > 1
      ) {
        processedAsyncData(payload.data.content);
      }
      console.log("PAYLOAD DATA", payload);
    }
  };

  const currentDate = useRef(new Date());

  const [day, setDay] = useState(1);
  const [date, setDate] = useState();

  useEffect(async () => {
    // init callback function for background updates/notifications
    onUpdate(appID, dataUpdate);
    // register datasource modules
    registerHooks(appID, [Oura]);

    // const d = currentDate.current;
    let d = new Date();

    // d = currentDate.current;

    const dd = d.setDate(d.getDate() - day);

    currentDate.current = dd;

    const dateStr = new Date(dd).toISOString().split("T")[0];

    setDate(dateStr);
    console.log("datestr", dateStr);

    const filter = {
      ["s3::date"]: {
        [Op.eq]: dateStr,
      },
    };

    console.log("FILTER", filter);

    const result = await API[appID].Oura.queryReadinessSummary({
      filter: filter,
      // fields: "awake,light,rem,deep",
    });

    const ddd = d.setDate(d.getDate() - 14);

    const asyncDateStr = new Date(ddd).toISOString().split("T")[0];

    const asyncFilter = {
      ["s3::date"]: {
        [Op.eq]: asyncDateStr,
      },
    };

    const asyncResult = await API[appID].Oura.queryReadinessSummariesAsync({
      filter: asyncFilter,
      fields: "score_resting_hr",
    });

    console.log("result", result);

    console.log("async result", asyncResult);

    processData(result.data.getDataObject.content[0]);

    processData(result.data.getDataObject.content[0]);

    // if (stage === "dev") {
    //   processData(result.data.getDataObject.content[1].score[1]);
    // }
  }, [day]);

  console.log("day", day);

  const [period, setPeriod] = useState(7);

  const handleChange = (e) => {
    setPeriod(e.target.value);
  };

  const handleSubmit = (e) => {
    setPeriod(e.target.value);

    e.preventDefault();
  };

  console.log("period", period);

  return (
    <Container>
      <Flex alignItems="center" mb={21}>
        <Text fontSize={16} color="white" fontWeight={700} ml={9} mr={110}>
          Heart widget
        </Text>
        <Image src={OuraIcon} />
      </Flex>
      <Box>
        <Flex
          h={32}
          justifyContent="space-between"
          alignItems="center"
          bg="#FFA654"
          padding="0px 25px 0px 25px"
          borderTopRightRadius={8}
          borderTopLeftRadius={8}
        >
          <select
            style={{
              background: "#FFF500",
              border: 0,
              borderRadius: 10,
              padding: 3,
            }}
          >
            <option value={6} onChange={handleChange}>
              Week
            </option>
            <option value={29} onChange={handleChange}>
              Month
            </option>
          </select>

          <Flex>
            <IconButton
              style={{
                background: "transparent",
                border: 0,
                cursor: "pointer",
                fontSize: 19,
              }}
              aria-label="Search database"
              icon={<ChevronLeftIcon />}
              onClick={async () => {
                setDay(day + 1);
              }}
            />
            <Text>{date}</Text>

            <IconButton
              disabled={day === 1 ? true : false}
              style={{
                background: "transparent",
                border: 0,
                cursor: "pointer",
                fontSize: 19,
              }}
              aria-label="Search database"
              icon={<ChevronRightIcon />}
              onClick={async () => {
                setDay(day - 1);
              }}
            />
          </Flex>
        </Flex>
        <Box
          height={200}
          style={{
            background: "rgba(251, 242, 242, 0.3)",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            paddingTop: 40,
          }}
        >
          <Flex
            width="100%"
            justifyContent="center"
            style={{ paddingRight: 55, paddingLeft: 55 }}
          >
            <Text as="b" fontSize={48} color="#FFF500">
              {/* {processedData2.score_resting_hr} */}
            </Text>
          </Flex>
          <ResponsiveContainer width="100%" height="50%">
            <LineChart
              style={{ cursor: "pointer" }}
              data={processedAsyncData}
              margin={{
                top: 20,
                right: 15,
                left: -15,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="none" stroke="null" />
              <XAxis
                dataKey="summary_date"
                tickLine={false}
                fontSize={8}
                stroke="white"
              />
              <YAxis
                dataKey="score_resting_hr"
                axisLine={false}
                tickLine={false}
                label={{
                  value: "RESTING HR",
                  angle: -90,
                  stroke: "white",
                  fontSize: 10,
                }}
                stroke="white"
                fontSize={10}
              />
              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  background: "transparent",
                  padding: 5,
                  border: 0,
                }}
                itemStyle={{ fontSize: 10 }}
              />
              <Line
                type="monotone"
                dataKey="score_resting_hr"
                stroke="#FFF500"
                strokeWidth={1}
                activeDot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <Flex width="100%" justifyContent="center">
            <Box
              bg="#FFA654"
              p={4}
              borderRadius={4}
              width={50}
              textAlign="center"
            >
              RHR
            </Box>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
};

OuraHeart.displayName = "OuraHeart";

export default OuraHeart;