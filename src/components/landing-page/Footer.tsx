import { Instagram } from 'lucide-react';
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-5 w-full text-start flex justify-center items-center flex-col">
      <a
        href="https://www.instagram.com/flufxy.ig/"
        className="rounded-lg bg-black/80 text-white p-2"
      >
        <Instagram />
      </a>

      <div className="mt-2">
        <p>© flufxy 2023 All right reserved</p>
      </div>
    </footer>
  );
}
