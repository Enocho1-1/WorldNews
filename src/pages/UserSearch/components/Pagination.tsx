interface PaginationProp{
    data: number;
    postperPage: number;
    pageChange: (page:number) => void
}
export const Pagination = ({data,postperPage,pageChange}:PaginationProp) => {
    const array = []
    for(let i = 1; i <= Math.ceil(data/postperPage); i++){
        array.push(i)
    }
  return (
    <>
        <nav aria-label="Page navigation example" className="mt-6 flex justify-center">
            <ul className="inline-flex space-x-[10px] text-sm ">
                { array.map( number => (
                    <li key={number}>
                        <a href="#top" onClick={() => {pageChange(number)}} className="flex rounded-lg items-center justify-center px-3 h-8 leading-tight text-black bg-primary-black border border-dark_orange hover:bg-secondary-blue active:bg-orange_red">{number}</a>
                    </li>
                ))}
            
            </ul>
        </nav>
    </>
  )
}
