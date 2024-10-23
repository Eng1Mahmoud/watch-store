import AddAddressForm from "./ui/AddAddressForm";
import AddressList from "./ui/AddressList";
const Page = () => {
  return (
    <div className="container p-4 py-10">
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
