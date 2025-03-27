
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  iconClassName?: string;
}

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  index,
  iconClassName,
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.19, 1, 0.22, 1]
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative rounded-xl border p-6 hover:shadow-md transition-all duration-300 hover:border-primary/30 animated-border"
    >
      <div className={cn(
        "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors",
        "bg-primary/10 text-primary",
        iconClassName
      )}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
