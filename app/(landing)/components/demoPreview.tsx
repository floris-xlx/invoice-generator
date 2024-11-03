import { PreviewDetails } from "@/app/component/form/previewDetails";

const DemoPreview = () => (
  <div className="mx-auto w-full flex justify-center items-center">
    <PreviewDetails
      companyDetails={defaultValue.companyDetails}
      invoiceDetails={defaultValue.invoiceDetails}
      invoiceTerms={defaultValue.invoiceTerms}
      paymentDetails={defaultValue.paymentDetails}
      yourDetails={defaultValue.yourDetails}
    />
  </div>
);

const defaultValue = {
  companyDetails: {
    companyName: "HDS Finance",
    companyAddress: "1600 Amphitheatre Parkway",
    companyCity: "Mountain View",
    companyState: "CA",
    companyCountry: "USA",
    companyLogo: "/android-chrome-192x192.png",
    companyTaxId: "",
    companyZip: "94043",
    email: "support@hdsfinance.nl",
  },
  yourDetails: {
    yourName: "Ettienne Grosveld",
    yourAddress: "Parisboulevard 30, 3541CX",
    yourCity: "Utrecht",
    yourState: "",
    yourCountry: "the Netherlands",
    yourLogo: "/assets/ettienne.jpg",
    yourEmail: "ettienne@hdsfinance.nl",
    yourTaxId: "",
    yourZip: "3541CX",
  },
  paymentDetails: {
    bankName: "ABN AMRO",
    accountNumber: "NL06ABNA0123456789",
    accountName: "ETTIENNE GROSVELD",
    routingCode: "123456",
    swiftCode: "ABNINBB1234",
    ifscCode: "UTIB0000000",
    currency: "EUR",
  },
  invoiceTerms: {
    invoiceNumber: "Invoice #25",
    issueDate: "Fri Oct 19 2024 00:00:00 GMT+0100 (Amsterdam Standard Time)",
    dueDate: "Mon Oct 22 2024 00:00:00 GMT+0100 (Amsterdam Standard Time)",
  },
  invoiceDetails: {
    note: "Services Period  21/03/2024 to 20/04/2024",
    discount: "22000",
    taxRate: "18",
    items: [
      {
        itemDescription: "Software Development Services",
        amount: 225000,
        qty: 0,
      },
      {
        itemDescription: "Hosting Charge",
        amount: 22000,
        qty: 0,
      },
    ],
    currency: "EUR",
  },
};
export default DemoPreview;
