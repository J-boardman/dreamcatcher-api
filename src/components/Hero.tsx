import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero text-white mirror">
      <div className="hero-content text-center p-0">
        <div className="max-w-md">
          <p className="font-semibold text-4xl">
            Unlock the <span className="text-purple-400">Hidden Meanings</span> of Your Dreams!
          </p>
          <p className="py-6 font-medium text-xl">
          </p>
            {/* Welcome to our dream interpretation and storytelling service, where the mysterious realm of dreams comes alive! */}
            Relax as our AI dream interpreter and bedtime storyteller provides
            captivating insights and imaginative tales based on your dreams!
          <Link
            href="/sign-in"
            className="btn btn-secondary w-full my-6 text-xl font-bold"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
