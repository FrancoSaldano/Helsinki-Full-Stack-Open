const Filter = ({ setFilter, show, setShow }) => {

  const addFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <>
      filter shown whit: <input onChange={addFilter} />
      <button onClick={() => setShow(!show)}>{show ? "Todas" : "Filtro"}</button>
    </>
  )
}

export default Filter