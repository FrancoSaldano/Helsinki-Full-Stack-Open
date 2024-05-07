import React from 'react'

const List = ({ list, onDeletePerson }) => {
  // Console log removed for performance and to adhere to best practices
  // (use debugging tools or error handling instead)

  return (
    <ul>
      {list.map((person) => (
        <li key={person.id}>
          <p>
            {`${person.name} `}
            {/* Use a separate span to style "pepe" differently and avoid direct string manipulation */}
            <span>pepe</span>
            {` ${person.number}`}
          </p>
          <button onClick={() => onDeletePerson(person.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default List
