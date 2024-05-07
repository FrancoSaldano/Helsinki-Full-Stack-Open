const Form = ({ addDataPerson }) => {
  return (
    <form onSubmit={addDataPerson}>
      <div>
        name: <input />
      </div>
      <div>
        number: <input />
      </div>
      <button type="submit">add</button>
    </form>
  )
}

export default Form