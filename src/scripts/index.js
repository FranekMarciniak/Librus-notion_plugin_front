import axios from "axios";
import { generateTable } from "./dayplanUI.js";
const schoolHours = [
  "07:10 - 07:55",
  "08:00 - 08:45",
  "08:50 - 09:35",
  "09:40 - 10:25",
  "10:45 - 11:30",
  "11:35 - 12:20",
  "12:30 - 13:15",
  "13:20 - 14:05",
  "14:10 - 14:55",
  "15:10 - 15:55",
  "16:00 - 16:45",
  "16:50 - 17:35",
  "17:40 - 18:25",
  "18:30 - 19:15",
];

const fetchTimeTable = async (timeframe) => {
  return await axios.get(
    `https://sleepy-peak-69154.herokuapp.com/${timeframe}plan`,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    }
  );
};

generateTable(schoolHours, fetchTimeTable("day"));
