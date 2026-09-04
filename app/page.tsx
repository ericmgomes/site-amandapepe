import {
  Camera,
  Heart,
  Mail,
  Music,
  PartyPopper,
  Sparkles,
} from 'lucide-react';

const links = [
  {
    label: 'Álbum de fotos',
    href: '#memorias',
    icon: Camera,
  },
  {
    label: 'Músicas favoritas',
    href: '#playlist',
    icon: Music,
  },
  {
    label: 'Mensagem para Amanda',
    href: 'mailto:oi@amandamaria.com.br',
    icon: Mail,
  },
];

const moments = [
  'Sorrisos largos',
  'Abraços apertados',
  'Dias de sol',
  'Pequenas descobertas',
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section className="relative flex min-h-screen items-center justify-center px-5 py-10 sm:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(248,151,119,0.22),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(79,160,139,0.18),_transparent_34%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/70 to-transparent" />

        <div className="relative mx-auto grid w-full max-w-5xl items-center gap-8 lg:grid-cols-[0.96fr_1.04fr]">
          <div className="order-2 space-y-5 rounded-[28px] border border-white/70 bg-white/78 p-5 shadow-[0_24px_70px_rgba(92,67,52,0.16)] backdrop-blur md:p-7 lg:order-1">
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              amandamaria.com.br
            </div>

            <div className="space-y-3">
              <h1 className="text-balance text-5xl font-black leading-[0.96] text-[#3d3028] sm:text-6xl">
                Amanda Maria
              </h1>
              <p className="text-pretty text-lg leading-8 text-[#655247]">
                Uma página para guardar carinho, fotos, músicas e pequenos
                momentos de uma menina que deixa tudo mais bonito por onde
                passa.
              </p>
            </div>

            <nav aria-label="Links da Amanda Maria" className="space-y-3">
              {links.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    className="group flex min-h-14 items-center justify-between rounded-2xl border border-[#ead4c6] bg-[#fffaf4] px-4 text-base font-bold text-[#46382f] shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:bg-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    href={link.href}
                    key={link.label}
                  >
                    <span className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f9ded1] text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
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
                alt="Flores, sol, lua e estrelas em aquarela"
                className="relative h-full w-full rounded-[34px] border-8 border-white object-cover shadow-[0_28px_90px_rgba(91,72,55,0.22)]"
                src="/amanda-watercolor.png"
              />
              <div className="absolute -bottom-4 left-5 right-5 rounded-2xl border border-white/70 bg-white/88 px-5 py-4 shadow-xl backdrop-blur">
                <p className="flex items-center justify-center gap-2 text-center text-sm font-extrabold uppercase tracking-[0.14em] text-[#4f8f7d]">
                  <Heart className="h-4 w-4 fill-current" aria-hidden="true" />
                  feita com amor
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
              <PartyPopper className="h-4 w-4" aria-hidden="true" />
              memórias
            </p>
            <h2
              className="text-balance text-3xl font-black text-[#3d3028]"
              id="memorias-title"
            >
              Coisas que merecem ficar por perto.
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
                  Um espaço pronto para trocar por fotos, links ou lembranças
                  especiais.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
