import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, CodeXml, Truck, Sparkles, Blocks } from "lucide-react";

const processSteps = [
  {
    icon: Lightbulb,
    title: "Découverte",
    description:
      "On apprend à connaître ton business et ta vision pour poser les bases d'une stratégie claire.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Blocks,
    title: "Conception",
    description:
      "On conçoit l'expérience, le design et la structure technique. Objectif : performance, fluidité et identité forte.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: CodeXml,
    title: "Développement",
    description:
      "On code ton e-commerce from scratch, sans dépendance. Rapide, stable et 100 % maîtrisé.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Truck,
    title: "Livraison",
    description:
      "On déploie ton e-commerce et on te remet les clés. Tu es prêt à vendre, en toute autonomie.",
    color: "from-purple-500 to-pink-500",
  },
];

const AboutUs = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-background to-muted/10 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-muted-foreground/20 mb-6 bg-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Notre ADN, notre méthode
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#F7F3ED] to-[#F0D1BF] bg-clip-text text-transparent">
            Qui sommes <span className="text-primary">nous</span> ?
          </h2>
          <p className="text-xl text-foreground">
            Tarshify, c'est l'union de deux développeurs passionnés :{" "}
            <span className="text-primary">Sacha</span> expert front-end et
            marketing, <span className="text-primary">Yasser</span> spécialiste
            back-end et DevOps. Ensemble, on allie vision stratégique et rigueur
            technique pour développer des e-commerces performants, stables et
            centrés sur le client. On aime le code propre, sécurisé, les
            interfaces soignées et les projets qui ont du sens. Notre mission :
            donner aux marques les moyens de posséder leur liberté digitale.
          </p>
        </motion.div>
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-[#F7F3ED] to-[#F0D1BF] bg-clip-text text-transparent">
          <span className="text-primary">Notre méthode</span> de travail :
        </h2>

        <div className="relative mt-14" ref={containerRef}>
          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => {
              const isActive = activeStep === index;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: isEven ? 40 : -40 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : isEven ? 40 : -40,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative flex flex-col items-center"
                >
                  <div className="relative z-50 -mb-2">
                    <div
                      className={`absolute inset-0 rounded-full blur-md opacity-30 transition-opacity ${
                        isActive && "bg-primary/60"
                      }`}
                    />
                    <Badge
                      variant="outline"
                      className={`relative z-50 mb-4 bg-card/80 border-border text-foreground px-4 py-1.5 text-sm font-medium backdrop-blur-sm ${
                        isActive &&
                        "bg-primary/10 border-primary/40 text-primary shadow-xs shadow-primary/20"
                      }`}
                    >
                      Étape {index + 1}
                    </Badge>
                  </div>

                  {/* Card */}
                  <Card
                    className={` h-full transition-all  duration-500 overflow-hidden bg-card/80 backdrop-blur-sm -mt-6 pt-6 ${
                      isActive
                        ? "border-primary/70 shadow-xl shadow-primary/10"
                        : "border-border"
                    }`}
                  >
                    {/* Animated gradient border bottom */}
                    <motion.div
                      className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${step.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: isActive ? "100%" : "0%" }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <CardContent className="p-6 relative">
                      {/* Icon with gradient background */}
                      <motion.div
                        className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden  ${
                          isActive
                            ? "shadow-lg shadow-primary/20 border border-primary/70"
                            : "shadow-md border border-border"
                        }`}
                        style={{
                          background: `linear-gradient(135deg, ${step.color
                            .split(" ")[0]
                            .replace("from-", "")}, ${step.color
                            .split(" ")[1]
                            .replace("to-", "")})`,
                        }}
                        animate={{
                          y: isActive ? [0, -2, 0] : 0,
                        }}
                        transition={{
                          y: {
                            duration: 0.2,
                            repeat: isActive ? Infinity : 0,
                            repeatType: "loop",
                            ease: "easeInOut",
                          },
                        }}
                      >
                        {/* Effet de brillance */}
                        <div className="absolute inset-0 bg-white/10 transform -rotate-45 origin-left -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <step.icon
                          className={`h-7 w-7 text-foreground relative z-10 ${
                            isActive && "text-primary"
                          }`}
                        />
                      </motion.div>

                      <h3
                        className={`text-xl font-semibold mb-3 text-foreground ${
                          isActive && "text-primary"
                        }`}
                      >
                        {step.title}
                      </h3>

                      <p className="text-foreground text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
