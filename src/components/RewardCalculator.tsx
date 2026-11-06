"use client";

import { useMemo, useState } from "react";

export function RewardCalculator() {
  const [orders, setOrders] = useState(1000);
  const [aov, setAov] = useState(400);
  const [pointsPer100, setPointsPer100] = useState(5);
  const [pointValue, setPointValue] = useState(1);
  const [claimShare, setClaimShare] = useState(40);

  const stats = useMemo(() => {
    const sales = orders * aov;
    const pointsIssued = Math.round((sales / 100) * pointsPer100);
    const valueIssued = Math.round(pointsIssued * pointValue);
    const pointsClaimed = Math.round((pointsIssued * claimShare) / 100);
    const rewardCost = Math.round(pointsClaimed * pointValue);
    const perOrder = orders > 0 ? Math.round((rewardCost / orders) * 10) / 10 : 0;
    const pctSales = sales > 0 ? Math.round((rewardCost / sales) * 1000) / 10 : 0;

    return {
      pointsIssued,
      valueIssued,
      pointsClaimed,
      rewardCost,
      perOrder,
      pctSales,
    };
  }, [orders, aov, pointsPer100, pointValue, claimShare]);

  return (
    <div className="flex w-full flex-col items-start gap-6 lg:flex-row">
      {/* Left inputs card (94:10720) */}
      <div className="flex w-full flex-1 flex-col items-start gap-8 rounded-[24px] border border-border-default bg-surface-card p-6 sm:p-10">
        <p className="text-xs font-semibold uppercase leading-[1.5] text-text-caption">
          YOUR NUMBERS
        </p>

        {/* 1. Orders per month */}
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-base font-medium text-text-brand">Orders per month</span>
            <div className="rounded-[8px] border border-border-default bg-surface-base px-4 py-2">
              <span className="text-base font-semibold text-text-brand">
                {orders.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
          <input
            type="range"
            min={0}
            max={2500}
            step={50}
            value={orders}
            onChange={(e) => setOrders(Number(e.target.value))}
            aria-label="Orders per month"
            className="w-full cursor-pointer accent-surface-brand"
          />
          <div className="flex w-full justify-between text-xs text-text-caption">
            <span>0</span>
            <span>2,500</span>
          </div>
        </div>

        {/* 2. Average order value */}
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-base font-medium text-text-brand">Average order value</span>
            <div className="rounded-[8px] border border-border-default bg-surface-base px-4 py-2">
              <span className="text-base font-semibold text-text-brand">
                ₹{aov.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
          <input
            type="range"
            min={100}
            max={1000}
            step={25}
            value={aov}
            onChange={(e) => setAov(Number(e.target.value))}
            aria-label="Average order value"
            className="w-full cursor-pointer accent-surface-brand"
          />
          <div className="flex w-full justify-between text-xs text-text-caption">
            <span>₹100</span>
            <span>₹1,000</span>
          </div>
        </div>

        {/* 3. Points per ₹100 spent */}
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-base font-medium text-text-brand">Points per ₹100 spent</span>
            <div className="rounded-[8px] border border-border-default bg-surface-base px-4 py-2">
              <span className="text-base font-semibold text-text-brand">
                {pointsPer100} {pointsPer100 === 1 ? "point" : "points"}
              </span>
            </div>
          </div>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            value={pointsPer100}
            onChange={(e) => setPointsPer100(Number(e.target.value))}
            aria-label="Points per 100 spent"
            className="w-full cursor-pointer accent-surface-brand"
          />
          <div className="flex w-full justify-between text-xs text-text-caption">
            <span>1</span>
            <span>10</span>
          </div>
        </div>

        {/* 4. Value of one point */}
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-base font-medium text-text-brand">Value of one point</span>
            <div className="rounded-[8px] border border-border-default bg-surface-base px-4 py-2">
              <span className="text-base font-semibold text-text-brand">₹{pointValue}</span>
            </div>
          </div>
          <input
            type="range"
            min={0.25}
            max={4}
            step={0.25}
            value={pointValue}
            onChange={(e) => setPointValue(Number(e.target.value))}
            aria-label="Value of one point"
            className="w-full cursor-pointer accent-surface-brand"
          />
          <div className="flex w-full justify-between text-xs text-text-caption">
            <span>₹0.25</span>
            <span>₹4</span>
          </div>
        </div>

        {/* 5. Share of points claimed */}
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full items-center justify-between gap-4">
            <span className="text-base font-medium text-text-brand">Share of points claimed</span>
            <div className="rounded-[8px] border border-border-default bg-surface-base px-4 py-2">
              <span className="text-base font-semibold text-text-brand">{claimShare}%</span>
            </div>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            step={5}
            value={claimShare}
            onChange={(e) => setClaimShare(Number(e.target.value))}
            aria-label="Share of points claimed"
            className="w-full cursor-pointer accent-surface-brand"
          />
          <div className="flex w-full justify-between text-xs text-text-caption">
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>

        <p className="text-xs font-normal leading-[1.5] text-text-caption">
          Example inputs. Change any value to see your own numbers.
        </p>
      </div>

      {/* Right outputs card (94:10783) */}
      <div className="flex w-full max-w-[480px] shrink-0 flex-col items-start gap-2 rounded-[24px] bg-surface-brand p-6 sm:p-10">
        <p className="text-xs font-semibold uppercase leading-[1.5] text-text-on-brand-muted">
          EACH MONTH
        </p>

        <div className="flex w-full items-center justify-between gap-4 py-4">
          <span className="text-base font-normal text-text-on-brand-muted">Points issued</span>
          <span className="font-serif-display text-[32px] leading-[1.2] text-text-on-brand">
            {stats.pointsIssued.toLocaleString("en-IN")} points
          </span>
        </div>

        <div className="flex w-full items-center justify-between gap-4 border-t border-surface-brand-soft py-4">
          <span className="text-base font-normal text-text-on-brand-muted">
            Value of points issued
          </span>
          <span className="font-serif-display text-[32px] leading-[1.2] text-text-on-brand">
            ₹{stats.valueIssued.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="flex w-full items-center justify-between gap-4 border-t border-surface-brand-soft py-4">
          <span className="text-base font-normal text-text-on-brand-muted">
            Points likely to be claimed
          </span>
          <span className="font-serif-display text-[32px] leading-[1.2] text-text-on-brand">
            {stats.pointsClaimed.toLocaleString("en-IN")} points
          </span>
        </div>

        <div className="flex w-full flex-col items-start gap-2 rounded-[16px] bg-surface-brand-soft p-6">
          <p className="text-base font-normal leading-[1.5] text-text-on-brand-muted">
            Reward cost
          </p>
          <p className="font-serif-display text-[72px] leading-[1.2] tracking-[-0.72px] text-text-on-brand">
            ₹{stats.rewardCost.toLocaleString("en-IN")}
          </p>
          <div className="flex flex-wrap items-start gap-2 pt-1">
            <span className="rounded-full bg-surface-brand px-3 py-1 text-xs font-semibold text-text-on-brand">
              ₹{stats.perOrder} per order
            </span>
            <span className="rounded-full bg-surface-brand px-3 py-1 text-xs font-semibold text-text-on-brand">
              {stats.pctSales}% of sales
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
