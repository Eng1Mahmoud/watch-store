import { faqItems } from "./faqItems";
const page = () => {
  return (
    <div className="container max-w-screen-lg py-10">
      <h1 className="text-xl font-bold font-main text-main-main text-center pb-8">
        Frequently Asked Questions
      </h1>
      <div className="join join-vertical w-full">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="collapse collapse-plus join-item border-base-300 border"
          >
            <input
              type="radio"
              name="my-accordion-4"
              defaultChecked={index === 0}
            />
            <div className="collapse-title text-[16px] font-main  text-main-main">
              {item.title}
            </div>
            <div className="collapse-content">
              <p className="text-[14px] font-main  text-text-secondary">
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
