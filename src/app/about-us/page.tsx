import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'about us',
};

export default function page() {
  return (
    <div className="w-full">
      <h1 className="h-full w-full text-center mx-auto text-[32px] md:text-[64px] xl:text-[100px] font-bold font-balo">
        about flufxy
      </h1>
    </div>
  );
}
