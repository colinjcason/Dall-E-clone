import { useState } from "react"

const App = () => {
  const [images, setImages] = useState(null)
  const [value, setValue] = useState('')
  const surpriseOptions = [
    'a blue ostrich eating melon',
    'Darth Vader kissing an ewok',
    'the death star going bowling'
  ]

  const getImages = async () => {
    setImages(null)
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify({
          message: value
        }),
        headers: {
          'Content-type': 'application/json'
        }
      }
      const response = await fetch('http://localhost:8000/images', options)
      const data = await response.json()
      console.log(data)
      setImages(data)
    } catch (error) {
      console.log(error)
    }
  }

  const surpriseMe = () => {
    setImages(null)
    const randomValue = surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)]
    setValue(randomValue)
  }

  return (
    <div className="app">
      <section className='search-section'>
        <p>Start with a detailed description 
          <span className="surprise" onClick={surpriseMe}>Surprise me</span>
        </p>
        <div className="input-container">
          <input 
            placeholder="A teddy bear skateboarding" 
            onChange={e => setValue(e.target.value)}
            value={value}
          />
          <button onClick={getImages}>Generate</button>
        </div>
      </section>
      <section className="image-section">
        {images?.map((image, index) => (
          <img key={index} src={image.url} alt={`${value}`} />
        ))}
      </section>
    </div>
  );
}

export default App;
