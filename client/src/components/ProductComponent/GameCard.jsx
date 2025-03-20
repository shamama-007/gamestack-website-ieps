import { Link } from "react-router-dom";
import "./gamecard.scss";
import { toast } from "react-toastify";
import { PiGameControllerDuotone } from "react-icons/pi";
import Model from "../Modal/Model";
import { useState } from "react";

const postGameRequest = async (data) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/game-request`, {
    method: "POST",
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data)
  })
  return await response.json();
}

const GameCard = (prop) => {
  const single = prop.single;
  console.log(prop);
  
  const [requestConfirm, setRequestConfirm] = useState(false);
  const handleChildData = (data) => {
    setRequestConfirm(data);
  };
  const workingPurpose = async () => {
    const postData = {
      id: prop.productCode,
      name: prop.productName,
      reqType: prop.reqType,
      customerStock: prop.customerStock,
      gameCategory: prop.gameCategory,
      inHandStock: prop.inHandStock,
      acName: prop.userDetail.acName,
      acCode: prop.userDetail.acCode,
      acAddress: prop.userDetail.acAddress,
      city: prop.userDetail.city,
      cityCode: prop.userDetail.cityCode,
      email: prop.userDetail.email,
      mobileNo: prop.userDetail.mobileNo,
      cnicExpiry: prop.userDetail.cnicExpiry,
      package: prop.userDetail.package,
      packageCode: prop.userDetail.packageCode,
    }
    const { success, message, retryAfter } = await postGameRequest(postData)
    if (success == true) {
      toast.success(message)
    } else {
      toast.error(message + ' ' + retryAfter)
    }

    setRequestConfirm(false);
  };


  return (
    <>
      <Model
        title={"Confirmation"}
        workingPurpose={workingPurpose}
        logoutConfirm={requestConfirm}
        handleChildData={handleChildData}
      />


      <div className="game-card">
        <div className="game-icon">
          <PiGameControllerDuotone />
        </div>
        <div className="textBox">
          <span>{single ? prop[0].name : prop.name}</span>
          {prop.reqType === "SWAP" ?

            <Link to={`/user/user-game-swap?id=${single ? prop[0].id : prop.id}&name=${single ? prop[0].name : prop.name}`} type="button" className="button-submit">
              {prop.reqType === "SWAP" ? "SWAP" : "REQUEST"}
            </Link>
            :
            <div type="button" className="button-submit" onClick={() => setRequestConfirm(true)}>
              {prop.reqType === "SWAP" ? "SWAP" : "REQUEST"}
            </div>
          }

        </div>
      </div>
    </>
  );
};

export default GameCard;
