import { useMemo, useState } from "react";
import { HiArrowRight, HiOutlineClock, HiOutlineSearch, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

import webDesignImage from "../assets/service1.png";
import ecommerceImage from "../assets/service3.png";
import maintenanceImage from "../assets/service4.png";
import videoImage from "../assets/service6.png";
import appImage from "../assets/service7.png";
import brandingImage from "../assets/service9.png";

const posts = [
  {
    title: "What makes a business website turn visitors into customers?",
    category: "Website Design",
    date: "October 12, 2026",
    readTime: "6 min read",
    image: webDesignImage,
    excerpt:
      "A useful website pairs clear messaging with fast pages, simple navigation, and a next step customers can find.",
    paragraphs: [
      "A business website has a short window to show visitors that they are in the right place. Lead with a clear description of what you offer and who you help, then make it easy to explore the details.",
      "Keep pages quick to load and comfortable to use on phones. Use real examples, straightforward service descriptions, and visible contact options so a visitor can move from browsing to asking a question without friction.",
      "Review the page regularly. Analytics and customer questions can show where people hesitate, which sections need clearer answers, and which calls to action are doing their job.",
    ],
  },
  {
    title: "Planning an e-commerce website before the first product goes live",
    category: "E-commerce",
    date: "October 5, 2026",
    readTime: "5 min read",
    image: ecommerceImage,
    excerpt:
      "Product structure, payments, delivery, and returns all shape the shopping experience from day one.",
    paragraphs: [
      "An online store is easier to grow when its product categories, variants, and inventory rules are planned before launch. Start with the way customers will browse and compare your products.",
      "Map the full order journey: payment, shipping, confirmation emails, cancellations, and returns. Testing each step on a phone can uncover confusion before customers encounter it.",
      "Launch with the essentials, measure what shoppers use, and expand features as the business learns what customers need.",
    ],
  },
  {
    title: "A practical website maintenance checklist for small businesses",
    category: "Website Care",
    date: "September 28, 2026",
    readTime: "4 min read",
    image: maintenanceImage,
    excerpt:
      "Regular backups, updates, security checks, and form testing help keep a business site dependable.",
    paragraphs: [
      "Website maintenance is a routine, not a one-time task. Keep software and dependencies updated, verify backups, and check that contact and enquiry forms still reach the right inbox.",
      "Review the site on current mobile and desktop browsers. Look for broken links, outdated offers, slow pages, and content that no longer reflects the business.",
      "A simple monthly checklist makes issues easier to catch early and gives the team a record of what changed.",
    ],
  },
  {
    title: "How to make a digital marketing plan easier to measure",
    category: "Digital Marketing",
    date: "September 19, 2026",
    readTime: "7 min read",
    image: videoImage,
    excerpt:
      "Choose a business goal first, then connect each channel and campaign to a small set of useful measures.",
    paragraphs: [
      "Start with a specific business outcome such as qualified enquiries, repeat purchases, or stronger awareness in a target market. That gives each campaign a clear purpose.",
      "Choose measures that reflect the goal. Traffic alone may not show whether the campaign is reaching likely customers, so pair it with actions such as enquiries, bookings, or sales.",
      "Review results at a regular interval and adjust one part of the plan at a time. Consistent tracking helps separate useful improvements from noise.",
    ],
  },
  {
    title: "When should a business invest in a mobile app?",
    category: "Apps & Technology",
    date: "September 10, 2026",
    readTime: "5 min read",
    image: appImage,
    excerpt:
      "An app is most useful when it solves a repeat customer need that a responsive website cannot handle as well.",
    paragraphs: [
      "A mobile app makes sense when customers have a recurring task, benefit from device features, or need a more direct way to stay connected with a service.",
      "Before development, validate the core use case with customers and compare it with improving the mobile website. That helps control cost and keeps the first version focused.",
      "Define what success looks like, release a small useful product, and use feedback to guide the next round of improvements.",
    ],
  },
  {
    title: "Building a brand customers can recognize across every channel",
    category: "Branding",
    date: "September 2, 2026",
    readTime: "4 min read",
    image: brandingImage,
    excerpt:
      "Consistent visuals and a clear voice make it easier for people to recognize and trust a business.",
    paragraphs: [
      "A recognizable brand begins with a clear position: what the business does, who it serves, and why customers should remember it.",
      "Apply the same visual rules and writing voice across the website, social channels, proposals, and customer communications. Consistency helps every interaction feel connected.",
      "As the business grows, document these decisions in a simple brand guide so teams and partners can apply them reliably.",
    ],
  },
];

const categories = ["All Articles", ...new Set(posts.map((post) => post.category))];

export default function Blog() {
  const [category, setCategory] = useState("All Articles");
  const [query, setQuery] = useState("");
  const [activePost, setActivePost] = useState(null);

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = category === "All Articles" || post.category === category;
      const matchesQuery =
        !normalizedQuery ||
        `${post.title} ${post.category} ${post.excerpt}`.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <main className="overflow-hidden bg-[#FDF6E8] text-[#202020]">
      <section className="relative isolate bg-[#FFE7BC] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <span aria-hidden="true" className="pointer-events-none absolute -right-10 top-8 h-44 w-44 rounded-full bg-gradient-to-br from-white/75 to-[#F5BD58]/35" />
        <span aria-hidden="true" className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-gradient-to-br from-white/70 to-[#F5BD58]/30" />
        <div className="relative mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="text-sm font-bold tracking-[.18em] text-[#A66A0A]">INSIGHTS &amp; IDEAS</p>
            <h1 className="mt-4 max-w-[850px] text-[clamp(2.75rem,5.3vw,5rem)] font-extrabold leading-[1.04] tracking-[-.045em]">
              Practical ideas for <span className="text-[#F5A623]">digital growth.</span>
            </h1>
            <p className="mt-5 max-w-[680px] text-[clamp(16px,1.3vw,20px)] leading-relaxed text-black">
              Clear guidance on websites, e-commerce, branding, and digital marketing from the Discover Websoft team.
            </p>
            <Link to="/shop" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#242323] px-6 py-3.5 text-sm font-bold tracking-wide text-[#F7C66F] transition hover:bg-[#F5A623] hover:text-black">
              EXPLORE OUR SERVICES <HiArrowRight aria-hidden="true" />
            </Link>
          </div>
          <button type="button" onClick={() => setActivePost(posts[0])} className="group relative mx-auto aspect-[1.45/1] w-full max-w-[560px] overflow-hidden rounded-[24px] border border-white/70 bg-[#F8E7C5] text-left shadow-[0_16px_36px_rgba(69,48,13,.18)]">
            <img src={posts[0].image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
            <span className="absolute inset-0 bg-gradient-to-t from-[#171717]/85 via-transparent to-transparent" />
            <span className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-7">
              <span className="inline-flex rounded-full bg-[#F5A623] px-3 py-1 text-xs font-bold text-black">FEATURED ARTICLE</span>
              <span className="mt-3 block text-xl font-bold leading-snug sm:text-2xl">{posts[0].title}</span>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#FFD789]">Read the article <HiArrowRight aria-hidden="true" /></span>
            </span>
          </button>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-10 grid items-end gap-5 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-bold tracking-[.16em] text-[#A66A0A]">FROM THE JOURNAL</p>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Latest articles</h2>
            </div>
            <label className="flex h-12 w-full items-center gap-3 rounded-xl border border-[#E9CC91] bg-white/80 px-4 md:w-[320px]">
              <HiOutlineSearch className="shrink-0 text-xl" aria-hidden="true" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles" className="min-w-0 flex-1 bg-transparent text-sm text-black outline-none placeholder:text-black" />
            </label>
          </div>

          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
            {categories.map((item) => (
              <button key={item} type="button" onClick={() => setCategory(item)} className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${category === item ? "border-[#242323] bg-[#242323] text-[#F7C66F]" : "border-[#E9CC91] bg-white/70 text-black hover:border-[#F5A623]"}`}>
                {item}
              </button>
            ))}
          </div>

          {filteredPosts.length ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredPosts.map((post) => (
                <article key={post.title} className="group overflow-hidden rounded-[20px] border border-[#EFD194] bg-white shadow-[0_8px_24px_rgba(69,48,13,.08)] transition hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(69,48,13,.13)]">
                  <div className="aspect-[1.72/1] overflow-hidden bg-[#F8E7C5]">
                    <img src={post.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold">
                      <span className="rounded-full bg-[#FFF0CF] px-3 py-1.5 text-[#754A08]">{post.category}</span>
                      <span className="text-black">{post.date}</span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold leading-snug">{post.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-black">{post.excerpt}</p>
                    <div className="mt-6 flex items-center justify-between border-t border-[#F0E3CA] pt-4">
                      <span className="flex items-center gap-1.5 text-sm text-black"><HiOutlineClock aria-hidden="true" />{post.readTime}</span>
                      <button type="button" onClick={() => setActivePost(post)} className="inline-flex items-center gap-2 text-sm font-bold text-[#A66A0A] hover:text-black">
                        Read article <HiArrowRight aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-[#EFD194] bg-white/70 px-6 py-14 text-center">
              <h3 className="text-xl font-bold">No articles found</h3>
              <p className="mt-2 text-black">Try another search or choose a different topic.</p>
            </div>
          )}
        </div>
      </section>

      {activePost && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto overscroll-contain bg-black/65 p-4 sm:p-8" onMouseDown={(event) => { if (event.target === event.currentTarget) setActivePost(null); }}>
          <article role="dialog" aria-modal="true" aria-labelledby="blog-dialog-title" className="relative w-full max-w-[780px] overflow-hidden rounded-2xl border border-[#E9CC91] bg-[#FDF6E8] shadow-2xl">
            <button type="button" onClick={() => setActivePost(null)} aria-label="Close article" className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl shadow hover:bg-[#FFE7BC]"><HiX /></button>
            <img src={activePost.image} alt="" className="max-h-[320px] w-full object-cover" />
            <div className="p-6 sm:p-10">
              <p className="text-sm font-bold tracking-wide text-[#A66A0A]">{activePost.category} · {activePost.date} · {activePost.readTime}</p>
              <h2 id="blog-dialog-title" className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">{activePost.title}</h2>
              <p className="mt-5 text-lg font-semibold leading-relaxed">{activePost.excerpt}</p>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-black">
                {activePost.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <button type="button" onClick={() => setActivePost(null)} className="mt-8 rounded-lg bg-[#242323] px-5 py-3 text-sm font-bold text-[#F7C66F] hover:bg-[#F5A623] hover:text-black">Close article</button>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
