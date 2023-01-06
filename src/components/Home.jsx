function Home() {
  const tab = "\u00A0";
  return (
    <div className="">
      <h1 className="p-7 text-center font-base text-4xl">
        Welcome to me learning how to use{tab}
        <span className="font-bold text-sky-500">React hooks</span>!
      </h1>
      <p className="text-center text-xl mb-4">Click on the links above to see what I've been working on (it's clear that graphic design is{tab}<del className="text-red-500 font-bold">not</del>{tab}my passion).</p>
      <img
        src="https://i.kym-cdn.com/photos/images/newsfeed/001/018/899/936.jpg"
        alt="Graphic design is my passion meme"
        className="block ml-auto mr-auto w-1/5 md:w-3/5"
      />
    </div>
  );
}

export default Home;
