export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-portfolio-dark/5">
      <div className="layout-container">
        <div className="col-span-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold tracking-widest uppercase text-portfolio-dark/40">© {new Date().getFullYear()}</span>
            <img 
              src="/logo.png" 
              alt="Ali Felski Design" 
              className="h-8 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] font-bold tracking-widest uppercase text-portfolio-dark/40 hover:text-portfolio-dark transition-colors">
              LINKEDIN
            </a>
            <a href="#" className="text-[10px] font-bold tracking-widest uppercase text-portfolio-dark/40 hover:text-portfolio-dark transition-colors">
              INSTAGRAM
            </a>
            <a href="#" className="text-[10px] font-bold tracking-widest uppercase text-portfolio-dark/40 hover:text-portfolio-dark transition-colors">
              DRIBBBLE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

