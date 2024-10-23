import Image from 'next/image';
import React from 'react';

export const CircleArrowLink = (props: {
  text?: string;
  circleBg?: string;
}) => {
  return (
    <div className={`relative flex size-8 items-center justify-center overflow-hidden whitespace-nowrap rounded-[50%] ${props.circleBg ? props.circleBg : 'bg-gold'}`}>
      <span className="absolute left-0 top-0 flex size-full -translate-x-full items-center justify-center transition-all group-hover:translate-x-0">
        <Image
          width={16}
          height={16}
          src="/assets/images/arrow-right.svg"
          alt={props.text || ''}
        />
      </span>
      <span className="absolute left-0 top-0 flex size-full items-center justify-center transition-all group-hover:translate-x-full  ">
        <Image
          width={16}
          height={16}
          src="/assets/images/arrow-right.svg"
          alt={props.text || ''}
        />
      </span>
    </div>
  );
};
