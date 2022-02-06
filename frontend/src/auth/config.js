import configJson from "./auth-config.json";

export const getConfig = () => {
  const audience =
    configJson.audience && configJson.audience !== "https://psi.empinet.pl/"
      ? configJson.audience
      : null;

  return {
    domain: configJson.domain,
    clientId: configJson.clientId,
    ...(audience ? { audience } : null)
  };
}