import { GrAddCircle, GrCloudDownload, GrSearch } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { collection, getDocs } from "firebase/firestore";
import { firestoreDB } from "../../config/firebase";
import MarketPlacePromptItemCard from "./MarketPlacePromptItemCard";
import AddPromptModal from "./AddPromptModal";

const MarketPlaceTab = () => {
  const { userData, user } = useAuthContext();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [modalOpen, setModalOpen] = useState(false)
  const [dataToShowInPromptModal, setDataToShowInPromptModal] = useState(false)
  useEffect(() => { 
    document.title = "SuperX | Marketplace";
  }, []);

  const postsQuery = useQuery(
    ["posts", userData?.likedPosts],
    async () => {
      const snapshot = await getDocs(collection(firestoreDB, "posts"));
      const data = [];
      if (snapshot.empty) {
        return data;
      }
      snapshot.forEach((ss) => {
        const temp = ss.data();
        data.push({
          ...temp,
          id: ss.id,
          date_created: new Date(temp.date_created.seconds * 1000),
        });
      });
      return data;
    },
    { enabled: !!user }
  );
  const postsData = postsQuery?.data || [];
  console.log("postData",postsData)
  const filteredPostsData = searchKeyword ? postsData?.filter(p=>p.title?.toLowerCase()?.includes(searchKeyword.toLowerCase())) : postsData
  console.log(404,filteredPostsData,searchKeyword)
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
        / Marketplace
      </h1>

      <div
        className="profileInfoCard"
        style={{ minHeight: "6rem", height: "6rem" }}
      >
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/02f0b893570193.5e697092c4790.gif"></img>
        <div style={{ margin: "auto", width: "90%" }}>
          <h1>
            SuperX <span className="gPurple">Marketplace</span>
          </h1>
          <h2>Add pre-existing prompts made by our community</h2>
        </div>
      </div>
      <div className="miniBar1">
        <div className="sidebarButton" style={{ width: "80%", margin: "0 10px 0 0"}}>
          <GrSearch style={{ marginRight: "1rem" }}></GrSearch>
          <input
            placeholder="Search Marketplace"
            style={{
              background: "transparent",
              width: "100%",
              outline: "none",
              border: "none",
              color: "white",
              fontSize: "0.9rem",
            }}
            value={searchKeyword}
            onChange={(e)=>{setSearchKeyword(e.target.value)}}
          />
        </div>
        <div onClick={()=>{setDataToShowInPromptModal(false);setModalOpen(true)}} className="sidebarButton" style={{width:"20%",minWidth:'10rem' , margin:'0',padding:"0 16px"}}>
                <GrAddCircle style={{marginRight:'1rem',width:"1rem"}}></GrAddCircle >
                <h1 style={{fontSize:'1rem',whiteSpace:"nowrap"}}>Add Your Prompt</h1>
            </div>
      </div>

      <div
        className="w-full grid grid-cols-2 gap-12"
      >
        {filteredPostsData.map((post) => {
          return (
            <MarketPlacePromptItemCard key={post.id} data={post} setDataToShowInPromptModal={(d)=>{
              setDataToShowInPromptModal(d)
              setModalOpen(true)
            }}/> 
          );
        })}
      </div>
      <AddPromptModal openModal={modalOpen} setOpenModal={setModalOpen} showPromptData={dataToShowInPromptModal}/>
    </>
  );
};

export default MarketPlaceTab;
