import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { usePrifina, Op } from "@prifina/hooks";
import Fitbit from "@prifina/fitbit";
import Oura from "@prifina/oura";
import Garmin from "@prifina/garmin";
import GoogleTimeline from "@prifina/google-timeline";

import { Flex, Spacer, Text, Box, Select } from "@chakra-ui/react";

import {
  BarChart,
  Bar,
  Cell,
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
  background: linear-gradient(
    180deg,
    #082673 30.67%,
    #644bd0 75.51%,
    #a56adf 106.47%
  );
  padding: 11px 8px 0px 8px;
`;

// unique appID for the widget....
const appID = "866fscSq5Ae7bPgUtb6ffB";

const OuraSleep = (props) => {
  const { data } = props;
  // init hook and get provider api services...
  const { onUpdate, Prifina, API, registerHooks } = usePrifina();

  const [functions, setFunctions] = useState([]);

  const [connectorFunction, setConnectorFunction] = useState("");
  const [functionCondition, setFunctionCondition] = useState("eq");
  const [conditionValue, setConditionValue] = useState("");
  const [fieldsValue, setFieldsValue] = useState("");

  // const { s3Data, error, isLoading, setUrl } = UseFetch(null);

  function getEveryNth(arr, nth) {
    const result = [];

    for (let i = 0; i < arr.length; i += nth) {
      result.push(arr[i]);
    }

    return result;
  }

  const ouraData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const processData = (data) => {
    let newData = data;

    console.log("PROCESS DATA", newData);

    let newArray = Object.keys(newData);

    console.log("PROCESS DATA objects", newArray);

    console.log("should be deep", getEveryNth(newArray, 1));

    console.log("should be light", getEveryNth(newArray, 2));
  };

  const dataUpdate = async (payload) => {
    console.log("UPDATE ", payload);

    if (
      payload.hasOwnProperty("data") &&
      payload.data.hasOwnProperty("content")
    ) {
      // process async data
      if (
        payload.data.dataconnector === "Oura/querySleepSummariesAsync" &&
        payload.data.content.length > 1
      ) {
        processData(payload.data.content);
      }
    }
  };

  useEffect(async () => {
    // init callback function for background updates/notifications
    onUpdate(appID, dataUpdate);
    // register datasource modules
    registerHooks(appID, [Oura]);

    const d = new Date();

    const dd = d.setDate(d.getDate() - 14);
    const dateStr = new Date(dd).toISOString().split("T")[0];

    const filter = {
      ["s3::date"]: {
        [Op.gte]: dateStr,
      },
    };

    const activityResult = await API[appID].Oura.querySleepSummariesAsync({
      filter: filter,
      fields: "deep,light",
    });
    console.log("ACTIVITY RESULT", activityResult);
    console.log("ACTIVITY RESULT 2", activityResult.data.getDataObject.content);
    if (stage === "dev") {
      console.log("STAGE IS DEV");
      processData(activityResult.data.getDataObject.content[1]);
    }

    /*
    const result = await API[appID].Oura.queryActivitySummariesAsync({
      filter: filter,
    });

    console.log("RESULT ", result);

    processData(result.data.getDataObject.content[0]);
*/
    //needs solution this doesn't work
    // if (result.data.getDataObject.content.activity.length > 0) {
    //   processData(result.data.getDataObject.content.activity);
    // }
  }, []);

  return (
    <Container>
      <Text fontSize={16} color="white" fontWeight={700} ml={9} mb={21}>
        Oura Sleep
      </Text>
      <Box>
        <Flex
          h={32}
          justifyContent="space-between"
          alignContent="center"
          bg="#1B1D50"
          padding="4px 8px 4px 8px"
        >
          <Select w={71} background="#000897" color="white">
            <option value="option1">Year</option>
            <option value="option2">Month</option>
            <option value="option3">Day</option>
          </Select>
          <Text color="white">Range</Text>
        </Flex>
        <Box
          height={202}
          style={{
            background: "#FBF2F2",
            opacity: 0.6,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Box
            height={202}
            style={{
              // background: "#FBF2F2",
              opacity: 1,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={200}
                height={202}
                data={ouraData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
OuraSleep.displayName = "OuraSleep";

export default OuraSleep;