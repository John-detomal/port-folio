'use client';

import { ReactNode } from 'react';

const Btnsizes = {
  sm: 'px-2 py-3',
  md: 'px-4 py-3',
  lg: 'px-6 py-3',
};

const baseClasses = 'font-semibold rounded-lg hover:bg-blue-600 transition';

type Size = keyof typeof Btnsizes;

interface Props {
  size?: Size;
  variant?: 'light' | 'secondary';
  label: {
    icon?: ReactNode;
    text: string;
    color?: string;
  };
}

const styles = {
  secondary: `${baseClasses} bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600`,
  light: `${baseClasses} text-blue-500 bg-white border-2 border-blue-500  font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition`,
};

export default function Button({ size = 'sm', variant = 'secondary', label }: Props) {
  return (
    <button className={`${styles[variant]} ${label.color} ${Btnsizes[size]}`}>
      {label.text} {label.icon && label.icon}
    </button>
  );
}
