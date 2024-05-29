import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Multi-platform availability",
    description:
      "Platform compatability a concer? Don't worry, we support most modern development engines",
    image: image4,
  },
  {
    title: "Drop in tooling for AR/VR",
    description:
      "Seamless integration with your current project's requirements, regardless of dimensionality.",
    image: image3,
  },
  {
    title: "Extensibility",
    description:
      "Have the availability to extend your assets to suit your specific use case with our extensibable libraries and assets",
    image: image,
  },
];

const featureList: string[] = [
  "Cross Platform Tooling",
  // "Reviews",
  // "Features",
  // "Pricing",
  // "Contact form",
  // "Our team",
  // "Responsive design",
  // "Newsletter",
  // "Minimalist",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Development{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          made intuitive
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
