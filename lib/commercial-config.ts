import "server-only";

/** Server-side currency display settings for catalog prices. */
export const commercialConfig = {
  currency: "USD",
} as const;

export function formatProgramPrice(priceUsd: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: commercialConfig.currency,
    maximumFractionDigits: 0,
  }).format(priceUsd);
}
