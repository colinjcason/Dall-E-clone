

const App = () => {
  const surpriseOptions = [
    'a blue ostrich eating melon',
    'Darth Vader kissing an ewok',
    'the death star going bowling'
  ]

  return (
    <div className="app">
      <section className='search-section'>
        <p>Start with a detailed description 
          <span className="surprise">Surprise me</span>
        </p>
        <div className="input-container">
          <input placeholder="A teddy bear skateboarding"/>
          <button>Generate</button>
        </div>
      </section>
      <section className="image-section"></section>
    </div>
  );
}

export default App;
