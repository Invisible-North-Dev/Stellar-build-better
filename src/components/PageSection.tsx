import React from 'react';

type Props = {
  children: JSX.Element;
  className?: string;
  innerClassName?: string;
};

export const PageSection = ({ children, className = '', innerClassName = '' }: Props) => {
  return (
    <section className={`${className} relative px-6 md:px-14 lg:px-24`}>
      <div className={`${innerClassName} mx-auto my-[108px] max-w-[1440px] lg:my-[180px]`}>
        {children}
      </div>
    </section>
  );
};
