import Navbar from '../components/Navbar'
import Home from "./Home";

function Dashboard() {
  return (
<div className="w-[100vw] h-[1406px] relative bg-gradient-to-b from-blue-400 to-slate-600 dark:from-gray-800 dark:to-black overflow-hidden">
  <div className="w-[524px] h-80 left-[146px] top-[361px] absolute bg-indigo-300 rounded-[30px] dark:from-gray-800 dark:to-black" />
  <div className="w-[524px] h-80 left-[771px] top-[361px] absolute bg-indigo-300 rounded-[30px] dark:from-gray-800 dark:to-black" />
  <div className="w-96 left-[135px] top-[273px] absolute text-center justify-start text-white text-5xl font-normal font-['Inria_Sans'] [text-shadow:_-9px_4px_12px_rgb(255_250_250_/_0.25)] dark:text-white">Your Progress →</div>
  <div className="w-96 left-[771px] top-[273px] absolute text-center justify-start text-white text-5xl font-normal font-['Inria_Sans'] [text-shadow:_-9px_4px_12px_rgb(255_250_250_/_0.25)] dark:text-white">Your Subjects →</div>
  <div className="w-[454px] left-[146px] top-[774px] absolute text-center justify-start text-white text-5xl font-normal font-['Inria_Sans'] [text-shadow:_-9px_4px_12px_rgb(255_250_250_/_0.25)] dark:text-white">Subject wise grade → </div>
  <div data-svg-wrapper className="left-[146px] top-[517px] absolute">
    <svg width="520" height="9" viewBox="0 0 533 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_9_137)">
    <path d="M9 0L533 0V1L9 1V0Z" fill="#FFFBFB"/>
    </g>
    <defs>
    <filter id="filter0_d_9_137" x="0" y="0" width="533" height="9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dx="-5" dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9_137"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9_137" result="shape"/>
    </filter>
    </defs>
    </svg>
  </div>
  <div className="w-60 left-[288px] top-[405px] absolute text-right justify-start"><span class="text-black text-7xl font-normal font-['Inria_Sans']">9.04  </span><span class="text-black text-5xl font-normal font-['Inria_Sans']">GPA</span></div>
  <div className="w-106 left-[220px] top-[546px] absolute text-right justify-start"><span class="text-black text-7xl font-normal font-['Inria_Sans']">97 % </span><span class="text-black text-5xl font-normal font-['Inria_Sans']">Attendence</span></div>
  <div className="w-106 left-[820px] top-[406px] absolute text-right justify-start"><span class="text-black text-4xl font-normal font-['Inria_Sans']"> Mathematics </span></div>
  <div className="w-106 left-[820px] top-[460px] absolute text-right justify-start"><span class="text-black text-4xl font-normal font-['Inria_Sans']"> Python </span></div>
  <div className="w-106 left-[820px] top-[510px] absolute text-right justify-start"><span class="text-black text-4xl font-normal font-['Inria_Sans']"> Web Development </span></div>
  <div className="w-106 left-[820px] top-[560px] absolute text-right justify-start"><span class="text-black text-4xl font-normal font-['Inria_Sans']"> DBMS </span></div>
  
  <div className="w-[588px] h-16 left-[146px] top-[862px] absolute opacity-20 bg-zinc-300" />
  <div className="w-[588px] h-16 left-[146px] top-[951px] absolute opacity-20 bg-zinc-300" />
  <div className="w-[588px] h-16 left-[146px] top-[1040px] absolute opacity-20 bg-zinc-300" />
  <div className="w-[588px] h-16 left-[146px] top-[1133px] absolute opacity-20 bg-zinc-300" />
  <div className="w-[588px] h-16 left-[670px] top-[862px] absolute opacity-20 bg-zinc-300" />
  <div className="w-[588px] h-16 left-[670px] top-[951px] absolute opacity-20 bg-zinc-300" />
  <div className="w-[588px] h-16 left-[670px] top-[1040px] absolute opacity-20 bg-zinc-300" />
  <div className="w-[588px] h-16 left-[670px] top-[1133px] absolute opacity-20 bg-zinc-300" />
  <div className="w-106 left-[220px] top-[876px] absolute text-right justify-start"><span class="text-white dark:text-white text-4xl font-normal font-['Inria_Sans']"> Mathematics</span></div>
  <div className="w-106 left-[220px] top-[960px] absolute text-right justify-start"><span class="text-white dark:text-white text-4xl font-normal font-['Inria_Sans']"> Python </span></div>
  <div className="w-106 left-[220px] top-[1050px] absolute text-right justify-start"><span class="text-white dark:text-white text-4xl font-normal font-['Inria_Sans']"> Web Development </span></div>
  <div className="w-106 left-[220px] top-[1145px] absolute text-right justify-start"><span class="text-white dark:text-white text-4xl font-normal font-['Inria_Sans']"> DBMS </span></div>
    <div className="w-106 left-[970px] top-[876px] absolute text-right justify-start"><span class="text-white dark:text-white text-4xl font-normal font-['Inria_Sans']"> A+</span></div>
  <div className="w-106 left-[970px] top-[960px] absolute text-right justify-start"><span class="text-white dark:text-white text-4xl font-normal font-['Inria_Sans']"> A </span></div>
  <div className="w-106 left-[970px] top-[1050px] absolute text-right justify-start"><span class="text-white dark:text-white text-4xl font-normal font-['Inria_Sans']"> A+ </span></div>
  <div className="w-106 left-[970px] top-[1145px] absolute text-right justify-start"><span class="text-white dark:text-white text-4xl font-normal font-['Inria_Sans']"> A </span></div>
</div>);
}

export default Dashboard;
