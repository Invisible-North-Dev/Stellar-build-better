'use client';

import Image from 'next/image';
import React from 'react';

import { Gif } from './Gif';
import { PageSection } from './PageSection';
import { Video } from './Video';

export const Hero = () => {
  return (
    <PageSection className="overflow-hidden" innerClassName="min-h-screen text-[#0f0f0f] lg:mt-[129px]">
      <>
        <div className="absolute right-0 top-0 z-[-1] md:h-[653px] md:w-[324px] lg:h-[1089px] lg:w-[539px]">
          <Image
            fill
            src="/assets/images/hero-top-bg.png"
            alt="hero background"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] md:h-[653px] md:w-[736px] lg:h-[1089px] lg:w-[1227px]">
          <Image
            fill
            src="/assets/images/hero-bottom-bg.png"
            alt="hero background"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p className="font-lora text-base sm:leading-[22px] md:leading-4 lg:text-2xl lg:leading-7">Build Better</p>
        <div className="relative max-w-[314px] md:max-w-[658px] lg:max-w-[1100px]">
          <h1 className="my-5 flex flex-col font-schabo text-[68px] font-normal leading-[60px] md:text-[132px] md:leading-[119px] lg:text-[220px] lg:leading-[198px]">
            <span>EVERY GREAT</span>
            <span>CHANGE STARTS</span>
            <span className="relative">
              WITH AN
              <div className="absolute bottom-[-10px] right-0 h-[97px]  w-full max-w-[58%] md:bottom-[-30px] md:h-[187px] md:max-w-[50%] lg:h-[312px] lg:max-w-[45%] xl:max-w-[56%]">
                <Gif src="/assets/images/Hero_IDEA.gif" />
              </div>
            </span>
          </h1>

        </div>
        <div className=" flex w-full flex-col-reverse items-center justify-center md:mb-12 md:flex-row md:items-end md:justify-end lg:mb-20">
          <div className="relative mb-10 size-[138px] max-h-[30%] max-w-[30%] gap-5 md:bottom-[-24px] md:mb-0  md:size-[240px] md:gap-0 lg:bottom-[-40px] lg:size-[400px]">
            <Gif src="/assets/images/Hero_Arrow.gif" style={{ objectFit: 'cover' }} />
          </div>
          <Video videoUrl="https://player.vimeo.com/video/235215203" />
        </div>
        <div className=" text-center md:pl-4 md:text-left lg:pl-60">
          <p className="mb-4 font-lora text-base sm:leading-[22px] md:leading-4  lg:text-2xl lg:leading-7">What would you build better?</p>
          <h2 className="mb-4 font-schabo text-5xl leading-[48px] md:mb-7 md:max-w-[290px] md:text-[40px] md:leading-9 lg:mb-12 lg:max-w-[481px] lg:text-[68px] lg:leading-[60px]">THE BEST WAY TO PREDICT THE FUTURE IS TO BUILD IT.</h2>
          <div className="flex flex-col gap-6 font-inter text-xs leading-6 text-[#0F0F0FB2] md:max-w-[500px] lg:max-w-[824px] lg:text-xl lg:leading-8">
            <p>
              A new world is possible, but only if we make it. Build Better is an invitation. To imagine something new. To rewrite the rules of old systems. To not only dream of what’s possible, but to watch it come to life.
            </p>
            <p>
              Every great change starts with an idea. So here we’re asking you: What does your better look like? First, tell us about your ideas. Then, global hackathons inspired by your submissions will get to work building them IRL.
            </p>
            <p>Build Better is where “what if” turns into “what’s next”. And it starts with you.</p>
          </div>

        </div>

      </>
    </PageSection>
  );
};
