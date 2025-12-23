import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Header({ className }: { className?: string }) {
  return (
    <header className={cn("z-50 bg-white/50 pt-8 pb-4 md:pt-[60px] overflow-visible", className)}>
      <div className="mx-auto flex max-w-[1024px] items-end justify-between gap-4 px-6 md:px-12">
        {/* Logo Container */}
        <div className="flex flex-col gap-[6px]">
          <Link href="/" className="flex items-center" aria-label="Go to homepage">
            <Image
              src="/assets/icons/logo.svg"
              alt="Ahmed Daud"
              width={114}
              height={30}
              className="h-[24px] w-auto md:h-[30px]"
              priority
            />
          </Link>
          <p
            className={cn(
              "hidden md:block font-archivo text-[14px] font-normal uppercase leading-[1.4em] tracking-[-0.03em] text-[#363636] opacity-70"
            )}
          >
            Senior Product Designer @Neurocare.ai · USA · Remote
          </p>
        </div>

        {/* Download Resume Button - Using Button component */}
        <Button
          variant="outline"
          className={cn(
            "inline-flex items-center gap-[5px] rounded-full px-4 py-2 font-sans text-sm md:text-[18px] font-medium leading-[1.3em] tracking-[-0.02em] text-[#363636] transition-colors hover:opacity-80 bg-white/50 md:bg-transparent border-0"
          )}
          aria-label="Download resume as PDF"
        >
          <span>Download Resume</span>
          <Image
            src="/assets/icons/Download.svg"
            alt=""
            width={18}
            height={18}
            className="h-4 w-4 md:h-[18px] md:w-[18px]"
            aria-hidden="true"
          />
        </Button>
      </div>
    </header>
  );
}
