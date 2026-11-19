import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiArrowRight,
  HiCheck,
  HiOutlineColorSwatch,
  HiOutlineGlobe,
  HiOutlineSearchCircle,
  HiOutlineShoppingCart,
  HiStar,
} from "react-icons/hi";

import teamPhoto from "../assets/about-team.png";
import brandWorkspace from "../assets/about-workspace.png";
import brandLogo from "../assets/DWS LOGO PNG.png";
import faqGirl from "../assets/faq.png";
import faqOpenIcon from "../assets/faq-icon1.png";
import faqClosedIcon from "../assets/faq-icon.png";

const capabilities = [
  {
    title: "Web Design & Development",
    description:
      "Scalable, high-performance web applications built on modern stacks. We prioritise core web vitals and conversion-optimised user journeys.",
    Icon: HiOutlineGlobe,
    span: "md:col-span-7",
  },
  {
    title: "SEO & SMM",
    description:
      "Data-driven optimization strategies designed to elevate digital visibility.",
    Icon: HiOutlineSearchCircle,
    span: "md:col-span-5",
  },
  {
    title: "Graphic Design",
    description:
      "Premium visual communications,\nstriking visual identities.",
    Icon: HiOutlineColorSwatch,
    span: "md:col-span-4",
  },
  {
    title: "E-commerce Solutions",
    description:
      "End-to-end digital storefronts optimized for global scale and seamless transactions.",
    Icon: HiOutlineShoppingCart,
    span: "md:col-span-8",
  },
];

const principles = [
  {
    number: "01",
    title: "Clear Positioning",
    description:
      "Defining your unique market space with precision to immediately communicate value to target stakeholders.",
  },
  {
    number: "02",
    title: "Strong Identity",
    description:
      "Developing a cohesive, professional visual language that projects authority and technical mastery across all channels.",
  },
  {
    number: "03",
    title: "Smart Marketing",
    description:
      "Deploying targeted, multi-channel campaigns engineered to capture high-intent leads efficiently.",
  },
  {
    number: "04",
    title: "Data Decisions",
    description:
      "Utilizing advanced analytics to iterate and optimize performance based on empirical user behavior.",
  },
  {
    number: "05",
    title: "Scalable Growth",
    description:
      "Building infrastructure that seamlessly adapts to increased demand without compromising performance or security.",
  },
];

const faqs = [
  {
    question: "What services does a Digital Solutions Company provide?",
    answer:
      "A digital solutions company can support your business with website design and development, e-commerce, digital marketing, SEO, branding, graphic design, and professional IT services.",
  },
  {
    question: "How can a Website Development Company help my business?",
    answer:
      "A thoughtfully built website gives customers a clear way to discover your business, understand your services, and contact or buy from you on any device.",
  },
  {
    question: "Why should I choose a professional Digital Marketing Agency?",
    answer:
      "A professional team brings strategy, creative execution, and measurement together so your campaigns reach the right audience and improve over time.",
  },
  {
    question: "How does your SEO Company improve website rankings?",
    answer:
      "We improve technical performance, on-page content, and search visibility with a measured plan tailored to your audience and business goals.",
  },
  {
    question: "What makes your Company different from others?",
    answer:
      "We combine design, engineering, and ongoing support around your business objectives, with clear communication from the first conversation through delivery.",
  },
];

function PageDecor({ className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full bg-gradient-to-br from-white/70 via-[#F7C66F]/35 to-white/60 shadow-[0_2px_3px_rgba(86,58,20,.12)] ${className}`}
    />
  );
}

function Dot({ className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-3 w-3 rounded-full bg-[#F7C66F]/70 ${className}`}
    />
  );
}

export default function About() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="overflow-hidden bg-[#FDF6E8] text-[#242323]">
      {/* Hero */}
      <section className="relative isolate min-h-[510px] bg-[#FFE7BC]">
        <PageDecor className="-left-16 top-[130px] h-28 w-28 opacity-70" />
        <PageDecor className="left-[19%] -top-5 h-28 w-28 opacity-65" />
        <PageDecor className="right-[20%] top-2 h-12 w-12 opacity-90" />
        <PageDecor className="right-2 top-[170px] h-28 w-28 opacity-70" />
        <PageDecor className="-left-1 bottom-8 h-24 w-24 opacity-55" />
        <Dot className="left-[3%] top-[260px]" />
        <Dot className="left-[40%] top-[165px]" />
        <Dot className="right-[15%] top-[180px]" />
        <Dot className="right-[4%] bottom-[130px]" />

        <div className="relative z-10 mx-auto grid min-h-[510px] max-w-[1440px] items-center gap-12 px-6 py-14 sm:px-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:px-10 lg:py-10">
          <div className="max-w-[590px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F3CA79] bg-[#FFEAC7]/70 px-4 py-2 text-[10px] font-bold tracking-[1px] text-[#28231B] shadow-sm">
              <HiStar className="text-[13px] text-[#1F1F1F]" />
              <span>4.9 RATING</span>
              <span className="text-[#BB7B16]">•</span>
              <span>15+ YEARS EXPERIENCE</span>
            </div>

            <h1 className="max-w-[590px] text-[38px] font-extrabold leading-[1.08] tracking-[-1.5px] sm:text-[44px] lg:text-[46px]">
              Trusted Website Designing Company in Indore.
            </h1>
            <p className="mt-5 max-w-[570px] text-[14px] leading-[1.65] text-black sm:text-[15px]">
              We don&apos;t just build websites; we architect digital ecosystems.
              For over 15 years, Discover Websoft has been the strategic partner
              for businesses looking to scale their online presence and drive
              measurable growth through innovative design and robust
              engineering.
            </p>
            <Link
              to="/shop"
              className="mt-7 inline-flex h-[42px] items-center gap-2 rounded-[6px] bg-[#242323] px-4 text-[11px] font-bold tracking-[.7px] text-[#F7C66F] shadow-[0_3px_7px_rgba(0,0,0,.18)] transition hover:bg-[#F5A623] hover:text-[#242323]"
            >
              GET A QUOTE <HiArrowRight className="text-[14px]" />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-[540px] pb-10 lg:mt-3 lg:pb-0">
            <div className="relative overflow-hidden rounded-[12px] shadow-[0_8px_18px_rgba(0,0,0,.25)]">
              <img
                src={teamPhoto}
                alt="Discover Websoft team collaborating in the office"
                className="aspect-[1.5/1] w-full object-cover"
              />
              <div className="absolute left-1/2 top-4 w-[112px] -translate-x-1/2 rounded-md bg-white/95 px-3 py-1 shadow-sm sm:w-[132px]">
                <img src={brandLogo} alt="Discover Websoft" className="w-full" />
              </div>
            </div>
            <div className="absolute -bottom-1 left-4 rounded-[5px] border border-[#E8D5AE] bg-white/90 px-4 py-3 shadow-[0_4px_10px_rgba(0,0,0,.17)] sm:bottom-[-25px] sm:left-[-28px] sm:px-5 sm:py-4">
              <strong className="block text-[32px] font-extrabold leading-none sm:text-[36px]">
                100+
              </strong>
              <span className="mt-2 block text-[9px] font-bold tracking-[.4px]">
                NUMBER OF SERVICES
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Core capabilities */}
      <section className="relative isolate bg-[#FDF6E8] px-6 py-16 sm:px-10 sm:py-[76px]">
        <PageDecor className="-right-6 top-12 h-28 w-28 opacity-80" />
        <PageDecor className="left-[22%] top-[110px] h-24 w-24 opacity-45" />
        <PageDecor className="right-[36%] bottom-12 h-16 w-16 opacity-50" />
        <Dot className="left-[6%] top-[90px]" />
        <Dot className="right-[14%] top-[100px]" />
        <Dot className="left-[30%] top-[135px] h-2 w-2" />
        <Dot className="right-[28%] top-[190px] h-2 w-2" />

        <div className="relative z-10 mx-auto max-w-[910px]">
          <div className="text-center">
            <h2 className="text-[34px] font-extrabold leading-tight tracking-[-1px] sm:text-[42px]">
              Our Core <span className="text-[#F5A623]">Capabilities</span>
            </h2>
            <p className="mx-auto mt-3 max-w-[560px] text-[clamp(14px,1.25vw,18px)] leading-[1.4] text-black">
              Delivering innovative solutions through expertise, creativity,
              and technology.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:gap-[18px]">
            {capabilities.map(({ title, description, Icon, span }) => (
              <article
                key={title}
                className={`${span} min-h-[176px] rounded-[15px] border border-[#F1D18F] bg-[#FFE0A7] px-6 py-5 shadow-[0_4px_8px_rgba(0,0,0,.07)]`}
              >
                <Icon className="h-8 w-8 text-[#171717]" aria-hidden="true" />
                <h3 className="mt-4 text-[17px] font-semibold leading-tight">
                  {title}
                </h3>
                <p className="mt-3 whitespace-pre-line text-[14px] leading-[1.35] text-black">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Building businesses into brands */}
      <section className="relative isolate bg-[#FFE7BC] px-6 py-14 sm:px-10 sm:py-[58px]">
        <PageDecor className="left-[29%] -top-10 h-24 w-24 opacity-70" />
        <PageDecor className="right-[-25px] top-24 h-28 w-28 opacity-60" />
        <PageDecor className="-left-7 bottom-6 h-20 w-20 opacity-60" />
        <Dot className="right-[31%] top-[38%]" />
        <Dot className="left-[3%] top-[24%] h-2.5 w-2.5" />
        <Dot className="right-[8%] bottom-[14%] h-2.5 w-2.5" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1320px] items-center gap-10 lg:grid-cols-[.95fr_1.05fr] lg:gap-[70px]">
          <div className="relative">
            <img
              src={brandWorkspace}
              alt="A digital workspace and website project"
              className="aspect-[1.08/1] w-full rounded-[7px] object-cover shadow-[0_5px_14px_rgba(0,0,0,.18)]"
            />
            <PageDecor className="pointer-events-none absolute -right-10 -top-9 h-24 w-24 opacity-60" />
          </div>

          <div>
            <h2 className="text-[28px] font-bold leading-[1.25] tracking-[-.6px] sm:text-[32px]">
              Building Every Business into a Brand
            </h2>
            <p className="mt-5 text-[clamp(15px,1.25vw,20px)] leading-[1.45] text-black">
              We don&apos;t just build websites; we engineer digital assets. Our
              performance-driven design philosophy ensures that every visual
              choice and line of code serves a singular purpose: accelerating
              your business growth.
            </p>
            <p className="mt-3 text-[clamp(15px,1.25vw,20px)] leading-[1.45] text-black">
              By bridging the gap between compelling aesthetics and hard
              performance metrics, we transform standard business operations
              into recognized, authoritative brands within their respective
              industries.
            </p>
            <ul className="mt-6 space-y-2 text-[clamp(13px,1vw,17px)] text-black">
              {[
                "Data-backed UX decisions",
                "Conversion-optimized user flows",
                "Enterprise-grade security standards",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="flex h-[14px] w-[14px] items-center justify-center rounded-full border border-[#19A64A] text-[#19A64A]">
                    <HiCheck className="text-[10px]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Brand principles */}
      <section className="relative isolate bg-[#FDF6E8] px-6 py-16 sm:px-10 sm:py-[78px]">
        <PageDecor className="left-[22%] top-10 h-20 w-20 opacity-60" />
        <PageDecor className="right-[4%] top-[130px] h-24 w-24 opacity-75" />
        <PageDecor className="left-[38%] bottom-10 h-16 w-16 opacity-50" />
        <Dot className="left-[5%] top-[115px]" />
        <Dot className="right-[29%] top-[112px]" />
        <Dot className="right-[12%] bottom-[95px] h-2.5 w-2.5" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px]">
          <div className="text-center">
            <h2 className="text-[clamp(2rem,3.4vw,3.125rem)] font-extrabold leading-tight tracking-[-.9px]">
              Smart Branding, <span className="text-[#F5A623]">Strong Business</span>
            </h2>
            <p className="mx-auto mt-3 max-w-[700px] text-[clamp(14px,1.1vw,17px)] leading-[1.4] text-black">
              Build a memorable brand identity that attracts customers, creates
              trust, and drives long-term business growth.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-[1320px] gap-y-9 lg:mt-16 lg:grid-cols-2 lg:gap-x-[4vw]">
            <div className="space-y-9 lg:space-y-12 lg:border-r lg:border-[#F5BD58] lg:pr-[7vw]">
              {principles.slice(0, 3).map((item) => (
                <Principle key={item.number} item={item} />
              ))}
            </div>
            <div className="space-y-9 lg:space-y-12 lg:pl-1">
              {principles.slice(3).map((item) => (
                <Principle key={item.number} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About page FAQ */}
      <section className="relative isolate bg-[#FDF6E8] px-6 pb-20 pt-10 sm:px-10 sm:pb-24">
        <PageDecor className="left-[2%] top-[100px] h-16 w-16 opacity-60" />
        <PageDecor className="right-[1%] top-[180px] h-20 w-20 opacity-50" />
        <PageDecor className="left-[49%] bottom-10 h-16 w-16 opacity-50" />
        <Dot className="left-[27%] top-[95px] h-2 w-2" />
        <Dot className="right-[29%] top-[125px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1320px]">
          <div className="text-center">
            <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-extrabold leading-tight tracking-[-.9px]">
              Frequently <span className="text-[#F5A623]">Asked Questions</span>
            </h2>
            <p className="mx-auto mt-3 max-w-[760px] text-[clamp(15px,1.3vw,19px)] leading-[1.45] text-black">
              Discover how our services have helped businesses grow through
              real experiences, success stories, and client feedback.
            </p>
          </div>

          <div className="mt-10 grid items-end gap-7 md:grid-cols-[.72fr_1.28fr] md:gap-12 lg:mt-12">
            <div className="mx-auto flex w-full max-w-[340px] items-end self-end md:mx-0 md:max-w-none">
              <img
                src={faqGirl}
                alt="Discover Websoft assistant"
                className="max-h-[460px] w-full object-contain object-bottom"
              />
            </div>
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const expanded = openFaq === index;
                return (
                  <article
                    key={faq.question}
                    className={`overflow-hidden rounded-[12px] border border-[#F3D08A] bg-gradient-to-r from-[#FFE7B2] to-[#FFD78D] shadow-[0_5px_12px_rgba(0,0,0,.06)] ${index % 2 ? "md:ml-8" : "md:mr-8"}`}
                  >
                    <button
                      type="button"
                      aria-expanded={expanded}
                      onClick={() => setOpenFaq(expanded ? -1 : index)}
                      className="flex min-h-[54px] w-full items-center justify-between gap-4 px-4 py-4 text-left text-[clamp(14px,1.1vw,17px)] font-medium sm:px-5"
                    >
                      <span>{faq.question}</span>
                      <img
                        src={expanded ? faqOpenIcon : faqClosedIcon}
                        alt=""
                        className="h-[14px] w-[14px] shrink-0"
                      />
                    </button>
                    {expanded && (
                      <p className="border-t border-[#F2D08E] px-4 py-3 text-[13px] leading-[1.5] text-black sm:px-5 sm:text-[15px]">
                        {faq.answer}
                      </p>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Principle({ item }) {
  return (
    <article className="flex items-start gap-4 sm:gap-6">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[6px] bg-[#FFD789] text-sm font-bold shadow-[0_2px_3px_rgba(0,0,0,.2)] sm:h-10 sm:w-10 sm:text-base">
        {item.number}
      </span>
      <div>
        <h3 className="text-[clamp(18px,1.8vw,27px)] font-semibold leading-tight">{item.title}</h3>
        <p className="mt-2 max-w-[540px] text-[clamp(15px,1.25vw,18px)] leading-[1.4] text-black">
          {item.description}
        </p>
      </div>
    </article>
  );
}
