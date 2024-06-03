import { useState } from 'react'

const useFilter = () => {

  const [filter, setFilter] = useState('')
  const findIn = (thing, object) => { return object.find(el => (((el.name.toLowerCase() || el.number.toLowerCase()) === thing.toLowerCase()) || (thing === " "))) }
  const findId = (thing, object) => {
    let obj = object.find(el => ((el.name.toLowerCase()) === thing.toLowerCase()))
    return obj?.id
  }

  let contactFiltered = (show, list, condition) => {
    let res = show ? list?.filter(element => (element?.name.toLowerCase()).includes(condition.toLowerCase()))
      : list
    return res
  }

  return {
    filter,
    findIn,
    findId,
    setFilter,
    contactFiltered
  }
}

export default useFilter