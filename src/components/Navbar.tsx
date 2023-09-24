'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Accordion, AccordionItem } from '@nextui-org/react';

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/Sheet';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/NavigationMenu';
import { AlignRight, CakeSlice, ShoppingCart } from 'lucide-react';
import { DarkMode } from '@/components/DarkMode';
import { Button } from '@/components/ui/Button';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

const defaultContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export function Navbar() {
  return (
    <nav className="flex justify-between py-4 w-full items-center z-50 sticky top-0 container backdrop-blur-sm">
      <Link href="/" className="flex justify-center gap-2 items-center">
        <Image
          src="/icon/flufxy.png"
          alt="logo"
          width={32}
          height={32}
          className="cursor-pointer"
        />

        <span className="font-extrabold text-2xl text-yellow">flufxy</span>
      </Link>

      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-2 md:w-[300px]">
                <ListItem href="/menu/dessert" title="Desert" />
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Career</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about-us" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <AlignRight />
        </SheetTrigger>

        <SheetContent className="px-1">
          <SheetHeader className="mt-10">
            <Accordion defaultExpandedKeys={['1']}>
              <AccordionItem key="1" aria-label="Accordion 1" title="Menu">
                {defaultContent}
              </AccordionItem>
              <AccordionItem key="2" aria-label="Accordion 2" title="Career">
                {defaultContent}
              </AccordionItem>
              <AccordionItem key="3" aria-label="Accordion 3" title="About Us">
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 3"
                title="Contact Us"
              >
                {defaultContent}
              </AccordionItem>
            </Accordion>
          </SheetHeader>

          <SheetFooter className="absolute bottom-5 right-5">
            <DarkMode />
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <div className="md:flex hidden justify-center items-center gap-1">
        <DarkMode />

        <Sheet>
          <SheetTrigger asChild>
            <Button variant={'ghost'}>
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </SheetTrigger>

          <SheetContent className="px-2">
            <SheetHeader className="mt-10">Cart</SheetHeader>

            <SheetFooter className="w-full">
              <Button>Checkout</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
