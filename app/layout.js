import "/styles/first.css"
export default function RootLayout({ children }) {
  useEffect(() => {
  localStorage.setItem("ver","0");
  }, []);
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
