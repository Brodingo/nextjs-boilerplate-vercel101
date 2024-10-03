export default function Brodingo() {
    return (
<>
<div className="h-screen flex justify-center items-center">  
<figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-32 md:w-48 md:h-auto mx-auto" src="//brodingo.com/img/mo.jpg" alt="Beefcake" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is one of the ways to do CSS.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Brodingo
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Pretty Cool Guy, For Real
      </div>
    </figcaption>
  </div>
</figure>  
</div>
</>    
    )
}