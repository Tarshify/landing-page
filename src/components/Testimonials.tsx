import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sophie Martin",
        role: "Fondatrice, BeautyBox",
        content:
            "Grâce à Tarshify, nous avons multiplié notre chiffre d'affaires par 4 en seulement 5 mois. Leur expertise en publicité et leur accompagnement personnalisé ont été déterminants.",
        rating: 5,
    },
    {
        name: "Thomas Dubois",
        role: "CEO, TechStyle",
        content:
            "L'équipe de Tarshify a complètement transformé notre approche marketing. Notre taux de conversion est passé de 1,2% à 4,8%. Les résultats parlent d'eux-mêmes.",
        rating: 5,
    },
    {
        name: "Marie Leroy",
        role: "Directrice Marketing, FashionHub",
        content:
            "Une agence qui tient ses promesses. En 6 mois, nous sommes passés de 50K€ à 280K€ de CA mensuel. Leur stratégie de growth marketing est redoutablement efficace.",
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-card/50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        Ils nous font{" "}
                        <span className="text-primary">confiance</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Découvrez les résultats concrets de nos clients qui ont
                        explosé leur croissance
                    </p>
                </div>

                {/* Scrolling testimonials */}
                <div className="relative mb-16">
                    <div className="flex animate-scroll-right">
                        {/* Duplicate testimonials multiple times for seamless loop */}
                        {[
                            ...testimonials,
                            ...testimonials,
                            ...testimonials,
                            ...testimonials,
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[400px] mx-3"
                            >
                                <Card className="bg-background border-border h-full">
                                    <CardContent className="pt-6">
                                        <Quote className="w-10 h-10 text-primary/30 mb-4" />
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(testimonial.rating)].map(
                                                (_, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-primary text-lg"
                                                    >
                                                        ★
                                                    </span>
                                                )
                                            )}
                                        </div>
                                        <p className="text-foreground mb-6 leading-relaxed">
                                            "{testimonial.content}"
                                        </p>
                                        <div className="border-t border-border pt-4">
                                            <p className="font-semibold text-foreground">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="text-5xl font-bold text-primary mb-2">
                            +300%
                        </div>
                        <p className="text-muted-foreground">
                            Croissance moyenne
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-bold text-primary mb-2">
                            4.8x
                        </div>
                        <p className="text-muted-foreground">ROI moyen</p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-bold text-primary mb-2">
                            200+
                        </div>
                        <p className="text-muted-foreground">
                            Clients accompagnés
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
