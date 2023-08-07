import { Header } from "@/app/common/header";
import { ReactQueryProvider } from "@/query/reactQueryProvider";
import StyledComponentsRegistry from "@/lib/styledComponentRegistry";
import { ILayoutProps } from "@/types/interfaceNext";
import { StyledThemeProvider } from "@/lib/styledThemeProvider";

export default function RootLayout({ children }: ILayoutProps) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <StyledThemeProvider>
            <ReactQueryProvider>
              <Header />
              {children}
            </ReactQueryProvider>
          </StyledThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
