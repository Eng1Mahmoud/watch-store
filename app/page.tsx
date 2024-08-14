"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { increment } from "@/redux/features/counterSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);
  // handle increment button click
const handleIncrement = () => {
  dispatch(increment());
};
  return (
    <main className="">
     <h1>
     {count}
     </h1>
     <button className="btn" onClick={handleIncrement}>increment</button>
    </main>
  );
}
