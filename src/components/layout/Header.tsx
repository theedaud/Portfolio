import Image from "next/image";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="z-50 bg-white/50 pt-[60px]">
      <div className="mx-auto flex max-w-[1024px] items-end justify-between gap-2 px-6 md:px-12">
        {/* Logo Container */}
        <div className="flex flex-col gap-[6px]">
          <a href="#home" className="flex items-center">
            <Image
              src="/assets/logo.svg"
              alt="Ahmed Daud"
              width={114}
              height={30}
              className="h-auto w-auto"
              priority
            />
          </a>
          <p
            className={cn(
              "font-archivo text-[14px] font-normal uppercase leading-[1.4em] tracking-[-0.03em] text-[#363636] opacity-70"
            )}
          >
            Senior Product Designer @Neurocare.ai · USA · Remote
          </p>
        </div>

        {/* Download Resume Button */}
        <button
          className={cn(
            "inline-flex items-center gap-[5px] rounded-full px-4 py-2 font-sans text-[18px] font-medium leading-[1.3em] tracking-[-0.02em] text-[#363636] transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950"
          )}
        >
          <span>Download Resume</span>
          <Image
            src="/assets/Download.svg"
            alt="Download"
            width={18}
            height={18}
            className="h-[18px] w-[18px]"
          />
        </button>
      </div>
    </header>
  );
}

