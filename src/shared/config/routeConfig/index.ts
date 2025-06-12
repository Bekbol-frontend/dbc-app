enum AppRoutes {
  HOME = "HOME",
  ABOUT = "ABOUT",
  SERVICES = "SERVICES",
  CASES = "CASES",
  CONTACTS = "CONTACTS",
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.SERVICES]: "/services",
  [AppRoutes.CASES]: "/cases",
  [AppRoutes.CONTACTS]: "/contacts",
};
