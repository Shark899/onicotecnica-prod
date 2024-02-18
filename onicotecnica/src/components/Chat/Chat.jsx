import { useGlobalContext } from '../../context'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3001')
import { v4 as uuidv4 } from 'uuid'
import { useEffect } from 'react'
import ScrollableFeed from 'react-scrollable-feed'
const Chat = () => {
  const { chat, setChat, allChats, setAllChats } = useGlobalContext()
  const name = localStorage.getItem('name')

  const handleKeyPress = (e) => {
    if (e.key == 'Enter') {
      socket.emit('send_message', {
        message: chat,
        name,
      })
      setAllChats((allChats) => [...allChats, { name, message: chat }])
      setChat('')
    }
  }

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setAllChats((allChats) => [
        ...allChats,
        { name: data.name, message: data.message },
      ])
      console.log(data)
    })
  }, [socket])

  return (
    <div className='flex flex-col items-start w-96 mt-10'>
      <div className='w-full flex flex-col items-start justify-start max-h-[400px] xl:max-h-[1000px]'>
        <ScrollableFeed className='w-full flex flex-col items-start justify-start'>
          {allChats?.map((chat) => {
            return (
              <div
                className='flex justify-center items-start mt-10 '
                key={uuidv4()}
              >
                <div className='mr-8'>
                  <div className='h-10 w-10 rounded-full bg-gray-500'></div>
                </div>
                <div className='flex flex-col '>
                  <span className='font-bold'>{chat.name}</span>
                  <span>{chat.message}</span>
                </div>
              </div>
            )
          })}
        </ScrollableFeed>
      </div>
      <div className='w-full flex justify-between items-center mt-14'>
        <div className='mr-8'>
          <div className='h-10 w-10 rounded-full bg-gray-500'></div>
        </div>
        <div className='w-full'>
          <input
            type='text'
            placeholder='Scrivi un messaggio...'
            className='border-2 rounded-full h-10 w-full px-2'
            value={chat}
            onChange={(e) => setChat(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>
      </div>
    </div>
  )
}
export default Chat
