import { Providers } from "./providers";

export default async function LangLayout({ children, params }) {
  const lang = await params?.lang; // Simply access the lang parameter
  return <Providers lang={lang}>{children}</Providers>;
}
