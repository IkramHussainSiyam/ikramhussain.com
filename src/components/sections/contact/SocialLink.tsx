import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import Button from "~/components/ui/button";

export default function SocialLink() {
  return (
    <div className="flex items-center gap-3">
      <a
        rel="noopener noreferrer"
        href="https://linkedin.com/in/ikramhussainsiyam/"
        target="_blank"
      >
        <Button size={"icon"} className="rounded-full size-10">
          <FaLinkedinIn />
        </Button>
      </a>
      <a
        rel="noopener noreferrer"
        href="https://github.com/IkramHussainSiyam/"
        target="_blank"
      >
        <Button className="rounded-full w-32 gap-2.5 [&_svg]:size-5 [&_svg]:stroke-none [&_svg]:fill-primary-foreground capitalize">
          GitHub
          <PiGithubLogoFill />
        </Button>
      </a>
      <a
        rel="noopener noreferrer"
        href="https://x.com/ikramhussain30/"
        target="_blank"
      >
        <Button size={"icon"} className="rounded-full size-10">
          <FaXTwitter />
        </Button>
      </a>
      <a
        rel="noopener noreferrer"
        href="https://facebook.com/IkramHussainSiyam/"
        target="_blank"
      >
        <Button
          size={"icon"}
          className="rounded-full size-10 [&_svg]:size-5 [&_svg]:stroke-none [&_svg]:fill-primary-foreground"
        >
          <FaFacebookF />
        </Button>
      </a>
    </div>
  );
}
