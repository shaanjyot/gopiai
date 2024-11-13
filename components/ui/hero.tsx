// React and Next.js imports
import Link from "next/link";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
// UI component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Placeholder from "@/public/placeholder.jpg";
import IconCloudComponent from "./IconCloudComponent";

const Hero = () => {
  return (
    <Section>
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-6 py-8">
          <h3 className="!my-0">Lorem ipsum dolor sit</h3>
          <p className="font-light leading-[1.4] opacity-70">
        <Balancer>
          Next.js and Wordpress Framework for Oxygen <sup>🚀</sup>
          <a href="https://gopi.ai">gopi.ai</a>.
        </Balancer>
          </p>
          <div className="not-prose flex items-center gap-2">
            <Button className="w-fit" asChild>
              <Link href="#">Get Started</Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="#">Learn More {"->"}</Link>
            </Button>
          </div>
        </div>
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          {/* <Image
            src={Placeholder}
            alt="placeholder"
            className="fill object-cover"
          /> */}
<IconCloudComponent />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
