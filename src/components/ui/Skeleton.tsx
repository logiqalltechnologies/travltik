import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'card' | 'avatar' | 'list';
  count?: number;
}

export function Skeleton({ className = '', variant = 'text', count = 1 }: SkeletonProps) {
  if (className) {
    return (
      <>
        {Array.from({ length: count }).map((_, idx) => (
          <div key={idx} className={`skeleton rounded-lg ${className}`} />
        ))}
      </>
    );
  }

  return (
    <>
      {Array.from({ length: count }).map((_, idx) => {
        if (variant === 'avatar') return <div key={idx} className="skeleton h-12 w-12 rounded-full" />;
        if (variant === 'card') return <div key={idx} className="skeleton h-32 w-full rounded-xl mb-3" />;
        if (variant === 'list') return <div key={idx} className="skeleton h-16 w-full rounded-lg mb-2" />;
        return <div key={idx} className="skeleton h-4 w-full rounded mb-2" />;
      })}
    </>
  );
}

export default Skeleton;
