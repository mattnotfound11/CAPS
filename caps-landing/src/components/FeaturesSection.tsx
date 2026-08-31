import Image from "next/image";

const features = [
  {
    id: "rfid-verification",
    title: "RFID & QR Verification",
    description: "Campus ID tap or QR scan → instant gate decision",
    image: "/images/feature-rfid.png",
    imageAlt: "Illustration of RFID card and reader",
    imagePosition: "left",
  },
  {
    id: "access-recording",
    title: "Access Recording",
    description: "Every entry and exit logged in real time",
    image: "/images/feature-access-log.png",
    imageAlt: "Illustration of access log list",
    imagePosition: "right",
  },
  {
    id: "slot-monitoring",
    title: "Slot Monitoring",
    description: "Per-slot ultrasonic sensors for live, accurate counting",
    image: "/images/feature-slot-monitoring.png",
    imageAlt: "Illustration of slot monitoring gauge",
    imagePosition: "left",
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative mx-auto w-full max-w-6xl px-[var(--spacing-gutter)] pb-24 pt-16 lg:pt-24 overflow-hidden">
      <div className="flex flex-col gap-32">
        {features.map((feature, idx) => (
          <div 
            key={feature.id} 
            className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
              feature.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Visual Side */}
            <div className="w-full lg:w-1/3 relative group">
              <div className="relative overflow-hidden rounded-xl border border-gray-200 shadow-[var(--shadow-card)] aspect-square flex items-center justify-center transition-all duration-[var(--motion-duration-base)] group-hover:shadow-[var(--shadow-card-hover)]">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Subtle mesh background for widget */}
              <div className={`absolute -bottom-6 ${feature.imagePosition === 'left' ? '-left-6' : '-right-6'} h-24 w-24 rounded-full bg-[var(--color-secondary)]/10 blur-[20px] -z-10`} />
              <div className={`absolute -top-6 ${feature.imagePosition === 'left' ? '-right-6' : '-left-6'} h-24 w-24 rounded-full bg-[var(--color-primary)]/5 blur-[20px] -z-10`} />
            </div>

            {/* Text Side */}
            <div className="flex-1 w-full space-y-2">
              <h4 className="text-xl font-bold tracking-tight text-[var(--color-foreground)]">
                {feature.title}
              </h4>
              <p className="text-base text-[var(--color-muted-foreground)]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
