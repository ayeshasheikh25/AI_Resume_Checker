import {
  Upload,
  Bot,
  Lightbulb,
  Download,
} from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="w-8 h-8 text-green-600" />,
      title: "Upload Resume",
    },
    {
      icon: <Bot className="w-8 h-8 text-green-600" />,
      title: "AI Analysis",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-green-600" />,
      title: "Receive Suggestions",
    },
    {
      icon: <Download className="w-8 h-8 text-green-600" />,
      title: "Download Better Resume",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-14">
        How It Works
      </h2>

      <div className="flex flex-col md:flex-row lg:flex-row item-center justify-center gap-6">
        {steps.map((step, index) => (
          <div key={index}>
            <div className="flex flex-col gap-2 text-center items-center justify-center  ">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center ">
                {step.icon}
              </div>

              <p className="mt-4 font-semibold text-sm">
                {step.title}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;