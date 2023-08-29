import { Header } from "@/app/common/header";
import { ReactQueryProvider } from "@/query/reactQueryProvider";
import StyledComponentsRegistry from "@/lib/styledComponentRegistry";
import { ILayoutProps } from "@/types/interfaceNext";
import { StyledThemeProvider } from "@/lib/styledThemeProvider";
import { GlobalStyles } from "@/style/globalStyles";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import { InitStore } from "@/lib/initStore";
import { TLng } from "@/types/constants";
import { Suspense } from "react";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

interface IProps extends ILayoutProps {
  params: {
    lng: TLng;
  };
}

export default function RootLayout({ children, params: { lng } }: IProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <StyledComponentsRegistry>
          <InitStore lng={lng}>
            <StyledThemeProvider>
              <ReactQueryProvider>
                <GlobalStyles />
                <Header />
                {children}
              </ReactQueryProvider>
            </StyledThemeProvider>
          </InitStore>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
