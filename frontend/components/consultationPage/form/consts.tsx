import Link from "next/link";

export const CALL_TO_ACTION_TEXT = "Wypełnij formularz";
export const PRICE = "Cena:";
export const INITIAL_PRICE = "250zł netto";
export const DISCOUNT = "0zł netto";
export const INPUTS_PLACEHOLDERS = [
  "Imię i nazwisko",
  "Adres email",
  "Nr telefonu",
  "Temat rozmowy (opcjonalnie)",
] as const;
export const PROMOTION_INPUT_PLACEHOLDER = "KOD rabatowy";
export const PROMOTION_CODE = "B12N3TO";
export const WRONG_DISCOUNT_CODE = "Podany kod nie istnieje";
export const CHECKBOX_LABEL = (
  <span className='text-[12px] leading-[16.8px] flex gap-1'>
    Akceptuję
    <Link
      target='_blank'
      href='/pdf/Regulamin.pdf'
      className='underline hover:text-[#FF1010] hover:cursor-pointer hover:underline'
    >
      Regulamin
    </Link>
    i
    <Link
      target='_blank'
      href='/pdf/PolitykaPrywatnosci.pdf'
      className='underline hover:text-[#FF1010] hover:cursor-pointer hover:underline'
    >
      Politykę Prywatności
    </Link>
  </span>
);

export const errorKeys: { [key: string]: string } = {
  "Imię i nazwisko": "name",
  "Adres email": "email",
  "Nr telefonu": "phoneNumber",
};

export const PAYMENT_NOTICE =
  "Opłata za konsultację NIE jest pobierana automatycznie.";
