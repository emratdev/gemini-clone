import {assets} from "../../assets/assets";

export const Main = () => {
    return (
      <div className="main flex-1 min-h-screen pb-[15vh] relative">
        <div className="nav flex items-center justify-between text-[22px] p-5 text-[#585858]">
          <p>Gemini</p>
          <img className="w-12 rounded-[50%]" src={assets.user_icon} alt="" />
        </div>

        <div className="main-container max-w-[900px] mx-auto">
          <div className="greet mx-12 text-5xl text-[#c4c7c5] font-medium p-5">
            <p>
              <span className="bg-[linear-gradient(16deg,#4b90ff,#ff5546)] bg-clip-text text-transparent">
                Hello, Dev
              </span>
            </p>
            <p>How can I help you today?</p>
          </div>

          <div className="cards grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 p-5">
            <div className="card h-50 p-4 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea]">
              <p className="text-[#585858] text-lg">
                Suggest beautiful places to see upcoming...
              </p>
              <img
                className="w-9 p-1 absolute bg-white rounded-2xl bottom-2 right-2"
                src={assets.compass_icon}
                alt=""
              />
            </div>

            <div className="card h-50 p-4 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea]">
              <p className="text-[#585858] text-lg">
                Briefly explain how to use Gemini ...
              </p>
              <img
                className="w-9 p-1 absolute bg-white rounded-2xl bottom-2 right-2"
                src={assets.bulb_icon}
                alt=""
              />
            </div>

            <div className="card h-50 p-4 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea]">
              <p className="text-[#585858] text-lg">
                Find me the best places to visit...
              </p>
              <img
                className="w-9 p-1 absolute bg-white rounded-2xl bottom-2 right-2"
                src={assets.message_icon}
                alt=""
              />
            </div>

            <div className="card h-50 p-4 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea]">
              <p className="text-[#585858] text-lg">
                When is the best time to go...
              </p>
              <img
                className="w-9 p-1 absolute bg-white rounded-2xl bottom-2 right-2"
                src={assets.code_icon}
                alt=""
              />
            </div>
          </div>

          <div className="main-bottom absolute bottom-0 w-full max-w-[900px] px-5 m-auto">
            <div className="search-box flex items-center justify-between gap-5 bg-[#f0f4f9] px-5 py-3 rounded-[50px]">
              <input className="flex-1 bg-transparent outline-none p-2 text-[18px]" type="text" placeholder="Enter a prompt here" />
              <div className="flex items-center gap-4 ">
                <img
                  className="w-6 cursor-pointer"
                  src={assets.gallery_icon}
                  alt=""
                />
                <img
                  className="w-6 cursor-pointer"
                  src={assets.mic_icon}
                  alt=""
                />
                <img
                  className="w-6 cursor-pointer"
                  src={assets.send_icon}
                  alt=""
                />
              </div>
            </div> 

            <p className="bottom-info text-sm mx-auto my-4 text-center font-light">
              Gemini may display inaccurate info, including about people, so
              double check before sharing.
            </p>
          </div>
        </div>
      </div>
    );
}