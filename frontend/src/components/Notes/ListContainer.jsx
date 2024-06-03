import List from './List'

const ListContainer = ({ list }) => {
  console.log(list)
  return (
    <List list={list} />
  )
}

export default ListContainer