import React from "react";

export function OverviewSection() {
  return (
    <section id="overview" className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-[var(--spacing-gutter)]">
        <h2 className="mb-8 text-3xl font-extrabold text-[var(--color-foreground)] md:text-4xl lg:text-[2.5rem] leading-tight tracking-tight">
          Elevate Campus Parking and Streamline Access Management
        </h2>
        <p className="text-base leading-relaxed text-[var(--color-muted-foreground)] md:text-lg max-w-5xl">
          With the rapid growth of vehicle ownership, managing campus parking and vehicle flow has become a persistent operational challenge. At the University of San Agustin, SPARC tackles this by offering an integrated, IoT-based smart parking solution that combines per-slot occupancy sensors with automated RFID and QR-code vehicle identification. Our aim is to significantly reduce the time spent searching for parking, decrease vehicular congestion at campus entrances, and improve overall security through automated, real-time access control.
        </p>
      </div>
    </section>
  );
}
