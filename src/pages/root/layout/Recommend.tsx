import Image from "next/image";
import Link from "next/link";
import { items } from "src/pages/root/layout/Pickup";

export const Recommend = () => {
  return (
    <div className="max-w-[390px]">
      <div className="flex justify-between w-full">
        <h2>新着のおすすめ銭湯</h2>
        <Link href="/">
          <a>銭湯一覧を見る</a>
        </Link>
      </div>

      <div className="flex overflow-x-scroll px-8 space-x-4">
        {items.map((item) => {
          return (
            <div className="min-w-[160px]" key={item.name}>
              <Image src={item.imgSrc} alt={item.imgAlt} width={160} height={200} className="rounded-md" />
              <h3 className="text-left">{item.name}</h3>
              <p className="text-left text-gray-200">{item.city}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
