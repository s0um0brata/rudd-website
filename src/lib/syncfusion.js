import { registerLicense } from "@syncfusion/ej2-base";

const licenseKey = process.env.NEXT_PUBLIC_SYNCFUSION_LICENSE_KEY;

if (licenseKey) {
  registerLicense(licenseKey);
}