import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="font-thin text-3xl opacity-100 bg-black w-full text-left flex flex-row justify-between pl-4 pr-4">
            <span className="text-white">
                &lt;hearing crickets in space&gt;
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

        <div className="mb-32 grid lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            <a
                href="https://github.com/spacecricket"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={`mb-3 text-3xl font-semibold`}>
                    github{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-md opacity-75`}>
                    check out my public repositories
                </p>
            </a>

            <a
                href="https://jatins.substack.com"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={`mb-3 text-3xl font-semibold`}>
                    blog{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-md opacity-75`}>
                    follow my (infrequent) online musings!
                </p>
            </a>

            <a
                href="https://www.linkedin.com/in/jatinsonavane/"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={`mb-3 text-3xl font-semibold`}>
                    linkedIn{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-md opacity-75`}>
                    connect with me professionally
                </p>
            </a>

            <a
                href="https://www.strawman.fyi"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={`mb-3 text-3xl font-semibold`}>
                    strawman{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-md opacity-75`}>
                    i&apos;m trying to figure out how best to arm kids with anti-propaganda tools
                </p>
            </a>
        </div>
    </main>
  )
}
