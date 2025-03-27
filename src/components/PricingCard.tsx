
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  billingPeriod: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

const PricingCard = ({ plan, index }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.19, 1, 0.22, 1] 
      }}
      className={cn(
        "relative rounded-xl overflow-hidden border shadow-sm transition-all duration-300",
        plan.popular 
          ? "shadow-lg shadow-primary/10 scale-105 z-10 border-primary/30" 
          : "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
        "flex flex-col"
      )}
    >
      {plan.popular && (
        <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-xs font-medium py-1 text-center">
          Most Popular
        </div>
      )}
      
      <div className={cn(
        "p-6 sm:p-8 flex-grow",
        plan.popular ? "pt-8" : ""
      )}>
        <div className="flex items-baseline justify-between mb-4">
          <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
          <div className="highlight-chip">{plan.billingPeriod}</div>
        </div>
        <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
        
        <div className="mb-6 flex items-baseline">
          <span className="text-2xl sm:text-3xl font-bold text-foreground">{plan.currency}{plan.price}</span>
          <span className="ml-1 text-muted-foreground text-sm">/{plan.billingPeriod.toLowerCase()}</span>
        </div>
        
        <ul className="space-y-3 mb-6">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-6 sm:p-8 pt-0">
        <Button 
          className={cn(
            "w-full",
            plan.popular 
              ? "bg-primary hover:bg-primary/90" 
              : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          )}
        >
          {plan.cta}
        </Button>
      </div>
    </motion.div>
  );
};

export default PricingCard;
