import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

export const BlogLayout: CustomLayout = (page) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] gap-5 min-h-screen font-mono bg-[#f5ddb9]">
      <Header />
      <main>
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};
