"use server";

import { Resend } from "resend";
import { z } from "zod";
import { ERROR_MESSAGE } from "@/components/digitalContactPage/contactForm/helper";
import { revalidatePath } from "next/cache";

const envSchema = z.object({
  RESEND_API_KEY: z.string(),
  CONTACT_EMAIL: z.string(),
});

const envVars = envSchema.safeParse(process.env);
if (!envVars.success) {
  throw new Error(
    `Environmental variables validation error: ${envVars.error.message}`
  );
}

const contactSchema = z.object({
  name: z
    .string({
      message: ERROR_MESSAGE,
    })
    .trim()
    .min(1, {
      message: ERROR_MESSAGE,
    })
    .max(40),
  email: z
    .string({
      message: ERROR_MESSAGE,
    })
    .email()
    .min(1, {
      message: ERROR_MESSAGE,
    }),
  companyName: z.string().optional(),
  phoneNumber: z.string().optional(),
  message: z.string().optional(),
  agreement: z.string(),
  "clickableOption-services": z.array(z.string()).min(1),
  "clickableOption-budget": z.array(z.string()).min(1),
});

const resend = new Resend(process.env.RESEND_API_KEY);
const contactEmail = process.env.CONTACT_EMAIL;

export async function sendEmail(prevState: any, formData: FormData) {
  const data = {
    name: formData.get("ImiÄ\x99 i nazwisko*"),
    email: formData.get("Adres email*"),
    companyName: formData.get("Nazwa firmy"),
    phoneNumber: formData.get("Nr telefonu"),
    message: formData.get("Opisz jak moÅ¼emy ci pomÃ³c..."),
    agreement: formData.get("agreement"),
    "clickableOption-services": formData.getAll("clickableOption-services"),
    "clickableOption-budget": formData.getAll("clickableOption-budget"),
  };

  const result = contactSchema.safeParse(data);
  if (!result.success) {
    return { message: result.error.issues };
  }

  let dataHTML = "";
  for (const [key, value] of Object.entries(result.data)) {
    dataHTML += `<p> <strong>${key}</strong>: ${value} </p>`;
  }

  await resend.emails.send({
    from: "email@bizneto.pl",
    to: contactEmail!,
    subject: "Formularz",
    html: `<p>Somebody submitted form at <strong>Bizneto</strong>!</p><br><br><div> ${dataHTML} </div>`,
  });

  revalidatePath("/digital/kontakt");
  return { message: "Email send!" };
}
