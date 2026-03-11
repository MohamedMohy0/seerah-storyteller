import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import NoorGuide from "@/components/NoorGuide";

const PurposePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="flex items-center gap-3 mb-8">
            <NoorGuide size="md" />
            <h1 className="text-3xl md:text-4xl font-medium text-foreground">
              هدف المشروع
            </h1>
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            className="topic-card"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          >
            <h2 className="text-xl font-medium text-foreground mb-3">فكرة المشروع</h2>
            <p className="text-base leading-[1.9] text-muted-foreground">
              موقع تعليمي تفاعلي يقدّم بعض الأحداث المهمة من السيرة النبوية
              بأسلوب قصصي مبسّط. يرافق المستخدمَ مرشدٌ رقمي اسمه "نور" يساعده
              في التنقل بين المحتوى واستكشاف الأحداث والدروس المستفادة منها.
            </p>
          </motion.div>

          <motion.div
            className="topic-card"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          >
            <h2 className="text-xl font-medium text-foreground mb-3">الهدف من الموقع</h2>
            <p className="text-base leading-[1.9] text-muted-foreground">
              يهدف الموقع إلى تقريب أحداث السيرة النبوية للقارئ بطريقة واضحة
              وسهلة الفهم، مع التركيز على استخلاص الدروس والعبر التي يمكن
              تطبيقها في حياتنا اليومية. الموقع يغطي خمسة أحداث رئيسية من السيرة:
              صحيفة المدينة، غزوة بدر، غزوة أحد، غزوة الخندق، وغزوة خيبر.
            </p>
          </motion.div>

          <motion.div
            className="topic-card"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          >
            <h2 className="text-xl font-medium text-foreground mb-3">لماذا السيرة النبوية؟</h2>
            <p className="text-base leading-[1.9] text-muted-foreground">
              السيرة النبوية ليست مجرد أحداث تاريخية، بل هي منهج حياة ومصدر
              إلهام لكل مسلم. في كل حدث من أحداثها دروس في القيادة، والصبر،
              والتخطيط، والعدل، والرحمة. هذا الموقع يسعى لإبراز هذه الدروس
              بأسلوب عصري يناسب الجيل الحالي.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.45 }}
        >
          <button
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-lg hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            onClick={() => navigate("/topics")}
          >
            استكشف المواضيع
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PurposePage;
