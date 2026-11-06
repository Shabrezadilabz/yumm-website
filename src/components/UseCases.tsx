import Image from "next/image";

const CASES = [
  {
    icon: "/yumm-assets/icon-chef-hat.svg",
    title: "Cloud kitchens",
    body: "Delivery only? Every parcel becomes the button for the next order.",
    bg: "/yumm-assets/packaging-setup.png",
    tag: "Delivery-first",
    points: [
      "QR on every bag, lid and sticker",
      "Order and pay by UPI in WhatsApp",
      "Payday and weekend campaigns to your own guests",
    ],
  },
  {
    icon: "/yumm-assets/icon-shop.svg",
    title: "Single location restaurants",
    body: "Takeaway and dine in under one guest record.",
    bg: "/yumm-assets/rest-1.png",
    tag: "Dine-in + Takeaway",
    points: [
      "Dine in menu and table booking in the chat",
      "Points from delivery redeemed at the table",
      "Your own riders or a delivery partner",
    ],
  },
  {
    icon: "/yumm-assets/icon-building.svg",
    title: "Multi outlet brands",
    body: "Every outlet, one view of your guests.",
    bg: "/yumm-assets/rest-3.png",
    tag: "Chain & Franchise",
    points: [
      "One dashboard for orders, claims and repeat orders",
      "Offers around each outlet, to opted in guests",
      "Guest records across delivery, takeaway and dine in",
    ],
  },
] as const;

export function UseCases() {
  return (
    <section id="use-cases" className="scroll-mt-24 bg-surface-subtle px-5 py-16 sm:px-8 lg:px-20 lg:py-32">
      <div className="page-max flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-surface-accent" aria-hidden />
              <p className="text-base font-medium text-text-brand">Built for how you run</p>
            </div>
            <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
          </div>
          <h2 className="max-w-[1000px] font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
            One rail, every kitchen
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 items-stretch gap-5 md:grid-cols-3">
          {CASES.map((c) => (
            <div
              key={c.title}
              className="group relative flex flex-col items-start justify-between overflow-hidden rounded-[32px] p-8"
              style={{
                backgroundColor: "#24101f",
                boxShadow: "0 16px 40px rgba(36,16,31,0.16)",
              }}
            >
              {/* Rich background photo with dark plum readability scrim */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                <Image
                  src={c.bg}
                  alt=""
                  width={400}
                  height={480}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(36,16,31,0.76) 0%, rgba(36,16,31,0.88) 45%, rgba(36,16,31,0.96) 100%)",
                  }}
                />
              </div>

              <div className="relative z-[1] flex w-full flex-col items-start gap-4">
                <div className="flex w-full items-center justify-between">
                  <div
                    className="flex h-[56px] w-[56px] items-center justify-center rounded-[28px] shadow-md"
                    style={{ backgroundColor: "#fff3e6" }}
                  >
                    <Image src={c.icon} alt="" width={26} height={26} />
                  </div>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md"
                    style={{
                      border: "1px solid rgba(255,255,255,0.22)",
                      backgroundColor: "rgba(255,255,255,0.12)",
                      color: "#c8f0b4",
                    }}
                  >
                    {c.tag}
                  </span>
                </div>

                <p
                  className="mt-1 text-2xl font-semibold leading-[1.2] tracking-[-0.12px]"
                  style={{ color: "#fff3e6" }}
                >
                  {c.title}
                </p>
                <p
                  className="text-base font-normal leading-[1.5]"
                  style={{ color: "#ebd5bf" }}
                >
                  {c.body}
                </p>
                <div
                  className="my-1 h-px w-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                />
                <div className="flex w-full flex-col gap-3">
                  {c.points.map((pt) => (
                    <div key={pt} className="flex w-full items-start gap-2.5">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                        style={{ backgroundColor: "#7fd858", color: "#24101f" }}
                      >
                        ✓
                      </span>
                      <p
                        className="flex-1 text-base font-medium leading-[1.5]"
                        style={{ color: "#ffffff" }}
                      >
                        {pt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
