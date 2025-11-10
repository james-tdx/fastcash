import Image from "next/image"

export default function MyProfile () {
    return (
        <main className="min-h-screen flex justify-center py-5 md:py-6 md:px-12 lg:py-8 lg:px-16">
            <div className="w-full md:w-[350px] flex flex-col rounded-md shadow-md px-4 md:shadow-indigo-200 ">
                <div>
                    <h1 className="text-center text-xl font-semibold text-gray-800 mb-8">Customer Profile</h1>
                    <div className="mt-2 flex justify-center gap-6 border-b border-gray-300 mb-2 ">
                        <Image
                         width={80}
                         height={80}
                         alt="profile-image"
                         src="/bg2.jpg"
                         className="w-20 h-20 rounded-full "
                        />
                        <div>
                           <p className="text-sm text-gray-800  ">Emmanuel Augustine</p> 
                           <p className="text-xs text-gray-600">emmanuel@gmail.com</p>
                           <p className="text-center text-xs text-indigo-400">Tier 1</p>
                        </div>
                    </div>
                    <div>
                       <p className="text-center text-lg ">Other Informations</p>  
                       <div className="flex justify-between mb-3">
                           <p className="text-gray-800">BVN</p>
                           <p className="text-gray-400">427667287484</p>
                       </div>
                       <div className="flex justify-between mb-3">
                           <p className="text-gray-800">NIN</p>
                           <p className="text-gray-400">36874678572</p>
                       </div>
                       <div className="flex justify-between mb-3">
                           <p className="text-gray-800">Gender</p>
                           <p className="text-gray-400">Male</p>
                       </div>
                       <div className="flex justify-between mb-3">
                           <p className="text-gray-800">Date of birth</p>
                           <p className="text-gray-400">24/04/2000</p>
                       </div>
                       <div className="flex justify-between mb-3">
                           <p className="text-gray-800">Phone Number</p>
                           <p className="text-gray-400">0803678860</p>
                       </div>
                       <div className="flex justify-between mb-3">
                           <p className="text-gray-800">Address</p>
                           <p className="text-gray-400">BLK F,NIA Quartrs Maitama </p>
                       </div>
                    </div>
                </div>

            </div>

        </main>
    )
}