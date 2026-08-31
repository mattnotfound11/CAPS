import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export function SubNav() {
  return (
    <div className="sticky top-0 z-40 w-full border-y border-gray-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-6xl justify-between px-[var(--spacing-gutter)] py-4">
        {/* Left Side Content */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-gray-900">
            SPARC: Smart Parking Access and Real-Time Count
          </h2>
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-600 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <Link href="#overview" className="hover:text-[var(--color-primary)] transition-colors">
              Overview
            </Link>
            <Link href="#features" className="hover:text-[var(--color-primary)] transition-colors">
              Features
            </Link>
            <Link href="#login" className="hover:text-[var(--color-primary)] transition-colors">
              Access Portals
            </Link>
            <Link href="#how-it-works" className="hover:text-[var(--color-primary)] transition-colors">
              How it Works
            </Link>
          </nav>
        </div>

        {/* Right Side Breadcrumbs (matching Hikvision reference) */}
        <div className="hidden lg:flex items-center gap-1.5 text-xs text-gray-400 pt-1">
          <Home className="h-3.5 w-3.5" />
          <ChevronRight className="h-3 w-3" />
          <span>Systems</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-gray-600 font-medium">SPARC</span>
        </div>
      </div>
    </div>
  );
}
