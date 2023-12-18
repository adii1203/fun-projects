import { useState } from "react";

function App() {
  return (
    <>
      <div className="h-screen bg-[#171717] grid place-content-center">
        <Button />
      </div>
    </>
  );
}

const Button = () => {
  const [hovering, setHovering] = useState(0);
  const [left, setLeft] = useState(0);
  return (
    <>
      <div
        onMouseLeave={() => setHovering(null)}
        className="bg-[#EDEDED]  w-[300px] relative px-1 py-1 rounded-md flex justify-between gap-3">
        <button
          onMouseEnter={(e) => {
            setHovering(1);
            setLeft(e.target.offsetLeft + e.target.offsetWidth / 2 - 16);
          }}
          className={`capitalize font-semibold hover:text-white hover:bg-purple-500 px-3 py-3 rounded transition-colors duration-300`}>
          creative
        </button>
        <button
          onMouseEnter={(e) => {
            setHovering(2);
            setLeft(e.target.offsetLeft + e.target.offsetWidth / 2 - 16);
          }}
          className={`capitalize font-semibold hover:text-white hover:bg-emerald-500 px-3 py-3 rounded transition-colors duration-300`}>
          balanced
        </button>
        <button
          onMouseEnter={(e) => {
            setHovering(3);
            setLeft(e.target.offsetLeft + e.target.offsetWidth / 2 - 16);
          }}
          className={`capitalize hover:bg-blue-600 hover:text-white font-semibold px-3 py-3 rounded transition-colors duration-300`}>
          precise
        </button>

        {!!hovering && (
          <div className="absolute w-[300px] mx-auto top-12 pt-5">
            <span
              style={{ left: `${left}px` }}
              className=" top-3 absolute w-0 h-0 bg-transparent duration-300 border-r-[10px] border-r-transparent border-b-[10px] border-b-white border-l-[10px] border-l-transparent"
            />
            {hovering === 1 ? (
              <div className="bg-white p-2 rounded shadow-lg shadow-white/10">
                <p>
                  clean your conversation and start an original and imagination
                  chat.
                </p>
              </div>
            ) : hovering === 2 ? (
              <div className="bg-white p-2 rounded shadow-lg shadow-white/10">
                <p>
                  clean your conversation and start an informative and friendly
                  chat.
                </p>
              </div>
            ) : (
              <div className="bg-white p-2 rounded shadow-lg shadow-white/10">
                <p>
                  clean your conversation and start a concise and straight
                  forword chat.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
