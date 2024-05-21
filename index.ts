import { Checkout } from "@imtbl/sdk/checkout";
import { Passport } from "@imtbl/sdk/passport";
import { ImmutableConfiguration, Environment } from "@imtbl/sdk/config";

const baseConfig = new ImmutableConfiguration({
  environment: Environment.SANDBOX,
});

const passportInstance = new Passport({
  baseConfig,
  clientId: "abcd",
  redirectUri: "defg",
});

new Checkout({
  baseConfig,
  passport: passportInstance,
});
