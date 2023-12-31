import Hero from '@/components/landing-page/Hero';
import Menu from '@/components/landing-page/Menu';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/Sheet';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import AvaliableOn from '@/components/landing-page/AvaliableOn';

export default function Home() {
  return (
    <main className="flex-col flex overflow-hidden items-center justify-center w-full text-center max-w-[1440px] mx-auto">
      <Hero />

      <Menu />

      <AvaliableOn />

      <Sheet>
        <SheetTrigger asChild className="md:hidden fixed bottom-3 right-3">
          <Button
            variant={'ghost'}
            className="bg-yellow hover:bg-yellow/80 rounded-md"
          >
            <ShoppingCart className="w-4 h-4 text-black" />
          </Button>
        </SheetTrigger>

        <SheetContent className="px-2">
          <SheetHeader className="mt-10">Cart</SheetHeader>

          <SheetFooter className="w-full">
            <Button>Checkout</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </main>
  );
}
