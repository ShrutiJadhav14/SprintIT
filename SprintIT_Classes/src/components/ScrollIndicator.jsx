import { motion } from "framer-motion";

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-6 h-10 rounded-full border border-slate-600 flex justify-center"
      >
        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2" />
      </motion.div>
    </motion.div>
  );
}

export default ScrollIndicator;
