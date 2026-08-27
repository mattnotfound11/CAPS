import Image from "next/image";

const features = [
  {
    id: "rfid-verification",
    title: "RFID-Based Verification",
    description: "Campus ID tap → instant gate decision",
    image: "/images/rfid-verification.png",
    imageAlt: "Illustration of RFID card and reader",
    imagePosition: "left",
  },
  {
    id: "access-recording",
    title: "Access Recording",
    description: "Every entry and exit logged in real time",
    image: "/images/access-recording.png",
    imageAlt: "Illustration of access log list",
    imagePosition: "right",
  },
  {
    id: "slot-monitoring",
    title: "Slot Monitoring",
    description: "Live available-space count, always accurate",
    image: "/images/slot-monitoring.png",
    imageAlt: "Illustration of slot monitoring gauge",
    imagePosition: "left",
  }
];

export function FeaturesSection() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-[var(--spacing-gutter)] py-24 overflow-hidden">
      <div className="flex flex-col gap-32">
        {features.map((feature, idx) => (
          <div 
            key={feature.id} 
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
              feature.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Visual Side */}
            <div className="flex-1 w-full relative group">
              <div className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-gray-100 bg-white/80 backdrop-blur-xl p-8 shadow-[var(--shadow-card)] aspect-[4/3] flex items-center justify-center transition-all duration-[var(--motion-duration-base)] group-hover:shadow-[var(--shadow-card-hover)]">
                {/* Subtle dot grid */}
                <div 
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}
                />
                
                <div className="relative w-full h-full flex items-center justify-center p-6">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    width={500}
                    height={375}
                    className="object-contain drop-shadow-sm transition-transform duration-[var(--motion-duration-base)] group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              
              {/* Subtle mesh background for widget */}
              <div className={`absolute -bottom-10 ${feature.imagePosition === 'left' ? '-left-10' : '-right-10'} h-32 w-32 rounded-full bg-[var(--color-secondary)]/10 blur-[30px] -z-10`} />
              <div className={`absolute -top-10 ${feature.imagePosition === 'left' ? '-right-10' : '-left-10'} h-32 w-32 rounded-full bg-[var(--color-primary)]/5 blur-[30px] -z-10`} />
            </div>

            {/* Text Side */}
            <div className="flex-1 w-full space-y-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-foreground)] sm:text-4xl lg:text-5xl">
                {feature.title}
              </h2>
              <p className="text-xl leading-relaxed text-[var(--color-muted-foreground)]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
