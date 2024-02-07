import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Createpost from "./components/Createpost";
import PostList from "./components/PostList";
import { PostListStore } from "./store/Post-list-store";
const App = () => {
  const [selectedTab, setselectedTab] = useState("Home");
  const changeClickedValue = (str) => {
    setselectedTab(str);
  };
  return (
    <PostListStore>
      <div className="d-flex">
        <Sidebar
          selectedTab={selectedTab}
          changeClickedValue={changeClickedValue}
        />
        <div className="w-100">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <Createpost />}
          <Footer />
        </div>
      </div>
    </PostListStore>
  );
};

export default App;
