import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col gap-8">
          <div className="flex gap-2 item-center">
            <Logo className="h-6 w-6" />
            <div className="font-medium">AI Startup Landing Page</div>
          </div>
          <nav className="flex flex-col gap-5">
            <a
              href="#"
              className="text=white/70 hover:text-white text-xs transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text=white/70 hover:text-white text-xs transition"
            >
              Developers
            </a>
            <a
              href="#"
              className="text=white/70 hover:text-white text-xs transition"
            >
              Company
            </a>
            <a
              href="#"
              className="text=white/70 hover:text-white text-xs transition"
            >
              Blog
            </a>
            <a
              href="#"
              className="text=white/70 hover:text-white text-xs transition"
            >
              Changeing
            </a>
          </nav>
          <div className="flex gap-5 ">
            <XSocial className="text-white/40 hover:text-white transition" />
            <InstaSocial className="text-white/40 hover:text-white transition" />
            <YTSocial className="text-white/40 hover:text-white trasition" />
          </div>
        </div>
      </div>
    </footer>
  );
};
