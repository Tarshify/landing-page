import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { Calendar, CalendarCheck } from "lucide-react";

declare global {
    interface Window {
        Calendly?: {
            initPopupWidget: (config: { url: string }) => void;
        };
    }
}

const CALENDLY_SCRIPT_ID = "calendly-widget-script";
const CALENDLY_URL = "https://calendly.com/admin-tarshify/30min";
const CALENDLY_STYLESHEET_ID = "calendly-widget-stylesheet";

export default function FloatingCallButton() {
    const [isCalendlyReady, setCalendlyReady] = useState(false);
    const pendingOpenRef = useRef(false);
    const fallbackTimeoutRef = useRef<number | null>(null);

    const triggerCalendlyPopup = useCallback(() => {
        if (window.Calendly) {
            window.Calendly.initPopupWidget({ url: CALENDLY_URL });
        }
    }, []);

    const markCalendlyReady = useCallback(() => {
        setCalendlyReady(true);

        if (fallbackTimeoutRef.current !== null) {
            window.clearTimeout(fallbackTimeoutRef.current);
            fallbackTimeoutRef.current = null;
        }

        if (pendingOpenRef.current) {
            triggerCalendlyPopup();
            pendingOpenRef.current = false;
        }
    }, [triggerCalendlyPopup]);

    useEffect(() => {
        if (document.getElementById(CALENDLY_STYLESHEET_ID)) {
            return;
        }

        const stylesheet = document.createElement("link");
        stylesheet.id = CALENDLY_STYLESHEET_ID;
        stylesheet.rel = "stylesheet";
        stylesheet.href =
            "https://assets.calendly.com/assets/external/widget.css";
        document.head.appendChild(stylesheet);

        return () => {
            stylesheet.remove();
        };
    }, []);

    useEffect(() => {
        let createdScript: HTMLScriptElement | null = null;

        const handleScriptLoad = () => {
            if (window.Calendly) {
                markCalendlyReady();
            }
        };

        if (typeof window !== "undefined" && window.Calendly) {
            if (typeof queueMicrotask === "function") {
                queueMicrotask(() => {
                    if (window.Calendly) {
                        markCalendlyReady();
                    }
                });
            } else {
                setTimeout(() => {
                    if (window.Calendly) {
                        markCalendlyReady();
                    }
                }, 0);
            }
            return;
        }

        const existingScript = document.getElementById(
            CALENDLY_SCRIPT_ID
        ) as HTMLScriptElement | null;

        if (existingScript) {
            existingScript.addEventListener("load", handleScriptLoad);

            return () => {
                existingScript.removeEventListener("load", handleScriptLoad);
            };
        }

        createdScript = document.createElement("script");
        createdScript.id = CALENDLY_SCRIPT_ID;
        createdScript.src =
            "https://assets.calendly.com/assets/external/widget.js";
        createdScript.async = true;
        createdScript.addEventListener("load", handleScriptLoad);
        document.body.appendChild(createdScript);

        return () => {
            createdScript?.removeEventListener("load", handleScriptLoad);
            createdScript?.remove();
        };
    }, [markCalendlyReady]);

    useEffect(() => {
        return () => {
            if (fallbackTimeoutRef.current !== null) {
                window.clearTimeout(fallbackTimeoutRef.current);
            }
        };
    }, []);

    const handleClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();

            if (isCalendlyReady && window.Calendly) {
                triggerCalendlyPopup();
            } else {
                pendingOpenRef.current = true;

                if (fallbackTimeoutRef.current !== null) {
                    window.clearTimeout(fallbackTimeoutRef.current);
                }

                fallbackTimeoutRef.current = window.setTimeout(() => {
                    if (pendingOpenRef.current) {
                        window.open(
                            CALENDLY_URL,
                            "_blank",
                            "noopener,noreferrer"
                        );
                        pendingOpenRef.current = false;
                    }
                    fallbackTimeoutRef.current = null;
                }, 1500);
            }
        },
        [isCalendlyReady, triggerCalendlyPopup]
    );

    return (
        <div className="fixed md:bottom-16 md:right-10 bottom-12 right-8 z-50">
            <button
                onClick={handleClick}
                className="
      group relative grid place-content-center md:w-[95px] md:h-[95px] w-[75px] h-[75px]
        rounded-full bg-card/80 text-white font-sans text-xs md:text-sm font-semibold overflow-hidden
        transition-all duration-300  backdrop-blur-xl hover:bg-primary/10 hover:scale-105 border border-muted-foreground hover:border-primary/70
        "
            >
                {/* Texte rotatif */}
                <p className="absolute inset-0 animate-[spin_8s_linear_infinite]">
                    {[
                        "P",
                        "r",
                        "e",
                        "n",
                        "d",
                        "s",
                        " ",
                        "u",
                        "n",
                        " ",
                        "R",
                        "D",
                        "V",
                        " ",
                        "i",
                        "c",
                        "i",
                    ].map((char, i) => (
                        <span
                            key={i}
                            style={{ ["--index" as any]: i }}
                            className="absolute md:inset-[2px] inset-[1px]  [transform:rotate(calc(19deg*var(--index)))]"
                        >
                            {char}
                        </span>
                    ))}
                </p>

                {/* Cercle intérieur avec icônes */}
                <div
                    className="
        relative flex items-center justify-center md:w-12 md:h-12 w-10 h-10 rounded-full
        bg-primary/10  text-white backdrop-blur-sm overflow-hidden border border-border
        "
                >
                    {/* Icône principale */}
                    <Calendar
                        className="
              md:w-6 md:h-6 w-5 h-5 text-current transition-transform duration-300
              group-hover:translate-x-[150%] group-hover:-translate-y-[150%]
              "
                    />

                    {/* Icône secondaire */}
                    <CalendarCheck
                        className="
          md:w-6 md:h-6 w-5 h-5 text-current absolute transition-transform duration-300 delay-100
          translate-x-[-150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0
          "
                    />
                </div>
            </button>
        </div>
    );
}

// const CALENDLY_URL = "https://calendly.com/admin-tarshify/30min";
// const PhoneButton = () => {
//   return (
//     <div className="fixed bottom-16 right-10 z-50">
//       <a href="https://calendly.com/admin-tarshify/30min" target="_blank">
//         <button
//           className="
//         group relative grid place-content-center w-[100px] h-[100px]
//         rounded-full bg-primary/20 text-white font-sans font-semibold overflow-hidden
//         transition-all duration-300 hover:bg-primary/80 backdrop-blur-xl hover:text-black hover:scale-105
//         "
//         >
//           {/* Texte rotatif */}
//           <p className="absolute inset-0 animate-[spin_8s_linear_infinite]">
//             {[
//               "P",
//               "R",
//               "E",
//               "N",
//               "D",
//               "S",
//               " ",
//               "U",
//               "N",
//               " ",
//               "R",
//               "D",
//               "V",
//               " ",
//               "I",
//               "C",
//               "I",
//             ].map((char, i) => (
//               <span
//                 key={i}
//                 style={{ ["--index" as any]: i }}
//                 className="absolute inset-[4px]  [transform:rotate(calc(19deg*var(--index)))]"
//               >
//                 {char}
//               </span>
//             ))}
//           </p>

//           {/* Cercle intérieur avec icônes */}
//           <div
//             className="
//             relative flex items-center justify-center w-12 h-12 rounded-full
//             bg-background/10  text-white backdrop-blur-sm overflow-hidden
//           "
//           >
//             {/* Icône principale */}
//             <Calendar
//               className="
//               w-6 h-6 text-current transition-transform duration-300
//               group-hover:translate-x-[150%] group-hover:-translate-y-[150%]
//             "
//             />

//             {/* Icône secondaire */}
//             <CalendarCheck
//               className="
//               w-6 h-6 text-current absolute transition-transform duration-300 delay-100
//               translate-x-[-150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0
//             "
//             />
//           </div>
//         </button>
//       </a>
//     </div>
//   );
// };

// export default PhoneButton;
