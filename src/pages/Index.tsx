import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import NoorGuide from "@/components/NoorGuide";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center" dir="rtl">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          <NoorGuide size="lg" />

          <motion.div
            className="mt-10 topic-card max-w-xl mx-auto"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          >
            <p className="text-lg leading-relaxed text-foreground">
              مرحباً بك في رحلة في السيرة النبوية، أنا{" "}
              <span className="font-semibold text-primary">نور</span> وسأرافقك
              للتعرف على بعض الأحداث المهمة من السيرة.
            </p>
          </motion.div>

          <motion.h1
            className="mt-10 text-4xl md:text-6xl font-medium tracking-tight text-foreground"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          >
            السيرة النبوية
            <br />
            <span className="text-muted-foreground">رحلة هداية وبناء</span>
          </motion.h1>

          <motion.button
            className="mt-10 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-lg hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: [0.32, 0.72, 0, 1] }}
            onClick={() => navigate("/purpose")}
          >
            ابدأ الرحلة
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
