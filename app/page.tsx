import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="font-thin text-2xl opacity-100 bg-black w-full text-left flex flex-row justify-between pl-4 pr-4">
            <span className="text-white">
                &lt; crickets &gt;
            </span>
        </div>
      <div className="w-full -z-10 opacity-25">
        <Image
          src="/crickets.jpg"
          alt="Crickets in space"
          fill
          priority
        />
      </div>

        <div className="">
            <Image
                src="/spacecricket.png"
                alt="Space Cricket"
                height={100}
                width={100}
                priority
            />
        </div>
        <div className="mb-32 grid lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

            <a
                href="https://github.com/spacecricket"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    github{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-75`}>
                    check out my public repositories
                </p>
            </a>

            <a
                href="https://jatins.substack.com"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    blog{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-75`}>
                    follow my (infrequent) online musings!
                </p>
            </a>

            <a
                href="https://www.linkedin.com/in/jatinsonavane/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    linkedIn{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-75`}>
                    connect with me professionally
                </p>
            </a>

            <a
                href="https://www.strawman.fyi"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    strawman{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-75`}>
                    100 feet in the marathon to make the Next Generation propaganda-resilient
                </p>
            </a>
        </div>
    </main>
  )
}
