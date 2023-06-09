import Head from "next/head";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Deposit</title>
        <meta name="description" content="Generated by Deposit Pvt Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/rocket.svg" />
      </Head>
      <Layout />
    </>
  );
}
