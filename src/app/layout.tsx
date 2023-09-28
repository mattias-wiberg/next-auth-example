import "@/app/globals.css";
import React from "react";
import { Montserrat } from "next/font/google";
import Provider from "@/app/context/client-provider";
import { getServerSession } from "next-auth/next";
import { config } from "@/auth";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const session = await getServerSession(config);

  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-primary min-h-screen min-w-screen`}
      >
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  );
}
