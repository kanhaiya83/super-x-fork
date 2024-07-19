import writeXlsxFile from "write-excel-file";
import { child, get } from "firebase/database";
import { db } from "../config/firebase";
import { format, subDays, isWithinInterval, parseISO, startOfDay, endOfDay} from 'date-fns';


export const getDbItem = async(itemPath)=>{
  const itemRef = child(db, itemPath);
  const ss = await get(itemRef);
  if(ss.exists()){
    return ss.val()
  }
  return false
}
export const convertToExcelFormat = (jsonData) => {
  const data = [];
  const HEADER_ROW = [
    {
      value: "Code",
      fontWeight: "bold",
    },
    {
      value: "Is Used",
      fontWeight: "bold",
    },
    {
      value:"Reward",
      fontWeight: "bold",
    }
  ];
  data.push(HEADER_ROW);

  jsonData.codes.forEach((code, i) => {
    data.push([
      {
        type: String,
        value: code,
      },
      {
        type: Boolean,
        value: false,
      },
      {
        type: String,
        value: `${jsonData.requestCount} requests`,
      },
    ]);
  });
  return data;
};

export const downloadExcel = async (codes,name) => {
  await writeXlsxFile(convertToExcelFormat(codes), {
    fileName: name + ".xlsx",
  });
};


export function getLast7DaysCount(requestsData=[]) {
  const today = new Date();
  const last7Days = Array.from({ length: 7 }, (_, i) => subDays(today, i)).reverse();
  
  const dayNames = last7Days.map(day => format(day, 'EEE'));
  const counts = last7Days.map(day => {
      const start = startOfDay(day);
      const end = endOfDay(day);

      return requestsData.filter(dateString => {
          const date = parseISO(dateString);
          return isWithinInterval(date, { start, end });
      }).length;
  });

  return {
      dayNames,
      counts
  };
}
