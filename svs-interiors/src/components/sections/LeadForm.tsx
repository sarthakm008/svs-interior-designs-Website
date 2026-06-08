import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[0-9]{10}$/, "Must be a valid 10-digit Indian phone number"),
  email: z.string().email("Invalid email address").optional().or(z.literal('')),
  propertyType: z.string().min(1, "Please select a property type"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().optional()
});

export default function LeadForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      propertyType: "",
      budget: "",
      message: ""
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Success",
      description: "Thank you! We'll contact you within 24 hours.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-24 bg-card/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-8 bg-primary"></div>
                <span className="text-primary font-medium tracking-widest uppercase text-sm">Contact Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Ready to Transform Your Space?
              </h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                Book a free consultation today. Our design team will reach out within 24 hours.
              </p>
            </div>

            <div className="space-y-6 bg-background border border-border/50 p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-foreground text-lg">Address</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                    SVS Interior Designs,<br/>Electronic City Phase 1,<br/>Bangalore – 560100
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-foreground text-lg">Phone / WhatsApp</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    <a href="tel:+919620688878" className="hover:text-primary transition-colors">+91 96206 88878</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-foreground text-lg">Business Hours</h4>
                  <p className="text-muted-foreground text-sm mt-1">Open 24 Hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-background border border-border p-6 md:p-10"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80 font-medium">Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-card/50 border-border h-12 rounded-none focus-visible:ring-primary focus-visible:border-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80 font-medium">Phone Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="9876543210" className="bg-card/50 border-border h-12 rounded-none focus-visible:ring-primary focus-visible:border-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/80 font-medium">Email Address (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" className="bg-card/50 border-border h-12 rounded-none focus-visible:ring-primary focus-visible:border-primary" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="propertyType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80 font-medium">Property Type *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-card/50 border-border h-12 rounded-none focus:ring-primary">
                              <SelectValue placeholder="Select Property Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-none border-border">
                            <SelectItem value="1BHK">1 BHK</SelectItem>
                            <SelectItem value="2BHK">2 BHK</SelectItem>
                            <SelectItem value="3BHK">3 BHK</SelectItem>
                            <SelectItem value="Villa">Villa / Independent House</SelectItem>
                            <SelectItem value="Office">Office Space</SelectItem>
                            <SelectItem value="Commercial">Commercial / Retail</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80 font-medium">Budget Range *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-card/50 border-border h-12 rounded-none focus:ring-primary">
                              <SelectValue placeholder="Select Budget" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-none border-border">
                            <SelectItem value="5-15L">₹5 Lakhs - ₹15 Lakhs</SelectItem>
                            <SelectItem value="15-30L">₹15 Lakhs - ₹30 Lakhs</SelectItem>
                            <SelectItem value="30-50L">₹30 Lakhs - ₹50 Lakhs</SelectItem>
                            <SelectItem value="50L+">₹50 Lakhs +</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/80 font-medium">Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your requirements..." 
                          className="bg-card/50 border-border min-h-[120px] rounded-none focus-visible:ring-primary focus-visible:border-primary resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 rounded-none text-base font-medium tracking-wider uppercase mt-4"
                  data-testid="button-submit-lead"
                >
                  Book Free Consultation
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
