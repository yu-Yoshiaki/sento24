import Image from "next/image";
import Link from "next/link";

type Items = {
  imgSrc: string;
  imgAlt: string;
  name: string;
  city: string;
}[];

export const items: Items = [
  {
    imgSrc: "/test.png",
    imgAlt: "test image",
    name: "ATAMI せかいえ",
    city: "静岡県",
  },
  {
    imgSrc: "/test.png",
    imgAlt: "test image",
    name: "UMITO PLAGE The Atta Okinawa",
    city: "沖縄県",
  },
  {
    imgSrc: "/test.png",
    imgAlt: "test image",
    name: "ザ・ホテル青龍　京都清水",
    city: "京都府",
  },
  {
    imgSrc: "/test.png",
    imgAlt: "test image",
    name: "HOTEL CULTIA 太宰府",
    city: "福岡県",
  },
  {
    imgSrc: "/test.png",
    imgAlt: "test image",
    name: "ATAMI せかいえ",
    city: "静岡県",
  },
  {
    imgSrc: "/test.png",
    imgAlt: "test image",
    name: "UMITO PLAGE The Atta Okinawa",
    city: "沖縄県",
  },
  {
    imgSrc: "/test.png",
    imgAlt: "test image",
    name: "ザ・ホテル青龍　京都清水",
    city: "京都府",
  },
  {
    imgSrc: "/test.png",
    imgAlt: "test image",
    name: "HOTEL CULTIA 太宰府",
    city: "福岡県",
  },
];

export const Pickup = () => {
  return (
    <div className="max-w-[390px]">
      <div className="flex justify-between w-full">
        <h2>今、注目の銭湯</h2>
        <Link href="/">
          <a>銭湯一覧を見る</a>
        </Link>
      </div>

      <div className="flex overflow-x-scroll justify-between px-8">
        {items.map((item) => {
          return (
            <div key={item.name} className="min-w-[320px]">
              <Image src={item.imgSrc} alt={item.imgAlt} width={300} height={200} className="rounded-md" />
              <h3 className="text-left">{item.name}</h3>
              <p className="text-left text-gray-200">{item.city}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
