'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  function handle() {
    router.push('products')
  }
  function handle2() {
    router.push('profile')
  }


  return (
    <>
      <div className="  flex gap-5 justify-center items-center p-7 w-full bg-blue-950  ">
        <Link href={'/'}>Home</Link>
        <Link href={'profile'}>Profile</Link>
        <Link href={'account/kuchbhilikhlo'}>Account</Link>
        <Link href={'products'}>Products</Link>  {/* usePathname useSearchParams (this is use inside client side, by this we can get data from url) */}
        <Link href={'java'}>Course</Link>
        <Link href={'blog/34/34/34/34/34'}>Blog</Link>
        <Link href={'login'}>Login</Link>
        <Link href={'signup'}>SignUP</Link>
        {/* we can also do by this */}
        <Link href='signup'>SignUP</Link>

        {/* other way to navigation */}
        <button onClick={handle}>Other-way-navigation</button>
        <button onClick={handle2}>anOther-way-navigation</button>
        {/* another way to navigation */}
        <button onClick={()=> router.push('products')}>MoreOther-way-navigation</button>
        <button onClick={()=> router.push('pay')}>Pay</button>
      </div>
    
    </>
  );
}