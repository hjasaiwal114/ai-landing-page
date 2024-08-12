import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";

export const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative "
          style={{
            backgroundImage: `url(${starsBg.src})`,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,139)]"
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></div>
          <h2 className="text-5xl tracking-tighter text-center font-medium">
            AI-driven SEO for everyone
          </h2>
          <p className="text-center text-lg text-white/70 px-4 mt-5 tracking-tight">
            Achieve clear, impactfull results with the complexity.
          </p>
          <div className="flex justify-center mt-8">
            <Button>Join waitlist</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
