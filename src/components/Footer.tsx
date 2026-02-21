import { motion } from "motion/react";
import { Facebook, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 px-6">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div className="space-y-12">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">K</span>
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter">
                KODI Associates
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold leading-tight max-w-md">
              A dependable partner for your financial advancement.
            </h3>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/5 rounded-3xl p-10 space-y-8">
            <p className="text-lg text-white/70 font-body">
              Opening Hours:<br />
              Week Days: 08:00 - 5:00<br />
              Saturday: 09:00 - 03:00<br />
              Sunday: Closed
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 pt-20 border-t border-white/10">
          <div className="space-y-6">
            <h6 className="font-bold uppercase tracking-widest text-xs text-white/40">Company</h6>
            <ul className="space-y-4 text-white/70 font-body text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h6 className="font-bold uppercase tracking-widest text-xs text-white/40">Services</h6>
            <ul className="space-y-4 text-white/70 font-body text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Accounting Advisory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tax Consultancy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Consulting</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h6 className="font-bold uppercase tracking-widest text-xs text-white/40">Resources</h6>
            <ul className="space-y-4 text-white/70 font-body text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Online Courses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h6 className="font-bold uppercase tracking-widest text-xs text-white/40">Contacts</h6>
            <ul className="space-y-4 text-white/70 font-body text-sm">
              <li>Mpala House Kampala, Uganda</li>
              <li>+256 782 272919 | +256 759 752151</li>
              <li>tax@kodiassociates.com</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-white/40 text-xs font-body">
          <p>© KODI Associates. All rights reserved.</p>
          <p>Designed by Agency Pro.</p>
        </div>
      </div>
    </footer>
  );
}
