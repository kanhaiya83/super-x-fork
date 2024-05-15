import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../context/authContext";
import { useQueryClient, useMutation } from "react-query";
import { firestoreDB } from "../../config/firebase";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { errorToast, successToast } from "../../utils/notify";
import { GrAddCircle, GrBar, GrKeyboard } from "react-icons/gr";
import { Link } from "react-router-dom";
const TonesTab = () => {
  const { userData, user } = useAuthContext();
  const queryClient = useQueryClient();
  const [enteredTone, setTone] = useState("");
  const userRef = user && doc(firestoreDB, "users", user?.uid);

  useEffect(() => {
    document.title = "Reacti.Ai | Tones";
  }, []);
  const tonesData = userData?.tones || [];
  const addToneMutation = useMutation({
    mutationFn: async () => {
      if (tonesData.find((d) => d.tone === enteredTone)) {
        return errorToast("Tone already exists!");
      }
      const res = await updateDoc(userRef, {
        tones: arrayUnion({ tone: enteredTone, selected: false }),
      });
      await queryClient.invalidateQueries(["userData"]);
      successToast("Tone added successfully");
      setTone("");
    },
  });
  const removeToneMutation = useMutation({
    mutationFn: async (toneData) => {
      const res = await updateDoc(userRef, {
        tones: arrayRemove(toneData),
      });
      await queryClient.invalidateQueries(["userData"]);
      successToast("Tone removed successfully");
      setTone("");
    },
  });
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
        / Tones
      </h1>

      <div
        className="profileInfoCard"
        style={{ minHeight: "6rem", height: "6rem" }}
      >
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/02f0b893570193.5e697092c4790.gif"></img>
        <div style={{ margin: "auto", width: "90%" }}>
          <h1>
            <span className="gPurple">Tones</span> Library
          </h1>
          <h2>Manage your language tones.</h2>
        </div>
      </div>
      <div className="miniBar1">
        <div className="sidebarButton" style={{ width: "65%", margin: "0" }}>
          <GrKeyboard style={{ marginRight: "1rem" }}></GrKeyboard>
          <input
          value={enteredTone}
          onChange={(e)=>{setTone(e.target.value)}}
            placeholder="Type your Tone.."
            style={{
              background: "transparent",
              width: "100%",
              outline: "none",
              border: "none",
              color: "white",
              fontSize: "0.9rem",
            }}
          ></input>
        </div>
        <div
        onClick={addToneMutation.mutate}
          className="sidebarButton"
          style={{ width: "10%", minWidth: "7rem",marginTop:"0",marginBottom:"0" }}
        >
          <GrAddCircle style={{ marginRight: "1rem" }}></GrAddCircle>
            <h1 style={{ fontSize: "1rem" }}>Add</h1>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "2rem 0",
          width: "100%",
          margin: "2rem auto",
          gap: "1rem 0",
        }}
      >
       {tonesData.map(toneData=>{
        return  <div
        key={toneData.tone}
        className="promptCard"
        style={{
          width: "100%",
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          padding: "1% 2.5%",
        }}
      >
        <h1>{toneData.tone}</h1>
        <button
        onClick={()=>{removeToneMutation.mutate(toneData)}}
          className="sidebarButton bg-transparent"
          style={{
            width: "15%",
            minWidth: "6rem",
            margin: "0",
            marginLeft: "auto",
          }}
        >
          <GrBar style={{ marginRight: "1rem" }}></GrBar>
            <h1 style={{ fontSize: "1rem" }}>Delete</h1>
        </button>
      </div>
       })}
      </div>
    </>
  );
};

export default TonesTab;
