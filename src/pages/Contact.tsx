import { useState, useEffect, FormEvent } from 'react'
import emailjs from '@emailjs/browser'

const PUBLIC_KEY = 'X60Dw03rL35Cjj1up'
const SERVICE_ID = 'service_0qidja4'
const TEMPLATE_ID = 'template_1xwejei'

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('') 
  const [name, setName] = useState('') 
  const [message, setMessage] = useState('') 

  const [success, setSuccess] = useState(false)

  useEffect(() => {
    emailjs.init(PUBLIC_KEY)
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      setLoading(true)
      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: name,
        from_email: email,
        message
      })

      if (res) setSuccess(true)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='h-[85vh] w-full flex flex-col my-4'>
      <div className='h-fit my-auto'>
        { success ? (
          <div>
            Thanks! Your message was successfully sent.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-2/3 mx-auto bg-[#e2e9e4] dark:bg-[#303f47] bg-opacity-60 px-24 py-12'>
            <input 
              className='dark:bg-[#40525b]'
              value={name}
              onChange={(e) => { setName(e.target.value) }}
              placeholder='Your name'
              type="text" />
            <input 
              className='dark:bg-[#40525b]'
              value={email}
              placeholder='name@example.com'
              onChange={(e) => { setEmail(e.target.value) }}
              type="text" />
            <textarea 
              className='dark:bg-[#40525b]'
              value={message}
              placeholder='Write a message here...'
              onChange={(e) => { setMessage(e.target.value) }}
              rows={3} />
            <button 
              type='submit' 
              disabled={loading} 
              className='my-2 bg-[#bcd7c3] hover:bg-[#aecfb7] dark:bg-[#40525b] hover:dark:bg-[#4a5c63] w-fit mx-auto px-4 py-1 rounded-sm'>Submit</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Contact