import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import NoorGuide from "@/components/NoorGuide";
import { topics, quizData, type QuizQuestion } from "@/data/topics";

const QuizPage = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions: QuizQuestion[] = selectedTopic ? quizData[selectedTopic] || [] : [];
  const currentQuestion = questions[currentQ];
  const topic = topics.find((t) => t.slug === selectedTopic);

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    if (index === currentQuestion.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1);
      setSelectedAnswer(null);
    } else {
      setFinished(true);
    }
  };

  const handleReset = () => {
    setSelectedTopic(null);
    setCurrentQ(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  };

  const handleSelectTopic = (slug: string) => {
    setSelectedTopic(slug);
    setCurrentQ(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  };

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
            <h1 className="text-3xl md:text-4xl font-medium text-foreground">اختبر معلوماتك</h1>
          </div>
          <p className="text-base text-muted-foreground mb-10 mr-7">
            اختر موضوعًا لاختبار ما تعلمته
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!selectedTopic && (
            <motion.div
              key="topic-select"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {topics.map((t, i) => (
                <motion.button
                  key={t.slug}
                  className="topic-card text-right"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleSelectTopic(t.slug)}
                >
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {String(t.id).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-medium text-foreground mt-1">{t.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{questions.length || 5} أسئلة</p>
                </motion.button>
              ))}
            </motion.div>
          )}

          {selectedTopic && !finished && currentQuestion && (
            <motion.div
              key={`q-${currentQ}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                  تغيير الموضوع
                </button>
                <span className="text-sm text-muted-foreground tabular-nums">
                  {currentQ + 1} / {questions.length}
                </span>
              </div>

              {topic && (
                <span className="text-sm text-primary font-medium mb-4 block">{topic.title}</span>
              )}

              <div className="topic-card mb-6">
                <h2 className="text-xl font-medium text-foreground">{currentQuestion.question}</h2>
              </div>

              <div className="space-y-3 mb-8">
                {currentQuestion.options.map((option, i) => {
                  let stateClass = "";
                  if (selectedAnswer !== null) {
                    if (i === currentQuestion.correctIndex) {
                      stateClass = "border-2 border-green-500/50 bg-green-50/30";
                    } else if (i === selectedAnswer && i !== currentQuestion.correctIndex) {
                      stateClass = "border-2 border-red-400/50 bg-red-50/30";
                    }
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleAnswer(i)}
                      disabled={selectedAnswer !== null}
                      className={`w-full text-right p-4 rounded-xl transition-all duration-200 ${
                        selectedAnswer === null
                          ? "topic-card hover:bg-muted/50"
                          : `topic-card ${stateClass}`
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground tabular-nums shrink-0">
                          {String.fromCharCode(1571 + i)}
                        </span>
                        <span className="text-base text-foreground flex-1">{option}</span>
                        {selectedAnswer !== null && i === currentQuestion.correctIndex && (
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                        )}
                        {selectedAnswer !== null && i === selectedAnswer && i !== currentQuestion.correctIndex && (
                          <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {selectedAnswer !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <button
                    onClick={handleNext}
                    className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity duration-200"
                  >
                    {currentQ < questions.length - 1 ? "السؤال التالي" : "عرض النتيجة"}
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}

          {finished && (
            <motion.div
              key="results"
              className="text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="topic-card max-w-md mx-auto py-12">
                <NoorGuide size="lg" className="mx-auto mb-6" />
                <h2 className="text-2xl font-medium text-foreground mb-2">
                  نتيجتك
                </h2>
                <p className="text-5xl font-semibold text-primary tabular-nums mb-4">
                  {score} / {questions.length}
                </p>
                <p className="text-muted-foreground mb-8">
                  {score === questions.length
                    ? "ممتاز! أجبت على جميع الأسئلة بشكل صحيح 🌟"
                    : score >= questions.length * 0.6
                    ? "أحسنت! أداء جيد جدًا"
                    : "لا بأس، يمكنك المحاولة مرة أخرى"}
                </p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={() => handleSelectTopic(selectedTopic!)}
                    className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                  >
                    أعد المحاولة
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-lg bg-muted text-foreground font-medium hover:bg-muted/80 transition-colors"
                  >
                    موضوع آخر
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuizPage;
