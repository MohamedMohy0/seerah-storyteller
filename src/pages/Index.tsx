import { useState } from "react";
import { motion } from "framer-motion";
import NoorGuide from "@/components/NoorGuide";
import TopicCard from "@/components/TopicCard";
import { topics } from "@/data/topics";

const Index = () => {
  const [hoveredTopic, setHoveredTopic] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Hero Section */}
      <header className="relative py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          >
            <NoorGuide size="lg" />
            <span className="text-sm font-medium text-muted-foreground">
              مرشدتك: نور
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-medium tracking-tight text-foreground mb-6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          >
            السيرة النبوية
            <br />
            <span className="text-muted-foreground">رحلة هداية وبناء</span>
          </motion.h1>

          <motion.p
            className="text-lg leading-relaxed text-muted-foreground max-w-2xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          >
            استكشف أحداثًا محورية من سيرة النبي محمد ﷺ، مُقدّمة بأسلوب قصصي
            مبسّط يُعمّق الفهم ويُقرّب الدروس.
          </motion.p>
        </div>
      </header>

      {/* Topics Section */}
      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            className="text-2xl font-medium text-foreground mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            المواضيع
          </motion.h2>
          <motion.p
            className="text-base text-muted-foreground mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            اختر موضوعًا للبدء في رحلة التعلّم
          </motion.p>

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
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <NoorGuide size="sm" />
            <span className="text-sm font-medium text-muted-foreground">السيرة النبوية</span>
          </div>
          <p className="text-sm text-muted-foreground">
            موقع تعليمي تفاعلي لتعلّم السيرة النبوية بأسلوب مبسّط
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
