
/* eslint-disable */
export const HeaderBottom = ({headerObject}) => {

  const { navOptions,category,search,setCategory,setSearch} = headerObject
  const hiddenSearchStyling= "nav_secondary w-[15%]"
  const SearchStyling= "nav_secondary w-[25%]"

  return (
    <div className="flex w-inherit min-h-[2rem] max-[1340px]:flex-col">
    {/* Category Nav Menu */}
    <nav className={`${category.color} h-inherit w-[85%] max-[1340px]:w-[100%] flex flex-wrap justify-around font-open_sans`}>
      {navOptions.map((item,index) => (
        <a key={index} onClick={() => setCategory(item)} className="hover:cursor-pointer mx-2 text-lg font-medium">
          {item.name}
        </a>
      ))}
    </nav>

    {/* Live,Weather,Search Menu */}
    <aside className={ search ? (`${SearchStyling}`) : (`${hiddenSearchStyling}`)}>
        <div className="nav_secondary_item flex justify-center text-lg">
          <span className="bi bi-tv"></span>
          <h1 className="mx-2 ">LIVE</h1>
        </div>

         <div className="nav_secondary_item">
          <span className="bi bi-cloud-sun"></span>
        </div>

        <div className={ search ? ("text-gray-200 w-[15.625rem] flex justify-center items-center hover:cursor-pointer"): ("nav_secondary_item")}>
          <span onClick={() => setSearch(!search)} className="bi bi-search"></span>
          { search && 
            (
              <form>
                <input type="text" className=" ml-4 text-md bg-transparent" placeholder="Search..." />
              </form>
            )
          }
        </div> 
    </aside>
  </div>
  )
}
