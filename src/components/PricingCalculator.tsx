"use client";

import { useMemo, useState } from "react";

export function PricingCalculator() {
  const [orders, setOrders] = useState(1000);
  const [aov, setAov] = useState(400);
  const [commPct, setCommPct] = useState(30);
  const [movePct, setMovePct] = useState(25);

  const [editCosts, setEditCosts] = useState(false);
  const [deliveryCost, setDeliveryCost] = useState(40);
  const [gatewayPct, setGatewayPct] = useState(2);
  const [msgCost, setMsgCost] = useState(1);
  const [stickerCost, setStickerCost] = useState(2);
  const [discountPct, setDiscountPct] = useState(5);
  const [creditsMonthly, setCreditsMonthly] = useState(3000);

  const calc = useMemo(() => {
    const directOrders = Math.round((orders * movePct) / 100);
    const gatewayRs = Math.round((aov * gatewayPct) / 100);
    const discountRs = Math.round((aov * discountPct) / 100);
    const perOrderCost = deliveryCost + gatewayRs + msgCost + stickerCost + discountRs;

    const commSaved = Math.round(((aov * commPct) / 100) * directOrders);
    const directTotalCost = perOrderCost * directOrders + creditsMonthly;
    const extraKept = commSaved - directTotalCost;

    const savingsPerOrder = (aov * commPct) / 100 - perOrderCost;
    const breakevenOrders =
      savingsPerOrder > 0 ? Math.ceil(creditsMonthly / savingsPerOrder) : 0;

    return {
      directOrders,
      gatewayRs,
      discountRs,
      perOrderCost,
      commSaved,
      directTotalCost,
      extraKept,
      breakevenOrders,
    };
  }, [
    orders,
    aov,
    commPct,
    movePct,
    deliveryCost,
    gatewayPct,
    msgCost,
    stickerCost,
    discountPct,
    creditsMonthly,
  ]);

  return (
    <section
      id="calculator"
      className="scroll-mt-24 px-5 py-16 sm:px-8 lg:px-20 lg:py-32"
    >
      <div className="page-max flex flex-col items-start gap-12">
        {/* Header (94:11217) */}
        <div className="flex w-full flex-col items-start justify-between gap-6 lg:flex-row lg:items-end lg:gap-20">
          <div className="flex flex-1 flex-col items-start gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-surface-accent" aria-hidden />
                <p className="text-base font-medium text-text-brand">Calculator</p>
              </div>
              <div className="h-[3px] w-full rounded-[2px] bg-surface-brand" />
            </div>
            <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-brand">
              What changes if some orders go direct?
            </h2>
          </div>

          <p className="max-w-[440px] text-xl font-normal leading-[1.5] text-text-body">
            Set your orders and how many move direct. See what you stop paying, what direct orders cost, and what is left.
          </p>
        </div>

        {/* 2-col calculator (94:11222) */}
        <div className="flex w-full flex-col items-start gap-6 lg:flex-row">
          {/* Left inputs card (94:11223) */}
          <div className="flex w-full flex-1 flex-col items-start gap-10 rounded-[24px] border border-border-default bg-surface-card p-6 sm:p-10">
            {/* Step 1 */}
            <div className="flex w-full flex-col items-start gap-8">
              <p className="whitespace-pre-wrap text-xs font-semibold uppercase leading-[1.5] text-text-caption">
                {`1   YOUR DELIVERY ORDERS TODAY`}
              </p>

              {/* Delivery orders per month */}
              <div className="flex w-full flex-col gap-4">
                <div className="flex w-full items-center justify-between gap-4">
                  <span className="text-base font-medium text-text-brand">
                    Delivery orders per month
                  </span>
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
                  aria-label="Delivery orders per month"
                  className="w-full cursor-pointer accent-surface-brand"
                />
                <div className="flex w-full justify-between text-xs text-text-caption">
                  <span>0</span>
                  <span>2,500</span>
                </div>
              </div>

              {/* Average order value */}
              <div className="flex w-full flex-col gap-4">
                <div className="flex w-full items-center justify-between gap-4">
                  <span className="text-base font-medium text-text-brand">
                    Average order value
                  </span>
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

              {/* Aggregator commission */}
              <div className="flex w-full flex-col gap-4">
                <div className="flex w-full items-center justify-between gap-4">
                  <span className="text-base font-medium text-text-brand">
                    Aggregator commission
                  </span>
                  <div className="rounded-[8px] border border-border-default bg-surface-base px-4 py-2">
                    <span className="text-base font-semibold text-text-brand">{commPct}%</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={15}
                  max={40}
                  step={1}
                  value={commPct}
                  onChange={(e) => setCommPct(Number(e.target.value))}
                  aria-label="Aggregator commission"
                  className="w-full cursor-pointer accent-surface-brand"
                />
                <div className="flex w-full justify-between text-xs text-text-caption">
                  <span>15%</span>
                  <span>40%</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex w-full flex-col items-start gap-8">
              <p className="whitespace-pre-wrap text-xs font-semibold uppercase leading-[1.5] text-text-caption">
                {`2   HOW MANY MOVE DIRECT`}
              </p>

              <div className="flex w-full flex-col gap-4">
                <div className="flex w-full items-center justify-between gap-4">
                  <span className="text-base font-medium text-text-brand">
                    Orders you move to WhatsApp
                  </span>
                  <div className="rounded-[8px] border border-border-default bg-surface-base px-4 py-2">
                    <span className="text-base font-semibold text-text-brand">{movePct}%</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={5}
                  value={movePct}
                  onChange={(e) => setMovePct(Number(e.target.value))}
                  aria-label="Orders you move to WhatsApp"
                  className="w-full cursor-pointer accent-surface-brand"
                />
                <div className="flex w-full justify-between text-xs text-text-caption">
                  <span>0%</span>
                  <span>100%</span>
                </div>
                <p className="text-base font-normal text-text-brand">
                  That is {calc.directOrders.toLocaleString("en-IN")} of your{" "}
                  {orders.toLocaleString("en-IN")} orders a month.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex w-full flex-col items-start gap-4">
              <p className="whitespace-pre-wrap text-xs font-semibold uppercase leading-[1.5] text-text-caption">
                {`3   WHAT A DIRECT ORDER COSTS YOU`}
              </p>

              <div className="flex w-full flex-col gap-3 rounded-[8px] border border-border-default bg-surface-base p-5">
                <div className="flex w-full items-center justify-between gap-4 text-base font-semibold text-text-brand">
                  <p>
                    ₹{calc.perOrderCost} per order + ₹{creditsMonthly.toLocaleString("en-IN")} a month
                  </p>
                  <button
                    type="button"
                    onClick={() => setEditCosts((v) => !v)}
                    className="cursor-pointer hover:underline"
                  >
                    {editCosts ? "Done" : "Edit costs"}
                  </button>
                </div>
                <p className="text-xs font-normal leading-[1.5] text-text-caption">
                  {`Delivery ₹${deliveryCost}  ·  Payment gateway ${gatewayPct}% (₹${calc.gatewayRs})  ·  WhatsApp message ₹${msgCost}  ·  Sticker ₹${stickerCost}  ·  Discount you fund ${discountPct}% (₹${calc.discountRs})  ·  Campaign credits ₹${creditsMonthly.toLocaleString("en-IN")} a month`}
                </p>

                {editCosts ? (
                  <div className="mt-3 grid w-full grid-cols-1 gap-4 border-t border-border-default pt-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-1 text-xs font-medium text-text-brand">
                      <span>Delivery (₹ per order)</span>
                      <input
                        type="number"
                        min={0}
                        max={200}
                        value={deliveryCost}
                        onChange={(e) => setDeliveryCost(Number(e.target.value) || 0)}
                        className="h-9 rounded-[8px] border border-border-default bg-surface-card px-3 text-sm text-text-primary"
                      />
                    </label>
                    <label className="flex flex-col gap-1 text-xs font-medium text-text-brand">
                      <span>Payment gateway (%)</span>
                      <input
                        type="number"
                        min={0}
                        max={10}
                        step={0.5}
                        value={gatewayPct}
                        onChange={(e) => setGatewayPct(Number(e.target.value) || 0)}
                        className="h-9 rounded-[8px] border border-border-default bg-surface-card px-3 text-sm text-text-primary"
                      />
                    </label>
                    <label className="flex flex-col gap-1 text-xs font-medium text-text-brand">
                      <span>WhatsApp message (₹)</span>
                      <input
                        type="number"
                        min={0}
                        max={20}
                        step={0.5}
                        value={msgCost}
                        onChange={(e) => setMsgCost(Number(e.target.value) || 0)}
                        className="h-9 rounded-[8px] border border-border-default bg-surface-card px-3 text-sm text-text-primary"
                      />
                    </label>
                    <label className="flex flex-col gap-1 text-xs font-medium text-text-brand">
                      <span>Sticker (₹)</span>
                      <input
                        type="number"
                        min={0}
                        max={20}
                        step={0.5}
                        value={stickerCost}
                        onChange={(e) => setStickerCost(Number(e.target.value) || 0)}
                        className="h-9 rounded-[8px] border border-border-default bg-surface-card px-3 text-sm text-text-primary"
                      />
                    </label>
                    <label className="flex flex-col gap-1 text-xs font-medium text-text-brand">
                      <span>Discount you fund (%)</span>
                      <input
                        type="number"
                        min={0}
                        max={30}
                        step={1}
                        value={discountPct}
                        onChange={(e) => setDiscountPct(Number(e.target.value) || 0)}
                        className="h-9 rounded-[8px] border border-border-default bg-surface-card px-3 text-sm text-text-primary"
                      />
                    </label>
                    <label className="flex flex-col gap-1 text-xs font-medium text-text-brand">
                      <span>Campaign credits (₹ / month)</span>
                      <input
                        type="number"
                        min={0}
                        max={50000}
                        step={500}
                        value={creditsMonthly}
                        onChange={(e) => setCreditsMonthly(Number(e.target.value) || 0)}
                        className="h-9 rounded-[8px] border border-border-default bg-surface-card px-3 text-sm text-text-primary"
                      />
                    </label>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {/* Right outputs card (94:11284) — sticky on desktop */}
          <div className="flex w-full max-w-[480px] shrink-0 flex-col items-start gap-2 rounded-[24px] bg-surface-brand p-6 sm:p-10 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase leading-[1.5] text-text-on-brand-muted">
              EACH MONTH, WITH {calc.directOrders.toLocaleString("en-IN")} ORDERS DIRECT
            </p>

            <div className="flex w-full items-center justify-between gap-4 py-4">
              <div className="flex flex-col gap-1 text-text-on-brand-muted">
                <p className="text-base font-normal">Commission you stop paying</p>
                <p className="text-xs font-normal">
                  {commPct}% of ₹{aov.toLocaleString("en-IN")}, on{" "}
                  {calc.directOrders.toLocaleString("en-IN")} orders
                </p>
              </div>
              <p className="font-serif-display text-[32px] leading-[1.2] text-text-on-brand">
                +₹{calc.commSaved.toLocaleString("en-IN")}
              </p>
            </div>

            <div className="flex w-full items-center justify-between gap-4 border-t border-surface-brand-soft py-4">
              <div className="flex flex-col gap-1 text-text-on-brand-muted">
                <p className="text-base font-normal">What those orders cost direct</p>
                <p className="text-xs font-normal">
                  ₹{calc.perOrderCost} × {calc.directOrders.toLocaleString("en-IN")} orders + ₹
                  {creditsMonthly.toLocaleString("en-IN")} credits
                </p>
              </div>
              <p className="font-serif-display text-[32px] leading-[1.2] text-text-on-brand">
                −₹{calc.directTotalCost.toLocaleString("en-IN")}
              </p>
            </div>

            <div className="flex w-full flex-col items-start gap-1 rounded-[16px] bg-surface-brand-soft p-6">
              <p className="text-base font-normal text-text-on-brand-muted">
                Extra you keep each month
              </p>
              <p className="font-serif-display text-[72px] leading-[1.2] tracking-[-0.72px] text-text-on-brand">
                {calc.extraKept >= 0
                  ? `+₹${calc.extraKept.toLocaleString("en-IN")}`
                  : `−₹${Math.abs(calc.extraKept).toLocaleString("en-IN")}`}
              </p>
              {calc.breakevenOrders > 0 ? (
                <p className="text-base font-semibold text-text-on-brand">
                  Worth it from {calc.breakevenOrders} direct orders a month
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <p className="text-base font-normal leading-[1.5] text-text-body">
          Example inputs. Replace message, gateway and delivery rates with your confirmed ones. The difference is not profit: food, packaging and staff costs are not included.
        </p>
      </div>
    </section>
  );
}
