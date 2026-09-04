import {
  AtSign,
  Camera,
  Heart,
  Mail,
  Music,
  MapPin,
  Sparkles,
} from 'lucide-react';

const links = [
  {
    label: 'Fotos e momentos',
    href: '#memorias',
    icon: Camera,
  },
  {
    label: 'Playlist do momento',
    href: '#playlist',
    icon: Music,
  },
  {
    label: 'Instagram',
    href: '#instagram',
    icon: AtSign,
  },
  {
    label: 'Contato da família',
    href: 'mailto:oi@amandapepe.com.br',
    icon: Mail,
  },
];

const moments = [
  'Vida em São Paulo',
  'Fotos favoritas',
  'Músicas que grudam',
  'Rolês, escola e amigas',
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section className="relative flex min-h-screen items-center justify-center px-5 py-10 sm:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(230,67,68,0.2),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(31,131,155,0.2),_transparent_34%),linear-gradient(135deg,_#fff7ea_0%,_#f8fbff_48%,_#fff1ee_100%)]" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/75 to-transparent" />

        <div className="relative mx-auto grid w-full max-w-5xl items-center gap-8 lg:grid-cols-[0.96fr_1.04fr]">
          <div className="order-2 space-y-5 rounded-[24px] border border-white/70 bg-white/80 p-5 shadow-[0_24px_70px_rgba(58,48,43,0.16)] backdrop-blur md:p-7 lg:order-1">
            <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-primary">
              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                amandapepe.com.br
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#f3b13e]" />
              <span className="flex items-center gap-2 text-[#227f8f]">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                São Paulo
              </span>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#d64243]">
                14 anos
              </p>
              <h1 className="text-balance text-5xl font-black leading-[0.96] text-[#2f2a2a] sm:text-6xl">
                Amanda Pepe
              </h1>
              <p className="text-pretty text-lg leading-8 text-[#5d5350]">
                Uma bio para reunir o que combina com ela agora: fotos, música,
                lembranças, cidade grande e esse jeito próprio de estar no
                mundo.
              </p>
            </div>

            <nav aria-label="Links da Amanda Pepe" className="space-y-3">
              {links.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    className="group flex min-h-14 items-center justify-between rounded-2xl border border-[#ead4c6] bg-[#fffaf4] px-4 text-base font-bold text-[#332d2d] shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:bg-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    href={link.href}
                    key={link.label}
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

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-square w-full max-w-[520px]">
              <div className="absolute inset-7 rounded-full bg-[#f6bf57]/30 blur-3xl" />
              <img
                alt="Colagem urbana inspirada em São Paulo"
                className="relative h-full w-full rounded-[28px] border-8 border-white object-cover shadow-[0_28px_90px_rgba(58,48,43,0.22)]"
                src="/amanda-sp-collage.png"
              />
              <div className="absolute -bottom-4 left-5 right-5 rounded-2xl border border-white/70 bg-white/88 px-5 py-4 shadow-xl backdrop-blur">
                <p className="flex items-center justify-center gap-2 text-center text-sm font-extrabold uppercase tracking-[0.14em] text-[#227f8f]">
                  <Heart className="h-4 w-4 fill-current" aria-hidden="true" />
                  feita para ela
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-[#fffaf4] px-5 py-12 sm:px-8"
        id="memorias"
        aria-labelledby="memorias-title"
      >
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-primary">
              <AtSign className="h-4 w-4" aria-hidden="true" />
              bio
            </p>
            <h2
              className="text-balance text-3xl font-black text-[#3d3028]"
              id="memorias-title"
            >
              Um cantinho dela na internet.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2" id="playlist">
            {moments.map((moment) => (
              <div
                className="rounded-2xl border border-[#ead4c6] bg-white p-5 shadow-sm"
                key={moment}
              >
                <p className="text-lg font-extrabold text-[#46382f]">
                  {moment}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#765f53]">
                  Espaço pronto para colocar links reais, fotos, playlists ou
                  lembranças que façam sentido para a Amanda agora.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
