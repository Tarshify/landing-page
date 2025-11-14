import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CTABG from "@/assets/test2.png";

const benefits = [
    "Audit gratuit et analyse de ton idée",
    "Stratégie personnalisée livrée sous 48h",
    "Accompagnement par des experts e-commerce",
    "Plan d'action clair pour permformer",
];

const CTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 z-0">
                <img
                    src={CTABG}
                    alt="CTA background"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 sm:p-12 shadow-2xl">
                        <div className="text-center mb-8">
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#F7F3ED] to-[#F0D1BF] bg-clip-text text-transparent">
                                Prêt à{" "}
                                <span className="text-primary">lancer</span> ton
                                e-commerce ?
                            </h2>
                            <p className="text-xl text-foreground">
                                Rejoins les marques qui ont choisi la liberté.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 sm:ml-6 gap-4 mb-8 my-auto">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="text-foreground font-normal italic">
                                        {benefit}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/33629937887?text=Salut%20Tarshify%20!%20Je%20veux%20en%20savoir%20plus%20sur%20les%20e-commerces%20autonomes%20!"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    variant="hero"
                                    size="lg"
                                    className="text-base group"
                                >
                                    Je veux mon audit gratuit
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </a>
                        </div>

                        <p className="text-center text-sm text-primary mt-6">
                            Sans engagement • Réponse en 2h max • 100% gratuit
                        </p>
                    </div>
                </div>
            </div>

            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
        </section>
    );
};

export default CTA;
