import { GrCloudDownload, GrSearch } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { collection, getDocs } from "firebase/firestore";
import { firestoreDB } from "../../config/firebase";
import MarketPlacePromptItemCard from "./MarketPlacePromptItemCard";

const MarketPlaceTab = () => {
  const { userData, user } = useAuthContext();

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
        <div className="sidebarButton" style={{ width: "95%", margin: "0" }}>
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
          ></input>
        </div>
        {/* <div className="sidebarButton" style={{width:"20%", minWidth:'10rem' , margin:'0'}}>
                <GrAddCircle style={{marginRight:'1rem'}}></GrAddCircle >
                <Link to={"/dashboard/home"}>
                <h1 style={{fontSize:'1rem'}}>Upload prompt</h1>
                </Link>
            </div> */}
      </div>

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
        {postsData.map((post) => {
          return (
            <MarketPlacePromptItemCard key={post.id} data={post}/> 
          );
        })}
      </div>
    </>
  );
};

export default MarketPlaceTab;
