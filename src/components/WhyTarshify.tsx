import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Layers,
  Code2,
  Gauge,
  PlaneTakeoff,
  CrownIcon,
  Handshake,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const points = [
  {
    icon: Code2,
    title: "Développement From Scratch",
    desc: "Ton e-commerce est développé pour durer, évoluer et performer. Un code propre, scalable et 100 % maîtrisé par toi.",
  },
  {
    icon: Layers,
    title: "Stratégie & UX/UI",
    desc: "Des parcours clairs, une expérience fluide et orientée conversion. Un design unique, une identité cohérente et une image de marque solide.",
  },
  {
    icon: Gauge,
    title: "Optimisation performance & SEO",
    desc: "Des e-commerces rapides, optimisés pour Google et boostés par nos campagnes ads pour attirer du trafic qualifié (Google ads, Meta ads, TikTok ads).",
  },

  {
    icon: PlaneTakeoff,
    title: "Migration d'une solution existante",
    desc: "On te libère d'un SaaS à abonnement ou d'un WordPress rigide, pour une solution 100 % propriétaire, autonome et évolutive.",
  },
  {
    icon: CrownIcon,
    title: "Autonomie & Contrôle total",
    desc: "Aucune licence, aucun abonnement. Ton business, ta plateforme, ta liberté.",
  },
  {
    icon: Handshake,
    title: "Accompagnement post-livraison",
    desc: "Une fois livré, on t'accompagne pour le lancement et on veille à ce que tout tourne rond. En cas de pépin, on intervient vite.",
  },
];

const WhyTarshify = () => {
  return (
    <section className="py-12 sm:py-24  bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-muted-foreground/20 mb-6 bg-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Pourquoi Tarshify fait la différence
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#F7F3ED] to-[#F0D1BF] bg-clip-text text-transparent">
            Ce qu&apos;on <span className="text-primary">t&apos;apporte</span>{" "}
            concrètement
          </h2>
          <p className="text-lg sm:text-xl text-foreground">
            Notre mission est de développer des e-commerces qui durent, qui
            performent et qui t&apos;appartiennent. On pose une base technique
            et stratégique complète. Tout ce qu&apos;il faut pour faire grandir
            ton business sans dépendance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
          {points.map((item, i) => {
            const Icon = item.icon;
            return (
              <Card
                key={i}
                className="bg-card/80 border-border hover:border-primary/70 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl bg-gradient-to-r from-[#F7F3ED] to-[#F0D1BF] bg-clip-text text-transparent">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-foreground">
                    {item.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-foreground mb-4">
            On ne livre pas juste un site. On construit un e-commerce qui
            t&apos;appartient, que tu comprends et que tu maîtrises.
          </p>

          <p className="text-base sm:text-lg text-primary mt-8 mb-6 mx-6 italic">
            Parce qu&apos;un bon e-commerce, c'est toi qui le contrôles, pas
            l&apos;inverse.
          </p>
          <a
            href="https://wa.me/33629937887?text=Salut%20Tarshify%20!%20Je%20veux%20en%20savoir%20plus%20sur%20les%20e-commerces%20autonomes%20!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="lg" className="text-base group">
              Je veux mon e-commerce !
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyTarshify;
