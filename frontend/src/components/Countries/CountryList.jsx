import { useState } from 'react'
import Country from './Country'


const CountryList = ({ list, country }) => {
  const [show, setShow] = useState(false)
  const [index, setIndex] = useState(0)
  return (
    <>{
      show ?
        <Country name={(country[index].name).common}
          capital={country[index].capital}
          population={country[index].population}
          allLanguages={country[index].languages}
          flags={country[index].flags}
        /> :
        list.map((el, i) =>
          <div key={i + 12313}>
            <p>{el.common}</p>

            <button onClick={() => {
              setShow(!show)
              setIndex(i)
            }}>Details</button>
          </div>
        )

    }
    </>)
}

export default CountryList