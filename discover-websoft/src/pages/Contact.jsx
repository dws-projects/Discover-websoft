import { useState } from "react";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone, HiOutlineClock, HiArrowRight } from "react-icons/hi";

const contactDetails = [
  { icon: HiOutlinePhone, label: "Call our team", value: "+91 74899-63385", href: "tel:+917489963385", note: "Mon–Sat, 10:00 AM–7:00 PM" },
  { icon: HiOutlineMail, label: "Email us", value: "quotation@discoverwebsoft.com", href: "mailto:quotation@discoverwebsoft.com", note: "We’ll get back to you as soon as possible" },
  { icon: HiOutlineLocationMarker, label: "Visit our office", value: "Shagun Arcade, Vijay Nagar", href: "https://maps.google.com/?q=Shagun+Arcade+Vijay+Nagar+Indore", note: "Indore, Madhya Pradesh 452010" },
];

export default function Contact() {
  const [draftReady, setDraftReady] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Website enquiry from ${form.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nEmail: ${form.get("email")}\nPhone: ${form.get("phone") || "Not provided"}\nService: ${form.get("service") || "Not selected"}\n\n${form.get("message")}`,
    );
    setDraftReady(true);
    window.location.href = `mailto:quotation@discoverwebsoft.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="overflow-hidden bg-[#FDF6E8] text-[#242323]">
      <section className="relative isolate border-b border-[#F1D59E] bg-[#FCE7BF] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/35 blur-[1px] sm:h-80 sm:w-80" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 left-[8%] h-36 w-36 rounded-full bg-[#F5A623]/15" />
        <div className="relative mx-auto max-w-[1240px]">
          <p className="text-xs font-bold tracking-[.2em] text-[#9A620B] sm:text-sm">LET’S TALK</p>
          <h1 className="mt-3 max-w-[850px] text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[1.04] tracking-[-.04em]">Contact <span className="text-[#F5A623]">Us</span></h1>
          <p className="mt-5 max-w-[640px] text-base leading-relaxed sm:text-lg">Tell us what you’re building. Our team can help you plan the right digital solution for your business.</p>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-12">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">We’d love to hear from you</h2>
            <p className="mt-3 max-w-[500px] leading-relaxed">Share a few details and we’ll help you work out the next step.</p>
            <div className="mt-8 space-y-4">
              {contactDetails.map(({ icon: Icon, label, value, href, note }) => (
                <a key={label} href={href} target={href.startsWith("https:") ? "_blank" : undefined} rel={href.startsWith("https:") ? "noreferrer" : undefined} className="group flex min-w-0 items-start gap-4 rounded-2xl border border-[#EBD39F] bg-white/65 p-4 transition hover:border-[#F5A623] hover:bg-white sm:p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFE2A8] text-xl text-[#8A5708]"><Icon /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-black">{label}</span>
                    <span className="mt-1 block break-words font-bold">{value}</span>
                    <span className="mt-1 block text-sm text-black">{note}</span>
                  </span>
                  <HiArrowRight className="mt-1 shrink-0 text-[#A66A0A] transition group-hover:translate-x-1" aria-hidden="true" />
                </a>
              ))}
            </div>
            <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#FFF0CF] p-4 text-sm leading-relaxed">
              <HiOutlineClock className="mt-0.5 shrink-0 text-lg text-[#9A620B]" aria-hidden="true" />
              <p><strong>Business hours</strong><br />Monday to Saturday, 10:00 AM to 7:00 PM</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-[#E9CC91] bg-white/75 p-5 shadow-[0_12px_36px_rgba(69,48,13,.08)] sm:p-8">
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <p className="mt-2 text-sm text-black">Complete the form and your email app will open with the message ready to send.</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold">Your name <span className="text-[#B45309]">*</span><input required name="name" autoComplete="name" className="mt-2 h-12 w-full rounded-lg border border-[#DCCBA8] bg-[#FFFCF5] px-3 text-base font-normal text-black outline-none transition focus:border-[#C88511] focus:ring-2 focus:ring-[#F5A623]/25" /></label>
              <label className="text-sm font-semibold">Email address <span className="text-[#B45309]">*</span><input required type="email" name="email" autoComplete="email" className="mt-2 h-12 w-full rounded-lg border border-[#DCCBA8] bg-[#FFFCF5] px-3 text-base font-normal text-black outline-none transition focus:border-[#C88511] focus:ring-2 focus:ring-[#F5A623]/25" /></label>
              <label className="text-sm font-semibold">Phone number<input type="tel" name="phone" autoComplete="tel" className="mt-2 h-12 w-full rounded-lg border border-[#DCCBA8] bg-[#FFFCF5] px-3 text-base font-normal text-black outline-none transition focus:border-[#C88511] focus:ring-2 focus:ring-[#F5A623]/25" /></label>
              <label className="text-sm font-semibold">Service you’re interested in<select name="service" defaultValue="" className="mt-2 h-12 w-full rounded-lg border border-[#DCCBA8] bg-[#FFFCF5] px-3 text-base font-normal text-black outline-none focus:border-[#C88511] focus:ring-2 focus:ring-[#F5A623]/25"><option value="">Choose a service</option><option>Website design and development</option><option>E-commerce</option><option>Digital marketing</option><option>SEO</option><option>Graphic design</option><option>Other</option></select></label>
              <label className="text-sm font-semibold sm:col-span-2">How can we help? <span className="text-[#B45309">*</span><textarea required name="message" rows="5" className="mt-2 w-full resize-y rounded-lg border border-[#DCCBA8] bg-[#FFFCF5] px-3 py-3 text-base font-normal text-black outline-none transition focus:border-[#C88511] focus:ring-2 focus:ring-[#F5A623]/25" /></label>
            </div>
            {draftReady && <p role="status" className="mt-4 text-sm font-medium text-[#754A08]">Your email draft is ready. Send it from your email app to contact our team.</p>}
            <button type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#242323] px-6 py-3 font-bold text-[#F7C66F] transition hover:bg-[#F5A623] hover:text-black sm:w-auto">Prepare email <HiArrowRight aria-hidden="true" /></button>
          </form>
        </div>
      </section>
    </main>
  );
}
