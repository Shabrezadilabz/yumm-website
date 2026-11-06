import Image from "next/image";
import Link from "next/link";
import { WhatsAppDemo } from "@/components/WhatsAppDemo";

export const metadata = {
  title: "WhatsApp ordering",
  description:
    "Guests order and pay by UPI in your restaurant’s own chat. No app to download, and no marketplace in between.",
};

const ENTRY_TILES = [
  {
    icon: "/yumm-assets/icon-qr.svg",
    title: "Packaging QR",
    body: "On the bag, lid, tissue or sticker.",
    bg: "/yumm-assets/packaging-surface-4.png",
  },
  {
    icon: "/yumm-assets/icon-megaphone.svg",
    title: "Poster",
    body: "A QR at the counter or on the table.",
    bg: "/yumm-assets/loyalty-redeem-table.png",
  },
  {
    icon: "/yumm-assets/icon-message.svg",
    title: "Story",
    body: "A link in your Instagram story.",
    bg: "/yumm-assets/feature-card-3.png",
  },
  {
    icon: "/yumm-assets/icon-map-pin.svg",
    title: "Google listing",
    body: "The order link on your business profile.",
    bg: "/yumm-assets/rest-1.png",
  },
  {
    icon: "/yumm-assets/arrow-right-plum.svg",
    title: "Link",
    body: "One link to share anywhere.",
    bg: "/yumm-assets/loyalty-redeem-chat.png",
  },
] as const;

const MENU_ITEMS = [
  {
    name: "Paneer Tikka Roll",
    price: "₹149",
    img: "/yumm-assets/dish-rolls.png",
    tag: "Bestseller",
  },
  {
    name: "Masala Fries",
    price: "₹129",
    img: "/yumm-assets/dish-paneer.png",
    tag: "Crispy",
  },
  {
    name: "Garlic Naan",
    price: "₹80",
    img: "/yumm-assets/dish-thali.png",
    tag: "Tandoor",
  },
  {
    name: "Gulab Jamun",
    price: "₹100",
    img: "/yumm-assets/dish-desserts.png",
    tag: "Sweet",
  },
] as const;

const LAYERS = [
  {
    num: "01",
    title: "Entry channels",
    body: "QR, poster, story, listing and link all open the same chat.",
    img: "/yumm-assets/packaging-one-guest.png",
  },
  {
    num: "02",
    title: "Chat catalog",
    body: "Your menu and offers, browsable inside WhatsApp.",
    img: "/yumm-assets/loyalty-redeem-chat.png",
  },
  {
    num: "03",
    title: "Payment",
    body: "UPI in the chat, with instant settlement.",
    img: "/yumm-assets/dish-biryani.png",
  },
  {
    num: "04",
    title: "Kitchen and dispatch",
    body: "Paid orders reach the kitchen as a ticket, then go out with your riders or a partner.",
    img: "/yumm-assets/delivery-pack-1.png",
  },
  {
    num: "05",
    title: "Guest record",
    body: "Every guest and order saved, ready for rewards and campaigns.",
    img: "/yumm-assets/feature-card-2.png",
  },
] as const;

export default function OrderingPage() {
  return (
    <div className="bg-surface-base">
      {/* 01 Hero (94:10316) */}
      <section className="relative overflow-hidden px-5 pb-16 pt-12 sm:px-8 lg:px-20 lg:pb-32 lg:pt-20">
        <div className="page-max flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex flex-1 flex-col items-start gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-[#7fd858]" aria-hidden />
                <p className="text-base font-medium text-text-brand">WhatsApp ordering</p>
              </div>
              <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
            </div>

            <div className="flex w-full flex-col items-start gap-10">
              <div className="flex w-full flex-col items-start gap-4">
                <h1 className="font-serif-display text-[clamp(3rem,6.5vw,5.5rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
                  Your menu, inside WhatsApp
                </h1>
                <p className="text-xl font-normal leading-[1.5] text-text-body">
                  Guests order and pay by UPI in your restaurant’s own chat. No app to download, and no marketplace in between.
                </p>
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
                  href="#demo"
                  className="inline-flex items-center rounded-full border-[1.5px] border-border-brand bg-surface-card px-7 py-4 text-base font-medium text-text-brand transition-colors hover:bg-surface-subtle/50"
                >
                  See the demo
                </Link>
              </div>
            </div>
          </div>

          {/* Right Phone Panel (94:10326) with transparent food backdrop */}
          <div className="relative h-[600px] w-full max-w-[520px] shrink-0 overflow-hidden rounded-[32px] bg-surface-subtle">
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
              <Image
                src="/yumm-assets/loyalty-redeem-chat.png"
                alt=""
                width={520}
                height={600}
                className="h-full w-full scale-105 object-cover opacity-25 mix-blend-multiply blur-[1px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#381932]/25 via-[#f6e4cf]/65 to-[#7fd858]/20" />
            </div>

            <div className="absolute left-1/2 top-[64px] h-[625.6px] w-[312.8px] -translate-x-1/2 overflow-hidden rounded-[49.154px] bg-surface-ink shadow-[0px_22.08px_44.16px_-7.36px_rgba(15,61,41,0.22)]">
              <div className="absolute left-[7.82px] top-[7.82px] flex h-[609.96px] w-[297.16px] flex-col overflow-hidden rounded-[42.451px] bg-surface-subtle">
                <div className="flex w-full shrink-0 flex-col gap-[11.171px] bg-surface-brand-soft px-[20.109px] pb-[13.406px] pt-[17.874px]">
                  <div className="flex w-full items-start justify-between px-[8.937px] text-[13.406px] font-medium leading-[1.2] text-text-on-brand">
                    <span>12:48</span>
                    <span className="whitespace-pre text-[12.289px]">{`5G  ■`}</span>
                  </div>
                  <div className="flex items-center gap-[11.171px]">
                    <div className="relative h-[35.749px] w-[35.749px] overflow-hidden rounded-full ring-2 ring-[#7fd858]">
                      <Image
                        src="/yumm-assets/dish-thali.png"
                        alt="Mango Leaf Kitchen"
                        width={36}
                        height={36}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-[14.523px] font-medium leading-[1.2] text-text-on-brand">
                        Mango Leaf Kitchen
                      </span>
                      <span className="text-[12.289px] font-normal leading-[1.45] text-[#c8f0b4]">
                        ● Business account
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-[8.937px] px-[11.171px] py-[13.406px]">
                  <div className="flex w-full justify-end">
                    <div className="flex w-[71.5px] flex-col gap-0.5 rounded-bl-[13.406px] rounded-br-[13.406px] rounded-tl-[13.406px] rounded-tr-[2.234px] bg-[#ddf5c8] px-3 py-2">
                      <p className="text-[14.523px] leading-[1.45] text-text-primary">HI</p>
                      <p className="text-right text-[11.171px] text-text-caption">12:48</p>
                    </div>
                  </div>
                  <div className="flex w-[223.4px] flex-col gap-0.5 rounded-bl-[13.406px] rounded-br-[13.406px] rounded-tl-[2.234px] rounded-tr-[13.406px] bg-surface-card px-3 py-2">
                    <p className="text-[14.523px] leading-[1.45] text-text-primary">
                      Hi, welcome to Mango Leaf Kitchen! What would you like to do?
                    </p>
                    <p className="text-right text-[11.171px] text-text-caption">12:48</p>
                  </div>
                  {["Order Delivery", "Dine in Menu", "Claim Rewards", "Book Table"].map((btn) => (
                    <div
                      key={btn}
                      className="flex h-[40.217px] w-full items-center justify-center rounded-[11.171px] bg-surface-card"
                    >
                      <span className="text-[14.523px] font-medium leading-[1.2] text-text-accent">
                        {btn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute left-[111.71px] top-[15.64px] h-[24.577px] w-[89.371px] rounded-[12.289px] bg-surface-ink" />
            </div>
          </div>
        </div>
      </section>

      {/* 02 Demo (94:10356) */}
      <WhatsAppDemo id="demo" />

      {/* 03 Entry points (94:10357) */}
      <section className="px-5 py-16 sm:px-8 lg:px-20 lg:py-32">
        <div className="page-max flex flex-col items-start gap-12">
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-surface-accent" aria-hidden />
                <p className="text-base font-medium text-text-brand">Ways in</p>
              </div>
              <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
            </div>

            <div className="flex flex-col items-start gap-4">
              <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
                Every way in opens the same chat
              </h2>
              <p className="text-xl font-normal leading-[1.5] text-text-body">
                Wherever a guest finds you, one tap lands them in your WhatsApp with your menu ready.
              </p>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {ENTRY_TILES.map((t) => (
              <div
                key={t.title}
                className="group relative flex flex-col items-start gap-4 overflow-hidden rounded-[20px] px-6 pb-8 pt-6"
                style={{
                  backgroundColor: "#24101f",
                  boxShadow: "0 14px 32px rgba(36,16,31,0.15)",
                }}
              >
                <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                  <Image
                    src={t.bg}
                    alt=""
                    width={240}
                    height={220}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(36,16,31,0.74) 0%, rgba(36,16,31,0.88) 52%, rgba(36,16,31,0.96) 100%)",
                    }}
                  />
                </div>
                <div
                  className="relative z-[1] flex h-12 w-12 items-center justify-center rounded-[12px] shadow-md"
                  style={{ backgroundColor: "#fff3e6" }}
                >
                  <Image src={t.icon} alt="" width={24} height={24} />
                </div>
                <p
                  className="relative z-[1] text-xl font-semibold leading-[1.2]"
                  style={{ color: "#fff3e6" }}
                >
                  {t.title}
                </p>
                <p
                  className="relative z-[1] text-base font-normal leading-[1.5]"
                  style={{ color: "#ebd5bf" }}
                >
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 Mini-site and offers (94:10389) — with real dish photos! */}
      <section className="relative overflow-hidden bg-surface-subtle px-5 py-16 sm:px-8 lg:px-20 lg:py-32">
        <div className="page-max relative z-[1] flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Left mini-site mock (94:10390) */}
          <div className="flex w-full max-w-[400px] shrink-0 flex-col items-start overflow-hidden rounded-[32px] bg-surface-card shadow-[0_20px_48px_rgba(36,16,31,0.12)]">
            <div className="relative flex w-full flex-col gap-1 overflow-hidden bg-surface-brand px-6 pb-6 pt-8">
              <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                <Image
                  src="/yumm-assets/rest-1.png"
                  alt=""
                  width={400}
                  height={140}
                  className="h-full w-full object-cover opacity-30 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#381932]/95 via-[#381932]/85 to-[#381932]/65" />
              </div>
              <p className="relative z-[1] font-serif-display text-[32px] leading-[1.2] text-text-on-brand">
                Mango Leaf Kitchen
              </p>
              <p className="relative z-[1] text-base font-normal leading-[1.5] text-text-on-brand-muted">
                Opens inside your WhatsApp chat
              </p>
            </div>

            <div className="flex w-full flex-col gap-4 px-6 pb-8 pt-6">
              <div className="flex w-full rounded-[12px] bg-surface-base p-1">
                <div className="flex flex-1 justify-center rounded-[8px] bg-surface-card py-2 shadow-2xs">
                  <span className="text-base font-semibold text-text-brand">Delivery</span>
                </div>
                <div className="flex flex-1 justify-center rounded-[8px] py-2">
                  <span className="text-base font-medium text-text-body">Dine in</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="rounded-full bg-surface-subtle px-4 py-2">
                  <span className="text-base font-medium text-text-brand">Today</span>
                </div>
                <div className="rounded-full border border-border-default px-4 py-2">
                  <span className="text-base font-medium text-text-brand">Weekend</span>
                </div>
                <div className="rounded-full border border-border-default px-4 py-2">
                  <span className="text-base font-medium text-text-brand">Nearby</span>
                </div>
              </div>

              {MENU_ITEMS.map((item) => (
                <div
                  key={item.name}
                  className="flex w-full items-center gap-4 border-t border-border-subtle py-3"
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[12px] bg-surface-subtle shadow-xs ring-1 ring-border-default">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col text-base leading-[1.4]">
                    <p className="font-semibold text-text-brand">{item.name}</p>
                    <div className="mt-0.5 flex items-center gap-2">
                      <span className="font-medium text-text-body">{item.price}</span>
                      <span className="rounded-full bg-surface-subtle px-2 py-0.5 text-[10px] font-semibold text-text-brand">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  <div className="rounded-full border border-border-brand px-4 py-2 transition-colors hover:bg-surface-brand hover:text-text-on-brand">
                    <span className="text-base font-semibold">Add</span>
                  </div>
                </div>
              ))}

              <p className="text-xs font-normal leading-[1.5] text-text-caption">Example menu</p>
            </div>
          </div>

          {/* Right copy (94:10436) */}
          <div className="flex flex-1 flex-col items-start gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-surface-accent" aria-hidden />
                <p className="text-base font-medium text-text-brand">Mini site</p>
              </div>
              <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
            </div>

            <div className="flex flex-col items-start gap-10">
              <div className="flex flex-col items-start gap-4">
                <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
                  Your own storefront, inside the chat
                </h2>
                <p className="text-xl font-normal leading-[1.5] text-text-body">
                  The greeting links to a mini site with your name, photos and prices. Guests browse, pick and pay without leaving WhatsApp.
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-2">
                {[
                  "Your photos, prices and combos",
                  "Delivery or dine in, in one chat",
                  "Today, weekend and nearby offers",
                  "Nothing to install for the guest",
                ].map((pt) => (
                  <div key={pt} className="flex items-center gap-3">
                    <Image src="/yumm-assets/icon-tick-circle.svg" alt="" width={24} height={24} />
                    <p className="text-base font-medium text-text-brand">{pt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 Under the hood (94:10455) */}
      <section className="bg-surface-brand px-5 py-16 sm:px-8 lg:px-20 lg:py-32">
        <div className="page-max flex flex-col items-start gap-12">
          <div className="flex w-full flex-col items-start justify-between gap-6 lg:flex-row lg:items-end lg:gap-20">
            <div className="flex flex-1 flex-col items-start gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-surface-base" aria-hidden />
                  <p className="text-base font-medium text-text-on-brand">Under the hood</p>
                </div>
                <div className="h-[3px] w-full rounded-[2px] bg-surface-base" />
              </div>
              <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-on-brand">
                Five layers, one chat
              </h2>
            </div>

            <p className="max-w-[400px] text-xl font-normal leading-[1.5] text-text-on-brand-muted">
              What runs behind every order, from the first tap to a saved guest.
            </p>
          </div>

          <div className="flex w-full flex-col gap-2">
            {LAYERS.map((l) => (
              <div
                key={l.num}
                className="relative flex w-full flex-col items-start gap-4 overflow-hidden rounded-[16px] bg-surface-brand-soft px-8 py-6 md:flex-row md:items-center md:gap-8"
              >
                <div className="pointer-events-none absolute inset-y-0 right-0 w-72 overflow-hidden opacity-20" aria-hidden>
                  <Image
                    src={l.img}
                    alt=""
                    width={288}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5a3352] via-[#5a3352]/70 to-transparent" />
                </div>
                <p className="relative z-[1] w-[64px] shrink-0 font-serif-display text-[40px] leading-[1.2] tracking-[-0.4px] text-text-on-brand">
                  {l.num}
                </p>
                <p className="relative z-[1] w-[280px] shrink-0 text-xl font-semibold leading-[1.2] text-text-on-brand">
                  {l.title}
                </p>
                <p className="relative z-[1] flex-1 text-base font-normal leading-[1.5] text-text-on-brand-muted">
                  {l.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 Loyalty bridge (94:10482) */}
      <section className="bg-surface-subtle px-5 py-12 sm:px-8 lg:p-20">
        <div className="page-max flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex flex-1 flex-col items-start gap-3">
            <h2 className="font-serif-display text-[clamp(2rem,4vw,2.5rem)] font-normal leading-[1.2] tracking-[-0.4px] text-text-brand">
              Points from delivery, redeemed at the table
            </h2>
            <p className="text-base font-normal leading-[1.5] text-text-body">
              A guest who orders on WhatsApp earns points they can use when they dine in.
            </p>
          </div>
          <Link
            href="/loyalty"
            className="inline-flex shrink-0 items-center gap-3 rounded-full border-[1.5px] border-border-brand bg-surface-card px-7 py-4 text-base font-medium text-text-brand transition-colors hover:bg-surface-subtle/50"
          >
            See loyalty and CRM
            <Image src="/yumm-assets/arrow-right-plum.svg" alt="" width={20} height={20} />
          </Link>
        </div>
      </section>

      {/* 08 Closing CTA (94:10487) */}
      <section className="bg-surface-base px-5 py-16 sm:px-8 lg:px-20 lg:py-32">
        <div className="page-max">
          <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[32px] bg-surface-brand px-6 py-16 text-center sm:px-12 lg:px-20 lg:py-24">
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
              <Image
                src="/yumm-assets/loyalty-redeem-chat.png"
                alt=""
                width={1120}
                height={500}
                className="h-full w-full object-cover opacity-15 mix-blend-luminosity"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(56,25,50,0.88) 0%, rgba(56,25,50,0.85) 50%, rgba(56,25,50,0.95) 100%)",
                }}
              />
            </div>
            <div className="relative z-[1] flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-surface-base" aria-hidden />
                <p className="text-base font-medium text-text-on-brand">Your number, your guests</p>
              </div>
              <div className="h-[3px] w-full rounded-[2px] bg-surface-base" />
            </div>

            <div className="relative z-[1] flex flex-col items-center gap-10">
              <h2 className="max-w-[720px] font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-on-brand">
                Want this agent live on your number?
              </h2>
              <Link
                href="/waitlist"
                className="inline-flex items-center gap-3 rounded-full bg-surface-base px-7 py-4 text-base font-medium text-text-brand transition-opacity hover:opacity-95"
              >
                Join the waitlist
                <Image src="/yumm-assets/arrow-right-plum.svg" alt="" width={20} height={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
