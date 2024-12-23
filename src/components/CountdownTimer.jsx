import { useState, useEffect } from 'react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 22,
    minutes: 56,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.days === 0 && prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer)
          return prevTime
        }
        
        let newSeconds = prevTime.seconds - 1
        let newMinutes = prevTime.minutes
        let newHours = prevTime.hours
        let newDays = prevTime.days

        if (newSeconds < 0) {
          newSeconds = 59
          newMinutes -= 1
          if (newMinutes < 0) {
            newMinutes = 59
            newHours -= 1
            if (newHours < 0) {
              newHours = 23
              newDays -= 1
            }
          }
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="countdown">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="countdown-unit">
          <div className="countdown-digits">
            {value.toString().padStart(2, '0').split('').map((digit, i) => (
              <div key={i} className="countdown-digit">
                <span className="countdown-digit-text">{digit}</span>
              </div>
            ))}
          </div>
          <span className="countdown-label">{unit}</span>
        </div>
      ))}
    </div>
  )
}

