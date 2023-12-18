import { useState } from "react"

export const MobileHeader = () => {
  const [language, setLanguage] = useState("EN")
  const [hidden, setHidden] = useState(false)
  return (
    <header className="max-w-full w-[100%]" data-testid="mobile-header">
      <div id="mobileHeader">
        <aside className="px-2 py-2 h-inherit min-[480px]:text-[2.2rem] max-[480px]:text-[2.4rem]  flex justify-evenly min-[390px]:justify-between">
            <div className="flex">
              <span className="bi bi-list mr-2 hover:cursor-pointer"></span>
              <>
                <h1 className="font-light">World</h1>
                <p className="font-semibold">News.</p>
              </>
            
                <div className="relative">
                  <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" onClick={ () => setHidden(!hidden)} className=" font-medium text-[1rem] px-5 py-2.5 text-center inline-flex items-center" type="button">{language}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                  </button>

          
                  <div id="dropdownHover" className={hidden ? (`absolute top-[90%] left-[40%] z-10 bg-gray-200 text-gray-900 divide-y divide-gray-100 rounded-lg shadow w-auto">`) : (`absolute top-[90%] left-[40%] z-10 hidden bg-gray-200 text-gray-900 divide-y divide-gray-100 rounded-lg shadow w-auto">`)}>
                      <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
                      { ["EN","FR"].map((item,index) => (
                          <li key={index} >
                          <a href="#" onClick={() => {setLanguage(item); setHidden(false)}} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item}</a>
                          </li>
                      ))}
                      </ul>
                  </div>
                </div>
            </div>

          
            <span className="bi bi-tv self-center hover:cursor-pointer"></span>
          </aside>
      </div>
    </header>
  )
}
