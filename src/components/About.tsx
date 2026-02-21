import { motion } from "motion/react";
import { TrendingUp, ShieldCheck, Award, Globe, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Expert Tax Planning",
    desc: "Strategic advice to optimize tax efficiency while ensuring full compliance.",
    num: "01"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Audit & Compliance",
    desc: "Thorough business audits to minimize tax burdens and risk exposure.",
    num: "02"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Business Advisory",
    desc: "Empowering management to fulfill financial and reporting responsibilities.",
    num: "03"
  }
];

export default function About() {
  return (
    <section id="about-us" className="section-padding bg-brand-bg">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-[1px] bg-brand-dark" />
              <span className="text-sm font-bold uppercase tracking-widest text-brand-dark">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-brand-dark leading-tight">
              At KODI Associates, we provide top-tier support tailored to your financial needs.
            </h2>
            <p className="text-lg text-gray-600 font-body leading-relaxed">
              With over a decade of experience led by Mr. Dickens Rurahukayo (ACCA UK, ICPAU), our firm brings deep insight from years at the Uganda Revenue Authority to ensure your tax compliance and business growth.
            </p>
            <button className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-dark transition-all group">
              Learn more
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <div className="space-y-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-brand-dark text-white rounded-full flex items-center justify-center font-display font-bold">
                    {f.num}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark mb-1">{f.title}</h4>
                    <p className="text-gray-500 font-body text-sm">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Trust Section */}
        <div className="mt-32 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1454165833767-027ff9d026bd?q=80&w=2070&auto=format&fit=crop"
              alt="Business Meeting"
              className="w-full h-auto rounded-2xl shadow-xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-[1px] bg-brand-dark" />
              <span className="text-sm font-bold uppercase tracking-widest text-brand-dark">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-brand-dark leading-tight">
              Trusted by leading businesses across Uganda
            </h2>
            <p className="text-lg text-gray-600 font-body leading-relaxed">
              Our founder has conducted audits across major industries including banking, insurance, and manufacturing, bringing deep insight to every client engagement.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <div className="text-4xl font-display font-bold text-brand-dark">10+</div>
                <div className="text-sm text-gray-500 font-body mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-brand-dark">8+</div>
                <div className="text-sm text-gray-500 font-body mt-1">Years at URA</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
