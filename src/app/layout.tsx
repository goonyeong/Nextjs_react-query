import { Header } from "@/app/common/header";
import { ReactQueryProvider } from "@/query/reactQueryProvider";
import StyledComponentsRegistry from "@/lib/styledComponentRegistry";
import { ILayoutProps } from "@/types/interfaceNext";

export default function RootLayout({ children }: ILayoutProps) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ReactQueryProvider>
            <Header />
            {children}
          </ReactQueryProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
