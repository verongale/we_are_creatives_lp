function TextSquare(){
    return (
      <>
        <div className="w-screen lg:flex block">
          <div className="w-full lg:w-1/2 h-500px lg:p-40 p-16 bg-slate-100 flex flex-col">
            <h3 className="leading-snug font-serif text-4xl lg:text-7xl font-black font text-gray-900 mb-10">
              Transform your brand
            </h3>
            <p className="lg:text-3xl text-xl text-gray-600 leading-loose">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a
              href="#"
              className="uppercase text-gray-900 font-bold lg:text-2xl text-xl mt-10 hover:underline decoration-amber-300 decoration-4"
            >
              Learn more
            </a>
          </div>
          <div className="w-full lg:w-1/2 h-500px p-40 bg-[url('https://raw.githubusercontent.com/verongale/we_are_creatives_lp/refs/heads/main/images/desktop/image-transform.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="w-screen lg:flex block">
          <div className="w-full lg:w-1/2 h-500px p-40 bg-[url('https://raw.githubusercontent.com/verongale/we_are_creatives_lp/refs/heads/main/images/desktop/image-stand-out.jpg')] bg-cover bg-center"></div>
          <div className="w-full lg:w-1/2 h-500px lg:p-40 p-16 bg-slate-100 flex flex-col">
            <h3 className="leading-snug font-serif text-4xl lg:text-7xl font-black font text-gray-900 mb-10">
              Stand out to the right audience
            </h3>
            <p className="lg:text-3xl text-xl text-gray-600 leading-loose">
              using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we'll build and
              extend your brand in digital places.
            </p>
            <a
              href="#"
              className="uppercase text-gray-900 font-bold lg:text-2xl text-xl mt-10 hover:underline decoration-red-400 decoration-4"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="w-screen lg:flex block">
          <div className="w-full lg:w-1/2 h-500px p-20 bg-[url('https://raw.githubusercontent.com/verongale/we_are_creatives_lp/refs/heads/main/images/desktop/image-graphic-design.jpg')] bg-cover bg-center flex flex-col items-center">
            <h4 className="font-serif text-4xl font-bold text-teal-950 pt-96 mb-10">
              Graphic Design
            </h4>
            <p className="lg:text-2xl text-xl lg:px-40 px-10 text-center text-gray-600 leading-loose">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients'
              attention.
            </p>
          </div>
          <div className="w-full lg:w-1/2 h-500px p-20 bg-[url('https://raw.githubusercontent.com/verongale/we_are_creatives_lp/refs/heads/main/images/desktop/image-photography.jpg')] bg-cover bg-center flex flex-col items-center">
            <h4 className="font-serif text-4xl font-bold text-teal-950 pt-96 mb-10">
              Photography
            </h4>
            <p className="lg:text-2xl text-xl lg:px-s40 px-10 text-gray-600 leading-loose">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </>
    );
}
export default TextSquare;
