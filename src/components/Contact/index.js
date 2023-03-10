import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const contactMeArray = 'Contact me'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      //DEBUG:
      .sendForm(
        'service_3j0ftvs',
        'template_edx2fmc',
        form.current,
        '8m18XIqA1CObfyhEp'
      )
      .then(
        () => {
          alert(
            'Your Message was successfully sent!🤙 Thank you for reaching out! 🙏'
          )
          window.location.reload(false)
        },
        () => {
          alert("Oops, that's be embarassing, something went wrong! 😅")
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contactMeArray}
              idx={15}
            />
          </h1>
          <p>
            Opportunities, requests or questions, don't hesitate to contact me
            using the below form. (Yes, It works! 🧙🏼‍♂️)
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        {/* Map Info  */}
        <div className="info-map">
          Haythem lives here, come over for a cup of coffee 😊 <br />
          <br />
          Tunis, Tunisia
          <br />
          <span>bendrissiahaythem@gmail.com</span>
        </div>

        {/* Map */}
        <div className="map-wrap">
          <MapContainer
            center={[36.80023863412861, 10.186144344705701]}
            zoom={5}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[36.80023863412861, 10.186144344705701]}>
              <Popup>
                Haythem lives here, come over for a cup of coffee 😊
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
