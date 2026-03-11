import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
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
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Header */}
      <header className="pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          >
            <button
              onClick={() => navigate("/topics")}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8"
            >
              <ArrowRight className="w-4 h-4" />
              العودة للمواضيع
            </button>

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

      {/* Sections */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          {topic.sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.2 + i * 0.1,
                ease: [0.32, 0.72, 0, 1],
              }}
            >
              <h2 className="text-xl font-medium text-foreground mb-3">{section.title}</h2>
              <p className="text-lg leading-[1.9] text-foreground">{section.content}</p>
            </motion.div>
          ))}
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
              <h2 className="text-xl font-medium text-foreground">الدروس والعبر</h2>
            </div>
            <ul className="space-y-3">
              {topic.lessons.map((lesson, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-sm text-primary font-medium tabular-nums mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-foreground leading-relaxed">{lesson}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Navigation between topics */}
      <section className="border-t border-border py-12 mb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {nextTopic ? (
              <button
                onClick={() => navigate(`/topic/${nextTopic.slug}`)}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <ArrowRight className="w-4 h-4" />
                <div>
                  <span className="block text-xs text-muted-foreground mb-1">التالي</span>
                  <span className="font-medium">{nextTopic.title}</span>
                </div>
              </button>
            ) : (
              <div />
            )}
            {prevTopic ? (
              <button
                onClick={() => navigate(`/topic/${prevTopic.slug}`)}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <div className="text-left">
                  <span className="block text-xs text-muted-foreground mb-1">السابق</span>
                  <span className="font-medium">{prevTopic.title}</span>
                </div>
                <ArrowLeft className="w-4 h-4" />
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopicPage;
