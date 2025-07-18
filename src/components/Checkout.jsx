import { Map } from 'lucide-react';
import React from 'react'
import ZigZagTicket from './ui/ZigZagTicket';
import { Switch } from "@/components/ui/switch";

const Checkout = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-10 items-center">
      <div>
        <div className="flex flex-col md:flex-row gap-4 w-full items-center justify-center mb-10">
          <div>
            <input
              placeholder="1.5"
              className="bg-[#252628] p-2 rounded-lg border"
            />
          </div>
          or
          <div>
            <button className="flex bg-[#252628] p-2 rounded-lg border w-full items-center justify-center gap-2">
              <Map />
              usemap
            </button>
          </div>
        </div>
        <div className='text-xs'>
          <div className="p-5 text-sm flex gap-2">
            <Switch />
            Major City - Thiruvananthapuram, Kollam, Kochi, Thrissur, Kozhikode,
            Kannur, Palakkad, Kottayam
          </div>
          <div className="p-5 text-sm flex gap-2">
            <Switch />
            Night Time Journey ( 10 PM - 5 AM )
          </div>
          <div className="p-5 text-sm flex gap-2">
            <Switch />
            Return Journey Included
          </div>
        </div>
      </div>
      <div>
        <ZigZagTicket />
      </div>
    </div>
  );
}

export default Checkout