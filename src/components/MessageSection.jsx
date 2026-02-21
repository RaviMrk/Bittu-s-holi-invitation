import { ColorPowderHand } from "./HoliToys";

export default function MessageSection() {
  return (
    <section id="message" className="relative py-24 px-4 overflow-hidden">
      <ColorPowderHand className="absolute top-12 right-6 w-18 md:w-24 opacity-25 animate-float" color="#ff1493" />
    </section>
  );
}
