import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import NoorGuide from "./NoorGuide";

interface TopicCardProps {
  number: number;
  title: string;
  description: string;
  slug: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const TopicCard = ({ number, title, description, slug, isHovered, onHover, onLeave }: TopicCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="topic-card"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1], delay: number * 0.08 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={() => navigate(`/topic/${slug}`)}
    >
      <div className="flex items-start gap-4" dir="rtl">
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-sm font-medium text-muted-foreground tabular-nums">
            {String(number).padStart(2, "0")}
          </span>
          <div className="relative flex items-center justify-center w-6 h-6">
            {isHovered && <NoorGuide size="sm" />}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-medium text-foreground mb-1">{title}</h3>
          <p className="text-base text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TopicCard;
