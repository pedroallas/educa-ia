import { Card } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface PromptTemplateProps {
  title: string;
  content: string;
}

export const PromptTemplate = ({ title, content }: PromptTemplateProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="p-6 bg-card border border-border mb-6">
      <div className="flex items-start justify-between mb-4">
        <h4 className="font-semibold text-lg text-foreground">{title}</h4>
        <button
          onClick={copyToClipboard}
          className="p-2 hover:bg-secondary rounded-lg transition-colors"
          title="Copiar template"
        >
          {copied ? (
            <Check className="w-5 h-5 text-green-500" />
          ) : (
            <Copy className="w-5 h-5 text-muted-foreground" />
          )}
        </button>
      </div>
      <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm">
        <code className="text-muted-foreground whitespace-pre-wrap">{content}</code>
      </pre>
    </Card>
  );
};
