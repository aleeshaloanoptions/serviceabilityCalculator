"use client";

//1. IMPORT TOOLS & COMPONENTS

import { Input } from "@/components/ui/input"

//2. DEFINE PROPS VIA INTERFACE

interface LoInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  symbol?: string;
  placeholder?: string;
}

//3. MAIN COMPONENT

export default function LoInput({ 
  label, 
  value, 
  onChange, 
  symbol, 
  placeholder = "Enter amount" 
}: LoInputProps) {

  //4. JSX TO RENDER
  
    return (
        <div className="w-full">
        <label htmlFor={label} className="block text-sm font-medium text-[#A8A8B4] mb-1">
          {label}
        </label>
        <div className="relative">
        <Input
          id={label}
          type="number" // The input type is 'number' for numeric values
          value={value}
          onChange={onChange} // Update the state when the input changes
          placeholder={placeholder}
          className="pr-6 placeholder-[#A8A8B4]"
        />
        {symbol && (
          <span className="absolute right-3 top-2.5 text-[#A8A8B4] text-sm pointer-events-none">
            {symbol}
          </span>
        )}
      </div>
      </div>
    );
  }