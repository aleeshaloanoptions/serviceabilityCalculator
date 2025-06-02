"use client";

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

interface ExpenseItem {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

interface LoTableProps {
  title: string;
  items: ExpenseItem[];
  highlightColor?: string;
}

export default function LoTable({ title, items, highlightColor = "#8B5CF6" }: LoTableProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <Table>
        <TableHeader>
          <TableRow style={{ backgroundColor: highlightColor }}>
            <TableHead className="text-white font-semibold">
              {title === "Expenses" ? "Expenses" : "Liabilities"}
            </TableHead>
            <TableHead className="text-white font-semibold text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index} className="hover:bg-gray-50">
              <TableCell className="font-medium py-3">
                {item.label}
              </TableCell>
              <TableCell className="text-right py-3">
                <div className="relative inline-block">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <Input
                    type="number"
                    value={item.value || ""}
                    onChange={(e) => item.onChange(Number(e.target.value) || 0)}
                    className="pl-8 text-right w-32"
                    placeholder="0"
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}