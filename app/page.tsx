'use client';

import { useState } from 'react';
import {
  Heart,
  Moon,
  Sparkles,
  Sun,
} from 'lucide-react';

type BrandIconProps = {
  className?: string;
};

function InstagramIcon({ className }: BrandIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="2.2"
        width="17"
        x="3.5"
        y="3.5"
      />
      <circle cx="12" cy="12" r="3.7" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="17.25" cy="6.85" fill="currentColor" r="1.25" />
    </svg>
  );
}

function SpotifyIcon({ className }: BrandIconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.2a9.8 9.8 0 1 0 0 19.6 9.8 9.8 0 0 0 0-19.6Zm4.49 14.13a.74.74 0 0 1-1.02.25c-2.8-1.7-6.3-2.09-10.45-1.14a.74.74 0 1 1-.33-1.44c4.54-1.04 8.42-.59 11.56 1.33.35.22.46.66.24 1Zm1.22-2.73a.92.92 0 0 1-1.27.3c-3.2-1.97-8.08-2.54-11.86-1.39a.92.92 0 1 1-.54-1.76c4.32-1.31 9.7-.68 13.37 1.57.43.26.56.83.3 1.28Zm.1-2.84c-3.84-2.28-10.17-2.49-13.84-1.38a1.1 1.1 0 0 1-.64-2.1c4.2-1.27 11.19-1.03 15.6 1.59a1.1 1.1 0 1 1-1.12 1.89Z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: BrandIconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.02 2.25A9.64 9.64 0 0 0 3.7 16.76L2.6 21.75l5.1-1.18a9.66 9.66 0 1 0 4.32-18.32Zm0 17.55a7.8 7.8 0 0 1-3.97-1.09l-.36-.21-3.03.7.65-2.96-.24-.38a7.79 7.79 0 1 1 6.95 3.94Zm4.44-5.84c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.18a7.23 7.23 0 0 1-1.33-1.66c-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

const links = [
  {
    label: 'Perfis do Instagram',
    href: 'https://www.instagram.com/mandpepe/',
    icon: InstagramIcon,
  },
  {
    label: 'Playlists Spotify',
    href: 'https://open.spotify.com/user/6iv92f1rcky9mpx3si5n3shcd?si=9245e0590bd84c7d',
    icon: SpotifyIcon,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5511940013816',
    icon: WhatsAppIcon,
  },
];

const fanLinks = [
  {
    label: 'Instagram da Sabina Hidalgo',
    href: 'https://www.instagram.com/sabinahidalgo',
    icon: InstagramIcon,
  },
  {
    label: 'Sabina Hidalgo no Spotify',
    href: 'https://open.spotify.com/intl-pt/artist/7xTWZvPjNzdjjeSd0jaeA4?si=1EKfYT5iTECDA-0aZ2q0NQ',
    icon: SpotifyIcon,
  },
];

export default function Home() {
  const [mode, setMode] = useState<'day' | 'night'>('day');
  const isNight = mode === 'night';

  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#1f1c1d] px-5 py-8 text-foreground sm:px-8">
      <img
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition duration-500 ${
          isNight ? 'scale-105 brightness-[0.42] saturate-[0.78]' : 'brightness-100'
        }`}
        src="/amanda-sp-collage.webp"
      />
      <div
        className={`absolute inset-0 transition duration-500 ${
          isNight
            ? 'bg-[radial-gradient(circle_at_top,_rgba(56,78,142,0.32),_transparent_36%),linear-gradient(180deg,_rgba(9,13,25,0.18)_0%,_rgba(9,13,25,0.74)_100%)]'
            : 'bg-[radial-gradient(circle_at_top,_rgba(255,239,188,0.4),_transparent_34%),linear-gradient(180deg,_rgba(255,255,255,0.18)_0%,_rgba(255,245,230,0.42)_100%)]'
        }`}
      />

      <section
        aria-label="Bio da Amanda Pepe"
        className={`relative flex min-h-[min(720px,calc(100vh-64px))] w-full max-w-[440px] flex-col items-center gap-8 overflow-hidden rounded-[28px] border p-5 pt-8 shadow-[0_34px_110px_rgba(18,16,18,0.32)] backdrop-blur-md transition duration-500 sm:p-6 sm:pt-8 ${
          isNight
            ? 'border-white/18 bg-[#14151f]/22'
            : 'border-white/55 bg-white/12'
        }`}
      >
        <div
          className={`absolute inset-0 transition duration-500 ${
            isNight
              ? 'bg-[linear-gradient(180deg,_rgba(255,255,255,0.02)_0%,_rgba(9,12,22,0.1)_48%,_rgba(6,8,14,0.28)_100%)]'
              : 'bg-[linear-gradient(180deg,_rgba(255,255,255,0.14)_0%,_rgba(255,255,255,0.06)_44%,_rgba(255,244,230,0.18)_100%)]'
          }`}
        />

        <div className="relative w-full text-center">
          <div className="space-y-3">
            <h1
              className={`text-balance font-[family-name:var(--font-baloo)] text-6xl font-bold leading-[0.9] drop-shadow-lg sm:text-7xl ${
                isNight ? 'text-white' : 'text-[#2f2a2a]'
              }`}
            >
              Amanda Pepe
            </h1>
            <p
              className={`text-pretty text-base font-bold leading-7 drop-shadow ${
                isNight ? 'text-white/86' : 'text-[#2f2a2a]/82'
              }`}
            >
              #desde2012 #musica #amigas #familia #sabina #sabinahidalgo
            </p>

            <div className="flex flex-col items-center gap-3 pt-8">
              <p
                className={`inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] drop-shadow ${
                  isNight ? 'text-white/88' : 'text-[#2f2a2a]/82'
                }`}
              >
                <Heart className="h-4 w-4 fill-[#ffd86a] text-[#ffd86a]" aria-hidden="true" />
                fã da Sabina
              </p>
              <div className="grid grid-cols-2 gap-3">
                {fanLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      aria-label={link.label}
                      className={`grid h-11 w-11 place-items-center rounded-full border shadow-sm backdrop-blur transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                        isNight
                          ? 'border-white/20 bg-white/14 text-[#ffd86a] hover:bg-white/22'
                          : 'border-white/65 bg-white/68 text-primary hover:bg-white/88'
                      }`}
                      href={link.href}
                      key={link.label}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                      <span className="sr-only">{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="relative grid w-full flex-1 place-items-center">
          <nav
            aria-label="Links da Amanda Pepe"
            className="mx-auto grid max-w-[240px] grid-cols-3 gap-3"
          >
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  aria-label={link.label}
                  className={`group grid aspect-square min-h-16 place-items-center rounded-full border shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                    isNight
                      ? 'border-white/20 bg-white/16 text-white hover:bg-white/24'
                      : 'border-white/65 bg-white/76 text-[#2f2a2a] hover:bg-white/90'
                  }`}
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-full transition ${
                      isNight
                        ? 'bg-white/16 text-[#ffd86a] group-hover:bg-white group-hover:text-[#1b2554]'
                        : 'bg-[#ffe1d7] text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="sr-only">{link.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        <footer className="relative flex w-full items-center justify-between gap-3">
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-extrabold shadow-sm backdrop-blur ${
              isNight
                ? 'border-white/20 bg-white/12 text-white'
                : 'border-white/65 bg-white/34 text-[#2f2a2a]'
            }`}
          >
            <Sparkles className="h-4 w-4 text-[#ffd86a]" aria-hidden="true" />
            amandapepe.com.br
          </div>

          <div
            aria-label="Escolher modo"
            className={`grid grid-cols-2 rounded-full border p-1 backdrop-blur ${
              isNight
                ? 'border-white/20 bg-white/10'
                : 'border-white/65 bg-white/36'
            }`}
            role="group"
          >
            <button
              aria-pressed={!isNight}
              className={`grid h-9 w-9 place-items-center rounded-full transition ${
                !isNight
                  ? 'bg-white text-[#d64243] shadow-sm'
                  : 'text-white/72 hover:text-white'
              }`}
              onClick={() => setMode('day')}
              type="button"
            >
              <span className="sr-only">Dia</span>
              <Sun className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              aria-pressed={isNight}
              className={`grid h-9 w-9 place-items-center rounded-full transition ${
                isNight
                  ? 'bg-white text-[#1b2554] shadow-sm'
                  : 'text-[#2f2a2a]/70 hover:text-[#2f2a2a]'
              }`}
              onClick={() => setMode('night')}
              type="button"
            >
              <span className="sr-only">Noite</span>
              <Moon className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </footer>
      </section>
    </main>
  );
}
