export default function BottomSection(){
    return(

            <div className="w-screen bg-creamy-ish shadow pb-7 h-1/2">
                <div className="flex items-center justify-between">
                    <div className="flex justify-start items-center w-1/3">
                    <img src="pics\Capture_d_écran_2023-11-30_190328-removebg-preview.png" className="scale-50" alt="Flowbite Logo" />
                    </div>
                    <ul className="flex  items-center justify-evenly text-xl font-medium text-peachy  w-2/3">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-peachy sm:mx-auto text-center " />
                <span className="block text-sm text-peachy text-center">© 2023 <a href="#" className="hover:underline">HolaHub™</a>. All Rights Reserved.</span>
            </div>
       
        
        )
}