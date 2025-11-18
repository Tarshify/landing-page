import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import mockup1 from "@/assets/elecconnect.png";
import mockup2 from "@/assets/chajarat-mariam.png";
import { ArrowUpRight, BadgeCheck } from "lucide-react";

const projects = [
    {
        image: mockup1,
        title: "ELEC'CONNECT",
        category: "High Tech",
        result: "Une boutique rapide, maîtrisée et 100 % indépendante.",
        link: "https://www.elecconnect.fr/",
    },
    {
        image: mockup2,
        title: "Chajarat Maryam",
        category: "Bien-être",
        result: "Une expérience d'achat repensée qui séduit les clients.",
        link: "https://chajaratmaryam.fr",
    },
];

const Portfolio = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;
        let scrollPosition = 0;
        const scrollSpeed = window.innerWidth < 768 ? 1 : 2.5;

        const animate = () => {
            scrollPosition += scrollSpeed;

            const cardWidth =
                window.innerWidth < 768
                    ? 280
                    : window.innerWidth < 1024
                    ? 350
                    : 450;
            const gapWidth = window.innerWidth < 768 ? 16 : 24;
            const oneSetWidth = (cardWidth + gapWidth) * projects.length;

            if (scrollPosition >= oneSetWidth) {
                scrollPosition = 0;
            }

            scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section
            className="py-24 bg-background relative overflow-hidden"
            id="portfolio"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
                <div className="text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#F7F3ED] to-[#F0D1BF] bg-clip-text text-transparent">
                        Nos <span className="text-primary">réalisations</span>
                    </h2>
                    <p className="text-xl text-foreground max-w-2xl mx-auto">
                        Nos projets parlent d'eux-mêmes. Chaque e-commerce est
                        conçu pour performer, convertir et durer.
                    </p>
                </div>
            </div>

            {/* Scrolling portfolio - full width */}
            <div className="relative overflow-hidden">
                <div
                    ref={scrollRef}
                    className="flex gap-4 sm:gap-6 will-change-transform touch-none"
                >
                    {/* Duplicate projects 3 times for seamless infinite loop */}
                    {[...projects, ...projects, ...projects].map(
                        (project, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px]"
                            >
                                <a href={project.link} target="_blank">
                                    <Card className="group bg-card/80 backdrop-blur-sm border-border overflow-hidden hover:border-primary/70 transition-all duration-350 hover:cursor-pointer">
                                        <div className="relative overflow-hidden aspect-video">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                                            {/* Floating badge on image */}
                                            <div className="absolute top-4 right-4 z-10">
                                                <Badge
                                                    variant="outline"
                                                    className="bg-background/80 backdrop-blur-md text-primary border-primary/30 shadow-lg"
                                                >
                                                    {project.category}
                                                </Badge>
                                            </div>
                                        </div>

                                        <div className="p-4 sm:p-6 bg-gradient-to-b from-card to-card/50">
                                            <h3 className="text-xl flex justify-between sm:text-2xl font-bold group-hover:text-primary transition-colors mb-3 sm:mb-4 bg-gradient-to-r from-[#F7F3ED] to-[#F0D1BF] bg-clip-text text-transparent">
                                                {project.title}
                                                <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1 " />
                                            </h3>

                                            <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-primary/10 border border-border">
                                                <BadgeCheck className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                                                <p className="text-base sm:text-medium font-medium text-foreground">
                                                    {project.result}
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                </a>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
