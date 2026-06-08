import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How much does interior design cost?",
    a: "Our projects range from ₹5 lakh to ₹50 lakh+ depending on scope, area, and material selection. We offer transparent pricing with no hidden costs."
  },
  {
    q: "Do you provide turnkey solutions?",
    a: "Yes, we offer complete end-to-end solutions from design to final handover — you don't need to manage any vendors."
  },
  {
    q: "How long does a project take?",
    a: "A typical 2BHK project takes 45–60 days. Commercial projects vary based on scope."
  },
  {
    q: "Can you work within my budget?",
    a: "Absolutely. We specialize in delivering premium results within realistic budgets. We'll suggest materials and designs that maximize value."
  },
  {
    q: "Do you offer free consultations?",
    a: "Yes! Call us or fill the form below for a free consultation at your convenience."
  },
  {
    q: "Which areas do you serve?",
    a: "We primarily serve Bangalore and surrounding areas including Electronic City, Whitefield, Koramangala, HSR Layout, and more."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-primary"></div>
            <span className="text-primary font-medium tracking-widest uppercase text-sm">FAQ</span>
            <div className="h-px w-8 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card/30 border border-border/50 px-6 data-[state=open]:border-primary/50 transition-colors">
                <AccordionTrigger className="text-lg font-serif font-medium text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}