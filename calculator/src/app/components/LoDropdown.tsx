"use client";

//1. IMPORT TOOLS & COMPONENTS

import { useState, useRef, useEffect } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Label } from "@/components/ui/label";

//2. DEFINE PROPS VIA INTERFACE

interface LoDropdownProps {
  label: string; 
  items: string[]; 
}

//3. MAIN COMPONENT

export default function LoDropdown({ 
  label, 
  items, 
}: LoDropdownProps) {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//4. INTERNAL STATE & LOGIC
  useEffect(() => {
    // Cleanup on unmount to prevent memory leaks
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

//5. JSX TO RENDER

  return (
    <div className="w-full mb-4">

    <div className="flex items-center justify-between mb-2">

      <Label 
      htmlFor={label}
      className="block text-sm font-medium text-[#A8A8B4]">
      {label}
      </Label>
      
      </div>

      <DropdownMenu 
      open={open} 
      onOpenChange={setOpen}>
      
      <div onMouseEnter={() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current); // Cancel any close timeout
    setOpen(true);
  }}
  onMouseLeave={() => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150); // Close after delay
  }}
  className="relative w-full"
>
        <DropdownMenuTrigger asChild>
         <div className="relative w-full">
         <Button variant="outline" className="w-full text-left flex items-center justify-between pr-4 py-2">
         <span className={selected 
  ? "text-black font-medium"
  : "text-[#8C8C9E] font-normal"
}>
  {selected || `Select ${label}`}
</span>
      <ChevronDown className="h-4 w-4 text-gray-600" />
      </Button>
          </div>
        </DropdownMenuTrigger>

          <DropdownMenuContent className="w-full mt-1 bg-white shadow-lg rounded-md">
          {items.map((item, index) => (
            <DropdownMenuItem
            key={index}
            onClick={() => {
              setSelected(item); // Save it locally for display
              setOpen(false); // close after selection
            }}
            className="p-2 hover:bg-gray-100"
          >
            {item}
          </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
        </div>
      </DropdownMenu>
    </div>
  );
}