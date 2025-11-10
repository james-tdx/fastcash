import Image from "next/image";

export default function Home() {
  return (
    <main className="py-5">
        <Image
          src="/logo.jpg"
          alt="logo.jpg"
          width={200}
        height={200}/>
      

      <div className="text-4xl px-5">
        <h1 className="mb-2">Get the money You Need,<br></br> When You Need It.</h1>
        <p className="text-xl">Fast approval. Low interest. Trusted by thousands</p>
      </div>
       
       <div className="mt-3 px-3 text-white gap-5 flex">
      <button className="px-7 py-2 rounded-md bg-green-700">Apply Now</button>
      <button className="px-5 py-2 rounded-md bg-green-700">Check Eligibility</button>
      </div>

      <div className="bg-[url(/bg2.jpg)] bg-right bg-cover h-[50vh] lg:bg-[url(/bg2.jpg)] lg:h-[90vh] lg:bg-no-repeat lg:bg-cover md:bg-[url(/bg2.jpg)] md:h-[70vh] md:bg-no-repeat md:bg-cover mt-5 "></div>

         <h1 className="text-center font-semibold text-xl mt-5">How it works-simple steps to Your loan</h1>
         <div className="pt-5 pr-19">
       <div className="md:flex justify-center items-center">
      <div className="w-[120px] h-[200px] rounded-md shadow-lg bg-gray-100 mt-5 ml-30">
        <Image
        src="/icon1.png"
        alt="icon1.png"
        width={100}
        height={100}/>

        <h1 className="px-3 font-medium mt-2">1. Apply in Minutes</h1>
       </div>

       <div className="w-[120px] h-[200px] rounded-md shadow-lg bg-gray-100 mt-5 ml-30">
        <Image
        src="/watch.png"
        alt="watch.png"
        width={100}
        height={100}/>

        <h1 className="px-3 font-medium mt-2 whitespace-nowrap">Get Approved<br></br> instantly</h1>
       </div>

       <div className="w-[120px] h-[200px] rounded-md shadow-lg bg-gray-100 mt-5 ml-30">
        <Image className="ml-5 mt-7"
        src="/cash.png"
        alt="cash.png"
        width={60}
        height={60}/>

        <h1 className="px-3 font-medium mt-2">3. Rceive Funds</h1>
       </div>

       <div className="w-[120px] h-[200px] rounded-md shadow-lg bg-gray-100 mt-5 ml-30">
        <Image className="ml-5 mt-7"
        src="/cal.png"
        alt="cal.png"
        width={60}
        height={60}/>

        <h1 className="px-3 font-medium mt-2">4. Easy repayments</h1>
       </div>
       </div>
      </div>
       
      <div className="bg-gray-200 py-20 mt-5">
        <div className="md:flex justify-center items-center">
          <div className="md:ml-30">
        <Image
        src="/thunder.png"
        alt="cal.png"
        width={60}
        height={60}/>
        <h1 className="mt-5 pb-3 md:mt-5">Fast Funding</h1>
        <p className="mb-9 md:mt-5">Lightning Fast Funding
Get cash in your account<br></br> quicker than any other platform. We focus on speed<br></br> when you need it most</p>
        </div>

        <div className="md:ml-30">
          <Image
        src="/chart.png"
        alt="cal.png"
        width={60}
        height={60}/>
        <h1 className="mt-5 pb-3 md:mt-5">Low interest Rates</h1>
        <p className="mb-9 md:mt-5">Competitive Low Rates
We offer transparent interest rates<br></br> with no hidden fees,<br></br> helping you save money on your repayment</p>
        </div>

        <div className="md:ml-30">
          <Image
        src="/secure.png"
        alt="cal.png"
        width={60}
        height={60}/>
        <h1 className="mt-5 pb-3 md:mt-5">Secure Data</h1>
        <p className="mb-9 md:mt-5">Your financial information is protected with bank-level encryption. Your privacy is our top priority</p>
        </div>
      </div>
      </div>


      <div className="md:gap-5 md:px-3 lg:flex lg:gap-5 lg:px-3 py-5">
      <div className="bg-white rounded shadow w-100 mt-10">
        <div className="flex gap-5 px-3 py-4">
        <Image
        src="/chat.png"
        alt="chat.png"
        width={20}
        height={20}/>
        <h1 className="font-semibold text-xl ">Trusted By Thousands</h1>
        </div>
        <div className="px-3 mt-3">
        <p className="text-left italic">"NaijaLend saved me! I needed emergency funds, and the approval genuuiely instant. The r repavment plan was flexible, easy easy ou manage. Highly recommend for quick, reliable loans."</p>
        </div>
        <div className="border-t border-gray-200 my-3 px-3 w-90 ml-3 mt-3"></div>
        <div className="px-3 py-3">
        <p className="font-semibold mb-2">-Bimpe A,</p>
        <p className="text-sm text-gray-900">small Business owner,Abuja</p>
        </div>
      </div>

      <div className="bg-white rounded shadow w-100 mt-10">
        <div className="flex gap-5 px-3 py-4">
        <Image
        src="/chat.png"
        alt="chat.png"
        width={20}
        height={20}/>
        <h1 className="font-semibold text-xl ">Trusted By Thousands</h1>
        </div>
        <div className="px-3 mt-3">
        <p className="text-left italic">“At first, I didn’t believe online loans could be this easy. NaijaLend approved my request in less than 10 minutes and sent the money straight to my account. The repayment reminders are clear, and there are no hidden charges. I’ll definitely use them again.”</p>
        </div>
        <div className="border-t border-gray-200 my-3 px-3 w-90 ml-3 mt-3"></div>
        <div className="px-3 py-3">
        <p className="font-semibold mb-2">-Kng James</p>
        <p className="text-sm text-gray-900">Creator of this website,Abuja</p>
        </div>
      </div>

      <div className="bg-white rounded shadow w-100 mt-10">
        <div className="flex gap-5 px-3 py-4">
        <Image
        src="/chat.png"
        alt="chat.png"
        width={20}
        height={20}/>
        <h1 className="font-semibold text-xl ">Trusted By Thousands</h1>
        </div>
        <div className="px-3 mt-3">
        <p className="text-left italic">“I applied for a loan to buy more data because my VS Code kept updating every five minutes. NaijaLend approved it instantly even before my code finished running npm install. Truly the fastest loan app alive!”</p>
        </div>
        <div className="border-t border-gray-200 my-3 px-3 w-90 ml-3 mt-3"></div>
        <div className="px-3 py-3">
        <p className="font-semibold mb-2">-Emmanuel Augustine</p>
        <p className="text-sm text-gray-900">Owner of CBN,Abuja</p>
        </div>
      </div>
      </div>


      <div className="bg-green-700 py-10">
        <h1 className="text-center text-white text-3xl mb-5">Ready for a fast financial Relief?</h1>
        <p className="text-center text-white">it only takes 3 minutes to check Eligibility, and it won't impact your credit sccore</p>
        <div className="justify-center items-center flex mt-5 py-2">
        <button className="py-2 px-5 bg-amber-500 text-white rounded-md">Apply Now (it's quick and free) </button>
        </div>
      </div>

       <h1 className="text-center font-semibold text-xl mt-7">Your Security is Our priority</h1>
      <div className="px-8 md:flex gap-6 justify-center items-center py-5">
      <div className="bg-white shadow-lg rounded-md py-6 w-45 h-23 mb-5 md:bg-white shadow-lg rounded-md py-6 w-45 h-23">
        <div className="flex gap-4">
        <Image
        src="/security.png"
        alt="chat.png"
        width={70}
        height={70}/>
        <h1 className="text-green-700 mt-3">256-Bit SSL secured</h1>
      </div>
      </div>

      <div className="bg-white shadow-lg rounded-md py-6 w-40 h-20 mb-5 md:bg-white shadow-lg rounded-md py-6 w-40 h-20">
        <h1 className="text-center text-blue-600">PCI DSS</h1>
        <p className="text-center text-blue-600">compliant</p>

      </div>

      <div className="bg-white shadow-lg rounded-md py-4 px-10 w-45 h-30">
        <Image
        src="/web.png"
        alt="chat.png"
        width={70}
        height={70}/>
        <h1 className="text-center whitespace-nowrap text-green-700">Data Protection</h1>

      </div>
      </div>
    </main>
  );
}