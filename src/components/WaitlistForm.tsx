"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { cn } from "@/lib/cn";

export type WaitlistStep =
  | "form"
  | "sending"
  | "error"
  | "already"
  | "questions"
  | "done_sent"
  | "done_skipped";

const BUSINESS_TYPES = [
  { id: "Cloud kitchen", label: "Cloud kitchen", icon: "/yumm-assets/icon-chef-hat.svg" },
  { id: "Takeaway", label: "Takeaway", icon: "/yumm-assets/icon-box.svg" },
  { id: "Dine in + takeaway", label: "Dine in + takeaway", icon: "/yumm-assets/icon-shop.svg" },
  { id: "Multi outlet", label: "Multi outlet", icon: "/yumm-assets/icon-building.svg" },
] as const;

const QUESTIONS = [
  {
    key: "orders",
    label: "Monthly orders",
    options: ["Under 500", "500 to 2,000", "2,000 to 8,000", "8,000+"],
  },
  {
    key: "aov",
    label: "Average order value",
    options: ["Under ₹300", "₹300 to 600", "₹600 to 1,000", "₹1,000+"],
  },
  {
    key: "source",
    label: "Where orders come from today",
    options: ["Swiggy / Zomato", "Own WhatsApp", "Mix", "Walk in / takeaway"],
  },
  {
    key: "numbers",
    label: "Do you have your guests’ numbers?",
    options: ["No (numbers masked)", "Some numbers", "Yes, we have the list", "Not sure"],
  },
  {
    key: "mix",
    label: "Delivery vs takeaway",
    options: ["Mostly delivery", "Mostly takeaway", "Delivery + takeaway", "Dine in heavy"],
  },
] as const;

type Props = {
  variant?: "home" | "page";
  onStepChange?: (step: WaitlistStep) => void;
};

export function WaitlistForm({ variant = "home", onStepChange }: Props) {
  const [step, setStepState] = useState<WaitlistStep>("form");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Bengaluru");
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState<string>("");
  const [consent, setConsent] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({
    orders: "500 to 2,000",
  });

  function setStep(next: WaitlistStep) {
    setStepState(next);
    onStepChange?.(next);
  }

  const isFilled =
    name.trim().length > 0 &&
    phone.trim().length > 0 &&
    city.trim().length > 0 &&
    businessType.length > 0 &&
    consent;

  function fillDemo() {
    if (!name && !phone && !businessType) {
      setName("Mango Leaf Kitchen");
      setPhone("+91 98450 12345");
      setCity("Bengaluru");
      setEmail("hello@mangoleaf.in");
      setBusinessType("Cloud kitchen");
      setConsent(true);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isFilled) {
      fillDemo();
      return;
    }
    setStep("sending");
    window.setTimeout(() => {
      if (name.toLowerCase().includes("error")) {
        setStep("error");
      } else if (name.toLowerCase().includes("already")) {
        setStep("already");
      } else {
        setStep("questions");
      }
    }, 600);
  }

  function toggleAnswer(qKey: string, opt: string) {
    setAnswers((prev) => ({
      ...prev,
      [qKey]: prev[qKey] === opt ? "" : opt,
    }));
  }

  if (step === "done_sent") {
    return (
      <div className="flex w-full max-w-[520px] flex-col items-start gap-5 rounded-[32px] bg-surface-card p-7 sm:p-9">
        <div className="flex w-full items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-surface-brand">
            <Image src="/yumm-assets/icon-check-milk.svg" alt="" width={24} height={24} />
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <p className="font-serif-display text-[32px] leading-[1.2] text-text-primary">
              You’re all set
            </p>
            <p className="text-base font-normal leading-[1.5] text-text-body">
              Thanks for the answers. We’ll be in touch on WhatsApp before launch.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (step === "done_skipped") {
    return (
      <div className="flex w-full max-w-[520px] flex-col items-start gap-5 rounded-[32px] bg-surface-card p-7 sm:p-9">
        <div className="flex w-full items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-surface-brand">
            <Image src="/yumm-assets/icon-check-milk.svg" alt="" width={24} height={24} />
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <p className="font-serif-display text-[32px] leading-[1.2] text-text-primary">
              You’re on the list
            </p>
            <p className="text-base font-normal leading-[1.5] text-text-body">
              Your spot is saved. We’ll be in touch on WhatsApp before launch.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setStep("questions")}
          className="inline-flex cursor-pointer items-center gap-2 rounded-full py-3 pr-5 text-base font-medium text-text-brand hover:underline"
        >
          Answer the optional questions
          <Image src="/yumm-assets/arrow-right-plum.svg" alt="" width={18} height={18} />
        </button>
      </div>
    );
  }

  if (step === "questions") {
    return (
      <div className="flex w-full max-w-[520px] flex-col items-start gap-6 rounded-[32px] bg-surface-card p-7 sm:p-9">
        {variant === "home" ? (
          <>
            <div className="flex w-full items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-surface-brand">
                <Image src="/yumm-assets/icon-check-milk.svg" alt="" width={24} height={24} />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <p className="font-serif-display text-[32px] leading-[1.2] text-text-primary">
                  You’re on the list
                </p>
                <p className="text-base font-normal leading-[1.5] text-text-body">
                  Your spot is saved and a confirmation is on its way to your WhatsApp.
                </p>
              </div>
            </div>
            <div className="h-px w-full bg-border-default" />
            <div className="flex flex-col gap-1">
              <p className="text-base font-semibold leading-[1.2] text-text-primary">
                Five quick questions, all optional
              </p>
              <p className="text-xs font-normal leading-[1.5] text-text-caption">
                Answer any that help us plan your setup, or skip. Nothing changes your place on the list.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="flex w-full items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[16px] bg-surface-subtle">
                <Image src="/yumm-assets/icon-tick-circle.svg" alt="" width={18} height={18} />
              </div>
              <p className="flex-1 text-xl font-semibold leading-[1.2] text-text-brand">
                You’re on the list. Want to help us plan your setup?
              </p>
            </div>
            <p className="text-base font-normal leading-[1.5] text-text-body">
              Optional, five questions, skip any you like.
            </p>
          </>
        )}

        {QUESTIONS.map((q) => (
          <div key={q.key} className="flex w-full flex-col gap-2">
            <p className="text-base font-medium leading-[1.5] text-text-primary">{q.label}</p>
            <div className="flex flex-wrap gap-2">
              {q.options.map((opt) => {
                const selected = answers[q.key] === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => toggleAnswer(q.key, opt)}
                    className={cn(
                      "flex cursor-pointer items-center gap-2 rounded-[16px] border-[1.5px] px-4 py-3 text-base font-medium text-text-primary transition-colors",
                      selected
                        ? "border-border-brand bg-surface-subtle"
                        : "border-border-default bg-surface-card hover:border-border-brand",
                    )}
                  >
                    <Image src="/yumm-assets/icon-star.svg" alt="" width={20} height={20} />
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            type="button"
            onClick={() => setStep("done_sent")}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-surface-brand px-5 py-3 text-base font-medium text-text-on-brand transition-opacity hover:opacity-95"
          >
            Send answers
            <Image src="/yumm-assets/arrow-right-milk.svg" alt="" width={18} height={18} />
          </button>
          <button
            type="button"
            onClick={() => setStep("done_skipped")}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full py-3 pr-5 text-base font-medium text-text-brand hover:underline"
          >
            Skip for now
            <Image src="/yumm-assets/arrow-right-plum.svg" alt="" width={18} height={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex w-full flex-col items-start gap-5 rounded-[32px] bg-surface-card",
        variant === "page" ? "max-w-[520px] p-7 sm:p-10" : "max-w-[460px] p-7 sm:p-9",
      )}
    >
      {step === "error" ? (
        <div className="flex w-full items-start gap-3 rounded-[16px] border border-[#c2412d] bg-[#fcede8] p-4">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c2412d] text-xs font-semibold text-white">
            !
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <p className="text-base font-semibold leading-[1.2] text-[#c2412d]">
              We couldn’t add you just now
            </p>
            <p className="text-xs font-normal leading-[1.5] text-text-body">
              Your details are still here. Check your connection and try again.
            </p>
          </div>
        </div>
      ) : null}

      {step === "already" ? (
        <div className="flex w-full items-start gap-3 rounded-[16px] border border-border-default bg-surface-subtle p-4">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-brand text-xs font-semibold text-text-on-brand">
            i
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <p className="text-base font-semibold leading-[1.2] text-text-primary">
              You’re already on the list
            </p>
            <p className="text-xs font-normal leading-[1.5] text-text-body">
              We have this WhatsApp number saved. We’ll reach out before launch.
            </p>
          </div>
        </div>
      ) : null}

      {/* Field 1: Restaurant or brand name */}
      <label className="flex w-full flex-col gap-2">
        <span className="text-base font-medium leading-[1.5] text-text-primary">
          Restaurant or brand name
        </span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Mango Leaf Kitchen"
          className="h-[52px] w-full rounded-[16px] border border-border-default bg-surface-card px-4 text-base font-normal text-text-primary placeholder:text-text-caption outline-none focus:border-border-brand"
        />
      </label>

      {/* Row: WhatsApp number + City */}
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-base font-medium leading-[1.5] text-text-primary">
            WhatsApp number
          </span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98xxx xxxxx"
            className="h-[52px] w-full rounded-[16px] border border-border-default bg-surface-card px-4 text-base font-normal text-text-primary placeholder:text-text-caption outline-none focus:border-border-brand"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-base font-medium leading-[1.5] text-text-primary">City</span>
          <div className="relative flex h-[52px] w-full items-center">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="h-full w-full appearance-none rounded-[16px] border border-border-default bg-surface-card pl-4 pr-10 text-base font-normal text-text-primary outline-none focus:border-border-brand"
            >
              <option value="Bengaluru">Bengaluru</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi NCR">Delhi NCR</option>
              <option value="Chennai">Chennai</option>
              <option value="Pune">Pune</option>
              <option value="Other">Other</option>
            </select>
            <Image
              src="/yumm-assets/chevron-down-plum.svg"
              alt=""
              width={20}
              height={20}
              className="pointer-events-none absolute right-4"
            />
          </div>
        </label>
      </div>

      {/* Field 4: Email (optional) */}
      <label className="flex w-full flex-col gap-2">
        <span className="text-base font-medium leading-[1.5] text-text-primary">
          Email (optional)
        </span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@restaurant.in"
          className="h-[52px] w-full rounded-[16px] border border-border-default bg-surface-card px-4 text-base font-normal text-text-primary placeholder:text-text-caption outline-none focus:border-border-brand"
        />
      </label>

      {/* Business type choice chips */}
      <div className="flex w-full flex-col gap-2">
        <span className="text-base font-medium leading-[1.5] text-text-primary">
          Business type
        </span>
        <div className="flex flex-wrap gap-2">
          {BUSINESS_TYPES.map((bt) => {
            const selected = businessType === bt.id;
            return (
              <button
                key={bt.id}
                type="button"
                onClick={() => setBusinessType(selected ? "" : bt.id)}
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-[16px] border-[1.5px] px-4 py-3 text-base font-medium text-text-primary transition-colors",
                  selected
                    ? "border-border-brand bg-surface-subtle"
                    : "border-border-default bg-surface-card hover:border-border-brand",
                )}
              >
                <Image src={bt.icon} alt="" width={20} height={20} />
                <span>{bt.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Consent checkbox */}
      <div className="flex w-full items-start gap-3">
        <button
          type="button"
          role="checkbox"
          aria-checked={consent}
          onClick={() => setConsent((v) => !v)}
          className={cn(
            "mt-0.5 flex h-[22px] w-[22px] shrink-0 cursor-pointer items-center justify-center rounded-[6px] border-[1.5px] border-border-brand transition-colors",
            consent ? "bg-surface-brand" : "bg-surface-card",
          )}
        >
          {consent ? (
            <Image src="/yumm-assets/icon-check-milk.svg" alt="" width={16} height={16} />
          ) : null}
        </button>
        <p className="flex-1 text-base font-normal leading-[1.5] text-text-body">
          I agree to be contacted by YUMM on WhatsApp and email about the waitlist. See our{" "}
          <Link href="/privacy" className="text-text-brand hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>

      {/* Submit / Action Button */}
      {step === "already" ? (
        <Link
          href="/"
          className="flex w-full items-center justify-center gap-3 rounded-full border-[1.5px] border-border-brand bg-surface-card px-7 py-4 text-base font-medium text-text-brand transition-colors hover:bg-surface-subtle/50"
        >
          Back to home
          <Image src="/yumm-assets/arrow-right-plum.svg" alt="" width={20} height={20} />
        </Link>
      ) : (
        <button
          type="submit"
          className={cn(
            "flex w-full cursor-pointer items-center gap-3 rounded-full px-7 py-4 text-base font-medium transition-colors",
            isFilled || step === "sending" || step === "error"
              ? "bg-surface-brand text-text-on-brand hover:opacity-95"
              : "bg-border-default text-text-caption",
          )}
        >
          <span>{step === "error" ? "Try again" : "Join the waitlist"}</span>
          {step === "sending" ? (
            <Image
              src="/yumm-assets/spinner.svg"
              alt=""
              width={18}
              height={18}
              className="animate-spin"
            />
          ) : (
            <Image
              src={
                isFilled || step === "error"
                  ? "/yumm-assets/arrow-right-milk.svg"
                  : "/yumm-assets/arrow-right-plum.svg"
              }
              alt=""
              width={20}
              height={20}
              className={!isFilled && step !== "error" ? "opacity-60" : ""}
            />
          )}
        </button>
      )}

      {/* Footer note */}
      {variant === "page" ? (
        <div className="flex w-full items-center gap-2">
          <Image src="/yumm-assets/icon-shield.svg" alt="" width={16} height={16} />
          <p className="flex-1 text-base font-normal leading-[1.5] text-text-body">
            We use these details only to contact you about the waitlist.{" "}
            <Link href="/privacy" className="hover:underline">
              Privacy policy
            </Link>
          </p>
        </div>
      ) : (
        <p className="w-full text-base font-normal leading-[1.5] text-text-body">
          We’ll ask a few optional questions about your orders after you join.
        </p>
      )}
    </form>
  );
}
