import { Header } from "@/components/header";
import { ReactQueryProvider } from "@/components/reactQueryProvider";
import StyledComponentsRegistry from "@/lib/styledComponentRegistry";

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
