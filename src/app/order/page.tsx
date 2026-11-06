"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const DISHES_ROW_1 = [
  { name: "Pizza", img: "/yumm-assets/dish-pizza.png" },
  { name: "Biryani", img: "/yumm-assets/dish-biryani.png" },
  { name: "Dosa", img: "/yumm-assets/dish-dosa.png" },
  { name: "Burger", img: "/yumm-assets/dish-burger.png" },
  { name: "Momo", img: "/yumm-assets/dish-momo.png" },
  { name: "Thali", img: "/yumm-assets/dish-thali.png" },
  { name: "Chinese", img: "/yumm-assets/dish-chinese.png" },
] as const;

const DISHES_ROW_2 = [
  { name: "Rolls", img: "/yumm-assets/dish-rolls.png" },
  { name: "Idli", img: "/yumm-assets/dish-idli.png" },
  { name: "Noodles", img: "/yumm-assets/dish-noodles.png" },
  { name: "Paneer", img: "/yumm-assets/dish-paneer.png" },
  { name: "Shawarma", img: "/yumm-assets/dish-shawarma.png" },
  { name: "Desserts", img: "/yumm-assets/dish-desserts.png" },
  { name: "Cakes", img: "/yumm-assets/dish-cakes.png" },
] as const;

const RESTAURANTS = [
  {
    name: "Mango Leaf Kitchen",
    rating: "4.6",
    cuisine: "South Indian · Kerala",
    price: "₹800 for two",
    area: "Indiranagar",
    distance: "1.2 km",
    img: "/yumm-assets/rest-1.png",
  },
  {
    name: "Saffron Courtyard",
    rating: "4.4",
    cuisine: "North Indian · Mughlai",
    price: "₹1,400 for two",
    area: "Koramangala",
    distance: "3.4 km",
    img: "/yumm-assets/rest-2.png",
  },
  {
    name: "The Coastal Table",
    rating: "4.5",
    cuisine: "Seafood · Mangalorean",
    price: "₹1,600 for two",
    area: "Church Street",
    distance: "5.1 km",
    img: "/yumm-assets/rest-3.png",
  },
  {
    name: "Hearth and Tandoor",
    rating: "4.3",
    cuisine: "Grills · North Indian",
    price: "₹1,200 for two",
    area: "HSR Layout",
    distance: "6.0 km",
    img: "/yumm-assets/rest-4.png",
  },
] as const;

export default function OrderFoodPage() {
  const [location, setLocation] = useState("Bengaluru, Karnataka");
  const [query, setQuery] = useState("");

  return (
    <div className="bg-surface-base">
      {/* 01 Hero (94:11755) */}
      <section className="bg-surface-brand px-5 pb-16 pt-12 sm:px-8 lg:px-20 lg:pb-32 lg:pt-20">
        <div className="page-max flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="font-serif-display text-[clamp(3rem,7vw,5.5rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-on-brand">
              Order food. Book a table.
            </h1>
            <p className="text-xl font-normal leading-[1.5] text-text-on-brand-muted">
              Order from restaurants near you, or reserve a table for tonight.
            </p>
          </div>

          {/* Search row (94:11759) */}
          <div className="flex w-full max-w-[812px] flex-col gap-3 sm:flex-row">
            <div className="relative flex h-[56px] w-full items-center gap-3 rounded-[12px] bg-surface-card px-5 sm:w-[280px] sm:shrink-0">
              <Image src="/yumm-assets/icon-map-pin.svg" alt="" width={24} height={24} />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                aria-label="Location"
                className="flex-1 appearance-none bg-transparent text-base font-medium text-text-primary outline-none"
              >
                <option value="Bengaluru, Karnataka">Bengaluru, Karnataka</option>
                <option value="Hyderabad, Telangana">Hyderabad, Telangana</option>
              </select>
              <Image src="/yumm-assets/chevron-down-plum.svg" alt="" width={24} height={24} />
            </div>

            <div className="flex h-[56px] flex-1 items-center rounded-[12px] bg-surface-card px-5">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a restaurant or a dish"
                className="w-full bg-transparent text-base font-normal text-text-primary placeholder:text-text-caption outline-none"
              />
            </div>
          </div>

          {/* Service cards (94:11766) */}
          <div className="grid w-full max-w-[1120px] grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Card · Food delivery */}
            <div className="flex flex-col items-start justify-between gap-6 rounded-[32px] bg-surface-card p-6 shadow-[0px_12px_32px_0px_rgba(36,16,31,0.1)] sm:flex-row sm:items-center sm:p-10">
              <div className="flex flex-1 flex-col items-start gap-6">
                <div className="flex flex-col gap-1">
                  <p className="font-serif-display text-[48px] leading-[1.2] tracking-[-0.48px] text-text-primary">
                    Food delivery
                  </p>
                  <p className="text-xl font-normal leading-[1.5] text-text-body">
                    From restaurants near you
                  </p>
                </div>
                <div className="rounded-full bg-[#dcc7d5] px-3 py-2">
                  <p className="text-xs font-semibold text-text-brand">
                    Offers from each restaurant
                  </p>
                </div>
                <Link
                  href="#craving"
                  className="inline-flex items-center gap-2 rounded-full bg-surface-brand px-5 py-3 text-base font-medium text-text-on-brand transition-opacity hover:opacity-95"
                >
                  Order food
                  <Image src="/yumm-assets/arrow-right-milk.svg" alt="" width={18} height={18} />
                </Link>
              </div>
              <div className="relative h-[160px] w-[160px] shrink-0 overflow-hidden rounded-full sm:h-[184px] sm:w-[184px]">
                <Image
                  src="/yumm-assets/order-hero-food.png"
                  alt="Indian Thali"
                  width={184}
                  height={184}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Card · Dine in */}
            <div className="flex flex-col items-start justify-between gap-6 rounded-[32px] bg-surface-card p-6 shadow-[0px_12px_32px_0px_rgba(36,16,31,0.1)] sm:flex-row sm:items-center sm:p-10">
              <div className="flex flex-1 flex-col items-start gap-6">
                <div className="flex flex-col gap-1">
                  <p className="font-serif-display text-[48px] leading-[1.2] tracking-[-0.48px] text-text-primary">
                    Dine in
                  </p>
                  <p className="text-xl font-normal leading-[1.5] text-text-body">
                    Book a table, skip the wait
                  </p>
                </div>
                <div className="rounded-full bg-[#dcc7d5] px-3 py-2">
                  <p className="text-xs font-semibold text-text-brand">
                    Offers from each restaurant
                  </p>
                </div>
                <Link
                  href="#dine-in"
                  className="inline-flex items-center gap-2 rounded-full bg-surface-brand px-5 py-3 text-base font-medium text-text-on-brand transition-opacity hover:opacity-95"
                >
                  Book a table
                  <Image src="/yumm-assets/arrow-right-milk.svg" alt="" width={18} height={18} />
                </Link>
              </div>
              <div className="relative h-[160px] w-[160px] shrink-0 overflow-hidden rounded-full sm:h-[184px] sm:w-[184px]">
                <Image
                  src="/yumm-assets/order-hero-table.png"
                  alt="Restaurant table"
                  width={184}
                  height={184}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 Food options (94:11785) */}
      <section
        id="craving"
        className="scroll-mt-24 bg-surface-base px-5 py-16 sm:px-8 lg:px-20 lg:py-32"
      >
        <div className="page-max flex flex-col items-start gap-12">
          <div className="flex w-full items-end justify-between gap-6">
            <div className="flex flex-col items-start gap-4">
              <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-primary">
                What are you craving?
              </h2>
              <p className="text-xl font-normal leading-[1.5] text-text-body">
                Pick a dish and see who makes it best near you.
              </p>
            </div>
            <div className="hidden items-start gap-2 sm:flex">
              <button
                type="button"
                aria-label="Previous dishes"
                className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border border-surface-accent transition-colors hover:bg-surface-subtle"
              >
                <Image
                  src="/yumm-assets/arrow-right-plum.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="rotate-180"
                />
              </button>
              <button
                type="button"
                aria-label="Next dishes"
                className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border border-surface-accent transition-colors hover:bg-surface-subtle"
              >
                <Image src="/yumm-assets/arrow-right-plum.svg" alt="" width={24} height={24} />
              </button>
            </div>
          </div>

          <div className="flex w-full flex-col gap-10">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-7 lg:gap-[28px]">
              {DISHES_ROW_1.map((d) => (
                <div key={d.name} className="flex flex-col items-center gap-4">
                  <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full sm:h-[136px] sm:w-[136px]">
                    <Image
                      src={d.img}
                      alt={d.name}
                      width={136}
                      height={136}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-base font-medium leading-[1.5] text-text-primary">{d.name}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-7 lg:gap-[28px]">
              {DISHES_ROW_2.map((d) => (
                <div key={d.name} className="flex flex-col items-center gap-4">
                  <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full sm:h-[136px] sm:w-[136px]">
                    <Image
                      src={d.img}
                      alt={d.name}
                      width={136}
                      height={136}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-base font-medium leading-[1.5] text-text-primary">{d.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03 Dine in (94:11840) */}
      <section
        id="dine-in"
        className="scroll-mt-24 bg-surface-subtle px-5 py-16 sm:px-8 lg:px-20 lg:py-32"
      >
        <div className="page-max flex flex-col items-start gap-12">
          <div className="flex w-full items-end justify-between gap-6">
            <div className="flex flex-col items-start gap-4">
              <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-primary">
                Book a table near you
              </h2>
              <p className="text-xl font-normal leading-[1.5] text-text-body">
                Reserve ahead and walk straight in.
              </p>
            </div>
            <div className="hidden items-start gap-2 sm:flex">
              <button
                type="button"
                aria-label="Previous restaurants"
                className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border border-surface-accent transition-colors hover:bg-surface-base"
              >
                <Image
                  src="/yumm-assets/arrow-right-plum.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="rotate-180"
                />
              </button>
              <button
                type="button"
                aria-label="Next restaurants"
                className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border border-surface-accent transition-colors hover:bg-surface-base"
              >
                <Image src="/yumm-assets/arrow-right-plum.svg" alt="" width={24} height={24} />
              </button>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {RESTAURANTS.map((r) => (
              <div
                key={r.name}
                className="flex flex-col overflow-hidden rounded-[24px] bg-surface-card shadow-[0px_12px_32px_0px_rgba(36,16,31,0.1)]"
              >
                <div className="relative h-[176px] w-full">
                  <Image
                    src={r.img}
                    alt={r.name}
                    width={262}
                    height={176}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col items-start justify-between gap-3 px-5 pb-6 pt-5">
                  <div className="flex w-full items-center justify-between gap-2">
                    <p className="flex-1 text-xl font-semibold leading-[1.2] text-text-primary">
                      {r.name}
                    </p>
                    <div className="flex shrink-0 items-center gap-1 rounded-full bg-surface-brand px-2 py-1">
                      <Image src="/yumm-assets/icon-star-milk.svg" alt="" width={16} height={16} />
                      <span className="text-xs font-semibold text-text-on-brand">{r.rating}</span>
                    </div>
                  </div>

                  <div className="flex w-full flex-col gap-2 text-xs">
                    <div className="flex w-full items-start justify-between gap-2">
                      <span className="text-text-body">{r.cuisine}</span>
                      <span className="shrink-0 font-medium text-text-primary">{r.price}</span>
                    </div>
                    <div className="flex w-full items-start justify-between gap-2 text-text-caption">
                      <span>{r.area}</span>
                      <span className="shrink-0">{r.distance}</span>
                    </div>
                  </div>

                  <div className="rounded-full bg-[#dcc7d5] px-3 py-2">
                    <p className="text-xs font-semibold text-text-brand">Offer on pre-booking</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
