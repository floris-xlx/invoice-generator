import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";

export const PaymentDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Payment Details</p>
    <CustomTextInput
      label="Bank name"
      placeholder="ABN AMRO"
      variableName="bankName"
    />
    <CustomTextInput
      label="Account IBAN "
      placeholder="NL06ABNA1234567890"
      variableName="accountNumber"
    />
    <CustomTextInput
      label="Account Name"
      placeholder="Floris"
      variableName="accountName"
    />
    {/* <CustomTextInput
      label="IFSC code"
      placeholder="ABN0560002"
      variableName="ifscCode"
    /> */}
    <CustomTextInput
      label="Routing number"
      placeholder="0804189592"
      variableName="routingCode"
    />
    <CustomNumberInput
      label="Swift code"
      placeholder="ABNINAA123"
      variableName="swiftCode"
    />
  </div>
);
