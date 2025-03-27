
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  cta?: {
    primary: {
      text: string;
      href: string;
    };
    secondary?: {
      text: string;
      href: string;
    };
  };
  image?: string;
  className?: string;
}

const Hero = ({
  title,
  subtitle,
  cta,
  image,
  className,
}: HeroProps) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 hero-gradient",
        className
      )}
    >
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-3xl opacity-70" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-accent/10 blur-3xl opacity-70" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="text-center lg:text-left"
          >
            <div className="inline-block highlight-chip mb-6">
              Premium Hosting & CDN Solutions
            </div>
            <h1 className="mb-6 font-bold leading-tight tracking-tighter">
              {title}
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              {subtitle}
            </p>
            
            {cta && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 font-medium"
                >
                  <Link to={cta.primary.href}>
                    {cta.primary.text}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                {cta.secondary && (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary/20 hover:bg-primary/5 text-foreground rounded-md px-6 font-medium"
                  >
                    <Link to={cta.secondary.href}>
                      {cta.secondary.text}
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </motion.div>
          
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
              className="relative"
            >
              <div className="glass-card rounded-2xl overflow-hidden shadow-xl shadow-primary/10 border border-white/20">
                <img
                  src={image}
                  alt="Hero image"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating decoration elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent/30 rounded-full blur-2xl animate-pulse-slow" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/30 rounded-full blur-2xl animate-pulse-slow" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
