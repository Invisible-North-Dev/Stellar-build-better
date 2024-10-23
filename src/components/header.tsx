import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { CircleArrowLink } from '@/components/CircleArrowLink';

export const Header = () => {
  return (
    <header className="px-24 py-6 font-inter  text-xs">
      <div className="mx-auto flex max-w-[1440px]">
        <Link href="/" className="flex w-[200px] min-w-[181px] items-center">
          <Image src="/assets/images/logo.svg" alt="Logo" width={96} height={24} />
        </Link>
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-8">
            <Link href="#about-the-campaign">About The Campaign</Link>
            <Link href="#how-can-we-build-better">How Can We Build Better?</Link>
            <Link href="#event">Events</Link>
            <Link href="#newsletter">Newsletter</Link>
          </div>
          <Link
            href="/"
            className="group flex items-center justify-center gap-2  rounded-[100px] bg-[#0F0F0F] px-5 py-[10px]"
          >
            <p className="text-white">Share Your Voice</p>
            <CircleArrowLink />
          </Link>
        </div>
      </div>
    </header>
  );
};
