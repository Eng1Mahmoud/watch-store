import { getTranslations } from "next-intl/server";
import { FaqItems } from "./faqItems";
const page = async () => {
  const t = await getTranslations("faqs");
  const faqItems = await FaqItems();
  return (
    <div className="container max-w-screen-lg py-10">
      <h1 className="text-xl font-bold font-main text-main-main text-center dark:text-dark-text pb-8">
        {t("title")}
      </h1>
      <div className="join join-vertical w-full">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="collapse collapse-plus join-item border-x-emerald-600  border dark:border-y-teal-700 dark:bg-dark-bgSection"
          >
            <input
              type="radio"
              name="my-accordion-4"
              defaultChecked={index === 0}
            />
            <div className="collapse-title text-[16px] font-main  text-main-main dark:text-dark-text pb-8">
              {item.title}
            </div>
            <div className="collapse-content">
              <p className="text-[14px] font-main  text-text-secondary dark:text-dark-text pb-8 ">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
