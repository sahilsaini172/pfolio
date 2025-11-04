export default function TLCard() {
  return (
    <section className="p-6 bg-neutral-200/50 rounded-4xl">
      <header className="text-4xl text-neutral-400 py-4 border-b border-b-neutral-300">
        <p>
          <span className="text-black">Sahil</span> is building{" "}
          <span className="text-black underline">Pfolio</span>
        </p>
      </header>
      <main className="text-2xl text-neutral-500">
        <p>
          <br />
          i design things.
          <br />
          <br /> i think design can change things.
          <br />
          <br /> i think the things we design are just as important as the
          things we choose not to.
          <br />
          <br /> i think we should design things that do the things we don't
          enjoy, and make the things we do enjoy, even better.
          <br />
          <br /> i think there are too many things.
          <br />
          <br /> i think there should be fewer, but better things
          <span className="text-red-500 text-xl">*</span>.<br />
          <br /> the best things. an optimal amount.
          <br />
        </p>
        <p className="text-red-500 text-xl mt-8">
          *<span className="text-neutral-500">Less, but better.</span>
        </p>
      </main>
    </section>
  );
}
