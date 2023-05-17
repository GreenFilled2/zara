import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  const url = "/products/axax"
  console.log(url)
  return (
    <Link href={url}>go</Link>
  )
}
