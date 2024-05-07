
const Country = ({ name, capital, population, allLanguages, flags }) => {
  return (
    <>
      <h2>{name}</h2>
      <p>capital: {capital}</p>
      <p>population: {population}</p>
      <h3>languages</h3>
      <ul>
        {Object.keys(allLanguages).map(i => <li key={i + 42343}>{(allLanguages)[i]}</li>)}
      </ul>
      <img src={flags.svg} alt={flags.alt} width={"100px"} />
    </>
  )
}

export default Country