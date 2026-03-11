import { motion } from "framer-motion";

interface NoorGuideProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-5 h-5",
};

const NoorGuide = ({ className = "", size = "md" }: NoorGuideProps) => {
  return (
    <motion.div
      className={`noor-glow animate-noor-pulse ${sizes[size]} ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    />
  );
};

export default NoorGuide;
