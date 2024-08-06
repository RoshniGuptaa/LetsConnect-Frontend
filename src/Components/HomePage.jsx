import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import {
  BsEmojiSmile,
  BsFilter,
  BsMicFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { TbCircleDashed } from "react-icons/tb";
import ChatCard from "./ChatCard/ChatCard";
import img from "../image/chat.png";
import MessageCard from "./MessageCard/MessageCard";
import { ImAttachment } from "react-icons/im";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Profile from "./Profile/Profile";
import CreateGroup from "./Group/CreateGroup";

const HomePage = () => {
  const [querys, setQuerys] = useState(null);
  const [currentChat, setCurrentChat] = useState(null);
  const [content, setContent] = useState(null);
  const [isProfile, setIsProfile] = useState(null);
  const navigate = useNavigate();
  const handleClickOnChartCard = () => {
    setCurrentChat(true);
  };
  const handleSearch = () => {};

  const handleCreateNewMessage = () => {};

  const handleNavigate = () => {
    setIsProfile(true);
  };

  const handleCloseOpenProfile = () => {
    setIsProfile(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
   const[isGroup,setIsGroup]=useState(false)
  const handleCreateGroup=()=>{
   setIsGroup(true);
  }
  return (
    <div className="relative">
      <div className="  py-14 bg-[#135D66] w-full"></div>

      <div className="flex bg-[#f0f2f5] h-[90vh] absolute top-6 left-[2vw] w-[96vw]">
        <div className="left w-[30%] bg-[#003C43] h-full">
         {isGroup && (<CreateGroup></CreateGroup>)}
          {/*Profile  */}
          {isProfile && !isGroup && (
            <div className="w-full h-full">
              <Profile handleCloseOpenProfile={handleCloseOpenProfile} />
            </div>
          )}

          {!isProfile && (
            <div className="w-full">
              {/* Home */}
              {
                <div className=" flex justify-between items-center p-3">
                  <div
                    onClick={handleNavigate}
                    className="flex item-center space-x"
                  >
                    <img
                      className="rounded-full w-10 h-10 cursor-pointer"
                      src="https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg"
                      alt=""
                    />
                    <p>username</p>
                  </div>
                  <div className="space-x-3 text-2xl flex">
                    <TbCircleDashed
                      className="cursor-pointer"
                      onClick={() => navigate("/status")}
                    />
                    <BiCommentDetail />
                    <div>
                      
                      
                        <BsThreeDotsVertical id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick} />
                     

                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleCreateGroup}>Create Group</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </Menu>
                    </div>
                  </div>
                </div>
              }
              <div className="relative flex justify-center items-center bg-[#003C43] py-4 px-3">
                <input
                  className="border-none outline-none bg-slate-200 rounded-md w-[93%] pl-9 py-2"
                  type="text"
                  placeholder="Search or Start new chat"
                  onChange={(e) => {
                    setQuerys(e.target.value);
                    handleSearch(e.target.value);
                  }}
                  value={querys}
                />
                <AiOutlineSearch className="left-5 top-7 absolute" />
                <div>
                  <BsFilter className="ml-4 text-3xl" />
                </div>
              </div>
              {/* all users */}
              <div className="bg-white overflow-y-scroll h-[76.8vh] px-3">
                {querys &&
                  [1, 1, 1, 1, 1].map((item) => (
                    <div onClick={handleClickOnChartCard}>
                      {" "}
                      <hr /> <ChatCard />
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
        {/* Default WhatsApp page */}
        {!currentChat && (
          <div className="w-[70%]  bg-[#f0f2f5] flex flex-col  items-center justify-center h-full ">
            <div className=" max-w-[70%] text-center">
              <img src={img} alt="no no" />
              <h1 className="text-4xl text-gray-600">LetsConnect</h1>
              <p className="my-9">
                {" "}
                transforming society and shaping the future through chat.
              </p>
            </div>
          </div>
        )}

        {/* Message part */}
        {currentChat && (
          <div className="w-[70%] relative bg-[#E3FEF7]">
            <div className="header absolute top-0 w-full bg-[#003C43]">
              <div className="flex justify-between">
                <div className="py-3 px-3 flex space-x-4 flex item-center ">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_640.jpg"
                    alt=""
                  />
                  <p>username</p>
                </div>
                <div className="py-3 space-x-4 flex items-center px-3">
                  <AiOutlineSearch />
                  <BsThreeDotsVertical />
                </div>
              </div>
            </div>

            {/* Message Section */}
            <div className="px-10 h-[85vh] overflow-y-scroll">
              <div className="space-y-1 flex flex-col justify-center  mt-20 py-2">
                {[1, 1, 1, 1, 1].map((item, i) => (
                  <MessageCard
                    isReqUsermessage={i % 2 === 0}
                    content={"message"}
                  />
                ))}
              </div>
            </div>

            {/* footer part */}
            <div className="footer absolute bottom-0 w-full py-3 text-2xl bg-[#f0f2f5]">
              <div className="flex justify-between item-center px-5 relative ">
                <BsEmojiSmile className="cursor-pointer" />
                <ImAttachment />

                <input
                  className="py-2 couline-none border-none bg-white pl-4 rounded-md w-[85%]"
                  type="text"
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="type message"
                  value={content}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleCreateNewMessage();
                      setContent("");
                    }
                  }}
                />
                <BsMicFill />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
