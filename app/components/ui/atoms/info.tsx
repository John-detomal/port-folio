'use client';

const titleSizes = {
  xs: 'text-xs md:text-md font-medium mb-6',
  sm: 'text-base md:text-lg font-medium mb-6',
  md: 'text-3xl md:text-4xl text-blue-600 mb-5',
  lg: 'text-5xl md:text-6xl font-extrabold',
} as const;

const spacingSizes = {
  sm: 'tracking-tight',
  md: 'tracking-[0.2em]',
  lg: 'tracking-[0.3em]',
} as const;

const colorVariants = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  neutral: 'text-neutral',
  info: 'text-info',
  base: 'text-base',
} as const;

const baseClasses = 'font-bold text-blue-600 mb-5';

type TitleSize = keyof typeof titleSizes;
type Spacing = keyof typeof spacingSizes;
type ColorKey = keyof typeof colorVariants;

interface LabelProps {
  text: string;
  color?: ColorKey;
  spacing?: Spacing;
}

interface Props {
  classNames?: string;
  size?: TitleSize;
  label: LabelProps;
}

export default function Title({
  classNames,
  size = 'sm',
  label: { text, color = 'primary', spacing = 'sm' },
}: Props) {
  return (
    <h1
      className={`${classNames} ${baseClasses} ${titleSizes[size]} ${colorVariants[color]} ${spacingSizes[spacing]}`}
    >
      {text}
    </h1>
  );
}
