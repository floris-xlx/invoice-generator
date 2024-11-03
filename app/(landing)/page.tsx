/* eslint-disable @next/next/no-img-element */
"use client";

import {
  LogIn,
  CodeXml,
  Download,
  Hourglass,
  Infinity,
  Linkedin,
  NotebookText,
  Plus,
  Receipt,
  Rocket,
  Twitter,
  Users,
  Instagram
} from "lucide-react";
import { BoltIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import DemoPreview from "./components/demoPreview";

const Home = () => {


  const signUpUrl = '/'

  const brandName = "HDS Finance";

  return (
    <div className="bg-[#f7f7f7] flex justify-center items-center overflow-x-hidden">
      <div className="border-l border-r max-w-4xl w-full mx-auto border-dashed h-full flex justify-center flex-col border-gray-300">

        <div className="justify-center items-center h-full flex flex-col my-10">
          <div className="border-t border-dashed border-gray-300 w-full mx-auto py-10 flex justify-center items-center relative">
            <Plus className="text-blue-500 group-hover:text-blue-500 w-7 h-7 absolute top-0 -translate-x-1/2 -translate-y-1/2 left-0" />
            <Image
              src="/android-chrome-512x512.png"
              width={100}
              height={100}
              className="rounded-lg"
              alt="logo"
            />
          </div>
          <div className="relative group">
            <h1 className="font-semibold text-3xl md:text-6xl text-center w-full border-t border-b py-6 border-dashed text-balance px-4 text-black border-gray-300">
              <span className="">Dominate your invoicing with </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-600">
                {brandName}
              </span>
            </h1>
          </div>
          <div className="pt-10 pb-11 flex gap-3 items-center mx-auto border-gray-300 border-b w-full justify-center border-dashed relative">
            <Plus className="text-blue-500 group-hover:text-blue-500 w-7 h-7 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
            <Link
              href="/new"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-medium disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:bg-black/90 px-6 py-2 text-lg"
            >
              <Download size={22} className='mr-2'/>

              Download Invoice
            </Link>
            <a
              target="_blank"
              href={signUpUrl}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border bg-transparent hover:bg-neutral-100 hover:text-accent-foreground px-6 py-1.5 text-lg gap-2 border-dashed border-gray-400"
            >
              <LogIn size={16} />
              Sign up
            </a>
          </div>
          <div className=" group border-b  border-dashed text-balance text-center w-full font-semibold border-gray-300 ">
            <div className="grid grid-cols-2 px-4 relative py-6 text-3xl md:text-6xl max-w-lg mx-auto">
              <div className="flex flex-col border-r border-dashed border-gray-300">
                <div className="flex justify-center items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span className="text-xs">Trusted by</span>
                </div>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-600">
                  33.49K
                </span>
                <span className="text-xs">users</span>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-center items-center gap-2">
                  <BoltIcon className="w-4 h-4" />
                  <span className="text-xs">Generated</span>
                </div>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-600">
                  400
                </span>
                <span className="text-xs">Invoices</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <DemoPreview />
        </div>
        <p className="font-medium text-xl md:text-3xl border-t border-gray-300 border-b border-dashed md:py-6 py-3 px-7 text-neutral-700 text-center">
          Here&apos;s why you&apos;ll love       {brandName}
        </p>
        <div className="grid sm:grid-cols-2 relative">
          <Plus className="text-blue-500 group-hover:text-blue-500 w-7 h-7 absolute top-0 -translate-x-1/2 -translate-y-1/2 left-0" />
          <Plus className="text-blue-500 group-hover:text-blue-500 w-7 h-7 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
          <div className="border-r border-b border-dashed p-7 border-gray-300 flex justify-center flex-col items-center">
            <p className="border flex justify-center items-center w-11 h-11 border-dashed rounded-lg text-2xl mb-5 border-gray-300 bg-gradient-to-br from-blue-100 to-blue-300">
              <Rocket />
            </p>
            <p className="font-bold text-xl">Fast & Easy</p>
            <p className="text-neutral-500 mt-1 text-center">
              Simply fill in the blanks and we will do the rest for you.
            </p>
          </div>
          <div className="border-b border-dashed flex justify-center flex-col items-center p-7 border-gray-300">
            <p className="border flex justify-center items-center w-11 h-11 border-dashed rounded-lg text-2xl mb-5 border-gray-300 bg-gradient-to-br from-blue-100 to-blue-300">
              <Infinity />
            </p>
            <p className="font-bold text-xl">Unlimited usage</p>
            <p className="text-neutral-500 mt-1 text-center">
              Create as many invoices as you need, with no limits.
            </p>
          </div>
          <div className="border-r border-b border-dashed flex justify-center flex-col items-center p-7 border-gray-300">
            <p className="border flex justify-center items-center w-11 h-11 border-dashed rounded-lg text-2xl mb-5 border-gray-300 bg-gradient-to-br from-blue-100 to-blue-300">
              <NotebookText />
            </p>
            <p className="font-bold text-xl">Beautiful Templates</p>
            <p className="text-neutral-500 mt-1 text-center">
              Choose from a variety of modern and customizable invoice
              templates.
            </p>
          </div>
          <div className="border-b border-gray-300 border-dashed flex justify-center flex-col items-center p-7">
            <p className="border flex justify-center items-center w-11 h-11 border-dashed rounded-lg text-2xl mb-5 border-gray-300 bg-gradient-to-br from-blue-100 to-blue-300">
              <Receipt />
            </p>
            <p className="font-bold text-xl">Get Paid Faster</p>
            <p className="text-neutral-500 mt-1 text-center">
              Send invoices electronically with secure payment links for faster
              client payments.
            </p>
          </div>
          <div className="border-r border-gray-300 border-b border-dashed flex justify-center flex-col items-center p-7">
            <p className="border flex justify-center items-center w-11 h-11 border-dashed rounded-lg text-2xl mb-5 border-gray-300 bg-gradient-to-br from-blue-100 to-blue-300">
              <Hourglass />
            </p>
            <p className="font-bold text-xl">Save Time & Money</p>
            <p className="text-neutral-500 mt-1 text-center">
              Ditch the spreadsheets and expensive invoicing software.
            </p>
          </div>
          <div className="border-b border-dashed p-7 border-gray-300 flex justify-center flex-col items-center">
            <p className="border flex justify-center items-center w-11 h-11 border-dashed rounded-lg text-2xl mb-5 border-gray-300 bg-gradient-to-br from-blue-100 to-blue-300">
              <CodeXml />
            </p>
            <p className="font-bold text-xl">No Developer Needed</p>
            <p className="text-neutral-500 mt-1 text-center">
              Absolutely no overhead or technical knowledge required.
            </p>
          </div>
        </div>
        <div className="px-5 py-11 flex justify-center items-center border-b border-dashed border-gray-300">
          <div className="flex justify-center rounded-2xl max-w-3xl border-dashed items-center px-4 py-10 w-full flex-col gap-4  bg-gradient-to-br from-blue-100 to-blue-300">
            <p className="md:max-w-2xl text-center font-semibold text-xl text-black p-4 md:text-3xl text-balance">
              Stop wasting time and focus on what actually matters.
            </p>
            <Link
              href="/new"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-medium disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:bg-black/90 px-6 py-2 text-lg"
            >
              Generate Today!
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center border-b border-dashed mb-20 border-gray-300 py-10 px-4 gap-4">
          <div className="border flex justify-center items-center w-10 h-10 border-dashed rounded-lg text-2xl border-gray-300">
            <a
              target="_blank"
              href="https://www.instagram.com/etiennegrosveld"
            >
              <Instagram size={22} />
            </a>
          </div>
          <div className="border flex justify-center items-center w-10 h-10 border-dashed rounded-lg text-2xl border-gray-300">
            <a target="_blank" href="https://www.instagram.com/etiennegrosveld">
              <Linkedin />
            </a>
          </div>
          <div className="border flex justify-center items-center w-10 h-10 border-dashed rounded-lg text-2xl border-gray-300">
            <a target="_blank" href="https://www.instagram.com/etiennegrosveld">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
