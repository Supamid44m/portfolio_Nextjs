import Link from "next/link"
import Layout from "/components/layout"
import Image from "next/image"
const Page = () =>{
    return(
        <Layout>
            <p className="text-3xl hover:underline">
                Welcome to  Supamid 
            </p>
            <Image src='image/avatarimage.png'  width={200} height={200} /> 
        </Layout>
    )
}

export default Page