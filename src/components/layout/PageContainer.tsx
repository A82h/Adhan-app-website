import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className = '',
  id,
}) => {
  return (
    <section
      id={id}
      className={`py-14 sm:py-18 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full transition-all ${className}`}
    >
      {children}
    </section>
  );
};
