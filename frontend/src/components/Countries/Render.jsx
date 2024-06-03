import Country from './Country'
import CountryList from './CountryList'
const URL = 'https://restcountries.com/v3.1/name/'
const URLWEATHER = 'http://api.weatherstack.com/current?'

const key = import.meta.env.VITE_API_WEATHER


const Render = () => {

  const [cname, setCname] = useState('')
  const [country, setCountry] = useState([])
  const [list, setList] = useState([])

  const takeName = (event) => {
    event.preventDefault()
    setCname(event.target[0].value)
  }
  const takeCountries = (data) => {
    setCountry(data)
    let info = data.map(c => c.name) //estoy agregando a los countrys los names solamente
    setList(info)
  }

  useEffect(() => {
    const promise = axios.get(`${URL + cname}`)
    promise.then(response => {
      let { data } = response
      takeCountries(data)
      console.log(data, 'data')
      console.log(list)
    })
  }, [cname])

  useEffect(() => {
    let params = new URLSearchParams({
      access_key: key,
      query: country
    })
    const promise = axios.get(URLWEATHER + params)
    promise.then(response => {
      let { data } = response
      console.log(data)
    })
  }, [country])


  return (
    <div>
      <form action="" onSubmit={takeName}>
        <input type='text' />
        <button type="submit">Send</button>
      </form>

      {
        country.length === 1 ?
          (
            <Country name={(country[0].name).common}
              capital={country[0].capital}
              population={country[0].population}
              allLanguages={country[0].languages}
              flags={country[0].flags}
            />

          )
          :
          list.length < 10 ?
            <CountryList list={list} country={country} /> :
            <p>Too many countries to list them, pick some specific</p>
      }
    </div>
  )
}

export default Render