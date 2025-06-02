"use client";

//1. IMPORT TOOLS & COMPONENTS

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

//2. DEFINE PROPS VIA INTERFACE

interface LoSliderProps {
  label: string;
  min: number;
  max: number;
  step?: number;
  defaultValue?: number; 
  value?: number;
  onValueChange?: (val: number) => void;
  valueFormatter?: (value: number) => string; 
}

//3. MAIN COMPONENT

export default function LoSlider({ 
  label, 
  min, 
  max, 
  step = 1, 
  defaultValue = min, 
  value,
  onValueChange,
  valueFormatter, 
}: LoSliderProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const controlledValue = value !== undefined ? value : internalValue;
  const percentage = ((controlledValue - min) / (max - min)) * 100;

//4. JSX TO RENDER

  return (
    <div className="w-full">
      <Label htmlFor={label} className="text-sm font-medium text-[#A8A8B4] mb-1">
        {label}
      </Label>

      {/* Add padding top ONLY to the slider part */}
      <div className="pt-2">
      <div className="relative w-full">
    <Slider
      id={label}
      value={[controlledValue]}
  onValueChange={([newValue]) => {
    if (onValueChange) {
      onValueChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  }}
      min={min}
      max={max}
      step={step}
      className="w-full"
    />
    <div
          className="absolute top-full mt-4 z-10"
          style={{
            left: `calc(${percentage}% - 18px)`, // keep it centered
            transition: "left 0.05s",
          }}
        >
          <div className="bg-[#5614BB] text-white text-sm font-semibold px-3 py-1 rounded-md relative text-center">
            {valueFormatter ? valueFormatter(value as number) : value}
            <div className="absolute left-1/2 -top-1 rotate-45 w-2 h-2 bg-[#5614BB] -translate-x-1/2" />
          </div>
          </div>
        </div>
      </div>
  </div>
  );
}