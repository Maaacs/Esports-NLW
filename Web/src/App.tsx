import './styles.css'
interface ButtonPropriets{//propriedades
  title: string;
}

function Button(props: ButtonPropriets){//componente
  return (
      <button>
        {props.title}
      </button>
  )
}

function App() {
  /*return <h1>Hello Max</h1>*/
  return (
      <div>
        <Button title="Send 1" />
        <Button title="Send 2"/>
        <Button title="Send 3"/>
      </div>
  )
  /*return <Button/>*/
}

export default App
