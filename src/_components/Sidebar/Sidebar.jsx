import {assets } from "../../assets/assets";


export const Sidebar = () => {
    return (
      <div className="sidebar min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] py-6 px-4">
        <div className="top">
          <img className="menu w-[20px]" src={assets.menu_icon} alt="" />

          <div
            className="new-chat mt-2.5 inline-flex items-center gap-2.5 py-2.5 px-3.5 bg-[#e6eaf1] rounded-[50px]
          text-sm text-[#808080] cursor-pointer"
          >
            <img className="w-[20px]" src={assets.plus_icon} alt="" />
            <p>New Chat</p>
          </div>

          <div className="recent flex flex-col">
            <p className="recent-title mt-7 mb-4">Recent</p>
            <div className="recent-entry flex items-start gap-2 p-2 pr-10 rounded-xl text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
              <img
                className="w-[20px] ml-[10px] cursor-pointer"
                src={assets.message_icon}
                alt=""
              />
              <p>What is react...</p>
            </div>
          </div>
        </div>

        <div className="bottom flex flex-col ">
          <div
            className="bottom-item recent-entry flex items-center gap-2 p-2 pr-10 
          rounded-xl text-[#282828] cursor-pointer hover:bg-[#e2e6eb]"
          >
            <img className="w-[20px]" src={assets.question_icon} alt="" />
            <p>Help</p>
          </div>

          <div
            className="bottom-item recent-entry flex items-center gap-2 p-2 pr-1 
          rounded-xl text-[#282828] cursor-pointer hover:bg-[#e2e6eb]"
          >
            <img className="w-[20px]" src={assets.history_icon} alt="" />
            <p>Activity</p>
          </div>

          <div className="bottom-item recent-entry flex items-center gap-2 p-2 pr-1 
          rounded-xl text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
            <img className="w-[20px]" src={assets.setting_icon} alt="" />
            <p>Settings</p>
          </div>
        </div>
      </div>
    );
}