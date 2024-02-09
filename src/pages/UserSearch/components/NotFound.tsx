

export const NotFound = () => {
    const responsiveCSS = "max-[720px]:mt-0 min-[720px]:max-[1340px]:mt-[120px] min-[1340px]:mt-[90px]"
  return (
    <div className="relative max-w-[1200px] w-[100%] flex font-open_sans">
        <section className={`${responsiveCSS} justify-center items-center text-2xl font-semibold `} id="not-found">
            <h1>Sorry we could not find the search you were looking for</h1>
            <span className="bi bi-exclamation-triangle my-4 text-[6.25rem] font-bold text-dark_orange"></span>
            <h1>Please change your search or browse the "JUST IN" Stories</h1>
        </section>
    </div>
  )
}
