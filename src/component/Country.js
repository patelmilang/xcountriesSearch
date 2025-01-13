
const CountryCard = ({ flag, name }) => {
    return (
      <div
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid gray",
          flexDirection: "column",
          padding: "10px",
          width: "200px",
          height: "200px",
          textAlign: "center",
          borderRadius: "5px",
        }}
      >
        <img src={flag} alt={name} style={{ height: "100px", width: "100px" }} />
        <h3>{name}</h3>
      </div>
    );
  };
  

const Country=({countries})=>{
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
        <CountryCard key={index} flag={item.flag} name={item.name} />
      );
    })}
  </div>
);
}
export default Country;