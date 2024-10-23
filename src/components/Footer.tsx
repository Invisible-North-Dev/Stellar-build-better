import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FOOTERLINKS = [
  {
    header: 'ABOUT US',
    links: [
      {
        href: '',
        text: 'Stellar Development Foundation',
        arrow: false,
      },
      {
        href: '',
        text: 'Careers',
        arrow: false,
      },
      {
        href: '',
        text: 'Team',
        arrow: false,
      },
      {
        href: '',
        text: 'Roadmap',
        arrow: false,
      },
      {
        href: '',
        text: 'Press and Reports',
        arrow: false,
      },
      {
        href: '',
        text: 'Mandate',
        arrow: false,
      },
    ],
  },
  {
    header: 'PRODUCTS AND SERVICES',
    links: [
      {
        href: '',
        text: 'Solutions',
        arrow: false,
      },
      {
        href: '',
        text: 'Case Studies',
        arrow: false,
      },
      {
        href: '',
        text: 'Products and Tools',
        arrow: false,
      },
    ],
  },
  {
    header: 'THE STELLAR NETWORK',
    links: [
      {
        href: '',
        text: 'Project Ecosystem',
        arrow: false,
      },
      {
        href: '',
        text: 'Anchor Directory',
        arrow: false,
      },
      {
        href: '',
        text: 'Community',
        arrow: false,
      },
      {
        href: '',
        text: 'Blogs',
        arrow: false,
      },
      {
        href: '',
        text: 'Events',
        arrow: false,
      },
    ],
  },
  {
    header: 'DEVELOPERS',
    links: [
      {
        href: '',
        text: 'Smart Contract Docs',
        arrow: true,
      },
      {
        href: '',
        text: 'Stellar Core Docs',
        arrow: true,
      },
      {
        href: '',
        text: 'API Reference',
        arrow: true,
      },
      {
        href: '',
        text: 'SDKs',
        arrow: true,
      },
      {
        href: '',
        text: 'All Developer Resources',
        arrow: false,
      },
    ],
  },
  {
    header: 'SUPPORT',
    links: [
      {
        href: '',
        text: 'Code of Conduct',
        arrow: false,
      },
      {
        href: '',
        text: 'Security Guide',
        arrow: false,
      },
      {
        href: '',
        text: 'FAQ',
        arrow: false,
      },
      {
        href: '',
        text: 'Contact',
        arrow: false,
      },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="relative mt-[90px] bg-[#0F0F0F] font-inter text-xs leading-7 text-[#969696]">
      <div className="absolute top-[-80px] h-[90px] w-full">
        <Image
          alt=""
          src="/assets/images/footer-top-img.png"
          fill
        />
      </div>

      <div className="mx-auto max-w-[1440px] px-24">
        <div className="flex border-b border-[#262626]  pb-20 pt-[120px]">
          <Link href="/" className="flex w-[200px] min-w-[181px] items-start">
            <Image src="/assets/images/logo-white.svg" alt="Logo" width={96} height={24} />
          </Link>
          <div className="flex max-h-[500px] w-full flex-col flex-wrap gap-10">
            {
              FOOTERLINKS.map((link) => {
                return (
                  <div key={link.header} className="flex flex-col flex-wrap gap-1">
                    <h3 className="text-xs font-semibold capitalize text-white">{link.header}</h3>
                    <div className="flex flex-col gap-1 text-sm">
                      {
                        link.links.map((item) => {
                          return (
                            <Link key={item.text} href={item.href} className="group flex items-center gap-2 text-base transition-all hover:opacity-80">
                              {
                                item.arrow && (
                                  <div className="relative flex size-4 items-center justify-center overflow-hidden whitespace-nowrap rounded-[50%]">
                                    <span className="absolute left-0 top-0 flex size-full -translate-x-full translate-y-full items-center justify-center transition-all group-hover:translate-x-0 group-hover:translate-y-0">
                                      <Image
                                        width={16}
                                        height={16}
                                        src="/assets/images/arrow-up-right.svg"
                                        alt=""
                                      />
                                    </span>
                                    <span className="absolute left-0 top-0 flex size-full items-center justify-center transition-all group-hover:-translate-y-full group-hover:translate-x-full  ">
                                      <Image
                                        width={16}
                                        height={16}
                                        src="/assets/images/arrow-up-right.svg"
                                        alt=""
                                      />
                                    </span>
                                  </div>
                                )
                              }
                              {item.text}
                            </Link>
                          );
                        })
                      }
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
        <div className="flex justify-between py-10 text-base">
          <div className="flex items-center gap-6">
            <p>Follow us: </p>
            <Link href="">
              <Image src="/assets/images/discord.svg" alt="discord" width={24} height={24} />
            </Link>
            <Link href="">
              <Image src="/assets/images/linkedin.svg" alt="linkedin" width={24} height={24} />
            </Link>
            <Link href="">
              <Image src="/assets/images/twitter.svg" alt="twitter" width={24} height={24} />
            </Link>
          </div>
          <div className="flex gap-6">
            <Link href="" className="transition-all hover:opacity-80">Brand Policy</Link>
            <Link href="" className="transition-all hover:opacity-80">Privacy Policy</Link>
            <Link href="" className="transition-all hover:opacity-80">Terms of Service</Link>
          </div>
          <div>
            <p>© 2023 Stellar Development Foundation</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
