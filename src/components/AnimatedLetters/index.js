import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    // wrapper span element, that will group all the characters together
    <span>
      {
        // mapping over the array passed in the prop strArray
        // this will loop over each character and return a new span element
        strArray.map((char, i) => (
          // for each character, a new span element is returned
          // this element will have a class of `${letterClass} _${i + idx}`
          // this classname will be used to style the individual character
          // and the character as its child
          <span key={char + i} className={`${letterClass} _${i + idx}`}>
            {char}
          </span>
        ))
      }
    </span>
  )
}

export default AnimatedLetters
