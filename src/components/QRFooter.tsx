import { QRCodeSVG } from "qrcode.react";

const QRFooter = () => {
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://example.com";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-t border-border" dir="rtl">
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-center gap-4">
        <span className="text-xs text-muted-foreground hidden sm:block">
          امسح الرمز للوصول إلى الموقع
        </span>
        <div className="bg-background rounded-md p-1 border border-border">
          <QRCodeSVG
            value={siteUrl}
            size={40}
            bgColor="hsl(30, 50%, 98%)"
            fgColor="hsl(30, 10%, 25%)"
            level="M"
          />
        </div>
      </div>
    </div>
  );
};

export default QRFooter;
