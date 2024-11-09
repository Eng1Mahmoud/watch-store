import AddAddressForm from "./ui/AddAddressForm";
import AddressList from "./ui/AddressList";
import { getTranslations } from "next-intl/server";
const Page = async () => {
  const t = await getTranslations("my-address");
  return (
    <div className="container p-4 py-10">
      <h2 className="text-2xl font-bold mb-4 text-main-main text-center pt-5 pb-8 dark:text-dark-text">
        {t("title")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <section>
          <AddAddressForm />
        </section>

        <section className="scroll-y-auto overflow-y-auto overscroll-contain h-[460px] px-4 rounded-md styled-scrollbar">
          <AddressList />
        </section>
      </div>
    </div>
  );
};

export default Page;
