export const metadata = {
  title: {
    default: 'Brady Pro',
    template: '%s - Brady Pro',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
