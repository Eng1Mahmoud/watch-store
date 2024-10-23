import Header from "./header/header";
import { ActionList } from "./action-list/ActionList";

const page = () => {
  return (
    <div className="py-5  ">
      <div className="container rounded-xl">
        <div className="shadow-custom rounded-xl">
          <Header />
          <ActionList />
        </div>
      </div>
    </div>
  );
};

export default page;
