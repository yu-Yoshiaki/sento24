import Link from "next/link";

export const About = () => {
  return (
    <div className="flex flex-col gap-8 text-center">
      <div className="px-16">
        <h2>About</h2>
        <p>SENTO24は、銭湯で”暮らす”ための理想の過ごし方を提案する銭湯紹介サービスです。</p>
      </div>
      <Link href="/">
        <a className="py-2 px-4 mx-auto w-1/2 font-semibold text-white bg-blue-500 rounded-2xl">READ MORE</a>
      </Link>
    </div>
  );
};
