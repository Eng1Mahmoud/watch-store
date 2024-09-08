"use client";
import { useEffect, useRef, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Store, AppStore } from "./store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<ReturnType<typeof Store>>();
  const [mounted, setMounted] = useState(false); // State to check if the component is mounted

  if (!storeRef.current) {
    storeRef.current = Store();
  }

  useEffect(() => {
    setMounted(true); // Only set mounted to true after component is mounted
  }, []);

  if (!mounted) {
    // Avoid SSR/CSR mismatch
    return null;
  }

  return (
    <Provider store={storeRef.current.store}>
      <PersistGate loading={null} persistor={storeRef.current.persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
