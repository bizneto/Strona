import brandingIcon from "@/public/svgs/mobileMenuIconBranding.svg";
import brandingIconBlue from "@/public/svgs/mobileMenuIconBrandingBlue.svg";
import webDesignIcon from "@/public/svgs/mobileMenuIconWebDesign.svg";
import webDesignIconBlue from "@/public/svgs/mobileMenuIconWebDesignBlue.svg";
import chatbotsIcon from "@/public/svgs/mobileMenuIconChatbots.svg";
import chatbotsIconBlue from "@/public/svgs/mobileMenuIconChatbotsBlue.svg";
import graphicDesignIcon from "@/public/svgs/mobileMenuIconGraphicDesign.svg";
import graphicDesignIconBlue from "@/public/svgs/mobileMenuIconGraphicDesignBlue.svg";
import { StaticImageData } from "next/image";

export interface ISubPageData {
  [key: string]: {
    title: string;
    icon: StaticImageData;
    iconBlue: StaticImageData;
    subtext: string;
  }[];
}

export const DigitalSubPageData: ISubPageData = {
  Oferta: [
    {
      icon: brandingIcon,
      iconBlue: brandingIconBlue,
      title: "Branding",
      subtext:
        "Dobry branding to gwarancja, że klienci nie pomylą Twojej firmy z konkurencją.",
    },
    {
      icon: webDesignIcon,
      iconBlue: webDesignIconBlue,
      title: "Web Design",
      subtext:
        "Projektujemy materiały promocyjne i reklamowe, które generują sprzedaż.",
    },
    {
      icon: chatbotsIcon,
      iconBlue: chatbotsIconBlue,
      title: "Chatboty AI",
      subtext:
        "Zwiększ sprzedaż na swojej stronie internetowej lub uruchom asystenta klienta.",
    },
    {
      icon: graphicDesignIcon,
      iconBlue: graphicDesignIconBlue,
      title: "Graphic Design",
      subtext:
        "Projektujemy materiały promocyjne i reklamowe, które generują sprzedaż.",
    },
  ],
};
