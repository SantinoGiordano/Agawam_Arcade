import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="p-5">
        <Image 
        src="/logo.jpg" 
        alt="Brewcade Logo" 
        width={400} 
        height={200} 
        />
        <Image 
        src="/pooltable.webp" 
        alt="Brewcade Logo" 
        width={400} 
        height={200} 
        />
        <Image 
        src="/otherPooltable.webp" 
        alt="Brewcade Logo" 
        width={400} 
        height={200} 
        />
      </div>
      
      <div className="p-5">CRAFT BEER WINE ARCADE GAMES MUSIC</div>

      <div className="flex flex-col items-center justify-center gap-4 p-4 text-center text-sm text-zinc-700 dark:text-zinc-300">
        Welcome to our family-friendly establishment, where fun and relaxation
        come together! We proudly offer a curated selection of craft beer and
        wine, complemented by the nostalgic charm of old-school arcade games
        ($10 unlimited play wristbands are sold at the bar), pool tables,
        shuffleboard, foosball, and darts. Speaking of darts, JOIN OUR THURSDAY
        NIGHT DART LEAGUE from 7-9 pm–just show up and play! While we don’t
        operate a kitchen, we provide a selection of light snacks for your
        convenience. You’re welcome to bring your own food or arrange for
        delivery directly to the Brewcade. If you know of any food trucks
        interested in parking at the Brewcade, please let us know! We are also
        available to host private parties, typically before our regular business
        hours on Saturdays/Sundays from 1-3 pm or after hours parties can be
        booked for the older crowd. Check out our private party details here. We
        can also book private events on Monday-Wednesday and are more flexible
        on times/pricing since we’re typically closed those days/nights anyway,
        so don’t hesitate to reach out to brewcade.sarnelli@gmail.com with any
        questions/requests! OUR DRAFT LIST INCLUDES: Blue Moon Belgian White,
        Downeast Cider, Sam Adams Seasonal, Von Trap Helles Golden Lager,
        Harpoon Blueberry, Brewcade House IPA by Progression, Fresh Pick IPA by
        Fort Hill, and Fiddlehead IPA In addition to our 8 drafts, we also offer
        a variety of Truly seltzers, Lunar seltzers, Hummy cocktails, Twisted
        Tea, wine, wine cocktails (margaritas, strawberry daiquiris, pina
        coladas, mudslides, mojitos), wine based well drinks (vodka, tequila,
        rum, gin, whiskey), a local sour, and domestic cans of beer (including
        an NA option!), in addition to cans of soda, bottled water, and juice
        boxes for the younger customers! NO OUTSIDE BEVERAGES are allowed in the
        Brewcade; all drinks must be purchased at our bar. Thank you for
        understanding!
      </div>
    </div>
  );
}
