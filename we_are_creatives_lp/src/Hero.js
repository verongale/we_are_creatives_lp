
import Nav from "./Nav";
function Hero() {
  return (
    <>
      <div className="bg-[url('https://raw.githubusercontent.com/verongale/we_are_creatives_lp/refs/heads/main/images/desktop/image-header.jpg')] bg-cover bg-center h-screen">
        <Nav />

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-extrabold text-white text-center pt-40">
          WE ARE CREATIVES
        </h1>
      </div>
    </>
  );
}
export default Hero;