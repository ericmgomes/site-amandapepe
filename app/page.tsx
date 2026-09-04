'use client';

import { useState } from 'react';
import {
  AtSign,
  Camera,
  MessageCircle,
  Moon,
  Music,
  Sparkles,
  Sun,
} from 'lucide-react';

const links = [
  {
    label: 'Perfis do Instagram',
    href: 'https://www.instagram.com/mandpepe/',
    icon: AtSign,
  },
  {
    label: 'Playlists Spotify',
    href: 'https://open.spotify.com/',
    icon: Music,
  },
  {
    label: 'Álbuns de fotos',
    href: 'https://photos.google.com/',
    icon: Camera,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5511940013816',
    icon: MessageCircle,
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
        src="/amanda-sp-collage.png"
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
        className={`relative flex min-h-[min(720px,calc(100vh-64px))] w-full max-w-[440px] flex-col justify-between overflow-hidden rounded-[28px] border p-5 shadow-[0_34px_110px_rgba(18,16,18,0.32)] backdrop-blur-md transition duration-500 sm:p-6 ${
          isNight
            ? 'border-white/20 bg-[#14151f]/42'
            : 'border-white/65 bg-white/26'
        }`}
      >
        <div
          className={`absolute inset-0 transition duration-500 ${
            isNight
              ? 'bg-[linear-gradient(180deg,_rgba(255,255,255,0.03)_0%,_rgba(9,12,22,0.22)_48%,_rgba(6,8,14,0.56)_100%)]'
              : 'bg-[linear-gradient(180deg,_rgba(255,255,255,0.28)_0%,_rgba(255,255,255,0.15)_44%,_rgba(255,244,230,0.4)_100%)]'
          }`}
        />

        <div className="relative flex items-start justify-between gap-3">
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
        </div>

        <div className="relative space-y-5">
          <div className="space-y-3">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#ffd86a] drop-shadow">
              14 anos · São Paulo
            </p>
            <h1
              className={`text-balance text-5xl font-black leading-[0.94] drop-shadow-lg sm:text-6xl ${
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
              #saopaulo #14anos #musica #fotos #amigas #familia
            </p>
          </div>

          <nav
            aria-label="Links da Amanda Pepe"
            className="grid grid-cols-4 gap-3"
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
      </section>
    </main>
  );
}
