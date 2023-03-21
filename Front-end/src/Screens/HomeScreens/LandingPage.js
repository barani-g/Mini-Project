import React from 'react';
import { Link } from 'react-router-dom';
import Hungrezy from '../../Icons/Hungrezy re-P 1.svg';
import Disp1 from '../../Icons/Group 6.png';
function LandingPage(){
    return(
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-rose-200 py-6 sm:py-12">
  <div class="flex bg-purple-800 px-20 pt-16 pb-24 shadow-xl ring-1 ring-gray-900/5 sm:mx-20 sm:rounded-lg sm:px-1">
    <div class="sm:mx-20 max-w-">
      <img src={Hungrezy} class="flex h-40 items-center" alt="  Hungrezy" />
      <section class="text-rose-200 body-font">
  <div class="container mx-auto flex px-0 py-2 md:flex-row flex-col items-center">
    <div class="space-y-6 py-8 text-base leading-7 text-rose-200">
             <h1 class="text-4xl font-bold tracking-tight text-rose-200 sm:text-6xl">No need to wait. Just Order & pick your food</h1>
      <ul class="space-y-4">
                <li class="flex items-center">
                  <svg class="ml-8 h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p class="ml-6">
                    Choose your
                    <code class="text-sm font-bold">Restaurant</code>
                  </p>
                </li>
                <li class="flex items-center">
                  <svg class="ml-8 h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p class="ml-4">
                    Order your food &
                    <code class="text-sm font-bold">Pay online</code>
                  </p>
                </li>
                <li class="flex items-center">
                  <svg class="ml-8 h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p class="ml-4">Show the bill & take your food :</p>
                </li>
              </ul>
              <p class="mt-6 text-lg font-bold leading-8 text-rose-200">The Best Foods & Restaurants Under One Roof.</p>
      <Link to="/Home">
      <div class="flex pt-6 justify-center">
        <button class="inline-flex text-purple-800 bg-rose-200 border-0 py-2 px-6 focus:outline-none hover:bg-rose-300 rounded text-lg">Go To App<span aria-hidden="true">⫸</span></button>
      </div>
      </Link>
    </div>
    <div class="lg:max-w-lg lg:w-full">
      <img class="object-cover object-center rounded" alt="hero" src={Disp1}/>
    </div>
  </div>
</section>
    </div>
  </div>
</div>

    
    )
}
export default LandingPage