import {
  AtSign,
  Camera,
  MessageCircle,
  Music,
  Sparkles,
} from 'lucide-react';

const links = [
  {
    label: 'Perfis do Instagram',
    href: 'https://instagram.com/',
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
    href: 'https://wa.me/5500000000000',
    icon: MessageCircle,
  },
];

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center overflow-hidden bg-background px-5 py-8 text-foreground sm:px-8">
      <section
        aria-label="Bio da Amanda Pepe"
        className="relative flex min-h-[min(760px,calc(100vh-64px))] w-full max-w-[460px] flex-col justify-end overflow-hidden rounded-[28px] border border-white/75 bg-[#2f2a2a] p-5 shadow-[0_34px_110px_rgba(45,39,37,0.28)] sm:p-6"
      >
        <img
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          src="/amanda-sp-collage.png"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.06)_0%,_rgba(47,42,42,0.16)_38%,_rgba(24,22,23,0.82)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/45 to-transparent" />

        <div className="relative space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/22 px-3 py-2 text-sm font-extrabold text-white shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            amandapepe.com.br
          </div>

          <div className="space-y-3">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#ffd86a]">
              14 anos · São Paulo
            </p>
            <h1 className="text-balance text-5xl font-black leading-[0.94] text-white sm:text-6xl">
              Amanda Pepe
            </h1>
            <p className="text-pretty text-base font-bold leading-7 text-white/86">
              #saopaulo #14anos #musica #fotos #amigas #familia
            </p>
          </div>

          <nav aria-label="Links da Amanda Pepe" className="grid gap-3">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  className="group flex min-h-14 items-center justify-between rounded-2xl border border-white/55 bg-white/88 px-4 text-base font-black text-[#2f2a2a] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-[#ffe1d7] text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {link.label}
                  </span>
                  <span aria-hidden="true">→</span>
                </a>
              );
            })}
          </nav>
        </div>
      </section>
    </main>
  );
}
