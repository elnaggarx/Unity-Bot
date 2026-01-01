import "@/app/globals.css";

export const metadata = {
  title: "Unity Bot",
  description: "Your AI-powered assistant for all AAST engineering matters",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
