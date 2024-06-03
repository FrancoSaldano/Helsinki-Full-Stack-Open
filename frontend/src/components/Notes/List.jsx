const List = ({ list, delDataPerson }) => {
  console.log(list, "lista en List")
  return (
    <ul>
      {list?.map(person => {
        return (
          <li key={person.id}>
            <p >
              {`${person.name} `} {` ${person.number}`}
            </p>
            <button onClick={() => delDataPerson(person.id, person.name)}>delete</button>
          </li>
        )
      })}
    </ul>
  )
}

export default List