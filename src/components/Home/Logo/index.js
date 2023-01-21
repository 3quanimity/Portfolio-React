import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-s-old.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          {/* TODO: change S to H */}
          <path
            ref={outlineLogoRef}
            // d="M 446.401 69.6 L 462.001 69.6 A 57.127 57.127 0 0 0 456.263 71.639 Q 453.257 72.878 449.921 74.571 A 125.256 125.256 0 0 0 445.201 77.1 A 174.834 174.834 0 0 0 428.516 87.813 A 194.181 194.181 0 0 0 426.151 89.55 Q 416.701 96.6 409.201 104.4 A 256.585 256.585 0 0 0 384.566 135.64 A 288.253 288.253 0 0 0 380.851 141.3 Q 367.801 161.7 355.201 183.15 Q 342.601 204.6 328.651 224.55 Q 314.701 244.5 297.601 260.1 Q 272.701 283.2 240.751 295.35 Q 208.801 307.5 173.101 307.5 A 203.862 203.862 0 0 1 147.317 305.96 Q 133.657 304.216 122.135 300.495 A 106.638 106.638 0 0 1 111.751 296.55 A 100.079 100.079 0 0 1 92.78 285.7 A 73.463 73.463 0 0 1 74.701 266.85 A 75.372 75.372 0 0 1 62.413 225.876 A 90.452 90.452 0 0 1 62.401 224.4 A 67.4 67.4 0 0 1 69.423 194.689 A 79.922 79.922 0 0 1 70.951 191.7 A 91.412 91.412 0 0 1 86.961 170.394 A 111.958 111.958 0 0 1 95.251 162.9 A 112.217 112.217 0 0 1 118.139 148.527 A 142.11 142.11 0 0 1 133.351 142.35 A 141.102 141.102 0 0 1 164.018 135.688 A 177.219 177.219 0 0 1 183.001 134.7 A 174.452 174.452 0 0 1 201.148 135.586 Q 217.285 137.278 228.901 142.2 A 78.218 78.218 0 0 1 240.868 148.458 Q 247.253 152.585 251.76 157.62 A 43.608 43.608 0 0 1 255.001 161.7 Q 263.401 173.7 263.401 187.5 A 47.159 47.159 0 0 1 260.49 203.543 A 60.645 60.645 0 0 1 257.101 211.2 A 68.199 68.199 0 0 1 246.377 226.11 A 86.124 86.124 0 0 1 238.801 233.25 A 85.477 85.477 0 0 1 222.171 244.05 A 110.668 110.668 0 0 1 209.401 249.45 A 104.407 104.407 0 0 1 188.844 254.337 A 141.529 141.529 0 0 1 169.501 255.6 Q 150.301 255.6 138.751 250.8 Q 127.201 246 122.101 238.5 A 31.347 31.347 0 0 1 118.526 231.642 A 24.442 24.442 0 0 1 117.001 223.2 A 23.375 23.375 0 0 1 119.101 213.774 Q 120.595 210.364 123.151 206.871 A 53.608 53.608 0 0 1 126.601 202.65 Q 133.974 194.47 147.188 188.237 A 115.187 115.187 0 0 1 155.701 184.65 Q 170.859 178.937 191.999 177.664 A 209.962 209.962 0 0 1 204.601 177.3 A 185.532 185.532 0 0 1 233.151 179.415 A 152.88 152.88 0 0 1 251.101 183.3 A 136.835 136.835 0 0 1 273.355 191.616 A 111.532 111.532 0 0 1 288.301 200.25 A 89.462 89.462 0 0 1 303.91 213.755 A 74.574 74.574 0 0 1 312.901 225.9 Q 321.601 240.6 321.601 258.3 A 73.081 73.081 0 0 1 318.793 277.93 A 99.012 99.012 0 0 1 313.201 292.95 A 95.427 95.427 0 0 1 299.947 313.71 A 125.568 125.568 0 0 1 287.101 327 A 116.263 116.263 0 0 1 265.458 342.2 Q 254.996 347.973 242.462 352.509 A 191.23 191.23 0 0 1 241.651 352.8 Q 213.901 362.7 174.901 362.7 A 213 213 0 0 1 123.579 356.668 A 191.482 191.482 0 0 1 106.951 351.75 A 192.232 192.232 0 0 1 65.815 332.011 A 171.145 171.145 0 0 1 51.301 321.6 A 147.763 147.763 0 0 1 20.118 287.846 A 137.536 137.536 0 0 1 13.651 277.05 Q 0.001 251.7 0.001 222.9 Q 0.001 194.1 13.651 168.6 A 143.101 143.101 0 0 1 48.341 126.325 A 163.893 163.893 0 0 1 51.301 123.9 A 180.771 180.771 0 0 1 96.297 97.758 A 210.584 210.584 0 0 1 106.951 93.75 A 202.483 202.483 0 0 1 165.669 82.971 A 231.535 231.535 0 0 1 174.601 82.8 A 201.454 201.454 0 0 1 202.686 84.829 A 226.944 226.944 0 0 1 208.051 85.65 Q 225.301 88.5 241.051 94.35 A 112.922 112.922 0 0 1 260.095 103.442 A 96.651 96.651 0 0 1 268.801 109.35 A 64.059 64.059 0 0 1 283.106 124.285 A 59.267 59.267 0 0 1 287.101 131.1 L 284.101 132 A 56.861 56.861 0 0 0 267.841 112.102 A 66.565 66.565 0 0 0 266.401 111 Q 254.701 102.3 239.401 96.75 Q 224.101 91.2 207.451 88.5 Q 190.801 85.8 174.601 85.8 A 208.893 208.893 0 0 0 122.944 92.043 A 189.517 189.517 0 0 0 108.151 96.45 A 187 187 0 0 0 66.11 116.803 A 168.503 168.503 0 0 0 53.401 126 A 146.449 146.449 0 0 0 24.679 156.191 A 133.409 133.409 0 0 0 16.351 169.65 Q 3.001 194.4 3.001 222.9 Q 3.001 251.1 16.351 276 A 137.99 137.99 0 0 0 49.048 316.08 A 159.287 159.287 0 0 0 53.401 319.65 A 179.342 179.342 0 0 0 98.394 345.431 A 208.009 208.009 0 0 0 108.151 349.05 A 200.257 200.257 0 0 0 165.547 359.523 A 229.938 229.938 0 0 0 174.601 359.7 A 253.39 253.39 0 0 0 203.969 358.091 Q 218.982 356.336 231.817 352.668 A 137.799 137.799 0 0 0 240.301 349.95 A 163.896 163.896 0 0 0 262.293 340.328 Q 274.305 333.925 283.609 325.963 A 100.884 100.884 0 0 0 285.001 324.75 Q 302.401 309.3 310.501 291.75 A 94.761 94.761 0 0 0 316.247 275.922 A 69.881 69.881 0 0 0 318.601 258.3 Q 318.601 241.5 310.051 227.25 A 76.631 76.631 0 0 0 293.429 207.984 A 93.231 93.231 0 0 0 286.201 202.5 A 108.864 108.864 0 0 0 264.908 191.25 A 138.295 138.295 0 0 0 250.051 186.3 A 159.898 159.898 0 0 0 222.406 181.402 A 198.888 198.888 0 0 0 204.301 180.6 A 194.376 194.376 0 0 0 184.686 181.53 Q 168.916 183.134 157.051 187.5 Q 144.137 192.252 135.777 198.356 A 47.296 47.296 0 0 0 129.151 204.15 Q 120.001 213.9 120.001 222.9 A 22.723 22.723 0 0 0 122.367 232.863 A 30.304 30.304 0 0 0 124.801 237 A 25.9 25.9 0 0 0 130.56 242.864 Q 134.621 245.922 140.401 248.25 A 51 51 0 0 0 149.132 250.815 Q 157.777 252.6 169.501 252.6 A 136.18 136.18 0 0 0 189.3 251.228 A 101.248 101.248 0 0 0 207.901 246.75 A 104.24 104.24 0 0 0 224.091 239.598 A 81.556 81.556 0 0 0 236.401 231.3 A 78.385 78.385 0 0 0 247.266 220.55 A 62.862 62.862 0 0 0 254.251 210.15 A 55.64 55.64 0 0 0 258.665 199.421 A 42.902 42.902 0 0 0 260.401 187.5 A 39.875 39.875 0 0 0 254.084 166.073 A 49.98 49.98 0 0 0 252.151 163.2 A 46.742 46.742 0 0 0 241.49 152.744 Q 235.217 148.22 226.801 144.75 Q 213.509 139.27 194.416 138.05 A 179.133 179.133 0 0 0 183.001 137.7 A 167.437 167.437 0 0 0 156.593 139.694 A 130.07 130.07 0 0 0 134.401 145.2 A 132.551 132.551 0 0 0 112.047 155.251 A 107.957 107.957 0 0 0 97.351 165.3 Q 81.901 177.9 73.651 193.35 A 71.468 71.468 0 0 0 67.095 210.293 A 60.092 60.092 0 0 0 65.401 224.4 A 73.739 73.739 0 0 0 67.269 241.456 A 51.783 51.783 0 0 0 78.151 263.4 A 64.994 64.994 0 0 0 96.919 278.37 A 91.959 91.959 0 0 0 114.151 285.45 A 154.213 154.213 0 0 0 137.695 290.51 Q 149.339 292.127 162.464 292.43 A 265.822 265.822 0 0 0 168.601 292.5 Q 195.601 292.5 219.751 282.9 Q 243.901 273.3 265.351 257.1 Q 286.801 240.9 306.001 220.65 Q 325.201 200.4 342.601 178.95 A 6356.217 6356.217 0 0 0 367.857 147.619 A 5636.972 5636.972 0 0 0 375.901 137.55 A 567.349 567.349 0 0 1 393.504 116.483 A 442.982 442.982 0 0 1 406.801 102 Q 417.301 90.9 427.051 82.95 Q 436.801 75 446.401 69.6 Z M 213.901 84.9 L 210.301 84.9 A 36.097 36.097 0 0 1 219.232 74.768 Q 225.096 70.104 233.551 66.6 Q 250.201 59.7 270.601 59.7 A 97.455 97.455 0 0 1 283.517 60.506 Q 290.166 61.396 295.729 63.272 A 49.091 49.091 0 0 1 301.351 65.55 Q 313.501 71.4 319.501 81 Q 325.501 90.6 325.501 101.7 A 46.352 46.352 0 0 1 321.391 120.48 A 63.159 63.159 0 0 1 315.901 130.35 A 63.699 63.699 0 0 1 301.328 145.527 A 86.919 86.919 0 0 1 287.701 153.9 A 82.712 82.712 0 0 1 267.641 160.727 Q 258.451 162.659 247.849 163.082 A 151.88 151.88 0 0 1 241.801 163.2 A 179.064 179.064 0 0 1 217.958 161.702 Q 205.494 160.025 195.014 156.47 A 93.552 93.552 0 0 1 185.251 152.55 A 98.74 98.74 0 0 1 168.169 142.443 A 70.489 70.489 0 0 1 151.351 124.95 A 67.355 67.355 0 0 1 141.958 104.134 A 61.198 61.198 0 0 1 140.101 89.1 A 68.654 68.654 0 0 1 145.761 62.083 A 81.877 81.877 0 0 1 148.051 57.15 Q 156.001 41.4 171.901 28.35 A 106.568 106.568 0 0 1 192.842 15.066 A 142.24 142.24 0 0 1 211.351 7.65 A 150.113 150.113 0 0 1 237.591 1.795 Q 250.006 0.112 263.937 0.007 A 246.938 246.938 0 0 1 265.801 0 Q 289.501 0 312.151 7.05 Q 334.801 14.1 355.651 24.6 Q 376.501 35.1 394.351 45.45 A 803.513 803.513 0 0 0 409.223 53.875 Q 416.034 57.632 422.15 60.802 A 440.14 440.14 0 0 0 426.151 62.85 A 94.176 94.176 0 0 0 433.295 66.119 Q 441.936 69.612 448.082 69.612 A 20.863 20.863 0 0 0 448.801 69.6 L 448.801 72.9 Q 439.201 73.2 425.251 66.3 Q 411.301 59.4 393.751 49.35 Q 376.201 39.3 355.801 29.1 Q 335.401 18.9 313.051 12 Q 290.701 5.1 267.301 5.1 Q 240.901 5.1 218.401 11.55 A 147.264 147.264 0 0 0 194.892 20.42 A 119.735 119.735 0 0 0 179.101 29.55 Q 162.301 41.1 153.001 56.7 Q 143.701 72.3 143.701 90.6 Q 143.701 111.3 156.151 127.05 A 73.696 73.696 0 0 0 175.522 144.042 A 98.57 98.57 0 0 0 190.801 151.65 A 121.154 121.154 0 0 0 217.946 158.804 A 164.424 164.424 0 0 0 242.101 160.5 A 109.376 109.376 0 0 0 266.726 157.822 A 92.172 92.172 0 0 0 282.451 152.7 Q 300.601 144.9 311.401 131.7 A 47.484 47.484 0 0 0 320.279 115.435 A 44.76 44.76 0 0 0 322.201 102.3 A 36.963 36.963 0 0 0 319.355 87.581 Q 315.867 79.448 308.101 73.5 A 49.514 49.514 0 0 0 290.495 65.073 Q 283.522 63.219 275.302 62.814 A 95.415 95.415 0 0 0 270.601 62.7 Q 251.401 62.7 236.251 68.7 Q 223.542 73.733 216.428 81.722 A 35.952 35.952 0 0 0 213.901 84.9 Z M 615.901 64.5 L 615.001 66.9 Q 614.157 66.619 613.05 66.601 A 9.377 9.377 0 0 0 612.901 66.6 L 608.101 66.6 A 106.99 106.99 0 0 0 578.139 71.165 Q 565.558 74.833 552.107 81.45 A 225.368 225.368 0 0 0 535.651 90.45 Q 504.751 108.99 470.498 141.578 A 633.545 633.545 0 0 0 450.601 161.4 A 483.291 483.291 0 0 0 415.81 201.956 A 422.407 422.407 0 0 0 405.751 215.7 A 368.402 368.402 0 0 0 389.489 240.916 Q 382.357 253.092 377.073 264.62 A 223.035 223.035 0 0 0 375.601 267.9 A 162.898 162.898 0 0 0 369.459 284.011 Q 366.912 292.032 365.757 299.203 A 71.176 71.176 0 0 0 364.801 310.5 Q 364.801 327 371.251 335.7 Q 377.701 344.4 390.001 344.4 Q 402.301 344.4 411.601 336.3 L 411.601 339 Q 402.301 347.1 389.701 347.1 A 34.742 34.742 0 0 1 377.205 344.929 A 31.143 31.143 0 0 1 364.801 336.15 A 37.693 37.693 0 0 1 356.335 318.871 A 54.158 54.158 0 0 1 355.201 307.5 Q 355.201 298.474 359.02 286.657 A 135.011 135.011 0 0 1 363.001 276 A 213.002 213.002 0 0 1 371.698 257.87 Q 376.518 248.871 382.603 239.239 A 365.252 365.252 0 0 1 384.901 235.65 A 426.765 426.765 0 0 1 404.459 208.052 A 523.683 523.683 0 0 1 418.051 191.1 Q 437.101 168.3 459.301 147 A 501.163 501.163 0 0 1 493.392 116.418 Q 510.609 102.418 527.205 91.942 A 273.497 273.497 0 0 1 538.201 85.35 Q 564.823 70.243 587.427 65.776 A 94.238 94.238 0 0 1 605.701 63.9 L 606.151 63.9 L 607.201 63.9 Q 608.701 63.9 615.901 64.5 Z M 437.701 206.1 L 300.301 206.1 L 302.101 202.8 L 437.701 202.8 L 437.701 206.1 Z"
            d="m2930 4560c-344-16-623-85-915-228-231-114-406-241-600-436-61-60-145-137-188-169-432-325-715-757-806-1230-109-564 21-1117 384-1641 250-360 780-877 1547-1511 451-373 600-505 803-708 215-216 275-293 350-448 55-114 75-188 82-298 6-96-6-173-39-257-21-53-27-59-73-76-136-51-374-73-521-46-401 71-763 376-1088 916-21 35-43 63-50 63s-32-13-57-29c-74-48-229-141-233-141-3 0-54-31-113-68s-135-84-168-102c-33-19-67-39-77-45-9-5-56-34-105-63-48-29-153-94-233-143s-152-92-160-96c-26-12-144-86-180-114-19-15-137-88-262-164-130-78-228-143-228-151s30-70 66-137c207-379 396-640 644-887 219-218 401-350 665-480 247-122 484-196 775-241 172-27 628-38 819-19 636 61 1161 302 1561 716 47 48 128 120 181 160 402 304 684 722 804 1189 61 240 70 318 70 640 0 259-3 304-23 418-84 467-268 823-647 1257-192 218-401 409-1095 995-637 539-1034 894-1208 1081-152 163-223 311-223 465 0 43 2 83 5 88 20 32 266 41 394 15 322-65 649-312 972-731 39-51 70-83 82-83 10 0 283 234 615 528 328 290 684 605 792 700s197 181 199 191-38 62-100 131c-399 446-754 740-1106 918-314 159-659 255-962 268-63 2-135 6-160 7-25 2-110 0-190-4zm570-58c671-123 1188-450 1813-1144 53-60 97-112 96-115-1-12-411-367-423-367-6 0-20-13-31-28-11-16-164-156-340-312l-320-283-18 24c-239 311-459 523-675 651-99 59-246 117-344 137-112 23-311 21-416-4-200-48-373-182-450-349-32-70-34-82-34-176 0-179 64-318 229-494 182-195 573-545 1213-1086 693-585 897-771 1085-985 379-434 563-790 647-1257 20-113 23-161 23-398 0-300-10-384-70-620-97-379-302-729-586-1e3 -105-100-185-166-191-159-9 8-63-29-92-63-48-57-291-191-482-266-202-79-481-143-735-167-188-18-606-8-779 19-290 45-528 119-775 241-385 190-680 444-972 836-118 159-345 527-332 538 46 36 763 456 773 453 16-7 36 11 30 27-3 9 131 99 212 142 28 15 203 122 231 141 21 14 23 13 45-23 225-384 515-687 794-829 164-84 300-115 503-115 125 0 235 15 340 46 17 5 22 4 17-4-13-22 24-13 47 11 12 13 53 40 91 61 193 105 351 279 418 462 18 49 21 82 22 199 1 165-11 222-79 363-75 156-135 232-355 453-208 208-355 338-808 713-766 633-1288 1142-1537 1501-305 440-449 908-415 1355 24 318 109 596 262 848 74 123 192 277 231 301 18 11 43 38 56 61 24 42 155 164 277 255 293 221 660 367 1050 419 167 23 601 15 754-13zm-2357-938c-321-485-398-1123-203-1693 70-208 178-417 315-615 250-360 780-877 1547-1511 451-373 600-505 803-708 215-216 275-292 350-448 65-136 80-200 79-343-1-134-15-186-80-302-60-108-201-244-326-317-53-31-55-28-31 35 12 33 17 79 17 184 1 165-12 222-79 363-75 156-135 232-355 453-208 208-355 338-808 713-766 633-1288 1142-1537 1501-305 440-449 908-415 1355 34 454 190 817 504 1174 58 66 264 256 277 256 4 0-23-44-58-97zm2095-529c212-43 445-176 659-378 129-121 368-406 360-429-2-6-95-93-208-193l-204-182-18 24c-105 137-202 250-307 355-191 192-351 304-540 380-145 58-234 72-415 67l-153-4 24 47c28 57 121 159 181 200 71 49 158 88 240 108 99 25 274 27 381 5zm-2672-5486c233-416 511-757 812-997 275-219 616-385 967-472 225-55 364-71 669-76 307-6 445 3 666 43 255 46 474 119 698 233l117 60-75-71c-377-356-881-572-1471-628-188-18-606-8-779 19-465 72-868 244-1222 521-180 141-402 382-575 625-130 183-342 550-326 566 11 11 446 277 454 278 4 1 33-45 65-101z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
