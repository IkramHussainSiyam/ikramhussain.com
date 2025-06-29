import Container from "~/components/common/container";
import FooterNavlinks from "./FooterNavlinks";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative">
      <Container className="grid place-items-center gap-8">
        <div className="section-padding-x mt-12 w-full select-none pointer-events-none">
          <img
            className="size-full object-cover"
            src="/assets/footer-ikram-logo.svg"
            alt="Ikram Footer Logo"
          />
        </div>
        <div className="section-padding-x py-8 flex flex-col items-center gap-6 lg:flex-row justify-between w-full">
          <FooterNavlinks />
          <p className="text-base sm:text-xl text-primary-foreground/80">
            &copy; 2025 Ikram Hussain Siyam
          </p>
        </div>
      </Container>
    </footer>
  );
}
