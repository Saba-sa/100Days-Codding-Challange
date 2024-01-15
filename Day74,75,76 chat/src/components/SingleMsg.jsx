import React, { useState,useRef ,useEffect} from "react";
import { useAppStore } from "../Hook/DataContext";
import { FaEllipsisV } from "react-icons/fa";
import SingleContact from "./SingleContact";
import { v4 as uuidv4 } from "uuid";
import Actionbtns from "./Actionbtns";
const MsgPortion = ({ name }) => {
  const { showMessagesOf, allContacts, setAllContacts ,date} = useAppStore();
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(false);
  const [idUpdatedItem, setIdUpdatedItem] = useState(0);
  const messages = showMessagesOf.messages;



  function sendTheMsg() {
    if (msg) {
      const temp = allContacts.map((i) => {
        if (i.id === showMessagesOf.id) {
          if(i.messages.length>0){
            let temp = {
              id:uuidv4(),
              text: msg,
              timeOfSending: date,
            };
            i.messages[i.messages.length - 1].replies.push(temp);
            setMsg("");
            return i;
          }else{
            const tempMessages={
              id:1,
            text:"",
            timeOfSending:'',
            replies:[
           {
              id:1,
              text: msg,
              timeOfSending: date,
            }
          ]}
            i.messages.push(tempMessages);
            setMsg("");
            return i;
            
          }
        } else {
          return i;
        }
      });
      setAllContacts(temp);
    } else {
      alert("plz write some thing");
    }
  }
const focusHandle=useRef();
function focus(){
  focusHandle.current.focus();
}

const showMenu=(id)=>{
 console.log(' clicked');
  setShow(id)
}

const edit=(id)=>{
  setUpdate(true)
  messages[messages.length-1].replies.map(msg=>{
    if(msg.id===id){
      setMsg(msg.text)
      setIdUpdatedItem(id)
  }
})
}
const updateTheMsg = () => {
  if (msg) {
    const temp = allContacts.map((i) => {
      if (i.id === showMessagesOf.id) {
        i.messages[messages.length - 1].replies = i.messages[
          messages.length - 1
        ].replies.map((reply) =>
          reply.id === idUpdatedItem
            ? {
                id: idUpdatedItem,
                text: msg,
                timeOfSending: date,
              }
            : reply
        );
      }
      return i;
    });
    setAllContacts(temp);
    setUpdate(false);
    setMsg("");
    setIdUpdatedItem(0);
    setShow('3435')
  } else {
    alert("Please write something");
  }
};

const del = (id) => {
  const temp = allContacts.map((i) => {
    if (i.id === showMessagesOf.id) {
      i.messages[messages.length - 1].replies = i.messages[messages.length - 1].replies.filter((reply) => reply.id !== id);
    }
    return i;
  });
  setAllContacts(temp);
  setShow('3435');
};

const bump=(id)=>{

  const tempMsg = allContacts.map((i) => {
    if (i.id === showMessagesOf.id) {
      const updatedReplies = i.messages[messages.length - 1].replies.filter(reply => reply.id === id);
        setMsg(updatedReplies[0].text)
        console.log('updatedReplies',updatedReplies);
        if(msg){
          console.log('msg',msg);
  sendTheMsg();

}
      setShow('3435');
      }
      });
  console.log(tempMsg);
};

return (
    <div className="flex flex-col h-full w-full bg-white px-4 py-6">
      <div className="h-full overflow-hidden py-4">
        <div className="h-full overflow-y-auto">
          <div className="grid grid-cols-12 gap-y-2">
          {messages.length>0?'':<p className="text-blue-700  w-full p-2" onClick={focus}>Start Chat...</p>}
            {messages.map((msg) => {
              return (
                <div
                  className="col-start-1 col-end-12 p-3 rounded-lg"
                  key={msg.id}
                >
                  {msg.text.length>0?<div className="flex flex-row items-center">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      {name[0]}
                    </div>
                    <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                      <div>{msg.text}</div>
                    </div>
                  </div>:''}
                  {msg.replies.length > 0
                    ? msg.replies.map((reply) => {
                        const { id, text ,timeOfSending} = reply;
                    
                        return (
                          <div
                            className="col-start-6 col-end-13 p-3 rounded-lg"
                            key={id}
                          >
                            <div className="flex items-center justify-start flex-row-reverse">
                             <div className="flex items-center">
                             
                             <FaEllipsisV onClick={() => showMenu(id)}/>
                            
                                {show === id && <Actionbtns id={id} edit={edit} del={del} bump={bump}/>}
                            
                             </div>
                              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                A
                              </div>
                              <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                                <div>{text}</div>
                              <div className="text-xs text-gray-500">{timeOfSending}</div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : ""}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center w-full overflow-hidden">
          <div className="w-full">
            <input
              type="text"
              className=" focus:outline-none text-sm h-9 flex items-center w-full border border-pink-300 rounded-3xl px-4  focus:border-pink-700"
              placeholder="Type your message...."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              ref={focusHandle}
            />
          </div>
        </div>
        <div className="ml-3">
         { update?
          <button
            className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-900 hover:bg-indigo-700 text-white text-white"
            onClick={updateTheMsg}
          >
            <svg
              className="w-5 h-5 transform rotate-90 -mr-px"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
          :
          <button
            className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-900 hover:bg-indigo-700 text-white text-white"
            onClick={sendTheMsg}
          >
            <svg
              className="w-5 h-5 transform rotate-90 -mr-px"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
          
          }
        </div>
      </div>
    </div>
  );
};

export default MsgPortion;
