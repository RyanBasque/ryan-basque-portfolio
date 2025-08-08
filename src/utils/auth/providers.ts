const PROVIDER_CONFIG = {
  google: {
    role: "VIEWER",
  },
  github: {
    role: "DEVELOPER",
  },
};

export const getRoleByProvider = (
  provider: string
): "ADMIN" | "VIEWER" | "DEVELOPER" => {
  const normalizedProvider = provider.toLowerCase();

  if (normalizedProvider in PROVIDER_CONFIG) {
    return PROVIDER_CONFIG[normalizedProvider as keyof typeof PROVIDER_CONFIG]
      .role as "ADMIN" | "VIEWER" | "DEVELOPER";
  }

  throw new Error(`Unsupported provider: ${provider}`);
};

export const getSupportedProviders = (): string[] => {
  return Object.keys(PROVIDER_CONFIG);
};
