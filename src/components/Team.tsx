import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  // CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://media.licdn.com/dms/image/D5603AQFE8czU0Xe04w/profile-displayphoto-shrink_800_800/0/1699230785292?e=1722470400&v=beta&t=5XoXQAXgjigUbWpM73PugFK3fd_ZzevZxXAKwuiXaNQ",
    name: "Banyar Shin",
    position: "Co-Founder - User Interaction",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/banyar-shin/" },
    ],
  },
  {
    imageUrl: "https://media.licdn.com/dms/image/D5603AQHGijf1HW2B-A/profile-displayphoto-shrink_200_200/0/1695533277160?e=1722470400&v=beta&t=y-SddXSRVXzzQJpRqODlD3tPtEgzuDmgjyo4wBrGfC4",
    name: "Hunter Melton",
    position: "Co-Founder - Infrastructure",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/hunterlmelton/" },
    ],
  },
  {
    imageUrl: "https://media.licdn.com/dms/image/D5603AQGTTlLcMVwnUw/profile-displayphoto-shrink_800_800/0/1713330861071?e=1722470400&v=beta&t=LNqpMFeuZzsKSRYVyhvImkmm-LL8hf5Q5Ea_CAz0EqU",
    name: "Vinh Pham",
    position: "Co-Founder - Data Visualization",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/vinh-x-pham/" },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Dedicated{" "}
        </span>
        Team
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        From Hackathons to freelancing, our team has worked on several 
        projects spanning from deploying serverless applications in the cloud, to 
        developing pixel perfect frontends.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              {/* <CardContent className="text-center pb-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </CardContent> */}

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
