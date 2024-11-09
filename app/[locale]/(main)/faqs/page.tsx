import { faqItems } from "./faqItems";
const page = () => {
  return (
    <div className="container max-w-screen-lg py-10">
      <h1 className="text-xl font-bold font-main text-main-main text-center dark:text-dark-text pb-8">
        Frequently Asked Questions
      </h1>
      <div className="join join-vertical w-full">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="collapse collapse-plus join-item border-base-300 border dark:bg-dark-bgSection"
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
