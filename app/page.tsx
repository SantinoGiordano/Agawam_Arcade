"use client";

import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#581c87_0%,#000_60%)]" />

      <div className="scanlines absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col items-center">
          <Image
            src="/logo.jpg"
            alt="Brewcade Logo"
            width={500}
            height={250}
            className="rounded-xl neon-image"
          />

          <h1
            className="
    arcade-title
    mt-8
    text-center
    [text-shadow:-2px_-2px_0_white,2px_-2px_0_white,-2px_2px_0_white,2px_2px_0_white,0_0_10px_#ff00ff,0_0_20px_#ff00ff]
  "
          >
            BREWCADE
          </h1>
          <p className="arcade-subtitle mt-4 text-center">
            CRAFT BEER • WINE • ARCADE GAMES • MUSIC
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
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
        <section className="arcade-screen mt-12">
          <h2
            className="
          section-title
          arcade-title
          "
          >
            WELCOME PLAYER ONE
          </h2>

          <div className="space-y-6 text-zinc-200 leading-8 text-lg">
            <p>
              Welcome to our family-friendly establishment where fun and
              relaxation come together.
            </p>

            <p>
              Enjoy craft beer, wine, old-school arcade games, pool tables,
              shuffleboard, foosball, and darts.
            </p>

            <p>
              Arcade wristbands are available for unlimited gameplay and our
              Thursday Night Dart League runs every week from 7 PM – 9 PM.
            </p>

            <p>
              We don&apos;t operate a kitchen, but we offer light snacks and
              welcome outside food or delivery.
            </p>

            <p>
              Looking for a private event? We host birthday parties, family
              gatherings, and special events throughout the week.
            </p>
          </div>
        </section>

        <section className="arcade-screen mt-10">
          <h2 className="section-title">CURRENT DRAFTS</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
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
              <div key={beer} className="draft-card">
                {beer}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="arcade-screen mt-10 mb-20">
          <h2 className="section-title">CONTACT</h2>

          <div className="text-center text-white space-y-3">
            <p>Questions or Private Event Requests?</p>

            <p className="text-cyan-400 text-xl">brewcade.sarnelli@gmail.com</p>
          </div>
        </section>
      </div>
    </main>
  );
}
