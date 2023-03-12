import { useState, useEffect } from "react";
import finnhub from "../apis/finnhub";

const Stocklist = () => {
  const [stock, setStock] = useState();
  const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);
  const changeColor = (item)=> {
        return item > 0 ? 'success' : 'danger'
  }
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          watchList.map((stock) => {
            return finnhub.get("/quote", {
              params: {
                symbol: stock,
              },
            });
          })
        );
        const data = responses.map((item) => {
          return {
            data: item.data,
            symbol: item.config.params.symbol,
          };
        });
        console.log(data);

        if (isMounted) {
          setStock(data);
        }
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div>
      <table className="table hover mt-5">
        <thead style={{ color: " #7A4495" }}>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Last</th>
            <th scope="col">Chg</th>
            <th scope="col">Chg%</th>
            <th scope="col">High</th>
            <th scope="col">Low</th>
            <th scope="col">Open</th>
            <th scope="col">Close</th>
          </tr>
        </thead>
        <tbody>
        {stock?.map((stck)=> {
                return(
                    <tr key={stck.symbol}>
                        <th style={{color:"#B270A2"}}>{stck.symbol}</th>
                        <th>{stck.data && stck.data.c}</th>
                        <th className={`text-${changeColor(stck.data.d)}`}>{stck.data && stck.data.d}</th>
                        <th className={`text-${changeColor(stck.data.dp)}`}>{stck.data && stck.data.dp}</th>
                        <th>{stck.data && stck.data.h}</th>
                        <th>{stck.data && stck.data.l}</th>
                        <th>{stck.data && stck.data.o}</th>
                        <th>{stck.data && stck.data.pc}</th>
                    </tr>
                );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Stocklist;
