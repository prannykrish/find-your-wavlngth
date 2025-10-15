import { Link } from "react-router-dom";
import logo from "@/assets/Wavlngth_Logo.png";

const Footer = () => {
  return (
    <footer className="relative -mt-px border-t border-[#CFF9F2]/50 bg-gradient-to-b from-[#F4FFFE] via-[#F9FFFE] to-[#E7FFFB] overflow-hidden">
  {/* === Ambient Mist / Glow === */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,240,0.08),transparent_70%)] opacity-70 blur-[100px]"></div>
  <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.04] mix-blend-overlay"></div>

  <div className="relative z-10 container mx-auto px-6 py-16">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
      {/* === Brand === */}
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="Wavlngth Logo" className="h-8 w-auto" />
          <span className="text-xl font-bold text-[#013B43]"></span>
        </div>
        <p className="text-sm text-[#014C4F]/80 max-w-md leading-relaxed">
          Finding your people through predictive intelligence. Connect
          authentically, without the awkwardness.
        </p>
      </div>

      {/* === Navigation === */}
      <div>
        <h4 className="font-semibold mb-4 text-[#013B43]/90">Navigation</h4>
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="text-sm text-[#014C4F]/70 hover:text-[#00C2A8] transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className="text-sm text-[#014C4F]/70 hover:text-[#00C2A8] transition-colors"
            >
              Features
            </Link>
          </li>
          <li>
            {/* <Link
              to="/vision"
              className="text-sm text-[#014C4F]/70 hover:text-[#00C2A8] transition-colors"
            >
              Our Vision
            </Link> */}
          </li>
        </ul>
      </div>

      {/* === Connect === */}
      <div>
  <h4 className="font-semibold mb-4 text-[#013B43]/90">Connect</h4>
  <ul className="space-y-2">
    {[
      { name: "X", url: "https://x.com/wavlngth_app" },
      { name: "Instagram", url: "https://www.instagram.com/wavlngth_app/" },
      { name: "LinkedIn", url: "https://www.linkedin.com/company/wavlngth-app/about/" },
    ].map((item) => (
      <li key={item.name}>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#014C4F]/70 hover:text-[#00C2A8] transition-colors"
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
</div>

    </div>

    {/* === Divider & Copyright === */}
    <div className="border-t border-[#DFF8F3]/60 mt-12 pt-8">
      <p className="text-center text-sm text-[#014C4F]/60">
        © 2025 Wavlngth. All rights reserved.
      </p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
