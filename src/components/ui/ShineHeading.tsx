import React, { useEffect, useRef } from 'react';
import { initTextShine } from '@/lib/textShine';

interface ShineHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  children: React.ReactNode;
  className?: string;
}

export function ShineHeading({
  as: Component = 'h1',
  children,
  className = '',
  ...props
}: ShineHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;
    const cleanup = initTextShine(headingRef.current);
    return () => {
      cleanup?.();
    };
  }, []);

  return (
    // @ts-ignore dynamic tag
    <Component
      ref={headingRef}
      className={`animate-heading ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
