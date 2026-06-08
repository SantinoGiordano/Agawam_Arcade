"use client";

import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#581c87_0%,#000_60%)]" />
      <div className="scanlines absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="flex flex-col items-center">
          <Image
            src="/transparentbg.png"
            alt="Brewcade Logo"
            width={500}
            height={500}
            className="w-48 sm:w-64 md:w-80 lg:w-[500px] h-auto"
          />

          <h1
            className="
          arcade-title
          text-center
          text-4xl sm:text-6xl md:text-7xl
          break-words
          [text-shadow:-2px_-2px_0_white,2px_-2px_0_white,-2px_2px_0_white,2px_2px_0_white,0_0_10px_#ff00ff,0_0_20px_#ff00ff]
        "
          >
            BREWCADE
          </h1>

          <p className="arcade-subtitle mt-4 text-center text-sm sm:text-lg px-4">
            CRAFT BEER • WINE • ARCADE GAMES • MUSIC
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
          <Image
            src="/pooltable.webp"
            alt="Pool Table"
            width={800}
            height={500}
            className="rounded-xl w-full h-auto neon-image"
          />

          <Image
            src="/otherPooltable.webp"
            alt="Pool Table"
            width={800}
            height={500}
            className="rounded-xl w-full h-auto neon-image"
          />
        </div>

        <section className="arcade-screen mt-8 sm:mt-12">
          <h2 className="section-title arcade-title text-center">
            WELCOME PLAYER ONE
          </h2>

          <div className="space-y-6 text-zinc-200 leading-7 sm:leading-8 text-base sm:text-lg text-left sm:text-justify">
            Welcome to our family-friendly establishment where fun and
            relaxation come together. Enjoy craft beer, wine, old-school arcade
            games, pool tables, shuffleboard, foosball, and darts. Arcade
            wristbands are available for unlimited gameplay and our Thursday
            Night Dart League runs every week from 7 PM – 9 PM. We don't operate
            a kitchen, but we offer light snacks and welcome outside food or
            delivery. Looking for a private event? We host birthday parties,
            family gatherings, and special events throughout the week.
          </div>
        </section>

        <section className="arcade-screen mt-8 sm:mt-10">
          <h2 className="section-title text-center">CURRENT DRAFTS</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
            {[
              "Blue Moon Belgian White",
              "Downeast Cider",
              "Sam Adams Seasonal",
              "Von Trapp Helles Lager",
              "Harpoon Blueberry",
              "Brewcade House IPA",
              "Fresh Pick IPA",
              "Fiddlehead IPA",
            ].map((beer) => (
              <div
                key={beer}
                className="draft-card text-center text-sm sm:text-base"
              >
                {beer}
              </div>
            ))}
          </div>
        </section>

        <section className="arcade-screen mt-8 sm:mt-10 mb-16 sm:mb-20">
          <h2 className="section-title text-center">CONTACT</h2>

          <div className="text-center text-white space-y-3">
            <p className="text-sm sm:text-base">
              Questions or Private Event Requests?
            </p>

            <p className="text-cyan-400 text-base sm:text-xl break-all">
              brewcade.sarnelli@gmail.com
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
