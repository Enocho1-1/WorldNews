import { useTitle } from "../../hooks"

export const Weather = () => {
  useTitle("WEATHER")

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  function success(pos) {
    const crd = pos.coords;
  
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  

  return (
    <div className="flex font-open_sans">
        <section className="w-[1200px] max-[720px]:mt-0 min-[720px]:max-[1340px]:mt-[120px] min-[1340px]:mt-[90px] flex flex-col">
          <header className="w-inherit flex border-b-2 border-b-light_cyan">
              <span className= "bg-light_cyan h-[2.5rem] w-[1.875rem]"></span>
              <h1 className="font-semibold text-xl ml-4 self-center">Weather</h1>
            </header>
        
        </section>
    </div>
   
  )
}
