import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "63b17df6-92dc-47c4-be77-7614d7a12bd4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className=' flex items-center justify-center py-10'>
        <div className="sm:w-[60vw] w-full p-6 rounded-lg shadow-md">
            <form onSubmit={onSubmit} className="flex sm:flex-row flex-col items-center gap-5">
                <div>
                    <input type="text" id="name" name="name" className="mt-1 block w-[70vw] sm:w-[20vw] outline-none border rounded border-gray-500 px-3 py-2.5" required placeholder='Name'/>
                </div>
                <div>
                    <input type="tel" id="number" name="number" className="mt-1 block w-[70vw] sm:w-[20vw] outline-none border rounded border-gray-500 px-3 py-2.5" required placeholder='Number'/>
                </div>
                <div className='relative'>
                    <button type="submit" className="w-fit flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Submit
                    </button>
                    <p className='text-xs absolute top-full right-0 mt-3 w-[240%] text-end font-medium line-clamp-2'>{result}</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact