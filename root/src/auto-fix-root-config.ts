import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@auto-fix/login",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@auto-fix/login"
    ),
  activeWhen: location => location.pathname === '/',
});

registerApplication({
  name: "@auto-fix/navbar",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@auto-fix/navbar"
    ),
  activeWhen: ["/dashboard"],
});

registerApplication({
  name: "@auto-fix/dashboard",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@auto-fix/dashboard"
    ),
  activeWhen: ["/dashboard"],
});

start({
  urlRerouteOnly: true,
});
