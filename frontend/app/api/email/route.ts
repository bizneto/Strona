"use server";

import { InputsData } from "@/components/contactPage/contactUs/contactForm";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const contactEmail = process.env.CONTACT_EMAIL;

interface IRequestTypes {
  dataToSend: { field: string; data: string[] }[];
  inputsData: InputsData;
}

export async function POST(request: Request) {
  const { dataToSend, inputsData }: IRequestTypes = await request.json();

  let inputsHTML = "";
  for (const [key, value] of Object.entries(inputsData)) {
    inputsHTML += `<p><strong>${key}</strong>: ${value}</p>`;
  }

  let dataHTML = "";
  for (const { field, data } of dataToSend) {
    dataHTML += `<p> <strong>${field}</strong>: ${data} </p>`;
  }

  await resend.emails.send({
    from: "email@bizneto.pl",
    to: contactEmail!,
    subject: "Formularz",
    html: `<p>Somebody submitted form at <strong>Bizneto</strong>!</p><br>${inputsHTML}<br><p>${dataHTML}</p>`,
  });

  return NextResponse.json({
    status: "ok!",
  });
}
