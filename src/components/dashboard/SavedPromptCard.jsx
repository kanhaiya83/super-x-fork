import { GrMagic } from "react-icons/gr";
import { useMutation, useQueryClient } from "react-query";
import { firestoreDB } from "../../config/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/authContext";
import { successToast } from "../../utils/notify";

const SavedPromptCard = ({ data }) => {
  const {user} = useAuthContext()

  const queryClient = useQueryClient()
  const usePromptMutation = useMutation({
    mutationFn: async() => {
      const userRef = doc(firestoreDB, "users",user?.uid)
      const userUpdate = await updateDoc(userRef,{prompt:data.prompt,post_id:data.id,})
      await queryClient.invalidateQueries({queryKey:["userData"]})
      successToast("Set as the active prompt!!")
    },
  })
  return (
    <div className="promptCard">
      <h1>{data.title}</h1>
      <h2>
        {data.prompt.slice(0,80)}...
      </h2>
      <button

      onClick={()=>{if(!usePromptMutation.isLoading){toast.promise(usePromptMutation.mutateAsync(),{pending:"Saving the prompt",error:"Some error occurred!!"})}}}
        className="sidebarButton bg-transparent"
        style={{ width: "90%", minWidth: "10rem", margin: "0" }}
      >
        <GrMagic style={{ marginRight: "1rem" }}></GrMagic>
        <h1 style={{ fontSize: "1rem" }}>Use This</h1>
      </button>
    </div>
  );
};

export default SavedPromptCard;
