import './card.css'
const CountryCard = ({ flag, name }) => {
    return (
      <div
         className="countryCard"
      >
        <img src={flag} alt={name} style={{ height: "100px", width: "100px" }} />
        <h3>{name}</h3>
      </div>
    );
  };
  

const Country=({countries})=>{
  console.log(countries)
return (<div
    style={{
      display: "flex",
      flexDirection: "row",
      gap: "10px",
      flexWrap: "wrap",
    }}
  >
    {countries.map((item,index) => {
      return (
        <CountryCard key={index} flag={item.png} name={item.common} />
      );
    })}
  </div>
);
}
export default Country;