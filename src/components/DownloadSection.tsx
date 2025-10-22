import { Download, FileText, FileType } from "lucide-react";
import { Button } from "./ui/button";
import { logger } from "@/lib/logger";

interface DownloadOption {
  format: string;
  icon: React.ReactNode;
  size: string;
  description: string;
  downloadUrl: string;
}

/**
 * Componente de Downloads
 * Permite aos usuários baixar o e-book em diferentes formatos
 */
export const DownloadSection = () => {
  const downloads: DownloadOption[] = [
    {
      format: "PDF",
      icon: <FileText size={24} />,
      size: "2.5 MB",
      description: "Ideal para leitura em qualquer dispositivo",
      downloadUrl: "#", // Substituir com URL real
    },
    {
      format: "DOCX",
      icon: <FileType size={24} />,
      size: "1.8 MB",
      description: "Editável no Microsoft Word e similares",
      downloadUrl: "#", // Substituir com URL real
    },
  ];

  const handleDownload = (format: string, url: string) => {
    // Aqui você implementaria a lógica real de download
    logger.info(`User initiated download`, { format, url });
    // window.location.href = url;
    alert(
      `Download do formato ${format} será implementado. Por favor, adicione os arquivos do e-book à pasta public e atualize as URLs.`
    );
  };

  return (
    <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
          <Download size={32} />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Baixe o E-book Completo</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Leve todo o conteúdo com você! Baixe o e-book no formato de sua preferência e estude
          offline.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {downloads.map((option) => (
          <div
            key={option.format}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                {option.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1">Formato {option.format}</h4>
                <p className="text-sm text-muted-foreground mb-1">{option.description}</p>
                <p className="text-xs text-muted-foreground mb-3">Tamanho: {option.size}</p>
                <Button
                  onClick={() => handleDownload(option.format, option.downloadUrl)}
                  size="sm"
                  className="w-full"
                >
                  <Download size={16} className="mr-2" />
                  Baixar {option.format}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs text-muted-foreground">
          ✨ 100% Gratuito • Sem cadastro necessário • Atualizado em 2025
        </p>
      </div>
    </div>
  );
};
