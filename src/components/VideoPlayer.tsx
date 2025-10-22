import { Play } from "lucide-react";

interface VideoPlayerProps {
  videoId: string; // YouTube video ID
  title: string;
  description?: string;
  thumbnail?: string;
}

/**
 * Componente de Video Player
 * Suporta incorporação de vídeos do YouTube
 * Responsivo e otimizado para performance
 */
export const VideoPlayer = ({ videoId, title, description }: VideoPlayerProps) => {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
      {/* Video Container - 16:9 Aspect Ratio */}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>

      {/* Video Info */}
      {(title || description) && (
        <div className="p-4">
          {title && (
            <h4 className="font-semibold text-foreground mb-1 flex items-center gap-2">
              <Play size={18} className="text-primary" />
              {title}
            </h4>
          )}
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
      )}
    </div>
  );
};
