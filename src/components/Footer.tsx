import Logo from "@/assets/logo.png";
import { Mail, PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-card  pt-12 pb-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <p className="text-center text-lg font-medium text-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
          Tu as lu jusqu'ici… alors dis-moi, tu penses mériter ton indépendance
          ?
        </p>
        <p className="text-center text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#F7F3ED] to-[#F0D1BF] bg-clip-text text-transparent mb-6 max-w-3xl mx-auto leading-tight">
          Et si c'était enfin le moment d'avoir un e-commerce est d'en être
          propriétaire ?
        </p>
        <p className="text-center text-base text-foreground max-w-2xl mx-auto">
          Suis-nous sur les réseaux et découvre comment on aide les marques à
          reprendre le contrôle avec des boutiques autonomes, performantes et
          sans abonnement.
        </p>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 mt-16">
          <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center gap-10 text-sm">
            <img src={Logo} alt="" className="w-32 relative right-2" />
            <nav className="flex gap-6">
              <a
                href="https://www.instagram.com/agence.tarshify/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-[45px] w-[45px] items-center justify-center rounded-[7px] bg-transparent border-none cursor-pointer transition-all duration-300 group"
              >
                <span className="absolute inset-0 rounded-[10px] bg-gradient-to-tr from-[#fdf497] via-[#fd5949] to-[#d6249f] z-[-1] transition-all duration-300 group-hover:rotate-[35deg] origin-bottom" />
                <span className="flex h-full w-full items-center justify-center rounded-[10px] border border-[rgba(156,156,156,0.466)] bg-transparent backdrop-blur-0 transition-all duration-300 group-hover:border-[rgba(206,206,206,0.466)] group-hover:bg-[rgba(214,214,214,0.466)] group-hover:backdrop-blur-[4px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </span>
              </a>

              <a
                href="https://www.tiktok.com/@tarshify"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-[45px] w-[45px] items-center justify-center rounded-[7px] bg-transparent border-none cursor-pointer transition-all duration-300 group"
              >
                <span className="absolute inset-0 rounded-[10px] bg-gradient-to-tr from-[#EE1D52] to-[#69C9D0] z-[-1] transition-all duration-300 group-hover:rotate-[35deg] origin-bottom" />
                <span className="flex h-full w-full items-center justify-center rounded-[10px] border border-[rgba(156,156,156,0.466)] bg-transparent backdrop-blur-0 transition-all duration-300 group-hover:border-[rgba(206,206,206,0.466)] group-hover:bg-[rgba(214,214,214,0.466)] group-hover:backdrop-blur-[4px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-7 w-7"
                  >
                    <path
                      fill="currentColor"
                      d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                    />
                  </svg>
                </span>
              </a>

              <a
                href="mailto:hello@tarshify.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-[45px] w-[45px] items-center justify-center rounded-[7px] bg-transparent border-none cursor-pointer transition-all duration-300 group"
              >
                <span className="absolute inset-0 rounded-[10px] bg-gradient-to-r from-[#4285F4] via-[#FBBC05] to-[#EA4335] z-[-1] transition-all duration-300 group-hover:rotate-[35deg] origin-bottom" />
                <span className="flex h-full w-full items-center justify-center rounded-[10px] border border-[rgba(156,156,156,0.466)] bg-transparent backdrop-blur-0 transition-all duration-300 group-hover:border-[rgba(206,206,206,0.466)] group-hover:bg-[rgba(214,214,214,0.466)] group-hover:backdrop-blur-[4px]">
                  <Mail className="h-7 w-7" />
                </span>
              </a>
            </nav>
          </div>
        </div>
        <p className="text-sm bg-gradient-to-r from-[#F7F3ED] to-[#F0D1BF] bg-clip-text text-transparent text-center mt-10">
          &copy; {new Date().getFullYear()} Tarshify. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
