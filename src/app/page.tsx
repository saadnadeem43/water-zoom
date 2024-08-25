import React from 'react'

const page = () => {
  return(
    <dev><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:rounde rounded-full mx-auto" src="/saad.a.jpeg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Hey, I'm Saad Nadeem, a student in FSc Part 2. 
          I'm interested in pursuing further studies in AI 
          because of the increasing digitalization of the world.
          It's exciting to be part of this transformative field!”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Saad Nadeem 
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Pakistan
        </div>
      </figcaption>
    </div>
  </figure></dev>
  )
}

export default page