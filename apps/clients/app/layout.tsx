export const metadata = {
  title: {
    default: 'Brady',
    template: '%s - Brady',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
