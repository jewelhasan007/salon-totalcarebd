import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Scissors,
  Sparkles,
  Flower2,
  Hand,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Clock,
  Menu,
  X,
  Star,
} from "lucide-react";

import heroSalon from "@/assets/hero-salon.jpg";
import serviceNails from "@/assets/service-nails.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceSpa from "@/assets/service-spa.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Total Care Salon Bangladesh — Premium Beauty Salon in Banani, Dhaka" },
      {
        name: "description",
        content:
          "Total Care Salon Bangladesh is a premium unisex salon in Banani, Dhaka offering nails, beauty, spa and massage services for men and women. Call or DM to book.",
      },
      { property: "og:title", content: "Total Care Salon Bangladesh — Premium Salon in Banani, Dhaka" },
      {
        property: "og:description",
        content:
          "Nails, Beauty, Spa & Massage for men and women. House 16, Road 28, Banani, Dhaka. Book your appointment today.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Scissors,
    image: serviceHair,
    title: "Hair & Styling",
    description:
      "Precision cuts, colouring, keratin treatments and blowouts by senior stylists — for both men and women.",
    items: ["Haircut & Styling", "Colour & Highlights", "Keratin & Rebonding", "Grooming for Men"],
  },
  {
    icon: Hand,
    image: serviceNails,
    title: "Nails",
    description:
      "Luxury manicures and pedicures, gel extensions and nail art in a hygienic, relaxing setting.",
    items: ["Classic & Spa Manicure", "Gel Polish & Extensions", "Nail Art", "Pedicure Rituals"],
  },
  {
    icon: Sparkles,
    image: serviceHair,
    title: "Beauty & Skin",
    description:
      "Facials, clean-ups, waxing, threading and bridal packages tailored to your skin.",
    items: ["Signature Facials", "Bridal & Party Makeup", "Waxing & Threading", "Skin Treatments"],
  },
  {
    icon: Flower2,
    image: serviceSpa,
    title: "Spa & Massage",
    description:
      "Unwind with aromatherapy, deep tissue and relaxation massages in our private spa suites.",
    items: ["Aromatherapy Massage", "Deep Tissue Massage", "Body Scrub & Wrap", "Head & Shoulder Relief"],
  },
];

const testimonials = [
  {
    name: "Nupur A.",
    text: "The best salon experience in Banani. The staff are warm, the space is gorgeous and my nails have never looked better.",
  },
  {
    name: "Rahim K.",
    text: "Finally a premium salon that caters properly to men too. Great haircut, great massage, zero fuss.",
  },
  {
    name: "Sadia T.",
    text: "Booked the bridal package — the makeup team made my day absolutely perfect. Highly recommended.",
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    el.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return ref;
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const rootRef = useReveal();

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "Visit Us", href: "#visit" },
  ];

  return (
    <div ref={rootRef} className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold tracking-wide">Total Care</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Salon · BD
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#visit"
              className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book Now
            </a>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm font-medium text-muted-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#visit"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-block rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground"
            >
              Book Now
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-screen items-end overflow-hidden">
        <img
          src={heroSalon}
          alt="Total Care Salon interior"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/40 to-espresso/20" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-20 pt-40 sm:px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-gold">
            Banani · Dhaka
          </p>
          <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.05] text-espresso-foreground sm:text-7xl">
            Where beauty meets total care
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-espresso-foreground/80 sm:text-lg">
            A premium salon for men and women — nails, beauty, spa and massage,
            delivered with warmth in the heart of Banani.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#visit"
              className="rounded-full bg-gold px-8 py-3 text-sm font-semibold tracking-wide text-gold-foreground transition-transform hover:scale-105"
            >
              Book an Appointment
            </a>
            <a
              href="#services"
              className="rounded-full border border-espresso-foreground/40 px-8 py-3 text-sm font-semibold tracking-wide text-espresso-foreground transition-colors hover:border-espresso-foreground hover:bg-espresso-foreground/10"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Intro strip */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-14 sm:grid-cols-3 sm:px-6">
          {[
            { icon: Sparkles, title: "Premium Products", text: "Only trusted international brands touch your hair and skin." },
            { icon: Star, title: "Expert Team", text: "Senior stylists and therapists with years of craft." },
            { icon: Flower2, title: "Serene Space", text: "A calm, hygienic sanctuary designed for relaxation." },
          ].map((f) => (
            <div
              key={f.title}
              data-reveal
              className="flex gap-4 opacity-0 translate-y-6 transition-all duration-700"
            >
              <f.icon className="mt-1 h-6 w-6 shrink-0 text-gold" />
              <div>
                <h3 className="font-display text-xl font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div data-reveal className="mb-14 text-center opacity-0 translate-y-6 transition-all duration-700">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">What we do</p>
          <h2 className="mt-3 font-display text-4xl font-medium sm:text-5xl">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              data-reveal
              className="group overflow-hidden rounded-2xl border border-border bg-card opacity-0 translate-y-6 transition-all duration-700 hover:shadow-xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={800}
                  height={1008}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <service.icon className="h-4 w-4 text-gold" />
                  <h3 className="font-display text-2xl font-semibold">{service.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-1">
                  {service.items.map((item) => (
                    <li key={item} className="text-xs font-medium uppercase tracking-wider text-foreground/70">
                      · {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-espresso text-espresso-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
          <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700">
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">About us</p>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl">
              A sanctuary of care in the heart of Banani
            </h2>
            <p className="mt-6 leading-relaxed text-espresso-foreground/75">
              Total Care Salon Bangladesh is a premium unisex salon offering nails,
              beauty, spa and massage services. From a quick grooming session to a
              full bridal transformation, our team treats every guest with the same
              devotion to detail.
            </p>
            <p className="mt-4 leading-relaxed text-espresso-foreground/75">
              Walk in for a service, walk out renewed — that is the Total Care promise.
            </p>
            <div className="mt-8 flex gap-10">
              <div>
                <p className="font-display text-4xl font-semibold text-gold">2.6k+</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-espresso-foreground/60">Followers</p>
              </div>
              <div>
                <p className="font-display text-4xl font-semibold text-gold">1.6k+</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-espresso-foreground/60">Happy Posts</p>
              </div>
              <div>
                <p className="font-display text-4xl font-semibold text-gold">4.9★</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-espresso-foreground/60">Guest Rating</p>
              </div>
            </div>
          </div>
          <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700">
            <img
              src={serviceSpa}
              alt="Spa suite at Total Care Salon"
              loading="lazy"
              width={800}
              height={1008}
              className="w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div data-reveal className="mb-14 text-center opacity-0 translate-y-6 transition-all duration-700">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">Kind words</p>
          <h2 className="mt-3 font-display text-4xl font-medium sm:text-5xl">What Our Guests Say</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              data-reveal
              className="rounded-2xl border border-border bg-card p-8 opacity-0 translate-y-6 transition-all duration-700"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 font-display text-lg font-semibold">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Visit / Contact */}
      <section id="visit" className="bg-secondary">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
          <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700">
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">Visit us</p>
            <h2 className="mt-3 font-display text-4xl font-medium sm:text-5xl">Book Your Visit</h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              For appointments, call us or send a DM on Instagram or Facebook — our
              team will confirm your slot right away.
            </p>
            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <p className="text-sm leading-relaxed">
                  House 16, Road 28, Banani,
                  <br />
                  Dhaka 1213, Bangladesh
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="h-5 w-5 shrink-0 text-gold" />
                <p className="text-sm">Open daily · 10:00 AM – 9:00 PM</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 shrink-0 text-gold" />
                <p className="text-sm">Call us for appointments</p>
              </div>
            </div>
            <div className="mt-10 flex gap-4">
              <a
                href="https://www.instagram.com/totalcaresalon_bangladesh"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a
                href="https://web.facebook.com/TCSDBD"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-foreground/5"
              >
                <Facebook className="h-4 w-4" /> Facebook
              </a>
            </div>
          </div>
          <div
            data-reveal
            className="overflow-hidden rounded-2xl border border-border opacity-0 translate-y-6 transition-all duration-700"
          >
            <iframe
              title="Total Care Salon location — Banani, Dhaka"
              src="https://www.google.com/maps?q=House%2016%20Road%2028%20Banani%20Dhaka%201213&output=embed"
              className="h-full min-h-[380px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-espresso py-12 text-espresso-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6">
          <p className="font-display text-3xl font-semibold">Total Care Salon Bangladesh</p>
          <p className="max-w-md text-sm text-espresso-foreground/60">
            Premium salon catering to both men and women. Nails, Beauty, Spa & Massage.
          </p>
          <div className="flex gap-5">
            <a
              href="https://www.instagram.com/totalcaresalon_bangladesh"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-espresso-foreground/70 transition-colors hover:text-gold"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://web.facebook.com/TCSDBD"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-espresso-foreground/70 transition-colors hover:text-gold"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-espresso-foreground/40">
            © {new Date().getFullYear()} Total Care Salon Bangladesh · House 16, Road 28, Banani, Dhaka 1213
          </p>
        </div>
      </footer>
    </div>
  );
}
