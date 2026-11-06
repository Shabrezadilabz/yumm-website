import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  variant: "plum" | "milk";
  size?: "desktop" | "mobile";
  className?: string;
  href?: string | null;
};

/**
 * YUMM wordmark — Figma alpha mask; fill colour comes from the background layer.
 */
export function YummLogo({ variant, size = "desktop", className, href = "/" }: Props) {
  const maskSrc =
    variant === "plum" ? "/yumm-assets/logo-wordmark-plum.png" : "/yumm-assets/logo-wordmark-milk.png";
  const bg =
    variant === "plum" ? "bg-[var(--color-surface-brand)]" : "bg-[var(--color-colour-milk-50)]";

  const dims = size === "mobile" ? "h-[29.691px] w-[71.753px]" : "h-12 w-[116px]";
  const maskSize = size === "mobile" ? "71.753px 29.69px" : "116px 48px";

  const mark = (
    <div
      className={cn("relative shrink-0 overflow-hidden", dims, bg, className)}
      style={{
        maskImage: `url('${maskSrc}')`,
        WebkitMaskImage: `url('${maskSrc}')`,
        maskSize,
        WebkitMaskSize: maskSize,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
      aria-hidden={href ? undefined : true}
    />
  );

  if (href === null) {
    return mark;
  }

  return (
    <Link href={href} className="inline-flex shrink-0" aria-label="YUMM home">
      {mark}
    </Link>
  );
}
