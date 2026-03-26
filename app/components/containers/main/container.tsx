'use client';

import { ReactNode } from 'react';

interface Props {
  element: ReactNode;
}
export default function Container({ element }: Props) {
  return (
    <div className="max-w-7xl mx-auto bg-white rounded-[25px] shadow-xl overflow-hidden border border-blue-200">
      {element}
    </div>
  );
}
