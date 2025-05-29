import appData from "@data/app.json";

const Preloader = () => {
  return (
    <div className="preloader"> 
        <figure>
            <img src={appData.settings.preloader.image} alt={appData.settings.preloader.alt} /> 
        </figure>
    </div>
  );
};
export default Preloader;
