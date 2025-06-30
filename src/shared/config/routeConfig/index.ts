enum AppRoutes {
  HOME = "HOME",
  ABOUT = "ABOUT",
  SERVICES = "SERVICES",
  CASES = "CASES",
  CONTACTS = "CONTACTS",

  // last
  NOT_FOUND = "NOT_FOUND",
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.SERVICES]: "/services",
  [AppRoutes.CASES]: "/cases",
  [AppRoutes.CONTACTS]: "/contacts",

  // last
  [AppRoutes.NOT_FOUND]: "*",
};
