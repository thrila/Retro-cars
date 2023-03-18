import { useState, useEffect } from "react";
import finnhub from "../apis/finnhub";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import { deleteItem } from "../store/stocklist-slice";
import { useDispatch } from "react-redux";

const Stocklist = () => {
  const dispatch = useDispatch();
  const watchList = useSelector((state) => state.watchList);
  const navigate = useNavigate();

  const [stock, setStock] = useState();
  // const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);
  const changeColor = (item) => {
    return item > 0 ? `success` : `danger`;
  };
  const setIcon = (item) => {
    return item > 0 ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />;
  };
  const handleStockSelect = (symbol) => {
    navigate(`detail/${symbol}`);
  };

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
        // console.log(data);

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
  }, [watchList]);
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
          {stock?.map((stck) => {
            return (
              <tr
                style={{ cursor: "pointer" }}
                key={stck.symbol}
                className="table-row"
                onClick={() => handleStockSelect(stck.symbol)}
              >
                <th style={{ color: "#B270A2" }}>{stck.symbol}</th>
                <td>{stck.data && stck.data.c}</td>
                <td className={`text-${changeColor(stck.data.d)}`}>
                  {stck.data && stck.data.d} {setIcon(stck.data.d)}{" "}
                </td>
                <td className={`text-${changeColor(stck.data.dp)}`}>
                  {stck.data && stck.data.dp} {setIcon(stck.data.dp)}
                </td>
                <td>{stck.data && stck.data.h}</td>
                <td>{stck.data && stck.data.l}</td>
                <td>{stck.data && stck.data.o}</td>
                <td>
                  {stck.data && stck.data.pc}{" "}
                  <button
                    className="btn btn-danger btn-sm ml-3 d-inline-block delete-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(deleteItem(stck.symbol));
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Stocklist;
