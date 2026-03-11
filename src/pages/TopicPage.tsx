import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import NoorGuide from "@/components/NoorGuide";
import { topics } from "@/data/topics";

const TopicPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const topic = topics.find((t) => t.slug === slug);

  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background" dir="rtl">
        <p className="text-muted-foreground">لم يتم العثور على هذا الموضوع</p>
      </div>
    );
  }

  const currentIndex = topics.findIndex((t) => t.slug === slug);
  const nextTopic = topics[currentIndex + 1];
  const prevTopic = topics[currentIndex - 1];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slug}
        className="min-h-screen bg-background"
        dir="rtl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
      >
        {/* Navigation */}
        <nav className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <ArrowRight className="w-4 h-4" />
              العودة للمواضيع
            </button>
            <div className="flex items-center gap-2">
              <NoorGuide size="sm" />
              <span className="text-xs text-muted-foreground">نور</span>
            </div>
          </div>
        </nav>

        {/* Header */}
        <header className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-medium text-muted-foreground tabular-nums">
                  {String(topic.id).padStart(2, "0")}
                </span>
                <span className="text-sm text-muted-foreground">·</span>
                <span className="text-sm text-primary font-medium">{topic.year}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4">
                {topic.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {topic.description}
              </p>
            </motion.div>
          </div>
        </header>

        {/* Content */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-6">
              {topic.content.map((paragraph, i) => (
                <motion.p
                  key={i}
                  className="text-lg leading-[1.9] text-foreground"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + i * 0.1,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </section>

        {/* Lessons */}
        <section className="pb-24">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              className="rounded-xl bg-muted p-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <NoorGuide size="sm" />
                <h2 className="text-xl font-medium text-foreground">
                  الدروس والعبر
                </h2>
              </div>
              <ul className="space-y-3">
                {topic.lessons.map((lesson, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-sm text-primary font-medium tabular-nums mt-1 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base text-foreground leading-relaxed">
                      {lesson}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Navigation between topics */}
        <section className="border-t border-border py-12">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center justify-between">
              {prevTopic ? (
                <button
                  onClick={() => navigate(`/topic/${prevTopic.slug}`)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <span className="block text-xs text-muted-foreground mb-1">السابق</span>
                  <span className="font-medium">{prevTopic.title}</span>
                </button>
              ) : (
                <div />
              )}
              {nextTopic ? (
                <button
                  onClick={() => navigate(`/topic/${nextTopic.slug}`)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 text-left"
                >
                  <span className="block text-xs text-muted-foreground mb-1">التالي</span>
                  <span className="font-medium">{nextTopic.title}</span>
                </button>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default TopicPage;
