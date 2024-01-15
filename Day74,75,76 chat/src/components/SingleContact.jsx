import React from "react";
import { useAppStore } from "../Hook/DataContext";

const SingleContact = () => {
  const { allContacts, setShowMessagesOf } = useAppStore();
  function showContact(id) {
    const tempContactItem = allContacts.filter((contact) => contact.id === id);
    setShowMessagesOf(tempContactItem[0]);
  }
  return (
    <div>
      {allContacts.map((contact) => {
        const { id, name, timeOfActive, messages } = contact;
        return (
          <div
            className="relative flex flex-row items-center p-4 cursor-pointer"
            key={id}
            onClick={() => showContact(id)}
          >
            <div className="absolute text-xs text-gray-500 right-0 top-0 mr-4 mt-3">
              {timeOfActive}
            </div>
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
              {name[0]}
            </div>
            <div className="flex flex-col flex-grow ml-3">
              <div className="text-sm font-medium">{name}</div>
              <div className="text-xs truncate w-40">
                {messages.length>0 ? messages[contact.messages.length - 1].text:<p className="text-blue-600">New Contact</p>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleContact;
