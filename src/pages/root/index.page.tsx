import type { CustomNextPage } from "next";
import { BlogLayout } from "src/layout/BlogLayout";
import { About, Pickup, Recommend } from "src/pages/root/layout";

const Root: CustomNextPage = () => {
  return (
    <div>
      <Pickup />
      <Recommend />
      <About />
    </div>
  );
};

Root.getLayout = BlogLayout;

export default Root;
