import Image from 'next/image'
import Link from 'next/link'
import notFound from "@/assets/images/svgs/not_found.svg"
 
export default function NotFound() {
  return (
    <div className='h-screen w-full flex items-center justify-center' >
       <div className='flex flex-col items-center' >
       <Image src={notFound} alt="not_found"  />
      <Link href="/" className='py-2 px-4 text-sm mx-auto rounded-md bg-primary text-white hover:bg-primary/80' >Return Home</Link>
       </div>
    </div>
  )
}