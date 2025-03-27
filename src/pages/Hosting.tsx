
import { useEffect } from "react";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import FeatureCard from "@/components/FeatureCard";
import PricingCard, { PricingPlan } from "@/components/PricingCard";
import { motion } from "framer-motion";
import { 
  Server, 
  Shield, 
  Zap, 
  Clock, 
  Globe,
  CloudCog,
  Database,
  LineChart
} from "lucide-react";

const Hosting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Server,
      title: "High-Performance Servers",
      description: "Blazing fast SSD storage and optimized servers for maximum website speed.",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Free SSL certificates, DDoS protection, and regular security audits.",
    },
    {
      icon: Globe,
      title: "Global Data Centers",
      description: "Choose from multiple data center locations for optimal performance.",
    },
    {
      icon: Clock,
      title: "99.9% Uptime",
      description: "We guarantee 99.9% uptime with redundant systems and monitoring.",
    },
    {
      icon: Zap,
      title: "One-Click Installs",
      description: "Easily install popular applications with just one click.",
    },
    {
      icon: Database,
      title: "Daily Backups",
      description: "Automatic daily backups to ensure your data is always protected.",
    },
    {
      icon: CloudCog,
      title: "Scalable Resources",
      description: "Easily upgrade your plan as your website grows without any downtime.",
    },
    {
      icon: LineChart,
      title: "Performance Analytics",
      description: "Detailed performance metrics and insights about your hosting.",
    },
  ];

  const hostingPlans: PricingPlan[] = [
    {
      id: "shared-basic",
      name: "Shared Basic",
      description: "Perfect for personal blogs and small websites.",
      price: 4.99,
      currency: "$",
      billingPeriod: "Monthly",
      features: [
        "10 GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "5 Email Accounts",
        "1-Click WordPress Install",
        "24/7 Support",
      ],
      cta: "Get Started",
    },
    {
      id: "shared-pro",
      name: "Shared Pro",
      description: "Ideal for growing websites and small businesses.",
      price: 9.99,
      currency: "$",
      billingPeriod: "Monthly",
      popular: true,
      features: [
        "50 GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "20 Email Accounts",
        "1-Click WordPress Install",
        "24/7 Priority Support",
        "Free Domain for 1 Year",
        "Daily Backups",
      ],
      cta: "Get Started",
    },
    {
      id: "vps-basic",
      name: "VPS Basic",
      description: "For high-traffic websites requiring dedicated resources.",
      price: 19.99,
      currency: "$",
      billingPeriod: "Monthly",
      features: [
        "2 vCPU Cores",
        "2 GB RAM",
        "50 GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "Full Root Access",
        "24/7 Priority Support",
        "Free Domain for 1 Year",
        "Daily Backups",
      ],
      cta: "Get Started",
    },
    {
      id: "vps-pro",
      name: "VPS Pro",
      description: "For high-performance applications and e-commerce sites.",
      price: 39.99,
      currency: "$",
      billingPeriod: "Monthly",
      features: [
        "4 vCPU Cores",
        "8 GB RAM",
        "100 GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "Full Root Access",
        "24/7 Priority Support",
        "Free Domain for 1 Year",
        "Daily Backups",
        "DDoS Protection",
      ],
      cta: "Get Started",
    },
    {
      id: "dedicated-basic",
      name: "Dedicated Server",
      description: "Complete isolation with dedicated physical server resources.",
      price: 99.99,
      currency: "$",
      billingPeriod: "Monthly",
      features: [
        "8 CPU Cores",
        "16 GB RAM",
        "500 GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "Full Root Access",
        "24/7 Premium Support",
        "Free Domain for 1 Year",
        "Daily Backups",
        "DDoS Protection",
        "Custom Server Configuration",
      ],
      cta: "Get Started",
    },
  ];

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Hero
        title="Premium Web Hosting Solutions"
        subtitle="Fast, secure, and reliable hosting for websites of all sizes. From shared hosting to dedicated servers, we have the perfect solution for your needs."
        cta={{
          primary: {
            text: "View Plans",
            href: "#hosting-plans",
          },
          secondary: {
            text: "Contact Sales",
            href: "/contact",
          },
        }}
        image="/placeholder.svg"
      />

      {/* Features section */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="highlight-chip mb-4">Features</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Hosting Features</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We provide all the tools and resources you need to build and grow your online presence.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                index={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hosting plans section */}
      <section id="hosting-plans" className="py-16 md:py-24 bg-muted/30">
        <div className="section-container">
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="highlight-chip mb-4">Hosting Plans</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Perfect Hosting Plan</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From small blogs to enterprise applications, we have the right hosting solution for you.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hostingPlans.slice(0, 3).map((plan, index) => (
              <PricingCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {hostingPlans.slice(3, 5).map((plan, index) => (
              <PricingCard key={plan.id} plan={plan} index={index + 3} />
            ))}
          </div>
        </div>
      </section>

      {/* Compare hosting plans */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="highlight-chip mb-4">Comparison</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare Hosting Plans</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Find the perfect hosting solution for your specific needs.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-4 text-left font-medium">Feature</th>
                  <th className="p-4 text-center font-medium">Shared Basic</th>
                  <th className="p-4 text-center font-medium">Shared Pro</th>
                  <th className="p-4 text-center font-medium">VPS Basic</th>
                  <th className="p-4 text-center font-medium">VPS Pro</th>
                  <th className="p-4 text-center font-medium">Dedicated</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium">Price</td>
                  <td className="p-4 text-center">$4.99/mo</td>
                  <td className="p-4 text-center">$9.99/mo</td>
                  <td className="p-4 text-center">$19.99/mo</td>
                  <td className="p-4 text-center">$39.99/mo</td>
                  <td className="p-4 text-center">$99.99/mo</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Storage</td>
                  <td className="p-4 text-center">10 GB SSD</td>
                  <td className="p-4 text-center">50 GB SSD</td>
                  <td className="p-4 text-center">50 GB SSD</td>
                  <td className="p-4 text-center">100 GB SSD</td>
                  <td className="p-4 text-center">500 GB SSD</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">RAM</td>
                  <td className="p-4 text-center">Shared</td>
                  <td className="p-4 text-center">Shared</td>
                  <td className="p-4 text-center">2 GB</td>
                  <td className="p-4 text-center">8 GB</td>
                  <td className="p-4 text-center">16 GB</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">CPU</td>
                  <td className="p-4 text-center">Shared</td>
                  <td className="p-4 text-center">Shared</td>
                  <td className="p-4 text-center">2 vCPU</td>
                  <td className="p-4 text-center">4 vCPU</td>
                  <td className="p-4 text-center">8 CPU</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Bandwidth</td>
                  <td className="p-4 text-center">Unmetered</td>
                  <td className="p-4 text-center">Unmetered</td>
                  <td className="p-4 text-center">Unmetered</td>
                  <td className="p-4 text-center">Unmetered</td>
                  <td className="p-4 text-center">Unmetered</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Domains</td>
                  <td className="p-4 text-center">1</td>
                  <td className="p-4 text-center">Unlimited</td>
                  <td className="p-4 text-center">Unlimited</td>
                  <td className="p-4 text-center">Unlimited</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">SSL Certificate</td>
                  <td className="p-4 text-center">✓</td>
                  <td className="p-4 text-center">✓</td>
                  <td className="p-4 text-center">✓</td>
                  <td className="p-4 text-center">✓</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Daily Backups</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">✓</td>
                  <td className="p-4 text-center">✓</td>
                  <td className="p-4 text-center">✓</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Root Access</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">✓</td>
                  <td className="p-4 text-center">✓</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">DDoS Protection</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center">Advanced</td>
                  <td className="p-4 text-center">Advanced</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Support</td>
                  <td className="p-4 text-center">24/7</td>
                  <td className="p-4 text-center">24/7 Priority</td>
                  <td className="p-4 text-center">24/7 Priority</td>
                  <td className="p-4 text-center">24/7 Priority</td>
                  <td className="p-4 text-center">24/7 Premium</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA section */}
      <CTASection
        title="Ready to Host Your Website?"
        subtitle="Join thousands of businesses that trust our hosting solutions for reliability and performance."
        primaryCTA={{
          text: "Get Started Now",
          href: "#hosting-plans",
        }}
        secondaryCTA={{
          text: "Contact Sales",
          href: "/contact",
        }}
      />
    </div>
  );
};

export default Hosting;
