import { motion } from "framer-motion";
import NoorGuide from "@/components/NoorGuide";

const sources = [
  {
    title: "الرحيق المختوم",
    author: "صفي الرحمن المباركفوري",
    description: "كتاب شامل في السيرة النبوية، حائز على جائزة رابطة العالم الإسلامي في مسابقة السيرة النبوية."
  },
  {
    title: "فقه السيرة النبوية",
    author: "محمد سعيد رمضان البوطي",
    description: "دراسة تحليلية لأحداث السيرة النبوية مع استنباط الدروس والعبر والأحكام الفقهية."
  },
  {
    title: "السيرة النبوية",
    author: "ابن هشام",
    description: "من أقدم وأوثق المصادر في السيرة النبوية، تهذيب لسيرة ابن إسحاق."
  },
  {
    title: "زاد المعاد في هدي خير العباد",
    author: "ابن قيم الجوزية",
    description: "موسوعة شاملة في هدي النبي ﷺ تتناول غزواته وسراياه وأحكامها."
  },
  {
    title: "البداية والنهاية",
    author: "ابن كثير",
    description: "كتاب تاريخي ضخم يتضمن سيرة النبي ﷺ بالتفصيل مع تحقيق الروايات."
  }
];

const SourcesPage = () => {
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
            <h1 className="text-3xl md:text-4xl font-medium text-foreground">المصادر والمراجع</h1>
          </div>
          <p className="text-base text-muted-foreground mb-10 mr-7">
            الكتب والمراجع التي اعتُمد عليها في إعداد محتوى الموقع
          </p>
        </motion.div>

        <div className="space-y-4">
          {sources.map((source, i) => (
            <motion.div
              key={i}
              className="topic-card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.08, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="flex items-start gap-4">
                <span className="text-sm font-medium text-muted-foreground tabular-nums mt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-foreground">{source.title}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{source.author}</p>
                  <p className="text-base text-muted-foreground leading-relaxed mt-2">
                    {source.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SourcesPage;
