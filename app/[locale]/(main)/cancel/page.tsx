import Image from "next/image";
import { Link } from "@/i18n/routing";
import cancelImage from "@/public/assets/payment/cancel.png";
import { getTranslations } from "next-intl/server";

const CancelPage = async () => {
  const t = await getTranslations("cancel-payment");

  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-xl px-4 py-4">
        <div className="relative w-64 h-64 mx-auto mb-2">
          <Image
            src={cancelImage}
            alt="Payment Cancelled"
            fill
            className="object-contain"
          />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">{t("title")}</h1>

        <p className="text-gray-600 mb-8">{t("description")}</p>

        <div className="flex justify-center gap-4">
          <Link href="/" className="btn btn-primary px-8">
            {t("buttons.home")}
          </Link>

          <Link
            href="/my-cart"
            className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            {t("buttons.cart")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CancelPage;
