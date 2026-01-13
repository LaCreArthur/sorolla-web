import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About us | Partner with Sorolla Today",
  description:
    "Learn about Sorolla's mission to transform game ideas into worldwide successes through collaboration, development, and scaling of hybrid casual titles.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Who we are section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Who we are
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed">
              At <strong>Sorolla</strong>, we help great game ideas become
              global hits. We work hand-in-hand with game creators to develop,
              test, and scale hybrid casual titles with long-term revenue
              potential.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/about-device.png"
              alt="Smartphone device mockup"
              width={400}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Contact us section */}
      <section className="bg-coral py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact us
            </h2>
            <p className="text-white/90 text-lg">
              Want to work with us? Fill out the form and we will get back to
              you!
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
