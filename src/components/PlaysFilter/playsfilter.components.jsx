import React from 'react'

import { Disclosure } from '@headlessui/react'
import {FiChevronUp,FiChevronDown} from 'react-icons/fi';

const PlaysFilter = (props) =>{
  return (
    <Disclosure >
    {
        ({open}) => (
            <>

            <Disclosure.Button className="py-2 flex items-center gap-3 bg-white px-2 py-4 shadow-lg w-full ">
                {open ? <FiChevronUp/> : <FiChevronDown/>}
                 <span className={open ? "text-red-600" : "text-gray-700 "} >
                    {props.title}
                 </span>
                
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500 bg-white px-2 py-4 shadow-lg">
                <div className="flex items-center flex-wrap gap-3">
                    {props.tags.map((tag) => (
                        <>
                            <div className="border-2 border-gray-400 px-3">
                            <span className="text-red-600">{tag}</span>
                            </div>
                        </>
                    ))

                    }
                </div>
            </Disclosure.Panel>
            </>
        )
    }
      
    </Disclosure>
  )
}  

export default PlaysFilter;
