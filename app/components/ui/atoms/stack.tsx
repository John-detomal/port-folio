'use client';

const paddingSizes = {
  sm: 'px-2 py-1',
  md: 'px-4 py-2',
  lg: 'px-6 py-4',
} as const;

const labelSizes = {
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
} as const;

const colorVariants = {
  primary: 'bg-primary text-info',
  secondary: 'bg-secondary text-primary',
  neutral: 'bg-neutral text-base',
  info: 'bg-info text-white',
  base: 'bg-base',
} as const;

const baseClasses = 'rounded-full font-semibold text-white';

type StackSize = keyof typeof paddingSizes;
type LabelSize = keyof typeof labelSizes;
type ColorKey = keyof typeof colorVariants;

interface LabelProps {
  text: string;
  color?: ColorKey;
  size?: LabelSize;
}

interface Props {
  size?: StackSize;
  label: LabelProps;
}

export default function Stack({
  size = 'sm',
  label: { text, color = 'base', size: labelSize = 'sm' },
}: Props) {
  return (
    <span
      className={`${baseClasses} ${paddingSizes[size]} ${labelSizes[labelSize]} ${colorVariants[color]}`}
    >
      {text}
    </span>
  );
}
