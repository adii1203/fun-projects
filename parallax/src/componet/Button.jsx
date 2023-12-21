import { motion, useSpring, useTransform } from "framer-motion";

const Button = ({ x, y, title, top, left, index }) => {
  const transFormX = useTransform(
    x,
    [-0.5, 0.5],
    [(30 * index) / 2, (-20 * index) / 2]
  );
  const transFormY = useTransform(
    y,
    [-0.5, 0.5],
    [(30 * index) / 2, (-20 * index) / 2]
  );

  const xSpring = useSpring(transFormX, {
    stiffness: 300,
    damping: 20,
    mass: 0.5,
  });
  const ySpring = useSpring(transFormY, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  return (
    <motion.button
      whileHover={{ scale: 1.4 }}
      style={{
        x: xSpring,
        y: ySpring,
        transformStyle: "preserve-3d",
        top: top,
        left: left,
      }}
      className="absolute capitalize bg-white hover:shadow-custom transition-all origin-center duration-100 rounded-lg text-center border-[1px] w-40 py-2 hover:bg-red-100 hover:z-50 hover:border-red-500/50">
      <p>{title}</p>
    </motion.button>
  );
};

export default Button;
