import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-[calc(100vh-72px)]">
      <Image
        src="/images/hero-image.png"
        alt="A group of happy teenagers and young adults in a gaming arcade, playing games on their smartphones, smiling, laughing, and enjoying their time together."
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-light text-white drop-shadow-lg">
          Sorolla | <span className="font-semibold">Just Play</span>
        </h1>
      </div>
    </div>
  );
}
