import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex justify-center items-center w-full h-screen flex-col text-center">
      <h1 className="mx-auto text-[32px] text-yellow md:text-[64px] xl:text-[100px] font-bold font-balo">
        Under Constructions
      </h1>

      <p>Something went wrong</p>
      <p>Could not find requested resource</p>

      <Button className="mt-5">
        <Link href="/">Return to flufxy</Link>
      </Button>
    </div>
  );
}
