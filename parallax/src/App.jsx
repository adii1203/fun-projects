import { useMotionValue } from "framer-motion";
import { useWindowSize } from "react-use";
import Button from "./componet/Button";

function App() {
  const { width } = useWindowSize();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handelMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const xPct = mouseX / width - 0.5;
    const yPtc = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPtc);
  };

  const data = [
    {
      id: 10,
      title: "bootstrap",
      top: "160px",
      left: "540px",
    },
    {
      id: 11,
      title: "html",
      top: "160px",
      left: "690px",
    },
    {
      id: 12,
      title: "css",
      top: "160px",
      left: "840px",
    },
    {
      id: 3,
      title: "express js",
      top: "160px",
      left: "390px",
    },
    {
      id: 4,
      title: "mongo db",
      top: "300px",
      left: "540px",
    },
    {
      id: 5,
      title: "react native",
      top: "440px",
      left: "390px",
    },
    {
      id: 6,
      title: "firebase",
      top: "440px",
      left: "90px",
    },
    {
      id: 7,
      title: "redux",
      top: "440px",
      left: "240px",
    },
    {
      id: 8,
      title: "sass",
      top: "300px",
      left: "690px",
    },
    {
      id: 9,
      title: "tailwind css",
      top: "160px",
      left: "840px",
    },
    {
      id: 16,
      title: "figma",
      top: "440px",
      left: "840px",
    },
    {
      id: 17,
      title: "photoshop",
      top: "440px",
      left: "690px",
    },
    {
      id: 18,
      title: "illustrator",
      top: "440px",
      left: "540px",
    },

    {
      id: 13,
      title: "javascript",
      top: "160px",
      left: "990px",
    },
    {
      id: 19,
      title: "react app",
      top: "300px",
      left: "240px",
    },
    {
      id: 20,
      title: "node js",
      top: "160px",
      left: "90px",
    },
    {
      id: 14,
      title: "git",
      top: "300px",
      left: "990px",
    },
    {
      id: 15,
      title: "github",
      top: "440px",
      left: "990px",
    },
  ];

  return (
    <>
      {width > 700 ? (
        <div
          onMouseMove={handelMouseMove}
          className="h-screen overflow-hidden relative grid place-content-center">
          {data.map((item) => {
            return (
              <Button
                key={item.id}
                x={x}
                y={y}
                title={item.title}
                top={item.top}
                left={item.left}
                index={item.id}
              />
            );
          })}
        </div>
      ) : (
        <div className="grid place-content-center h-screen">
          <div>
            <div className=" capitalize font-semibold text-md font-mono bg-gray-300/40 px-6 py-4 rounded-md ">
              this site only works on desktop
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default App;
