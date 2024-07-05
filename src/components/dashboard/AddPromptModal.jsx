import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useMutation, useQueryClient } from "react-query";
import { useForm } from "react-hook-form";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { firestoreDB } from "../../config/firebase";
import { errorToast, successToast } from "../../utils/notify";

const paramsArr = [
  "<tweet>",
  "<tone>",
  "<comment>",
  "<characterLimit>",
  "<language>",
];
const AddPromptModal = ({ openModal, setOpenModal, showPromptData }) => {
  // showPromptData => disable all buttons
  const [invalidParams, setInvalidParams] = useState([]);
  const [customPrompt, setCustomPrompt] = useState(
    showPromptData?.prompt || ""
  );
  const [customTitle, setCustomTitle] = useState(showPromptData?.title || "");
  const queryClient = useQueryClient();
  const resetModalData = ()=>{
    setCustomPrompt("")
    setCustomTitle("")
    setInvalidParams([])
  }
  const handlePromptChange = (e) => {
    const val = e.target.value;
    const temp = paramsArr.filter((p) => !val.includes(p));
    setInvalidParams(temp);
    setCustomPrompt(val);
  };

  const addPostMutation = useMutation({
    mutationFn: async () => {
      if (invalidParams.length) {
        return errorToast("Please resolve all error in prompt");
      }
      const data = {
        title: customTitle,
        date_created: serverTimestamp(),
        likes_count: 0,
        prompt: customPrompt,
      };
      const docRef = await addDoc(collection(firestoreDB, "posts"), data);
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      setOpenModal(false)
      resetModalData()
      successToast("Prompt published to marketplace");
    },
  });
  return (
    <div
      className={`prompt-modal ${
        !openModal && "hidden"
      } z-[11] fixed top-0 left-0 w-full h-[100vh] bottom-0 bg-black/10 flex justify-center items-center`}
    >
      <div className="relative w-[85%] lg:w-[894px] h-fit xmd:h-[428px] bg-black text-white rounded-md px-[60px] pt-[50px] pb-[30px] flex flex-col justify-end white-border">
        <FaTimes
          color="#fff"
          onClick={() => {resetModalData();setOpenModal(false)}}
          className="absolute top-[10px] right-[10px] text-[30px] cursor-pointer"
        />

        <form onSubmit={(e)=>{e.preventDefault();addPostMutation.mutate()}}>
          <div className="w-full  rounded-md border-[1px]  flex flex-col lg:flex-row gap-[10px]">
            {" "}
            <div className="flex flex-col w-full">
              <input
                placeholder="Prompt Title"
                className="w-full mb-5 py-2 px-2  rounded-sm focus:outline-none text-white bg-transparent 
white-border"
                maxLength={100}
                type="text"
                value={showPromptData?.title || customTitle}
                onChange={(e) => {
                  setCustomTitle(e.target.value);
                }}
                readOnly={showPromptData?.title}
              />
              <textarea
                placeholder="Your prompt goes here"
                className={`w-full text-white bg-transparent p-3 border ${
                  invalidParams.length > 0
                    ? "border-red-500 border-[2px]"
                    : "white-border border-[2px]"
                }`}
                value={showPromptData?.prompt || customPrompt}
                rows="10"
                onChange={handlePromptChange}
                readOnly={showPromptData?.prompt}
              ></textarea>

              <p
                className={`text-red-400 opacity-0 transition-opacity text-sm duration-300 ${
                  invalidParams.length > 0 && "opacity-100"
                }`}
              >
                Missing following params:{invalidParams.join(",")}
              </p>

              <button
                className={`mt-[20px] py-2 px-2  rounded-sm focus:outline-none text-white bg-transparent white-border ${showPromptData && "hidden"}`}
                disabled={addPostMutation.isLoading}
              >
                {addPostMutation.isLoading ? "Saving...." : "Save & Publish"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPromptModal;
