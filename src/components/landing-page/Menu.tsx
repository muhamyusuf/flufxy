import { menu } from '@/datas/menu';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Menu() {
  return (
    <div className="w-full pb-10">
      <h2 className="text-[24px] md:text-[32px] font-bold text-yellow">
        flufxy menu
      </h2>

      <div className="flex overflow-scroll scrollbar-none md:overflow-hidden py-5 md:justify-center md:flex-wrap items-center gap-4">
        {menu.map((item, index) => (
          <div
            key={index}
            className="shadow-md relative p-2 rounded-md flex-shrink-0 dark:border"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={300}
              className="w-[300px] h-[200px] object-cover rounded-sm"
            />

            <h3 className="text-[18px] font-bold mt-2 text-yellow">
              {item.name}
            </h3>

            {item.name === 'Souffle Pancake' ? (
              <span className="absolute -top-2 bg-yellow rounded-md px-2 py-1 md:-left-2 left-0 font-semibold">
                best seller 📈
              </span>
            ) : null}

            <p>{item.description}</p>

            <p>{item.price}</p>

            <Button className="mt-5">Add to cart</Button>
          </div>
        ))}
      </div>

      <Link
        className={`${buttonVariants({ variant: 'outline' })}`}
        href="/menu"
      >
        See all menu's
      </Link>
    </div>
  );
}
