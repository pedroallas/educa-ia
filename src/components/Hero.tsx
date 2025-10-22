import { BookOpen, Sparkles } from "lucide-react";

/**
 * Componente Hero - Seção principal de abertura do site
 * Exibe título, subtítulo e chamada para ação com animações de fundo
 */
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-2">
        <div className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-1.5 md:px-4 md:py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 mt-8 md:mt-0 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
          <span className="text-[0.7rem] md:text-sm text-muted-foreground whitespace-nowrap">
            E-book Completo sobre Prompt Engineering
          </span>
        </div>

        <h1 className="mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
          A Arte de Criar Prompts Eficazes
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Domine a habilidade essencial da era da IA. Aprenda a criar prompts poderosos que
          transformam ideias em resultados extraordinários.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#intro"
            className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-[0_0_40px_rgba(147,51,234,0.3)] transition-all duration-300 flex items-center gap-2"
          >
            <BookOpen className="w-5 h-5" />
            Começar a Ler
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <button
            onClick={() =>
              document.getElementById("fundamentos")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-secondary text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-colors"
          >
            Ver Fundamentos
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
          {[
            { value: "10+", label: "Capítulos" },
            { value: "50+", label: "Exemplos Práticos" },
            { value: "20+", label: "Templates" },
            { value: "100%", label: "Gratuito" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 bg-card/50 backdrop-blur-sm border border-border rounded-lg"
            >
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
