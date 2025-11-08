import {
  Palette,
  Lock,
  Ban,
  House,
  Lightbulb,
  ArrowRight,
  TrendingDown,
  Euro,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const problems = [
  {
    icon: Euro,
    text: "Des abonnements qui s'empilent, mois après mois.",
  },
  {
    icon: Palette,
    text: "Des thèmes rigides qui brident ton image de marque.",
  },
  {
    icon: Lock,
    text: "Un code verrouillé, impossible à faire évoluer.",
  },
  {
    icon: Ban,
    text: "Une croissance bloquée dès que ton business décolle.",
  },

  {
    icon: TrendingDown,
    text: "Des performances faibles, un marketing limité et un taux de conversion qui s'effondre.",
  },
  {
    icon: House,
    text: "Et le pire, ta boutique ne t'appartient même pas.",
  },
];

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-background" id="solutions">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#F7F3ED] to-[#F0D1BF] bg-clip-text text-transparent">
                Le <span className="text-primary">vrai problème</span> des
                <br />
                e-commerces actuels
              </h2>
              <p className="text-lg mb-8 text-foreground">
                Beaucoup veulent lancer leur boutique en ligne… Mais finissent
                enfermés dans des plateformes qui ne leur appartiennent pas.
                Abonnements mensuels, bugs, limitations. Au final la liberté
                promise disparaît vite.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-6">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-destructive/5 border border-destructive/30"
                >
                  <Icon className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-foreground">
                    {problem.text}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="text-base sm:text-lg  mt-8 mx-6 italic text-foreground">
            La promesse de liberté se transforme vite en prison digitale. Ce
            n'est pas toi qui possèdes ta boutique… c'est elle qui te possède.
          </p>
        </div>

        {/* Solution Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/80 border-border">
            <CardHeader>
              <div className="flex flex-col gap-4 text-center">
                <div className="flex-shrink-0 max-[415px]:flex-col max-[415px]:items-center flex gap-3 items-baseline justify-center">
                  <div className="min-w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-[#F7F3ED] to-[#F0D1BF] bg-clip-text text-transparent">
                    La solution Tarshify
                  </CardTitle>
                </div>
                <div>
                  <CardDescription className="text-base sm:text-lg text-foreground">
                    Notre mission : développer des e-commerces sur mesure,
                    autonomes et durables. Pour les marques et entrepreneurs qui
                    veulent posséder leur boutique, pas la louer.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-background/50 rounded-lg py-6 px-4 sm:p-6 border border-border text-center">
                <h3 className="text-xl font-semibold mb-3 gap-2 text-foreground">
                  Et si ton e-commerce existe déjà sur un SaaS ou une solution
                  WordPress ?
                </h3>
                <div className="flex justify-center gap-2 mb-4">
                  <ArrowRight className="text-primary" />
                  <p className="text-base sm:text-lg text-primary">
                    On t'aide à reprendre la main.
                  </p>
                </div>
                <p className="text-base sm:text-lg text-foreground ml-8">
                  Migration, optimisation et autonomie totale. Le tout sans
                  abonnement, sans dépendance, sans limites.
                </p>
              </div>

              <div className="text-center pt-4">
                <p className="text-xl sm:text-2xl font-bold text-primary">
                  Chez Tarshify, ton business t'appartient. Ton code aussi.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
