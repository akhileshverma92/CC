import React from 'react';

interface StatProps {
  number: string;
  label: string;
}

export function Stat({ number, label }: StatProps) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-indigo-600">{number}</div>
      <div className="text-gray-600 mt-1">{label}</div>
    </div>
  );
}