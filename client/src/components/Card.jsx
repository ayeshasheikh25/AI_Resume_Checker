import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import {
  FileText,
  Bot,
  ChartColumn,
  Sparkles,
} from "lucide-react";

function CardFeatures() {
  const features = [
    {
      icon: <FileText className="h-10 w-10 text-green-600" />,
      title: "Upload Resume",
      description: "Upload your PDF securely.",
    },
    {
      icon: <Bot className="h-10 w-10 text-green-600" />,
      title: "AI Analysis",
      description: "Powered by AI.",
    },
    {
      icon: <ChartColumn className="h-10 w-10 text-green-600" />,
      title: "ATS Score",
      description: "Instant ATS score.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-green-600" />,
      title: "Resume Rewrite",
      description: "Improve weak sections.",
    },
  ];

  return (
    <section className="px-6 py-16 bg-white">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="cursor-pointer border-0 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <CardHeader>
              <div className="mb-3 text-5xl">{feature.icon}</div>

              <CardTitle>{feature.title}</CardTitle>

              <CardDescription>
                {feature.description}
              </CardDescription>
            </CardHeader>

            <CardContent />
          </Card>
        ))}
      </div>
    </section>
  );
}

export default CardFeatures;