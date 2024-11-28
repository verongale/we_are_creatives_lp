function Testimonials() {
  return (
    <>
      <div className="w-screen bg-slate-100 lg:p-40 p-10 flex flex-col items-center">
        {/* Titolo */}
        <p className="w-full text-center text-3xl lg:text-5xl text-slate-600 uppercase font-serif font-bold mb-16">
          client testimonials
        </p>

        {/* Contenitore testimonianze */}
        <div className="w-full flex flex-wrap justify-center lg:space-x-10 space-y-10 lg:space-y-0">
          {/* Testimonianza 1 */}
          <div className="w-full lg:w-1/3 px-8 flex flex-col justify-center items-center text-center">
            <div className="w-20 h-20 rounded-full bg-cover bg-center bg-[url('https://raw.githubusercontent.com/verongale/we_are_creatives_lp/refs/heads/main/images/image-emily.jpg')]"></div>
            <p className="text-lg lg:text-2xl font-sans text-slate-600 py-10">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <p className="text-xl lg:text-2xl font-serif font-extrabold text-slate-950">
              -Emily R.
            </p>
            <p className="text-lg lg:text-2xl font-sans text-slate-400">
              Marketing Director
            </p>
          </div>

          {/* Testimonianza 2 */}
          <div className="w-full lg:w-1/3 px-8 flex flex-col justify-center items-center text-center">
            <div className="w-20 h-20 rounded-full bg-cover bg-center bg-[url('https://raw.githubusercontent.com/verongale/we_are_creatives_lp/refs/heads/main/images/image-thomas.jpg')]"></div>
            <p className="text-lg lg:text-2xl font-sans text-slate-600 py-10">
              Sunnyside's enthusiasm coupled with their keen interest in our
              brand's success made it a satisfying and enjoyable experience.
            </p>
            <p className="text-xl lg:text-2xl font-serif font-extrabold text-slate-950">
              -Thomas S.
            </p>
            <p className="text-lg lg:text-2xl font-sans text-slate-400">
              Chief Operating Officer
            </p>
          </div>

          {/* Testimonianza 3 */}
          <div className="w-full lg:w-1/3 px-8 flex flex-col justify-center items-center text-center">
            <div className="w-20 h-20 rounded-full bg-cover bg-center bg-[url('https://raw.githubusercontent.com/verongale/we_are_creatives_lp/refs/heads/main/images/image-jennie.jpg')]"></div>
            <p className="text-lg lg:text-2xl font-sans text-slate-600 py-10">
              Incredible end result! Our sales increased over 400% when we
              worked with bla bla bla non ci credo che hai letto fino a qui!
            </p>
            <p className="text-xl lg:text-2xl font-serif font-extrabold text-slate-950">
              -Jennie F.
            </p>
            <p className="text-lg lg:text-2xl font-sans text-slate-400">
              Business Owner
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
