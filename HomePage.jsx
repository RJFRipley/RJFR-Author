
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section
        className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
        style={{ backgroundImage: "url('https://files.chatgpt.com/file-24dLNeNx213jLUNxyJvNET')" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Welcome to a world where magic remembers, shadows whisper, and women do not yield.
        </h1>
      </section>

      {/* About RJF Ripley */}
      <section className="max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Meet RJF Ripley</h2>
        <p className="text-lg leading-relaxed">
          RJF Ripley is a fantasy author whose writing blends sweeping worldbuilding, slow-burn mysteries, and
          powerful female leads with emotionally resonant, cinematic flair. Drawing inspiration from mythology,
          shadow lore, and real-world resilience, her work weaves ancient magic with modern depth.
        </p>
        <p className="text-lg mt-4 leading-relaxed">
          When she’s not summoning storms in Emberwyld, she’s reading obsessively, wandering wild places with her
          dog, or plotting story arcs over tea. She writes to challenge, enchant, and empower—and hopes her books
          offer both escape and fire to those who need it most.
        </p>
      </section>

      {/* Emberwyld Blurb */}
      <section className="w-full bg-gray-900 px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">The Emberwyld Series</h2>
          <p className="text-lg leading-relaxed">
            Some powers are born from storms. Others are forged by what they survive.
          </p>
          <p className="text-lg mt-4 leading-relaxed">
            General Kaelara of Eiliean is a living legend: battle-hardened, storm-called, and bound by duty to a
            kingdom that fears what she might become. Haunted by dreams that don’t feel like dreams—and stalked
            by a power she barely understands—Lara is drawn into a conspiracy that stretches far deeper than war.
          </p>
          <p className="text-lg mt-4 leading-relaxed">
            As ancient forces stir beneath the surface of her world, Lara must uncover who she truly is, and why
            she’s being hunted—not just by enemies, but by fate itself.
          </p>
          <p className="text-lg mt-4 font-semibold italic">
            Magic is returning. Shadows are watching. And the truth about Emberwyld could burn it all.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full bg-black px-6 py-20 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Some magic is meant to be shared.</h2>
          <p className="mb-6 text-lg">
            Subscribe to RJF Ripley’s newsletter for exclusive Emberwyld lore, early reveals, and the kind of
            stories that don’t let go.
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded text-black"
              required
            />
            <button className="bg-white text-black px-4 py-2 font-semibold rounded hover:bg-gray-300">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
