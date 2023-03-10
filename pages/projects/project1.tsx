import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Hero from "../../components/Home/Hero";
import Axis from "../../components/Home/Axis";
import TimeLine from "../../components/Home/TimeLine";
import Projects from "../../components/Home/Projects";
import ContactUs from "../../components/Home/ContactUs";
import Header from "../../components/Projects/Header";
import Body from "../../components/Projects/Body";
export default function Home() {
  return (
    <>
      <Head>
        <title>electra-z</title>
        <meta name="description" content="Generated by electra-z" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Body />
        <div className={" leading-normal tracking-normal text-white gradient"}>
          <ContactUs />
        </div>
      </main>
    </>
  );
}
