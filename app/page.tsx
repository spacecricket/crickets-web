import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full">
        <Image
          src="/crickets.jpg"
          alt="Crickets in space"
          fill
          priority
        />
      </div>
    </main>
  )
}
