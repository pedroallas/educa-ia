import { ExternalLink, Users, MessageSquare, BookOpen, Github } from "lucide-react";

interface CommunityLink {
  name: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  tags: string[];
}

/**
 * Componente de Próximos Passos
 * Links para comunidades, recursos e plataformas reais de IA e Prompt Engineering
 */
export const NextSteps = () => {
  const communities: CommunityLink[] = [
    {
      name: "OpenAI Community Forum",
      description:
        "Fórum oficial da OpenAI para discussões sobre ChatGPT, GPT-4 e prompt engineering",
      url: "https://community.openai.com/",
      icon: <MessageSquare size={24} />,
      tags: ["ChatGPT", "GPT-4", "Fórum"],
    },
    {
      name: "PromptEngineering",
      description: "Comunidade no Reddit dedicada a compartilhar técnicas e prompts",
      url: "https://www.reddit.com/r/PromptEngineering/",
      icon: <Users size={24} />,
      tags: ["Reddit", "Comunidade", "Compartilhamento"],
    },
    {
      name: "Prompt Engineering Guide (GitHub)",
      description: "Repositório completo com guias, tutoriais e exemplos práticos",
      url: "https://github.com/dair-ai/Prompt-Engineering-Guide",
      icon: <Github size={24} />,
      tags: ["GitHub", "Open Source", "Tutoriais"],
    },
    {
      name: "Learn Prompting",
      description: "Curso gratuito e completo sobre prompt engineering",
      url: "https://learnprompting.org/",
      icon: <BookOpen size={24} />,
      tags: ["Curso", "Gratuito", "Certificação"],
    },
    {
      name: "Anthropic Claude Community",
      description: "Comunidade oficial do Claude AI com exemplos e melhores práticas",
      url: "https://www.anthropic.com/claude",
      icon: <MessageSquare size={24} />,
      tags: ["Claude", "Anthropic", "Documentação"],
    },
    {
      name: "AI Brasil - Telegram",
      description: "Grupo brasileiro para discussões sobre IA e suas aplicações",
      url: "https://t.me/",
      icon: <Users size={24} />,
      tags: ["Brasil", "Telegram", "Português"],
    },
  ];

  const aiTools = [
    {
      name: "ChatGPT",
      description: "Ideal para conversas, brainstorming e geração de conteúdo educacional",
      url: "https://chat.openai.com/",
      icon: <MessageSquare size={20} />,
      bestFor: "Planos de aula, atividades, explicações",
      color: "text-green-500",
    },
    {
      name: "Claude",
      description: "Excelente para análise de textos longos e revisões detalhadas",
      url: "https://claude.ai/",
      icon: <BookOpen size={20} />,
      bestFor: "Correção de redações, análise literária",
      color: "text-orange-500",
    },
    {
      name: "Gemini",
      description: "Integrado ao Google Workspace para educadores",
      url: "https://gemini.google.com/",
      icon: <ExternalLink size={20} />,
      bestFor: "Google Docs, Sheets e Apresentações",
      color: "text-blue-500",
    },
    {
      name: "Perplexity",
      description: "Pesquisas com referências e fontes verificadas",
      url: "https://www.perplexity.ai/",
      icon: <BookOpen size={20} />,
      bestFor: "Pesquisas acadêmicas e verificação",
      color: "text-purple-500",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Seção Principal de Comunidades */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Users className="text-primary" size={28} />
          Junte-se às Comunidades
        </h3>
        <p className="text-muted-foreground mb-6">
          Continue aprendendo e compartilhando conhecimento com milhares de entusiastas e
          profissionais de IA
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {communities.map((community) => (
            <a
              key={community.name}
              href={community.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  {community.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {community.name}
                    </h4>
                    <ExternalLink
                      size={16}
                      className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{community.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {community.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-secondary rounded-md text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Ferramentas de IA Recomendadas */}
      <div className="bg-secondary/30 rounded-xl p-6 border border-border">
        <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
          �️ Ferramentas de IA Recomendadas
        </h4>
        <p className="text-sm text-muted-foreground mb-4">
          Plataformas essenciais para educadores explorarem IA na prática
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {aiTools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-3 mb-2">
                <span className={`${tool.color} group-hover:scale-110 transition-transform`}>
                  {tool.icon}
                </span>
                <div className="flex-1">
                  <h5 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                    {tool.name}
                  </h5>
                  <p className="text-xs text-muted-foreground mb-2">{tool.description}</p>
                  <div className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    <span className="font-medium">Melhor para:</span>
                    <span>{tool.bestFor}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 text-center">
        <h4 className="text-xl font-bold text-foreground mb-2">Continue Praticando!</h4>
        <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
          A melhor forma de dominar prompt engineering é praticando diariamente. Experimente criar
          prompts para diferentes situações e compartilhe seus resultados com a comunidade.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <span>✨ Pratique todos os dias</span>
          <span>•</span>
          <span>🤝 Compartilhe seus prompts</span>
          <span>•</span>
          <span>📈 Evolua continuamente</span>
        </div>
      </div>
    </div>
  );
};
