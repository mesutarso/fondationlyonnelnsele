import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AiFillPlayCircle } from 'react-icons/ai'
import Image from 'next/image'



function Modal() {
  return (
    <Dialog >
      <DialogTrigger>
        <div className='flex relative justify-center items-center w-[90vw] lg:w-[410px] h-[500px]'>
          <Image src='/mission.svg' fill sizes='100vw' className='object-cover aspect-auto' alt='video poster' />
          <div className='z-10 bg-secondary rounded-full p-0'>
            <AiFillPlayCircle size='4em' className='text-primary rounded-full border' />
          </div>

        </div>
      </DialogTrigger>
      <DialogContent >
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            <div className="video-responsive">
              <iframe
                width="100%"
                height="480"
                src={`https://www.youtube.com/embed/zohXXZBUVYI`}
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>

  )
}

export default Modal