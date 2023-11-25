import { NavLink } from 'react-router-dom'
import MainBG from '../assets/main-bg.jpg'

const links = [    
    { name: 'Learn more', to: '/about' },
    { name: 'Enroll now', to: 'https://docs.google.com/forms/d/e/1FAIpQLScOF-wMyki2RrpToBKCNiS--xniFngmWXMrOM9iivyc2mEqgQ/viewform' },
  ]
  const stats = [    
    { name: 'Free Courses', value: '6' },
    { name: 'Premium Courses', value: '3' },   
    { name: 'Study schedule', value: 'Flexible' }, 
    { name: 'Collaboration', value: 'AIFEST' },    
  ]
  
  export default function Hero() {
    return (
      <div className="mainbg relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          // src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          src={MainBG}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto lg:max-w-7xl px-6 lg:px-8">
          <div className="md:max-w-xl lg:mx-0 bg-yellow-50 text-gray-900 p-8 opacity-70">
            <h2 className="text-red-700 text-4xl font-bold tracking-tight sm:text-6xl">Dreams Endeavour</h2>
            <p className="mt-6 text-lg leading-8">
            Dreams Endeavour is a one of a kind venture that you will love to explore. The time and money invested is sure to be of great worth that will add brilliance to your professional dreams.
            </p>
          </div>
          <div className="mx-auto mt-10 lg:max-w-4xl lg:mx-0">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-base font-semibold leading-7 sm:grid-cols-2 md:flex lg:gap-x-10">
              
              {links.map((link) => (                
                <button className='bg-[#ff8a00] text-gray-100 p-2 rounded-md hover:text-gray-700'>
                  <NavLink
                    to={link.to}                                      
                  >
                    {link.name}
                  </NavLink>
                </button>                
              ))}

            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse rounded-md opacity-70 p-4 bg-yellow-50 text-gray-700">
                  <dt className="text-base leading-7">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  