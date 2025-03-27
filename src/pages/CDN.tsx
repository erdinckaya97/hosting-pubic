
import { useEffect } from "react";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import PricingCard, { PricingPlan } from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { 
  Globe, 
  Shield, 
  Zap, 
  BarChart, 
  Clock,
  ArrowDownUp,
  Workflow,
  FileCode
} from "lucide-react";

const CDN = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Globe,
      title: "Global Edge Network",
      description: "Content delivery from 200+ edge locations worldwide for minimal latency.",
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "DDoS protection, WAF, and SSL to keep your content safe and secure.",
    },
    {
      icon: Zap,
      title: "Ultra-Fast Delivery",
      description: "Lightning-fast content delivery with optimized routing algorithms.",
    },
    {
      icon: Clock,
      title: "Real-time Purging",
      description: "Instantly update content across our global network.",
    },
    {
      icon: ArrowDownUp,
      title: "Smart Compression",
      description: "Automatic optimization of images and content for faster loading.",
    },
    {
      icon: BarChart,
      title: "Detailed Analytics",
      description: "Real-time insights into your CDN usage and performance.",
    },
    {
      icon: Workflow,
      title: "Cache Optimization",
      description: "Intelligent caching rules to maximize performance and minimize origin load.",
    },
    {
      icon: FileCode,
      title: "API Integration",
      description: "Robust API for seamless integration with your existing workflows.",
    },
  ];

  const cdnPlans: PricingPlan[] = [
    {
      id: "cdn-basic",
      name: "CDN Basic",
      description: "Perfect for small websites and blogs.",
      price: 19,
      currency: "$",
      billingPeriod: "Monthly",
      features: [
        "50 GB Bandwidth",
        "200+ Edge Locations",
        "Free SSL Certificate",
        "Basic DDoS Protection",
        "Real-time Analytics",
        "Email Support",
      ],
      cta: "Get Started",
    },
    {
      id: "cdn-pro",
      name: "CDN Pro",
      description: "Ideal for growing websites and online stores.",
      price: 49,
      currency: "$",
      billingPeriod: "Monthly",
      popular: true,
      features: [
        "250 GB Bandwidth",
        "200+ Edge Locations",
        "Free SSL Certificate",
        "Advanced DDoS Protection",
        "Real-time Analytics",
        "Custom Cache Rules",
        "24/7 Priority Support",
        "Image Optimization",
      ],
      cta: "Get Started",
    },
    {
      id: "cdn-business",
      name: "CDN Business",
      description: "For high-traffic websites and applications.",
      price: 99,
      currency: "$",
      billingPeriod: "Monthly",
      features: [
        "1 TB Bandwidth",
        "200+ Edge Locations",
        "Free SSL Certificate",
        "Advanced DDoS Protection",
        "Real-time Analytics",
        "Custom Cache Rules",
        "24/7 Priority Support",
        "Image & Video Optimization",
        "Advanced API Access",
        "Dedicated Account Manager",
      ],
      cta: "Get Started",
    },
  ];

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Hero
        title="Global Content Delivery Network"
        subtitle="Accelerate your website and application delivery with our high-performance CDN. Serve content from 200+ locations worldwide for faster loading times."
        cta={{
          primary: {
            text: "View Plans",
            href: "#cdn-plans",
          },
          secondary: {
            text: "Learn More",
            href: "#features",
          },
        }}
        image="/placeholder.svg"
      />

      {/* Key benefits section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="highlight-chip mb-4">Why Choose Our CDN</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Supercharge Your Content Delivery
              </h2>
              <p className="text-muted-foreground mb-6">
                Our Content Delivery Network ensures your users experience lightning-fast loading times, regardless of their location. With advanced caching, optimization and security features, your content is delivered efficiently and safely.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                    <Zap size={16} />
                  </div>
                  <span className="text-sm">Faster Page Loads</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                    <Shield size={16} />
                  </div>
                  <span className="text-sm">Enhanced Security</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                    <BarChart size={16} />
                  </div>
                  <span className="text-sm">Reduced Bandwidth Costs</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                    <Globe size={16} />
                  </div>
                  <span className="text-sm">Global Reach</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="glass-card rounded-2xl overflow-hidden shadow-xl shadow-primary/10 border border-white/20">
                <img
                  src="/placeholder.svg"
                  alt="Global CDN Network"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Performance stats overlay */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="text-xs text-muted-foreground mb-1">Average Load Time</div>
                <div className="text-lg font-bold text-primary">0.3s</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="text-xs text-muted-foreground mb-1">Cache Hit Ratio</div>
                <div className="text-lg font-bold text-primary">98.7%</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section id="features" className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="highlight-chip mb-4">Features</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced CDN Features</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our CDN comes packed with powerful features to optimize content delivery and enhance security.
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

      {/* How it works */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="section-container">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="highlight-chip mb-4">How It Works</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Simple Integration, Powerful Results
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Integrating our CDN into your existing infrastructure is simple and straightforward.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 relative"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-xl font-medium mb-4 mt-2">Sign Up</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Create an account and select the CDN plan that fits your needs.
              </p>
              <img
                src="/placeholder.svg"
                alt="Sign Up"
                className="w-full h-32 object-cover rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 relative"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-xl font-medium mb-4 mt-2">Configure</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Set up your domain and customize caching rules to fit your specific needs.
              </p>
              <img
                src="/placeholder.svg"
                alt="Configure"
                className="w-full h-32 object-cover rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 relative"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-xl font-medium mb-4 mt-2">Go Live</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Update your DNS settings and your content starts being delivered through our global network.
              </p>
              <img
                src="/placeholder.svg"
                alt="Go Live"
                className="w-full h-32 object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CDN plans section */}
      <section id="cdn-plans" className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="highlight-chip mb-4">CDN Plans</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your CDN Plan</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Select the perfect plan for your content delivery needs. All plans include our core CDN features.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cdnPlans.map((plan, index) => (
              <PricingCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="highlight-chip mb-4">Enterprise Solutions</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Custom CDN Solutions for Enterprise
              </h2>
              <p className="text-muted-foreground mb-6">
                Need a tailored CDN solution for your enterprise? Our team of experts will work with you to create a custom CDN package that meets your specific requirements.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 bg-primary/10 p-1 rounded-md text-primary mr-3">
                    <Shield size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Enhanced Security</h4>
                    <p className="text-sm text-muted-foreground">
                      Advanced WAF, bot protection, and DDoS mitigation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-primary/10 p-1 rounded-md text-primary mr-3">
                    <Globe size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Custom Edge Logic</h4>
                    <p className="text-sm text-muted-foreground">
                      Deploy custom code at the edge for specialized requirements.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-primary/10 p-1 rounded-md text-primary mr-3">
                    <BarChart size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Advanced Analytics</h4>
                    <p className="text-sm text-muted-foreground">
                      Detailed reporting and insights with custom dashboards.
                    </p>
                  </div>
                </div>
              </div>
              
              <button className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors">
                Contact Enterprise Sales
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="glass-card rounded-2xl overflow-hidden shadow-xl shadow-primary/10 border border-white/20">
                <img
                  src="/placeholder.svg"
                  alt="Enterprise CDN"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <CTASection
        title="Ready to Accelerate Your Content Delivery?"
        subtitle="Join thousands of businesses that trust our CDN for faster content delivery and improved user experience."
        primaryCTA={{
          text: "Get Started Now",
          href: "#cdn-plans",
        }}
        secondaryCTA={{
          text: "Contact Sales",
          href: "/contact",
        }}
      />
    </div>
  );
};

export default CDN;
