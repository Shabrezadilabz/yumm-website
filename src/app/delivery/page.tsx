import Image from "next/image";
import Link from "next/link";
import { PageCTA } from "@/components/PageCTA";

export const metadata = {
  title: "Delivery",
  description:
    "Your own riders, or Shadowfax, Dunzo and Porter, carry the order. The guest stays in your chat the whole way.",
};

const HERO_PILLS = [
  { num: "1", label: "Pay in chat" },
  { num: "2", label: "Kitchen packs" },
  { num: "3", label: "Partner rides" },
  { num: "4", label: "Status bubble" },
] as const;

const ROUTE_STEPS = [
  {
    num: "01",
    title: "Order paid in WhatsApp",
    body: "UPI and rewards settle. The ticket reaches the kitchen.",
  },
  {
    num: "02",
    title: "Pack and QR sticker",
    body: "The lid or bag gets the reorder code before handoff.",
  },
  {
    num: "03",
    title: "Partner assigned",
    body: "Shadowfax, Dunzo, Porter or your own rider, by rules you set.",
  },
  {
    num: "04",
    title: "Status in the same chat",
    body: "Picked up, on the way, delivered. The guest never leaves WhatsApp.",
  },
] as const;

const PARTNERS = [
  { name: "Own riders", img: "/yumm-assets/delivery-hero.png" },
  { name: "Shadowfax", img: "/yumm-assets/delivery-pack-1.png" },
  { name: "Dunzo", img: "/yumm-assets/delivery-pack-2.png" },
  { name: "Porter", img: "/yumm-assets/feature-card-4.png" },
] as const;

export default function DeliveryPage() {
  return (
    <div className="bg-surface-base">
      {/* 01 Hero (94:11013) */}
      <section className="px-5 pb-16 pt-12 sm:px-8 lg:px-20 lg:pb-32 lg:pt-20">
        <div className="page-max flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex flex-1 flex-col items-start gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-[#7fd858]" aria-hidden />
                <p className="text-base font-medium text-text-brand">Delivery</p>
              </div>
              <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
            </div>

            <div className="flex w-full flex-col items-start gap-10">
              <div className="flex w-full flex-col items-start gap-4">
                <h1 className="font-serif-display text-[clamp(3rem,6.5vw,5.5rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
                  From your kitchen to their door
                </h1>
                <p className="text-xl font-normal leading-[1.5] text-text-body">
                  Your own riders, or Shadowfax, Dunzo and Porter, carry the order. The guest stays in your chat the whole way.
                </p>
              </div>

              <div className="flex flex-wrap items-start gap-2">
                {HERO_PILLS.map((p) => (
                  <div
                    key={p.num}
                    className="flex items-center gap-2 rounded-full border border-border-default bg-surface-card py-1 pl-1 pr-4"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-[16px] bg-surface-brand">
                      <span className="text-xs font-semibold text-text-on-brand">{p.num}</span>
                    </div>
                    <span className="text-base font-semibold text-text-brand">{p.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-start gap-4">
                <Link
                  href="/waitlist"
                  className="inline-flex items-center gap-3 rounded-full bg-surface-brand px-7 py-4 text-base font-medium text-text-on-brand transition-opacity hover:opacity-95"
                >
                  Join the waitlist
                  <Image src="/yumm-assets/arrow-right-milk.svg" alt="" width={20} height={20} />
                </Link>
                <Link
                  href="#pay-in-chat"
                  className="inline-flex items-center rounded-full border-[1.5px] border-border-brand bg-surface-card px-7 py-4 text-base font-medium text-text-brand transition-colors hover:bg-surface-subtle/50"
                >
                  See the route
                </Link>
              </div>
            </div>
          </div>

          <div className="relative h-[420px] w-full max-w-[520px] shrink-0 overflow-hidden rounded-[32px] sm:h-[600px]">
            <Image
              src="/yumm-assets/delivery-hero.png"
              alt="Delivery rider handing order to guest"
              width={520}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* 02 · 01 Pay in chat (94:11041) */}
      <section
        id="pay-in-chat"
        className="scroll-mt-24 bg-surface-brand px-5 py-16 sm:px-8 lg:px-20 lg:py-32"
      >
        <div className="page-max flex flex-col items-start gap-12">
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-surface-base" aria-hidden />
                <p className="text-base font-medium text-text-on-brand">01 · Pay in chat</p>
              </div>
              <div className="h-[3px] w-full rounded-[2px] bg-surface-base" />
            </div>
            <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-on-brand">
              From paid chat to doorstep
            </h2>
          </div>

          <div className="flex flex-wrap items-start gap-3">
            {["Razorpay", "Meta", "WhatsApp", "UPI"].map((rail) => (
              <div
                key={rail}
                className="rounded-[12px] bg-surface-card px-5 py-3 text-base font-semibold text-text-brand"
              >
                {rail}
              </div>
            ))}
          </div>

          <div className="grid w-full grid-cols-1 gap-x-12 md:grid-cols-2">
            {ROUTE_STEPS.map((st) => (
              <div
                key={st.num}
                className="flex items-start gap-4 border-t border-surface-brand-soft py-8"
              >
                <p className="font-serif-display text-[40px] leading-[1.2] tracking-[-0.4px] text-text-on-brand">
                  {st.num}
                </p>
                <div className="flex flex-1 flex-col gap-2">
                  <p className="text-xl font-semibold leading-[1.2] text-text-on-brand">
                    {st.title}
                  </p>
                  <p className="text-base font-normal leading-[1.5] text-text-on-brand-muted">
                    {st.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 · 02 Kitchen packs (94:11078) */}
      <section className="px-5 py-16 sm:px-8 lg:px-20 lg:py-32">
        <div className="page-max flex flex-col items-start gap-12">
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-surface-accent" aria-hidden />
                <p className="text-base font-medium text-text-brand">02 · Kitchen packs</p>
              </div>
              <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
            </div>
            <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
              Pack and QR, then the partner picks up
            </h2>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col items-start gap-4">
              <div className="relative h-[320px] w-full overflow-hidden rounded-[24px] sm:h-[400px]">
                <Image
                  src="/yumm-assets/delivery-pack-1.png"
                  alt="Ticket and QR sticker"
                  width={548}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-base font-medium leading-[1.5] text-text-body">
                Ticket and QR sticker
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="relative h-[320px] w-full overflow-hidden rounded-[24px] sm:h-[400px]">
                <Image
                  src="/yumm-assets/delivery-pack-2.png"
                  alt="Lid, tissue and bag, each with a code"
                  width={548}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-base font-medium leading-[1.5] text-text-body">
                Lid, tissue and bag, each with a code
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 Who carries the order (94:11090) — with transparent background photos */}
      <section className="bg-surface-brand px-5 py-16 sm:px-8 lg:px-20 lg:py-32">
        <div className="page-max flex flex-col items-start gap-12">
          <div className="flex w-full flex-col items-start justify-between gap-6 lg:flex-row lg:items-end lg:gap-20">
            <div className="flex flex-1 flex-col items-start gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-surface-base" aria-hidden />
                  <p className="text-base font-medium text-text-on-brand">03 · Partner rides</p>
                </div>
                <div className="h-[3px] w-full rounded-[2px] bg-surface-base" />
              </div>
              <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-on-brand">
                Who can carry the order
              </h2>
            </div>

            <p className="max-w-[440px] text-xl font-normal leading-[1.5] text-text-on-brand-muted">
              Use your own riders, a partner, or both. Integrations are live only where the partner supports them.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="group relative flex flex-col items-start gap-6 overflow-hidden rounded-[16px] bg-surface-brand-soft px-6 py-8"
              >
                <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                  <Image
                    src={p.img}
                    alt=""
                    width={268}
                    height={252}
                    className="h-full w-full object-cover opacity-25 mix-blend-luminosity transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(90,51,82,0.75) 0%, rgba(90,51,82,0.90) 55%, rgba(90,51,82,0.97) 100%)",
                    }}
                  />
                </div>
                <p className="relative z-[1] font-serif-display text-[40px] leading-[1.2] tracking-[-0.4px] text-text-on-brand">
                  {p.name}
                </p>
                <div className="relative z-[1] flex flex-col gap-1">
                  <p className="text-xs font-normal text-text-on-brand-muted">Cost per delivery</p>
                  <p className="text-base font-semibold text-text-on-brand">To confirm</p>
                </div>
                <div className="relative z-[1] flex flex-col gap-1">
                  <p className="text-xs font-normal text-text-on-brand-muted">Cities</p>
                  <p className="text-base font-semibold text-text-on-brand">To confirm</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full rounded-[12px] border border-dashed border-surface-accent bg-surface-brand-soft px-5 py-4">
            <p className="text-base font-medium leading-[1.5] text-text-on-brand">
              Content needed: the live page lists seven partners. Add the full list, cost per delivery, who pays and city coverage (plan §10 E).
            </p>
          </div>
        </div>
      </section>

      {/* 05 Status in chat (94:11131) — with transparent engaging background photo */}
      <section className="px-5 py-16 sm:px-8 lg:px-20 lg:py-32">
        <div className="page-max flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Left Phone Panel (94:11132) */}
          <div className="relative h-[560px] w-full max-w-[480px] shrink-0 overflow-hidden rounded-[32px] bg-surface-subtle">
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
              <Image
                src="/yumm-assets/delivery-hero.png"
                alt=""
                width={480}
                height={560}
                className="h-full w-full scale-105 object-cover opacity-25 mix-blend-multiply blur-[1px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#381932]/25 via-[#f6e4cf]/65 to-[#7fd858]/20" />
            </div>

            <div className="absolute left-1/2 top-[56px] h-[578px] w-[289px] -translate-x-1/2 overflow-hidden rounded-[45.414px] bg-surface-ink shadow-[0px_20.4px_40.8px_-6.8px_rgba(15,61,41,0.22)]">
              <div className="absolute left-[7.22px] top-[7.22px] flex h-[563.55px] w-[274.55px] flex-col overflow-hidden rounded-[39.221px] bg-surface-subtle">
                <div className="flex w-full shrink-0 flex-col gap-[10.321px] bg-surface-brand-soft px-[18.579px] pb-[12.386px] pt-[16.514px]">
                  <div className="flex w-full items-start justify-between px-[8.257px] text-[12.386px] font-medium leading-[1.2] text-text-on-brand">
                    <span>12:48</span>
                    <span className="whitespace-pre text-[11.354px]">{`5G  ■`}</span>
                  </div>
                  <div className="flex items-center gap-[10.321px]">
                    <div className="relative h-[33.029px] w-[33.029px] overflow-hidden rounded-full ring-2 ring-[#7fd858]">
                      <Image
                        src="/yumm-assets/dish-thali.png"
                        alt="Mango Leaf Kitchen"
                        width={33}
                        height={33}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-[13.418px] font-medium leading-[1.2] text-text-on-brand">
                        Mango Leaf Kitchen
                      </span>
                      <span className="text-[11.354px] font-normal leading-[1.45] text-[#c8f0b4]">
                        ● Business account
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-[8.257px] px-[10.321px] py-[12.386px]">
                  <div className="flex w-full flex-col items-center gap-[6.193px] rounded-[14.45px] bg-surface-card px-[12.386px] py-[18.579px] shadow-xs">
                    <div className="flex h-[45.414px] w-[45.414px] items-center justify-center rounded-full bg-[#ddf5c8]">
                      <Image src="/yumm-assets/icon-tick-circle.svg" alt="" width={25} height={25} />
                    </div>
                    <p className="text-[20.643px] font-semibold leading-[1.25] text-text-brand">
                      Order confirmed
                    </p>
                    <p className="text-[12.386px] text-text-body">#1042 · ₹387 paid via UPI</p>
                  </div>
                  <div className="flex w-[206.4px] flex-col gap-0.5 rounded-bl-[12.386px] rounded-br-[12.386px] rounded-tl-[2.064px] rounded-tr-[12.386px] bg-surface-card px-3 py-2 shadow-xs">
                    <p className="text-[13.418px] leading-[1.45] text-text-primary">
                      Your order is being prepared. You earned 39 points on this order.
                    </p>
                    <p className="text-right text-[10.321px] text-text-caption">12:53</p>
                  </div>
                  <div className="flex w-[206.4px] flex-col gap-0.5 rounded-bl-[12.386px] rounded-br-[12.386px] rounded-tl-[2.064px] rounded-tr-[12.386px] bg-surface-card px-3 py-2 shadow-xs">
                    <p className="text-[13.418px] leading-[1.45] text-text-primary">
                      Out for delivery, your rider is on the way.
                    </p>
                    <p className="text-right text-[10.321px] text-text-caption">1:08</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-[103.22px] top-[14.45px] h-[22.707px] w-[82.571px] rounded-[11.354px] bg-surface-ink" />
            </div>
          </div>

          {/* Right copy (94:11158) */}
          <div className="flex flex-1 flex-col items-start gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-surface-accent" aria-hidden />
                <p className="text-base font-medium text-text-brand">04 · Status bubble</p>
              </div>
              <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
            </div>

            <div className="flex flex-col items-start gap-10">
              <div className="flex flex-col items-start gap-4">
                <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
                  Delivered. Rate, reorder and get a receipt in the same thread
                </h2>
                <p className="text-xl font-normal leading-[1.5] text-text-body">
                  No tracking app and no unknown numbers. Confirmation, pickup and delivery arrive where the guest ordered.
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-2">
                {["Prepared", "Picked up", "Delivered"].map((pt) => (
                  <div key={pt} className="flex items-center gap-3">
                    <Image src="/yumm-assets/icon-tick-circle.svg" alt="" width={24} height={24} />
                    <p className="text-lg font-medium text-text-brand">{pt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 Page CTA (94:11174) */}
      <PageCTA heading="Want this wired to your city’s partners?" />
    </div>
  );
}
