// this file will run first

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: "Codekart",
  description: "Codekart Solutions PVT LTD"
}
 
export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}