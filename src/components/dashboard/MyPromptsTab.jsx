import { GrAddCircle, GrMagic, GrSearch } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { doc, getDoc } from "firebase/firestore";
import SavedPromptCard from "./SavedPromptCard";
import { firestoreDB } from "../../config/firebase";
import { useAuthContext } from "../../context/authContext";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import request from "../../config/request";
import { successToast,errorToast } from "../../utils/notify";

const paramsArr = [
  "<tweet>",
  "<tone>",
  "<comment>",
  "<characterLimit>",
  "<language>",
];
const MyPromptsTab = () => {
  const { userData } = useAuthContext();
  const savedPostsQuery = useQuery(
    ["savedPosts", userData?.savedPosts],
    async () => {
      const savedPosts = userData?.savedPosts || [];
      if (!savedPosts || savedPosts.length === 0) {
        return [];
      }
      const res = await Promise.all(
        savedPosts.map(async (postID) => {
          const ss = await getDoc(doc(firestoreDB, "posts", postID));
          if (ss.exists()) {
            const temp = ss.data();
            return {
              ...temp,
              id: ss.id,
              date_created: new Date(temp.date_created.seconds * 1000),
            };
          } else {
            return false;
          }
        })
      );
      console.log({ res });
      const data = res.filter((p) => Boolean(p));
      console.log({ data });
      return data;
    },
    { enabled: !!userData }
  );
  const savedPostsData = savedPostsQuery?.data || [];
  console.log("savedPostsData", savedPostsData);

  const [customPrompt, setCustomPrompt] = useState(`Loading...`);
  const [invalidParams, setInvalidParams] = useState([]);

  useEffect(() => {
    setCustomPrompt(userData.prompt);
  }, [userData]);

  const handlePromptChange = (e) => {
    const val = e.target.value;
    const temp = paramsArr.filter((p) => !val.includes(p));
    setInvalidParams(temp);
    setCustomPrompt(val);
  };
  const handlePromptSave = async () => {
    if (invalidParams.length) {
      return errorToast("Please resolve all error in prompt");
    }
    const res = await await toast.promise(
      request.post("/user/prompt", { prompt: customPrompt }),
      { pending: "Saving your prompt!" }
    );
    if (res.data && res.data.success) {
      successToast("Prompt saved successfully!");
    } else {
      errorToast("Could save the prompt");
    }
  };
  const resetPrompt = async () => {
    const res = await toast.promise(request.get("/user/prompt/reset"), {
      pending: "Resetting your prompt!",
    });
    if (res.data && res.data.success) {
      successToast("Prompt reset successfully!");
      setCustomPrompt(res.data.prompt);
    } else {
      errorToast("Could reset the prompt");
    }
  };
  useEffect(() => {
    document.title = "Reacti.Ai | Prompts";
  }, []);
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
        / Prompts
      </h1>

      <div
        className="profileInfoCard"
        style={{ minHeight: "6rem", height: "6rem" }}
      >
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/02f0b893570193.5e697092c4790.gif"></img>
        <div style={{ margin: "auto", width: "90%" }}>
          <h1>
            Your <span className="gPurple">Custom Prompt</span>
          </h1>
          <h2>Manage all your prompts here or create a new one</h2>
        </div>
      </div>
      {/* <div className="miniBar1">
        <div
          className="sidebarButton flex"
          style={{ width: "20%", minWidth: "10rem", margin: "0" }}
        >
          <GrAddCircle style={{ marginRight: "1rem" }} size={24}></GrAddCircle>
          <div>
            <h1 className="text-base whitespace-nowrap">New prompt</h1>
          </div>
        </div>
        <div className="sidebarButton" style={{ width: "55%", margin: "0" }}>
          <GrSearch style={{ marginRight: "1rem" }}></GrSearch>
          <input
            placeholder="Search Prompts"
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
      </div> */}


        <div>
        {/* <button className="ml-auto btn1 z-[999] relative w-fit font-manrope font-bold text-lg text-white px-[28px] py-[5px] bg-[#0E45B7AB] rounded-[4px]">
        RESET
      </button> */}
          {/*
          <h2>Your active prompt:</h2>

      <textarea className="p-[20px] white-border outline-none mt-[11px] mb-[14px] w-full h-[179px] text-white bg-transparent rounded-[13px]" value={customPrompt} onChange={handlePromptChange}></textarea>
      <button className="sidebarButton justify-center" style={{width:"16rem",textAlign:"center"}} onClick={handlePromptSave}>
        save
      </button>
      <div className="mt-[15px] font-manrope font-bold text-sm leading-[19px]">
        <p>Note</p>
        <p>These parameters in your prompt are compulsory.</p>
        <ul className="list-disc list-inside">
          <li>&lt;tweet&gt; The tweet text fetched from the twitter page</li>
          <li>
            &lt;tone&gt;The chosen tone. 'Normal' will be passed when using
            custom comment
          </li>
          <li>
            &lt;comment&gt; The comment passed by user.Left blank when sing
            tones
          </li>
          <li>&lt;characterLimit&gt;Characters limit selected</li>
          <li>&lt;language&gt;Language selected</li>
        </ul>
      </div> 
          */}
     
        </div>
      <div>
        <h1 className="mb-4">Saved Prompts</h1>
        <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "2rem 0",
          width: "100%",
          margin: "2rem auto",
        }}
      >
        {savedPostsData?.length ?savedPostsData.map((item) => {
          return <SavedPromptCard data={item} key={item.id} />;
        }):
        <p>No saved prompts found!!</p> }
      </div>
      </div>
    </>
  );
};
export default MyPromptsTab;
