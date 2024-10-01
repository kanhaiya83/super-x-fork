import { GrSearch, GrUserFemale } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import request from "../../config/request";
import { toast } from "react-toastify";
import { errorToast, successToast } from "../../utils/notify";
const avatarData = [
    {
        url:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/02f0b893570193.5e697092c4790.gif",
        "name":"Kai Stone",
        description:"Kai is a stoic girl, known for their unwavering skills."
    },
    {
        url:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/47a52693570193.5e697092c1cd0.gif",
        "name":"Sam Ember",
        description:"Sam Ember likes to pet cat. All his cats loves him too."
    },
    {
        url:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/18579193570193.5e697092c2e61.gif",
        "name":"Finn Sky",
        description:"Finn is a Pharmacist. She is health conscious and don't like dust."
    },
    {
        url:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/d86bae93570193.5e697092c3696.gif",
        "name":"Zoe Clark",
        description:"Zoe is a quick-witted and playful mischief-maker, always ready with a clever joke"
    },
]
export default function SectionAvatar(){

  const { userData } = useAuthContext();
  const avatarID = userData.avatarID || 0
  const userAvatarData= avatarData[avatarID]
  const handleAvatarUpdate=async(id)=>{
    const res = await toast.promise(
        request.post("/user/avatar", { avatarID:id}),
        { pending: "Saving your prompt!" }
      );
      if (res.data && res.data.success) {
        successToast("Avatar changed successfully!");
      } else {
        errorToast("Could not change the avatar");
      }
  }
    return(
    <>
    <h1 style={{fontSize: '1.2rem', margin: '1rem 0', color: '#b4b4b4eb', marginTop: '2rem'}}>/ Avatars</h1>

    <div className="profileInfoCard" style={{minHeight:'6rem', height:'6rem'}}>
                    <img src={userAvatarData.url}></img>
                    <div style={{margin:'auto', width:'90%'}}>
                        <h1>Your Avatar: <span className="gPurple">{userAvatarData.name.split(" ")[0]}</span></h1>
                        <h2>Select brand new avatars from our Community or create your Own</h2>
                    </div>
    </div>
    <div className="miniBar1">
        <div className="sidebarButton" style={{width:"95%" , margin:'0'}}>
            <GrSearch style={{marginRight:'1rem'}}></GrSearch  >
            <input placeholder="Search Marketplace" style={{background: 'transparent', width: '100%', outline: 'none', border: 'none', color: 'white', fontSize: '0.9rem'}}></input>
        </div>
        {/* <div className="sidebarButton" style={{width:"20%", minWidth:'10rem' , margin:'0'}}>
            <GrAddCircle style={{marginRight:'1rem'}}></GrAddCircle >
            <Link to={"/dashboard/home"}>
            <h1 style={{fontSize:'1rem'}}>Upload prompt</h1>
            </Link>
        </div> */}
    </div>      

    <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem 0', width: '100%', margin: '2rem auto'}}>
       

      {
        avatarData.map((avatar,index)=>{
            return   <div key={index} className="promptCard" style={{width:'14rem', margin: 'auto'}}>
            <h1>{avatar.name}</h1>
            <img src={avatar.url} style={{width: 'auto', height: '7rem'}}></img>
            <h2>
            {avatar.description}
            </h2>
            <button className="sidebarButton" style={{width:"90%", minWidth:'10rem' , margin:'0'}} onClick={()=>{handleAvatarUpdate(index)}} disabled={index==avatarID}>
                <GrUserFemale    style={{marginRight:'1rem'}}></GrUserFemale >
                <Link to={"/dashboard/home"}>
                <h1 style={{fontSize:'1rem'}}>{index==avatarID ? "Selected" : "Select"}</h1>
                </Link>
            </button>
        </div>
        })
      }
    </div>
    </>
    )
}