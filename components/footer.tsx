import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3 text-center md:text-left">
          {/* Hours */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Hours</h3>
            <p>Thursday - Saturday</p>
            <p>3:00 PM - 9:00 PM (ish)</p>
            <p className="mt-2">Sunday</p>
            <p>3:00 PM - 7:00 PM</p>
            <p className="mt-2 text-sm text-zinc-400">Cash Only</p>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Follow Us</h3>

            <div className="flex justify-center md:justify-start gap-6 text-2xl">
              <Link
                href="https://instagram.com/yourusername"
                target="_blank"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </Link>

              <Link
                href="https://tiktok.com/@yourusername"
                target="_blank"
                className="hover:text-white transition"
              >
                <FaTiktok />
              </Link>

              <Link
                href="https://facebook.com/yourpage"
                target="_blank"
                className="hover:text-blue-500 transition"
              >
                <FaFacebookF />
              </Link>
            </div>

            <p className="mt-4 text-sm text-zinc-400">
              We love keeping the fun going! Ask us about extended hours and
              special events.
            </p>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Visit Us</h3>
            <p>303 Walnut Street</p>
            <p>Agawam, MA 01001</p>

            <p className="mt-4 text-sm text-zinc-400">
              Available for private events, fundraisers, team-building events,
              sports parties, and more.
            </p>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Brewcade. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
