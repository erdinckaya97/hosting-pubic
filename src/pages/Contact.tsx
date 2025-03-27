
import { useEffect } from "react";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageSquare, Clock, Send } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Form submitted",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Hero
        title="Get in Touch"
        subtitle="Have questions or need assistance? Our team is here to help. Reach out to us and we'll get back to you as soon as possible."
        className="pt-32 pb-12 md:pt-40 md:pb-16"
      />

      <section className="py-12 md:py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="highlight-chip mb-4">Contact Us</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                We'd Love to Hear From You
              </h2>
              <p className="text-muted-foreground mb-8">
                Whether you have a question about our services, need a custom solution, or want to provide feedback, we're here to help. Fill out the form, and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-sm text-muted-foreground">
                      <a 
                        href="mailto:contact@hostcdn.com" 
                        className="hover:text-primary transition-colors"
                      >
                        contact@hostcdn.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="text-sm text-muted-foreground">
                      <a 
                        href="tel:+11234567890" 
                        className="hover:text-primary transition-colors"
                      >
                        +1 (123) 456-7890
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Visit Us</h3>
                    <p className="text-sm text-muted-foreground">
                      123 Hosting Street, Server City, 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday: 9AM - 5PM EST<br />
                      Support: 24/7/365
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Live Chat</h3>
                    <p className="text-sm text-muted-foreground">
                      Available 24/7 from our website
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 md:p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input 
                        id="name" 
                        type="text"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      type="text"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="inquiry" className="text-sm font-medium">
                      Inquiry Type
                    </label>
                    <select 
                      id="inquiry" 
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="hosting">Hosting Inquiry</option>
                      <option value="cdn">CDN Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details about your inquiry..."
                      rows={5}
                      required
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 transition-colors flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="section-container">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="highlight-chip mb-4">Our Locations</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us Globally</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                With data centers and offices around the world, we're always close to you.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700"
          >
            {/* This would be a real map in a production site */}
            <div className="h-[400px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <p className="text-muted-foreground">Interactive Map Would Be Here</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700"
            >
              <h3 className="font-medium mb-2">North America</h3>
              <p className="text-sm text-muted-foreground mb-3">
                123 Hosting Street<br />
                Server City, 12345<br />
                United States
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Phone:</span> +1 (123) 456-7890
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700"
            >
              <h3 className="font-medium mb-2">Europe</h3>
              <p className="text-sm text-muted-foreground mb-3">
                456 Server Lane<br />
                Tech District<br />
                London, UK
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Phone:</span> +44 (0) 123 456 7890
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700"
            >
              <h3 className="font-medium mb-2">Asia Pacific</h3>
              <p className="text-sm text-muted-foreground mb-3">
                789 Cloud Avenue<br />
                Tech Park<br />
                Singapore
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Phone:</span> +65 6123 4567
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-12 md:py-16">
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
                Quick answers to common questions.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700"
            >
              <h3 className="font-medium mb-2">What are your support hours?</h3>
              <p className="text-sm text-muted-foreground">
                Our technical support team is available 24/7/365. Sales and billing support is available Monday through Friday, 9AM - 5PM EST.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700"
            >
              <h3 className="font-medium mb-2">How quickly will you respond to my inquiry?</h3>
              <p className="text-sm text-muted-foreground">
                We typically respond to email inquiries within 1 business day. For urgent matters, we recommend using our live chat or phone support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700"
            >
              <h3 className="font-medium mb-2">Do you offer on-site consulting?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, we offer on-site consulting for enterprise clients. Please contact our sales team to discuss your specific requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700"
            >
              <h3 className="font-medium mb-2">How can I report a technical issue?</h3>
              <p className="text-sm text-muted-foreground">
                You can report technical issues through our support portal, live chat, or by calling our technical support team directly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
