'use client'; // 👈 use it here

import Image from 'next/image';
import React, { type CSSProperties, useEffect, useRef, useState } from 'react';

type Props = {
  config?: IntersectionObserverInit;
  once?: boolean;
  src: string;
  cb?: () => void;
  style?: CSSProperties;
};

export const Gif = ({
  config,
  once = true,
  src,
  style,
  cb,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [intersect, setIntersect] = useState(false);

  useEffect(() => {
    if (!ref || !ref.current) {
      return;
    }

    const container = ref.current;

    const callback = (
      entries: IntersectionObserverEntry[],
    ) => {
      entries.forEach((entry) => {
        if (typeof config?.threshold === 'object') {
          if (entry.intersectionRatio === 1) {
            setIntersect(true);
          } else if (entry.intersectionRatio === 0) {
            setIntersect(false);
          }
        } else if (entry.isIntersecting) {
          setIntersect(true);
          if (once) {
            observerRef.current?.unobserve(entry.target);
          }
          if (cb) {
            cb();
          }
        } else {
          setIntersect(false);
        }
      });
    };

    const options: IntersectionObserverInit = config || {
      root: null,
      threshold: 0.2,
      rootMargin: '0px',
    };

    observerRef.current = new IntersectionObserver(callback, options);

    observerRef.current.observe(container);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [config, ref, observerRef, once, cb]);

  useEffect(() => {

  }, [intersect]);

  return (
    <div ref={ref}>
      {
        intersect
          ? (
              <Image src={src} fill alt="" style={style} />
            )
          : <div></div>
      }
    </div>
  );
};
