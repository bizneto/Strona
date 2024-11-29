import OfferMobile from "./offerMobile";
import OfferDesktop from "./offerDesktop";

export interface IOffer {
  Offer: {
    id: number;
    Title: string;
    Text: string;
    ButtonText: string;
    Image: {
      data: { attributes: { url: string; width: number; height: number } };
    };
  }[];
}

export default async function Offer({ Offer }: IOffer) {
  if (!Offer) return null;

  return (
    <>
      <OfferMobile Offer={Offer} />
      <OfferDesktop Offer={Offer} />
    </>
  );
}
