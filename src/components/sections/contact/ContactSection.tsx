import Section from "~/components/common/section";
import SocialLink from "./SocialLink";

export default function ContactSection() {
  return (
    <Section id="contact" sectionTitle="Find Me">
      <div className="grid place-items-center section-padding-y text-center space-y-6">
        <h4 className="text-5xl font-display italic tracking-[0.03em]">
          Like what you see? Let's connect.
        </h4>
        <p className="text-base sm:text-lg w-full sm:w-2/3 xl:w-1/3 mx-auto">
          Actively seeking developer roles where I can learn, grow, build and
          make an impact.
        </p>
        <div className="flex items-center gap-2 mt-6">
          <SocialLink />
        </div>
      </div>
    </Section>
  );
}
