import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import finnhub from "../../apis/finnhub";
import StockChart from "../../components/StockChart";

const formatData = (data) => {
  return data.t.map((item, index) => {
    return {
      x: item * 1000,
      y: Math.floor(data.c[index]),
    };
  });
};

const Detail = () => {
  const { symbol } = useParams();
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const date = new Date();
      const currentTime = Math.floor(date.getTime() / 1000);
      let oneDay;
      if (date.getDay() === 6) {
        oneDay = currentTime - 2 * 24 * 60 * 60;
      } else if (date.getDay() === 0) {
        oneDay = currentTime - 3 * 24 * 60 * 60;
      } else {
        oneDay = currentTime - 24 * 60 * 60;
      }
      const oneWeek = currentTime - 7 * 24 * 60 * 60;
      const oneYear = currentTime - 365 * 24 * 60 * 60;

      try {
        const responses = await Promise.all([
          finnhub.get("stock/candle", {
            params: {
              symbol,
              from: oneDay,
              to: currentTime,
              resolution: 30,
            },
          }),
          finnhub.get("stock/candle", {
            params: {
              symbol,
              from: oneWeek,
              to: currentTime,
              resolution: 60,
            },
          }),
          finnhub.get("stock/candle", {
            params: {
              symbol,
              from: oneYear,
              to: currentTime,
              resolution: "W",
            },
          }),
        ]);
        setChartData({
          day: formatData(responses[0].data),
          week: formatData(responses[1].data),
          year: formatData(responses[2].data),
        });
        console.log(responses);
      } catch (err) {
        console.log("Error: " + err);
      }
    };
    fetchData();
  }, [symbol]);

  return (
    <div>
      {chartData && (
        <div>
          <StockChart chartData={chartData} symbol={symbol} />
        </div>
      )}
    </div>
  );
};

export default Detail;
