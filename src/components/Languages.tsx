// 'use client';

// import * as React from 'react';
// import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';

// import { Button } from '@/components/ui/Button';
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/DropdownMenu';
// import { LanguagesIcon } from 'lucide-react';

// export function Languages() {
//   const [position, setPosition] = React.useState('bottom');

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost">
//           <LanguagesIcon className="w-4 h-4" />
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-56">
//         <DropdownMenuLabel>Select languages</DropdownMenuLabel>

//         <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
//           <DropdownMenuRadioItem value="top">Indonesia</DropdownMenuRadioItem>
//           <DropdownMenuRadioItem value="bottom">English</DropdownMenuRadioItem>
//         </DropdownMenuRadioGroup>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

'use client';

import * as React from 'react';
import { Check, ChevronDown, LanguagesIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/Command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/Popover';

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];

export function Languages() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          {value ? (
            frameworks.find((framework) => framework.value === value)?.label
          ) : (
            <LanguagesIcon />
          )}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === framework.value ? 'opacity-100' : 'opacity-0',
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
