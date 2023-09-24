import Image from 'next/image';
import React from 'react';

export default function AvaliableOn() {
  return (
    <div className="w-full">
      <h2 className="text-[24px] md:text-[32px] font-bold text-yellow">
        avaliable on
      </h2>

      <div className="flex-wrap flex gap-2 md:gap-10 justify-center items-center">
        <Image
          src="/avaliable-on/gofood.svg"
          alt="gofood logo"
          width={100}
          height={100}
          className="aspect-3/2 w-[120px] md:w-[150px] lg:w-[200px] scale-50 object-contain bg-blend-color-burn rounded-sm"
        />

        <Image
          src="/avaliable-on/grabfood.svg"
          alt="grab logo"
          width={100}
          height={100}
          className="aspect-3/2 w-[120px] md:w-[150px] lg:w-[200px] scale-150 object-contain bg-blend-color-burn rounded-sm"
        />

        <Image
          src="/avaliable-on/shopeefood.svg"
          alt="shopee logo"
          width={100}
          height={100}
          className="aspect-3/2 w-[120px] md:w-[150px] lg:w-[200px] object-cover bg-blend-color-burn rounded-sm"
        />

        <Image
          src="/avaliable-on/maxim.svg"
          alt="maxim logo"
          width={100}
          height={100}
          className="aspect-3/2 w-[120px] md:w-[150px] lg:w-[200px] scale-50 object-contain bg-blend-color-burn rounded-xl"
        />
      </div>
    </div>
  );
}
