import { animate, motion } from "framer-motion";

// variants
const StairsAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"]
  },
};

const reverseIndex = (index)=> {
const totalSteps = 6; // number of steps
}
const Stairs = () => {
  return <>
  {/* render 6 motion divs, each representing o step of the stairs.
  Each duv will have the same animation defined by the stairsAnimation object.
  The delay for each div is calculateed sinomically based on it's reversed index,
  creating o staggered effect with decreasing delay for each subsequent step.
  */}
  {[...Array(6)].map((_, index)=> {
    return (
  <motion.div
  key={index}
  variants={StairsAnimation}
  initial="initial"
  animate="animate"
  exit="exit"
  transition={{
    duration: 0.4,
    ease: "easeInOut",
    delay: reserveIndex(index) * 0.1,
  }}
  className="h-full w-full bg-white relative"
  />
);
  })}
  </>
};

export default Stairs