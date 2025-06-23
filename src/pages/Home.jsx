import React from "react";
import Navbar from '../components/Navbar'


function Home() {
  return (
    <div className="w-[100vw] h-[1406px] relative bg-gradient-to-b from-blue-400 to-slate-600 dark:from-gray-800 dark:to-black overflow-hidden">
  <div className="w-[1165px] left-[168px] top-[220px] absolute text-center justify-start text-white text-5xl font-normal font-['Inria_Sans'] [text-shadow:_-9px_4px_12px_rgb(255_250_250_/_0.25)]">Welcome to Student Portal, manage your academic details in one place.</div>
  <div className="w-96 left-[45px] top-[621px] absolute text-center justify-start text-white text-5xl font-normal font-['Inria_Sans'] [text-shadow:_-9px_4px_12px_rgb(0_0_0_/_0.25)] ">Recent activities → </div>
  <div className="w-[1154px] h-28 left-[143px] top-[718px] absolute opacity-20 bg-zinc-300" />
  <div className="w-[1154px] h-28 left-[143px] top-[867px] absolute opacity-20 bg-zinc-300" />
  <div className="w-[1154px] h-28 left-[143px] top-[1016px] absolute opacity-20 bg-zinc-300" />
  <div className="w-[1154px] h-28 left-[143px] top-[1165px] absolute opacity-20 bg-zinc-300" />
  <div className="w-[1272px] h-40 left-[102px] top-[401px] absolute bg-indigo-300 rounded-[30px]" />
  <div className="w-96 left-[186px] top-[440px] absolute text-right justify-start"><span className="text-black dark:text-white text-7xl font-normal font-['Inria_Sans']">296 </span><span class="text-black dark:text-white text-5xl font-normal font-['Inria_Sans']">students</span></div>
  <div className="w-96 left-[709px] top-[440px] absolute text-right justify-start"><span className="text-black dark:text-white text-7xl font-normal font-['Inria_Sans']">6 </span><span class="text-black dark:text-white text-5xl font-normal font-['Inria_Sans']">classes</span></div>
  <div className="w-40 h-0 left-[720px] top-[401px] absolute origin-top-left rotate-90 shadow-[-5px_4px_4px_0px_rgba(0,0,0,0.25)] outline outline-1 outline-offset-[-0.50px] outline-neutral-50 dark:from-gray-800 dark:to-black"></div>
    <div className="w-960 left-[209px] top-[750px] absolute text-right justify-start"><span className="text-white text-4xl font-normal font-['Inria_Sans']">Completed abcfed certification</span></div>
    <div className="w-960 left-[209px] top-[900px] absolute text-right justify-start"><span className="text-white text-4xl font-normal font-['Inria_Sans']">Semester 1 results declared</span></div>
    <div className="w-960 left-[209px] top-[1050px] absolute text-right justify-start"><span className="text-white text-4xl font-normal font-['Inria_Sans']">Seminar on "Benifits of AI" on 23rd of June</span></div>
    <div className="w-960 left-[209px] top-[1200px] absolute text-right justify-start"><span className="text-white text-4xl font-normal font-['Inria_Sans']">Community service drive</span></div>
</div>
  );
}

export default Home;
