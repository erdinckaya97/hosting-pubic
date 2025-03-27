
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import PricingCard, { PricingPlan } from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Check, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [annual, setAnnual] = useState(false);

  const hostingPlans: PricingPlan[] = [
    {
      id: "shared-basic",
      name: "Shared Basic",
      description: "Perfect for personal blogs and small websites.",
      price: annual ? 3.99 : 4.99,
      currency: "$",
      billingPeriod: annual ? "Monthly (Annual)" : "Monthly",
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
      price: annual ? 7.99 : 9.99,
      currency: "$",
      billingPeriod: annual ? "Monthly (Annual)" : "Monthly",
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
      price: annual ? 15.99 : 19.99,
      currency: "$",
      billingPeriod: annual ? "Monthly (Annual)" : "Monthly",
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
  ];

  const cdnPlans: PricingPlan[] = [
    {
      id: "cdn-basic",
      name: "CDN Basic",
      description: "Perfect for small websites and blogs.",
      price: annual ? 15 : 19,
      currency: "$",
      billingPeriod: annual ? "Monthly (Annual)" : "Monthly",
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
      price: annual ? 39 : 49,
      currency: "$",
      billingPeriod: annual ? "Monthly (Annual)" : "Monthly",
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
      price: annual ? 79 : 99,
      currency: "$",
      billingPeriod: annual ? "Monthly (Annual)" : "Monthly",
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
        title="Simple, Transparent Pricing"
        subtitle="Choose the perfect plan for your needs. All plans include 24/7 support, 99.9% uptime guarantee, and no hidden fees."
        cta={{
          primary: {
            text: "Get Started",
            href: "#hosting-plans",
          },
          secondary: {
            text: "Contact Sales",
            href: "/contact",
          },
        }}
      />

      {/* Pricing toggle */}
      <section className="pt-12 pb-8">
        <div className="section-container">
          <div className="flex items-center justify-center space-x-4">
            <Label htmlFor="billing-toggle" className="text-sm font-medium cursor-pointer">
              Monthly
            </Label>
            <div className="flex items-center">
              <Switch
                id="billing-toggle"
                checked={annual}
                onCheckedChange={setAnnual}
              />
            </div>
            <div className="flex items-center">
              <Label htmlFor="billing-toggle" className="text-sm font-medium cursor-pointer">
                Annual
              </Label>
              <span className="ml-2 text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting plans section */}
      <section id="hosting-plans" className="py-10">
        <div className="section-container">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="highlight-chip mb-4">Hosting Plans</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Web Hosting Solutions</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From small blogs to enterprise applications, we have the right hosting solution for you.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hostingPlans.map((plan, index) => (
              <PricingCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CDN plans section */}
      <section id="cdn-plans" className="py-16 md:py-20 bg-muted/30">
        <div className="section-container">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="highlight-chip mb-4">CDN Plans</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Content Delivery Solutions</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Accelerate your content delivery with our global CDN network.
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

      {/* Feature comparison */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="highlight-chip mb-4">Feature Comparison</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Detailed Plan Comparison</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Compare all features across our hosting and CDN plans.
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
            <TooltipProvider>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left font-medium">Feature</th>
                    <th className="p-4 text-center font-medium">Shared Basic</th>
                    <th className="p-4 text-center font-medium">Shared Pro</th>
                    <th className="p-4 text-center font-medium">VPS Basic</th>
                    <th className="p-4 text-center font-medium">CDN Basic</th>
                    <th className="p-4 text-center font-medium">CDN Pro</th>
                    <th className="p-4 text-center font-medium">CDN Business</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 flex items-center font-medium">
                      SSD Storage
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="h-4 w-4 ml-1 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[200px] text-xs">Fast SSD storage for your website files and databases.</p>
                        </TooltipContent>
                      </Tooltip>
                    </td>
                    <td className="p-4 text-center">10 GB</td>
                    <td className="p-4 text-center">50 GB</td>
                    <td className="p-4 text-center">50 GB</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 flex items-center font-medium">
                      Bandwidth
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="h-4 w-4 ml-1 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[200px] text-xs">Monthly data transfer allowance.</p>
                        </TooltipContent>
                      </Tooltip>
                    </td>
                    <td className="p-4 text-center">Unmetered</td>
                    <td className="p-4 text-center">Unmetered</td>
                    <td className="p-4 text-center">Unmetered</td>
                    <td className="p-4 text-center">50 GB</td>
                    <td className="p-4 text-center">250 GB</td>
                    <td className="p-4 text-center">1 TB</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 flex items-center font-medium">
                      SSL Certificate
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="h-4 w-4 ml-1 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[200px] text-xs">Secure your website with HTTPS.</p>
                        </TooltipContent>
                      </Tooltip>
                    </td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 flex items-center font-medium">
                      DDoS Protection
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="h-4 w-4 ml-1 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[200px] text-xs">Protection against Distributed Denial of Service attacks.</p>
                        </TooltipContent>
                      </Tooltip>
                    </td>
                    <td className="p-4 text-center">Basic</td>
                    <td className="p-4 text-center">Basic</td>
                    <td className="p-4 text-center">Basic</td>
                    <td className="p-4 text-center">Basic</td>
                    <td className="p-4 text-center">Advanced</td>
                    <td className="p-4 text-center">Advanced</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 flex items-center font-medium">
                      Edge Locations
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="h-4 w-4 ml-1 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[200px] text-xs">Number of global locations where content is cached.</p>
                        </TooltipContent>
                      </Tooltip>
                    </td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">200+</td>
                    <td className="p-4 text-center">200+</td>
                    <td className="p-4 text-center">200+</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 flex items-center font-medium">
                      Cache Rules
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="h-4 w-4 ml-1 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[200px] text-xs">Customizable content caching rules and settings.</p>
                        </TooltipContent>
                      </Tooltip>
                    </td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">Basic</td>
                    <td className="p-4 text-center">Custom</td>
                    <td className="p-4 text-center">Advanced</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 flex items-center font-medium">
                      Support
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="h-4 w-4 ml-1 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[200px] text-xs">Level of customer support provided.</p>
                        </TooltipContent>
                      </Tooltip>
                    </td>
                    <td className="p-4 text-center">Standard</td>
                    <td className="p-4 text-center">Priority</td>
                    <td className="p-4 text-center">Priority</td>
                    <td className="p-4 text-center">Email</td>
                    <td className="p-4 text-center">Priority</td>
                    <td className="p-4 text-center">Dedicated</td>
                  </tr>
                </tbody>
              </table>
            </TooltipProvider>
          </motion.div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="section-container">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="highlight-chip mb-4">FAQ</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Have questions? Find answers to common questions about our hosting and CDN services.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-lg font-medium mb-3">Do you offer a money-back guarantee?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, all our hosting plans come with a 30-day money-back guarantee. If you're not satisfied with our service, you can request a full refund within the first 30 days.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-lg font-medium mb-3">Can I upgrade my plan later?</h3>
              <p className="text-muted-foreground text-sm">
                Absolutely! You can upgrade your hosting or CDN plan at any time. The upgrade process is seamless and doesn't cause any downtime for your website.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-lg font-medium mb-3">What is the difference between hosting and CDN?</h3>
              <p className="text-muted-foreground text-sm">
                Hosting is where your website files are stored and served from, while a CDN (Content Delivery Network) caches and delivers content from servers located closer to your users, improving load times and performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-lg font-medium mb-3">Do you offer custom solutions?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, we offer custom hosting and CDN solutions for businesses with unique requirements. Contact our sales team to discuss your specific needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="Choose the perfect plan for your needs and take your website to the next level."
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

export default Pricing;
