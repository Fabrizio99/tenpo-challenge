import { FC, PropsWithChildren } from "react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const PageLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className="w-full mx-auto relative min-h-screen flex flex-col">
    <Header />
    <div className="flex flex-auto h-full">
      <div className="w-full py-4 px-6">{children}</div>
    </div>
    <Footer />
  </div>
);
