import { Header } from "@/app/common/header";
import { ReactQueryProvider } from "@/query/reactQueryProvider";
import StyledComponentsRegistry from "@/lib/styledComponentRegistry";
import { ILayoutProps } from "@/types/interfaceNext";
import { StyledThemeProvider } from "@/lib/styledThemeProvider";
import { GlobalStyles } from "@/style/globalStyles";
import { dir } from "i18next";
import { languages } from "../i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

interface IProps extends ILayoutProps {
  params: {
    lng: string;
  };
}

export default function RootLayout({ children, params: { lng } }: IProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <StyledComponentsRegistry>
          <StyledThemeProvider>
            <ReactQueryProvider>
              <GlobalStyles />
              <Header lng={lng} />
              {children}
            </ReactQueryProvider>
          </StyledThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
