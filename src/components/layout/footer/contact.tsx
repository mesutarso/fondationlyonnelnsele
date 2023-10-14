import React from 'react'
import { FaPhoneAlt,FaMapMarkerAlt } from 'react-icons/fa'
import {IoMdMailUnread} from 'react-icons/io'

function ContactInfo() {
  return (
    <div>
      <div className='flex gap-4 items-center mb-5'>
        <div className="icons bg-primary p-2 rounded-full text-white">
          <FaPhoneAlt />
        </div>
        <div className="infos text-sm">
          <p>Appel</p>
          <p className='text-text '>+243 999979740</p>
        </div>
      </div>
      <div className='flex gap-4 items-center mb-5'>
        <div className="icons bg-primary p-2 rounded-full text-white">
          <IoMdMailUnread />
        </div>
        <div className="infos text-sm">
          <p>Mail</p>
          <p className='text-text'>infos@fondationlyonelnsele.org</p>
        </div>
      </div>
      <div className='flex gap-4 items-center mb-5'>
        <div className="icons bg-primary p-2 rounded-full text-white">
          <FaMapMarkerAlt />
        </div>
        <div className="infos text-sm">
          <p>Adresse</p>
          <p className='text-text'>Kinshasa, RDC</p>
        </div>
      </div>
    </div>

  )
}

export default ContactInfo