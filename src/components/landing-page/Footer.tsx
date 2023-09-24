import { Instagram } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-5 w-full text-start flex justify-center items-center flex-col">
      <Link href="">
        <Instagram />
      </Link>

      <div className="mt-2">
        <p>© flufxy 2023 All right reserved</p>
      </div>
    </footer>
  );
}
