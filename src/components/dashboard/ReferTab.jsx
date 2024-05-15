import React, { useState } from "react";
import { GrKey, GrUserFemale, GrValidate } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import { useQueryClient } from "react-query";
import { errorToast, successToast } from "../../utils/notify";
import request from "../../config/request";
import { toast } from "react-toastify";

const ReferTab = () => {
  const { userData, setCounter } = useAuthContext();
  const [enteredCode, setEnteredCode] = useState("");
  const [enteredRedeemCode, setEnteredRedeemCode] = useState("");
  const [copied, setCopied] = useState(false);
  const queryClient = useQueryClient();
  const handleRefer = async () => {
    if (enteredCode.length != 10) {
      return errorToast("Invalid Code!");
    }
    console.log(enteredCode);
    try {
      const response = await toast.promise(request("/refer/" + enteredCode),{pending:"Checking code..."});
      if (response?.data?.success) {
        successToast(response?.data?.message);
        queryClient.invalidateQueries({ queryKey: ["userData"] });
        setCounter((prev) => prev + 1);
      } else if (response?.data?.message) {
        errorToast(response?.data?.message);
      } else {
        errorToast("Some error occurred!!");
      }
      setEnteredCode("");
    } catch (e) {
      console.log(e);
      errorToast("Some error occurred!!");
    }
  };
  const handleRedeem = async () => {
    console.log(enteredRedeemCode);
    if (enteredRedeemCode.length != 20) {
      return errorToast("Invalid Code!");
    }
    try {
      const response = await toast.promise(request("/redeem/" + enteredRedeemCode),{pending:"Checking code..."});
      if (response?.data?.success) {
        successToast(response?.data?.message);
        queryClient.invalidateQueries({ queryKey: ["userData"] });
        setCounter((prev) => prev + 1);
      } else if (response?.data?.message) {
        errorToast(response?.data?.message);
      } else {
        errorToast("Some error occurred!!");
      }
      setEnteredRedeemCode("");
    } catch (e) {
      console.log(e);
      errorToast("Some error occurred!!");
    }
  };
  return (
    <>
      <h1
        style={{
          fontSize: "1.2rem",
          margin: "1rem 0",
          color: "#b4b4b4eb",
          marginTop: "2rem",
        }}
      >
        / Refer
      </h1>

      <div
        className="profileInfoCard"
        style={{ minHeight: "6rem", height: "6rem" }}
      >
        {/* <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/02f0b893570193.5e697092c4790.gif"></img> */}
        <div style={{ margin: "auto", width: "90%" }}>
          <h1>
            <span className="gPurple">Refer</span> Your Friends
          </h1>
          <h2>Earn 30 more requests per referral</h2>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: "2rem",
        }}
      >
        <div className="promptCard" style={{ width: "95%", maxWidth: "30rem" }}>
          <h1
            className="gPurple"
            style={{ textAlign: "center", width: "100%", fontSize: "2rem" }}
          >
            Hamza Rizvi
          </h1>
          <h2
            style={{
              textAlign: "center",
              width: "100%",
              fontSize: "1rem",
              margin: "0",
            }}
          >
            <span className="gPurple">4</span> Referred
          </h2>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/0d3c6293570193.5e697092c2a56.gif"
            style={{ width: "20%", margin: "1rem 40%" }}
          ></img>
          <div className="flex flex-col gap-2 items-center ">
            <div
              onClick={() => {
                navigator.clipboard.writeText(userData.referralCode);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
              className="sidebarButton m-0"
              style={{ margin: "0" }}
            >
              <GrUserFemale style={{ marginRight: "1rem" }}></GrUserFemale>

              <h1 style={{ fontSize: "1rem" }}>
                {copied ? "Code Copied" : "Copy Referral"}
              </h1>
            </div>
            <div className="sidebarButton m-0">
              <GrValidate style={{ marginRight: "1rem" }}></GrValidate>
              <input
                value={enteredCode}
                onChange={(e) => {
                  setEnteredCode(e.target.value);
                }}
                placeholder="Enter Referral Code"
                style={{
                  background: "transparent",
                  width: "100%",
                  textAlign: "right",
                  outline: "none",
                  border: "none",
                  color: "white",
                  fontSize: "0.9rem",
                }}
              ></input>
            </div>
            {enteredCode && (
              <button  onClick={handleRefer} className="sidebarButton justify-center m-0">
                <h1>Submit</h1>
              </button>
            )}
            <div className="sidebarButton m-0">
              <GrKey style={{ marginRight: "1rem" }}></GrKey>
              <input
                value={enteredRedeemCode}
                onChange={(e) => {
                  setEnteredRedeemCode(e.target.value);
                }}
                placeholder="Redeem Coupon Code"
                style={{
                  background: "transparent",
                  width: "100%",
                  textAlign: "right",
                  outline: "none",
                  border: "none",
                  color: "white",
                  fontSize: "0.9rem",
                }}
              ></input>
            </div>
            {enteredRedeemCode && (
              <button onClick={handleRedeem} className="sidebarButton justify-center m-0">
                <h1>Submit</h1>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferTab;
