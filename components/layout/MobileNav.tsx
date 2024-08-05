import Link from "next/link";
import { navLinks } from "./helpers";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { SquareX } from "lucide-react";

type Props = {
  showMobileNav: boolean;
  setShowMobileNav: (val: boolean) => void;
};
export default forwardRef(function MobileNav(
  { showMobileNav, setShowMobileNav }: Props,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className={cn(
        "fixed top-0 z-50 h-full w-3/4 backdrop-blur-lg backdrop-filter duration-300 md:-right-full",
        {
          "right-0": showMobileNav,
          "-right-full": !showMobileNav,
        }
      )}
    >
      <SquareX
        className="absolute top-10 right-10 cursor-pointer hover:text-secondary duration-300"
        onClick={() => setShowMobileNav(false)}
      />
      <nav className="flex flex-col gap-4 px-10 py-20">
        {navLinks.map((menu) => (
          <Link
            className="font-semibold hover:underline"
            key={menu.id}
            href={menu.href}
            onClick={() => setShowMobileNav(false)}
          >
            {menu.name}
          </Link>
        ))}
      </nav>
    </div>
  );
});
