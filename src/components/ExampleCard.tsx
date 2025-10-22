import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle, Lightbulb } from "lucide-react";

interface ExampleCardProps {
  type: "good" | "bad" | "tip";
  title?: string;
  children: ReactNode;
}

export const ExampleCard = ({ type, title, children }: ExampleCardProps) => {
  const config = {
    good: {
      icon: CheckCircle,
      color: "text-green-500",
      borderColor: "border-green-500/30",
      bgColor: "bg-green-500/5",
      label: "Exemplo Bom",
    },
    bad: {
      icon: XCircle,
      color: "text-red-500",
      borderColor: "border-red-500/30",
      bgColor: "bg-red-500/5",
      label: "Exemplo Ruim",
    },
    tip: {
      icon: Lightbulb,
      color: "text-yellow-500",
      borderColor: "border-yellow-500/30",
      bgColor: "bg-yellow-500/5",
      label: "Dica",
    },
  };

  const { icon: Icon, color, borderColor, bgColor, label } = config[type];

  return (
    <Card className={`p-6 border-l-4 ${borderColor} ${bgColor} mb-4`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-6 h-6 ${color} flex-shrink-0 mt-1`} />
        <div className="flex-1">
          <h4 className="font-semibold mb-2 text-foreground">{title || label}</h4>
          <div className="text-muted-foreground space-y-2">{children}</div>
        </div>
      </div>
    </Card>
  );
};
