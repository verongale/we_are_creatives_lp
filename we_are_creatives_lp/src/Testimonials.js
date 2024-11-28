function Testimonials(){
    return (
      <>
        <div className="h-screen w-screen bg-slate-100 p-40 flex flex-col justify-center">
          <p className="w-full text-center text-5xl text-slate-600 uppercase font-serif font-bold">
            client testimonials
          </p>
          <div className="flex justify-center">
            <div className="w-1/3 px-20 flex flex-col justify-center items-center pt-20">
              <div className="w-20 h-20 rounded-full bg-cover bg-center bg-[url('https://raw.githubusercontent.com/verongale/we_are_creatives_lp/refs/heads/main/images/image-emily.jpg')]"></div>

              <div className="text-center">
                <p className="text-2xl font-sans text-slate-600 py-20">
                  We put our trust in Sunnyside and they delivered, making sure
                  our needs were met and deadlines were always hit.
                </p>
                <p className="text-2xl font-serif font-extrabold text-slate-950 ">
                  -Emily R.
                </p>
                <p className="text-2xl font-sans text-slate-400">
                  Marketing Director
                </p>
              </div>
            </div>
            <div className="w-1/3 px-20 flex flex-col justify-center items-center pt-20">
              <div className="w-20 h-20 rounded-full bg-cover bg-center bg-[url('https://raw.githubusercontent.com/verongale/we_are_creatives_lp/refs/heads/main/images/image-thomas.jpg')]"></div>

              <div className="text-center">
                <p className="text-2xl font-sans text-slate-600 py-20">
                 Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.
                </p>
                <p className="text-2xl font-serif font-extrabold text-slate-950 ">
                  -Thomas S.
                </p>
                <p className="text-2xl font-sans text-slate-400">
                  Chief Operating Officer
                </p>
              </div>
            </div>
            <div className="w-1/3 px-20 flex flex-col justify-center items-center pt-20">
              <div className="w-20 h-20 rounded-full bg-cover bg-center bg-[url('https://raw.githubusercontent.com/verongale/we_are_creatives_lp/refs/heads/main/images/image-jennie.jpg')]"></div>

              <div className="text-center">
                <p className="text-2xl font-sans text-slate-600 py-20">
                  Incredible end result! Our sales increased over 400% when we worked with bla bla bla non ci credo che hai letto fino a qui!
                </p>
                <p className="text-2xl font-serif font-extrabold text-slate-950 ">
                  -Jennie F.
                </p>
                <p className="text-2xl font-sans text-slate-400">
                  Business Owner
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default Testimonials;