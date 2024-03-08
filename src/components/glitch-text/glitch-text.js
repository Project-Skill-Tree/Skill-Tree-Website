import "./glitch-text.css"
import {useGlitch} from 'react-powerglitch'
import {useEffect, useState} from "react";

export const GlitchText = ({text, style={}}) => {
  const glitch = useGlitch({
    "slice": {
    "count": 4,
      "velocity": 8
    },
    "shake": {
      "velocity": 15,
      "amplitudeX": 0.1,
      "amplitudeY": 0.1
    },
  });
  const [textDisplay, setTextDisplay] = useState(text)

  const animateFlicker = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let iterations = 0;
    const flicker = setInterval(() => {
      const newText = textDisplay.split("").map((x, index) => {
        if (index < iterations || x === " ") {
          return x
        }
        return letters[Math.floor(Math.random() * 26)]
      }).join("");

      iterations += 1 / 5;
      console.log(newText);
      setTextDisplay(newText)
      if (iterations >= text.length) {
        clearInterval(flicker)
      }
    }, 30);
  }

  useEffect(() => {
    animateFlicker()
    //const interval = setInterval(() => animateFlicker(), 6000);
    //return () => {
    //  clearInterval(interval)
    //}
  }, [])

  return (
    <span ref={glitch.ref} style={style}>{textDisplay}</span>
  )
}