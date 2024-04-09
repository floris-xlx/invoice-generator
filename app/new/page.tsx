import { Suspense } from "react";
import PreviewDetails from "./components/previewDetails";
import Steps from "./components/steps";
import { InvoiceInputSteps } from "./components/invoiceInputSteps";

const Page = () => {
  return (
    <div className="min-h-screen overflow-y-auto h-full flex items-center">
      <div className="max-w-lg min-h-screen w-full h-full p-12 border-r flex flex-col justify-between">
        <div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 bg-orange-500 rounded-lg" />
            <div>
              <p className="font-semibold">Invoice Generator</p>
              <p className="text-gray-500 text-sm">By Prolab</p>
            </div>
          </div>
          <Suspense>
            <InvoiceInputSteps />
          </Suspense>
        </div>
        <Suspense>
          <Steps />
        </Suspense>
      </div>
      <div className="relative min-h-screen h-full w-full flex justify-center items-center">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <Suspense>
          <PreviewDetails />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;