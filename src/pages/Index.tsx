
import { useEffect } from "react";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Server, 
  Globe, 
  Shield, 
  Zap, 
  Clock, 
  CloudCog,
  Gauge,
  ArrowUpRight,
  Award,
  BarChart,
  ArrowRight
} from "lucide-react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Server,
      title: "High-Performance Servers",
      description: "Blazing fast SSD storage and optimized servers for maximum website speed and reliability.",
    },
    {
      icon: Globe,
      title: "Global CDN Network",
      description: "Content delivery from 200+ locations worldwide ensuring low latency and fast loading times.",
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "DDoS protection, SSL certificates, and robust security measures to keep your data safe.",
    },
    {
      icon: Zap,
      title: "Instant Scaling",
      description: "Dynamically scale resources up or down based on your traffic needs without downtime.",
    },
    {
      icon: Clock,
      title: "99.9% Uptime Guarantee",
      description: "We guarantee 99.9% uptime with redundant systems and continuous monitoring.",
    },
    {
      icon: CloudCog,
      title: "Easy Management",
      description: "Intuitive control panel with powerful tools to manage your hosting environment.",
    },
  ];

  const stats = [
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "200+", label: "Global Locations" },
    { value: "24/7", label: "Expert Support" },
    { value: "10Gbps", label: "Network Speed" },
  ];

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Hero
        title="Fast, Secure, and Reliable Hosting Solutions"
        subtitle="Experience lightning-fast website performance with our premium hosting and CDN solutions. Trusted by businesses worldwide for reliability and security."
        cta={{
          primary: {
            text: "Get Started",
            href: "/hosting",
          },
          secondary: {
            text: "View Pricing",
            href: "/pricing",
          },
        }}
        image="/placeholder.svg"
      />

      {/* Main features section */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="highlight-chip mb-4">Our Features</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need for Success</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our hosting solutions are designed to provide you with all the tools and resources you need to build and grow your online presence.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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

      {/* Stats section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</span>
                <span className="text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hosting plans section */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <div className="highlight-chip mb-4">Hosting Solutions</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Perfect Hosting Plan</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From small blogs to enterprise applications, we have the right hosting solution for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Shared Hosting Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30"
            >
              <div className="mb-4 flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">VPS Hosting</h3>
                  <p className="text-sm text-muted-foreground">Perfect for small websites</p>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <Gauge size={20} />
                </div>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold">$39.99</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-muted-foreground flex items-center">
                  <span className="w-5 h-5 mr-2 text-primary">✓</span>
                  120 GB SSD Storage
                </li>
                <li className="text-sm text-muted-foreground flex items-center">
                  <span className="w-5 h-5 mr-2 text-primary">✓</span>
                  Unlimited Bandwidth
                </li>
                <li className="text-sm text-muted-foreground flex items-center">
                  <span className="w-5 h-5 mr-2 text-primary">✓</span>
                  Free SSL Certificate
                </li>
                <li className="text-sm text-muted-foreground flex items-center">
                  <span className="w-5 h-5 mr-2 text-primary">✓</span>
                  Unlimited Email Accounts
                </li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/hosting">Learn More</Link>
              </Button>
            </motion.div>

            {/* VPS Hosting Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="border rounded-xl p-6 shadow-lg border-primary/30 relative z-10"
            >
              <div className="absolute -top-3 left-0 right-0 mx-auto w-fit">
                <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">Most Popular</span>
              </div>
              <div className="mb-4 flex justify-between items-start pt-2">
                <div>
                  <h3 className="text-xl font-semibold">Dedicated</h3>
                  <p className="text-sm text-muted-foreground">For growing businesses</p>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <Server size={20} />
                </div>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold">$299.99</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-muted-foreground flex items-center">
                  <span className="w-5 h-5 mr-2 text-primary">✓</span>
                  2x1 TB SSD Storage
                </li>
                <li className="text-sm text-muted-foreground flex items-center">
                  <span className="w-5 h-5 mr-2 text-primary">✓</span>
                  Unlimited Bandwidth
                </li>
                <li className="text-sm text-muted-foreground flex items-center">
                  <span className="w-5 h-5 mr-2 text-primary">✓</span>
                  Free SSL Certificate
                </li>
                <li className="text-sm text-muted-foreground flex items-center">
                  <span className="w-5 h-5 mr-2 text-primary">✓</span>
                  Unlimited Email Accounts
                </li>
                <li className="text-sm text-muted-foreground flex items-center">
                  <span className="w-5 h-5 mr-2 text-primary">✓</span>
                  Dedicated Resources
                </li>
              </ul>
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link to="/hosting">Learn More</Link>
              </Button>
            </motion.div>

            {/* Dedicated Hosting Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30"
            >
              <div className="mb-4 flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">CDN & Proxy</h3>
                  <p className="text-sm text-muted-foreground">For high-traffic sites</p>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <CloudCog size={20} />
                </div>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold">Custom</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-muted-foreground flex items-center">
                  <span className="w-5 h-5 mr-2 text-primary">✓</span>
                  Unlimited SSD Storage
                </li>
                <li className="text-sm text-muted-foreground flex items-center">
                  <span className="w-5 h-5 mr-2 text-primary">✓</span>
                  Unlimited Bandwidth
                </li>
                <li className="text-sm text-muted-foreground flex items-center">
                  <span className="w-5 h-5 mr-2 text-primary">✓</span>
                  Free SSL Certificate
                </li>
                <li className="text-sm text-muted-foreground flex items-center">
                  <span className="w-5 h-5 mr-2 text-primary">✓</span>
                  Unlimited Email Accounts
                </li>
                <li className="text-sm text-muted-foreground flex items-center">
                  <span className="w-5 h-5 mr-2 text-primary">✓</span>
                  Full Root Access
                </li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/hosting">Learn More</Link>
              </Button>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="group">
              <Link to="/pricing" className="inline-flex items-center">
                View All Pricing Options
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CDN section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-2 lg:order-1"
            >
              <div className="highlight-chip mb-4">Global CDN Network</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Accelerate Your Content Delivery Worldwide
              </h2>
              <p className="text-muted-foreground mb-6">
                Our Content Delivery Network ensures your content is served from locations closest to your users, dramatically improving load times and user experience.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 bg-primary/10 p-1 rounded-md text-primary mr-3">
                    <Globe size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Global Distribution</h4>
                    <p className="text-sm text-muted-foreground">
                      Content cached at 200+ edge locations worldwide for ultra-fast delivery.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-primary/10 p-1 rounded-md text-primary mr-3">
                    <Shield size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Advanced Security</h4>
                    <p className="text-sm text-muted-foreground">
                      DDoS protection and security measures to keep your content safe.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-primary/10 p-1 rounded-md text-primary mr-3">
                    <BarChart size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Real-time Analytics</h4>
                    <p className="text-sm text-muted-foreground">
                      Detailed performance metrics and insights about your content delivery.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button asChild>
                <Link to="/cdn">
                  Explore CDN Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent z-10 pointer-events-none" />
                <img
                  src="/placeholder.svg"
                  alt="Global CDN Network"
                  className="w-full h-auto"
                />
                {/* World map points animation would go here in a real implementation */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <div className="highlight-chip mb-4">Testimonials</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Businesses Worldwide</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See what our customers have to say about their experience with our hosting and CDN solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Award size={20} />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">Sarah Johnson</h4>
                  <p className="text-xs text-muted-foreground">E-commerce Store Owner</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                "Since switching to HostCDN, our page load times decreased by 60% and our conversion rates improved significantly. The support team is responsive and extremely helpful."
              </p>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Award size={20} />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">Michael Rodriguez</h4>
                  <p className="text-xs text-muted-foreground">Tech Startup CEO</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                "The scalability of HostCDN's infrastructure is impressive. We handled a 500% traffic spike during our product launch without any issues. I highly recommend their VPS hosting."
              </p>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Award size={20} />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">Emily Chen</h4>
                  <p className="text-xs text-muted-foreground">Digital Media Publisher</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                "Their CDN service has been a game-changer for our media site. Videos load instantly for users worldwide, and we've seen a significant reduction in bandwidth costs."
              </p>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <CTASection
        title="Ready to Supercharge Your Online Presence?"
        subtitle="Join thousands of businesses that trust HostCDN for their hosting and content delivery needs."
        primaryCTA={{
          text: "Get Started Now",
          href: "/hosting",
        }}
        secondaryCTA={{
          text: "Contact Sales",
          href: "/contact",
        }}
      />
    </div>
  );
};

export default Index;
