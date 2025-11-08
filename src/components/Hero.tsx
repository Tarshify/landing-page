import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroBg from "@/assets/hero1.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="E-commerce background"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/85 to-background/85 "></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-muted-foreground/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">
              Experts en E-commerce sur-mesure
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#F7F3ED] to-[#F0D1BF] bg-clip-text text-transparent">
            Ton business, ta plateforme,{" "}
            <span className="text-primary">ta liberté</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl  mb-12 max-w-2xl mx-auto text-foreground ">
            Marre des abonnements et des contraintes ? Chez Tarshify, on
            développe des e-commerces performants, autonomes et 100 % à toi. Pas
            de licence, pas de dépendance. Juste une boutique rapide, rentable
            et libre.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/33629937887?text=Salut%20Tarshify%20!%20Je%20veux%20en%20savoir%20plus%20sur%20les%20e-commerces%20autonomes%20!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="text-base group">
                Lance ton projet sur-mesure
              </Button>
            </a>
            <a href="#portfolio" className="inset">
              <Button
                variant="outline"
                size="lg"
                className="text-base border-border hover:bg-card"
              >
                Découvrir nos résultats
              </Button>
            </a>
          </div>

          {/* Social Proof */}
          {/* <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-background"
                  />
                ))}
              </div>
              <span className="text-muted-foreground">
                +200 clients satisfaits
              </span>
            </div> */}
          {/* <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-primary">4.9</span>
              <div className="flex flex-col">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-primary">
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  Note moyenne
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
