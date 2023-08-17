import { Header } from "@/app/common/header";
import { ReactQueryProvider } from "@/query/reactQueryProvider";
import StyledComponentsRegistry from "@/lib/styledComponentRegistry";
import { ILayoutProps } from "@/types/interfaceNext";
import { StyledThemeProvider } from "@/lib/styledThemeProvider";
import { GlobalStyles } from "@/style/globalStyles";

export default function RootLayout({ children }: ILayoutProps) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <StyledThemeProvider>
            <ReactQueryProvider>
              <GlobalStyles />
              <Header />
              {children}
            </ReactQueryProvider>
          </StyledThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
