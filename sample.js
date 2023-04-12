// import React from 'react'

// function sample() {
//   return (
//     <div>
//       <nav class="bg-gray-800">
//   <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div class="flex items-center justify-between h-16">
//       <div class="flex items-center">
//         <div class="hidden md:block">
//           <div class="flex items-baseline space-x-4">
//             <a href="#" class="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>

//             <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>

//             <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
//           </div>
//         </div>
//       </div>

//       <div class="-mr-2 flex md:hidden">
//         <button type="button" class="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
//           <span class="sr-only">Open main menu</span>
//           <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//           <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   </div>
//   <div class="hidden md:hidden" id="mobile-menu">
//     <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//       <a href="#" class="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>

//       <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>

//       <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
//     </div>
//   </div>
// </nav>
// </div>
//   )
// }

// export default sample

const a = [3,8,10,2,4]
let largest = a[0]
let secondLargest = a[1]
let temp;
for (let i = 0; i < a.length; i++) {
    if (a[i]>largest) {
        temp=largest
        largest=secondLargest
        secondLargest=temp
    }
}
console.log(largest);
console.log(secondLargest);