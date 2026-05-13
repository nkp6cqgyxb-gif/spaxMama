export default function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden"
         style={{ fontFamily: "Times New Roman, serif" }}>

      <div className="absolute top-6 left-6 md:top-8 md:left-8">
        <h1 className="text-[18px] md:text-[22px]">spaxMama</h1>
      </div>

      <div className="absolute left-6 top-40 md:left-8 md:top-1/3">
        <div className="flex items-center gap-10">
          <span>Kontakt:</span>
          <a className="underline" href="mailto:mail@spaxmama.com">
            mail@spaxmama.com
          </a>
        </div>
      </div>

      <div className="absolute bottom-5 right-5 text-xs">
        ©spaxMama 2026, Graz
      </div>

    </div>
  )
}
