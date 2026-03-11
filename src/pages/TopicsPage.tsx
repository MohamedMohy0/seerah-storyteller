import { useState } from "react";
import { motion } from "framer-motion";
import NoorGuide from "@/components/NoorGuide";
import TopicCard from "@/components/TopicCard";
import { topics } from "@/data/topics";

const TopicsPage = () => {
  const [hoveredTopic, setHoveredTopic] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="flex items-center gap-3 mb-2">
            <NoorGuide size="md" />
            <h1 className="text-3xl md:text-4xl font-medium text-foreground">
              المواضيع
            </h1>
          </div>
          <p className="text-base text-muted-foreground mb-10 mr-7">
            اختر موضوعًا للبدء في رحلة التعلّم
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {topics.map((topic) => (
            <TopicCard
              key={topic.id}
              number={topic.id}
              title={topic.title}
              description={topic.description}
              slug={topic.slug}
              isHovered={hoveredTopic === topic.id}
              onHover={() => setHoveredTopic(topic.id)}
              onLeave={() => setHoveredTopic(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicsPage;
