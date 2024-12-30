import Button from "@/components/ui/Button"
import Hero from "@/components/Hero"
import Feature from "@/components/Feature"
import Pricing from "@/components/Pricing"
import Header  from "@/components/Header"
import Footer  from "@/components/Footer"
// import Testimoni from "@/components/Testimoni"

export default async function Home() {
  return (
    <>
    <Header/>
    <Hero />
    <Feature />
    {/* <Pricing /> */}
    {/* <Testimoni/> */}
    <Footer/>
    </>
  )
}
