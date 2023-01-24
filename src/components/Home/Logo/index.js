import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/my_logo_solid.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  // useEffect(() => {
  //   gsap.registerPlugin(DrawSVGPlugin)

  //   gsap
  //     .timeline()
  //     .to(bgRef.current, {
  //       duration: 1,
  //       opacity: 1,
  //     })
  //     .from(outlineLogoRef.current, {
  //       drawSVG: 0,
  //       duration: 5,
  //     })

  //   gsap.fromTo(
  //     solidLogoRef.current,
  //     {
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       delay: 4,
  //       duration: 4,
  //     }
  //   )
  // }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        width="560.000000pt"
        height="900.000000pt"
        viewBox="0 0 560.000000 900.000000"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M333 7763 l197 -3 2 -3243 3 -3242 2 3236 3 3236 38 7 c63 10 1328 7
1356 -4 l26 -10 0 -1230 0 -1230 1060 0 1060 0 -2 1193 -3 1192 -2 -1187 -3
-1188 -1050 0 -1050 0 0 1234 c0 1116 -2 1234 -16 1240 -9 3 -421 5 -917 4
-496 -2 -813 -4 -704 -5z"
          />
          <path
            ref={outlineLogoRef}
            d="M3623 7763 c-10 -4 -12 -250 -11 -1191 l3 -1187 2 1181 3 1182 31 6
c53 10 1805 7 1833 -4 l26 -10 -2 -3277 -3 -3278 -712 -3 -713 -2 0 1470 0
1470 -1060 0 -1060 0 -2 -1467 -3 -1468 -937 -3 -938 -2 -3 3247 -2 3248 -3
-3252 -2 -3253 950 0 950 0 2 1468 3 1467 1045 0 1045 0 3 -1462 2 -1463 -225
0 -225 0 -3 1417 -2 1418 -3 -1422 -2 -1423 955 0 955 0 0 3294 0 3294 -22 6
c-27 7 -1858 7 -1875 -1z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
