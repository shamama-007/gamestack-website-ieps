import DashboardSidebar from "../../components/Layout/DashboardSidebar";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

import GameCard from "../../components/ProductComponent/GameCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
const AvailabelProduct = () => {
  const { token } = useSelector((state) => state.userAuth);
  const [gameProductStatus, setGameProductStatus] = useState(false);
  const [gameProduct, setGameProduct] = useState([]);
  const [gameProductIsLoading, setGameProductIsLoading] = useState(true);

  const [singleCard, setSingleCard] = useState(null);
  const [singleCardStatus, setSingleCardStatus] = useState(false);

  useEffect(() => {
    const getGameProduct = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_CLIENT_API}/api/Customer/GetProdList`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setGameProduct(result);
      setGameProductIsLoading(false)
      setGameProductStatus(true);
    };

    getGameProduct();
  }, []);


  const handleOnSelect = (item) => {
    setSingleCard([item]);
    setSingleCardStatus(true);
    setGameProductStatus(false);
    
  };


  const handleOnSearch = (data) => {
    if (data == "") {
      setGameProductStatus(true)
      setSingleCardStatus(false)
    }
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          id: {item.id}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          name: {item.name}
        </span>
      </>
    );
  };

  let gameProductData = gameProduct.map((item) => {
    return {
      id: item.productCode,
      name: item.productName,
    };
  });



  return (
    <DashboardSidebar>
      <div className="panel-main-content">
        <h3>AVAILABEL PRODUCT</h3>

        <div className="search-container">
          <div style={{ width: 400 }}>
            <ReactSearchAutocomplete
              items={gameProductData}
              inputDebounce={700}
              onSelect={handleOnSelect}
              onSearch={handleOnSearch}
              autoFocus
              formatResult={formatResult}
              styling={{
                border: "2px solid #FB751A",
                backgroundColor: "#161616",
                color: "white",
              }}
            />
          </div>
        </div>

        {gameProductIsLoading ? <Loader /> :
          <div className="available-product">
            {!singleCardStatus
              ? gameProductStatus && gameProductData &&
              gameProductData.map((prod) => {
                return <GameCard key={prod.id} {...prod} />;
              })
              : !gameProductStatus && singleCardStatus && <GameCard single={true} {...singleCard} />}
          </div>
        }


      </div>
    </DashboardSidebar>
  );
};

export default AvailabelProduct;
