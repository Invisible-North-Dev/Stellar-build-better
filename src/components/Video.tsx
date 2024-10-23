import Vimeo from '@u-wave/react-vimeo';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  videoUrl: string;
};

export const Video = ({ videoUrl }: Props) => {
  const [play, setPlay] = useState(false);
  const onPlay = () => {
    setPlay(true);
  };

  const onPause = () => {
    setPlay(false);
  };
  return (
    <div className="relative size-full h-[50vw] max-w-[824px] md:h-[463px]">
      <Vimeo
        video={videoUrl}
        onPlay={onPlay}
        onPause={onPause}
        paused={!play}
        className="size-full"
      />
      <div className="absolute bottom-6  left-6 size-10 cursor-pointer md:size-6 lg:size-10">
        <Image onClick={() => setPlay(!play)} src={play ? '/assets/images/video-pause.svg' : '/assets/images/video-play.svg'} fill alt="" />
      </div>
    </div>

  );
};
