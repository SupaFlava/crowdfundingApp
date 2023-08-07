import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./components/molecules/Navbar/Navbar";
import ProjectCard from "./components/molecules/ProjectCard/PojectCard";
import ProjectInfoCard from "./components/molecules/ProjectInfoCard/ProjectInfoCard";
import CardHolder from "./components/atoms/CardHolder/CardHolder";
import AboutSection from "./components/organisms/AboutSection/AboutSection";
import { useState } from "react";
import DialogModal from "./components/molecules/DialogModal/DialogModal";
import { prisma } from "../prisma/client";
import { useSession, signIn, signOut } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ projects }: ProjectsResponse) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>

      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
      <CardHolder>
        <ProjectCard projects={projects} />
        <ProjectInfoCard />
        <AboutSection projects={projects} />
      </CardHolder>
    </>
  );
}

export async function getStaticProps() {
  const projects = await prisma.project.findMany({
    include: {
      editions: true,
    },
  });

  return {
    props: {
      projects,
    },
  };
}
