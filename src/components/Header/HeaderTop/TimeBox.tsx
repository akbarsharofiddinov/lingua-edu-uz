import React, { useEffect } from 'react'

const TimeBox: React.FC = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000);

    return () => clearInterval(interval)
  }, []);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'end', gap: 3, fontSize: 14 }}>
        <p>{currentTime.toLocaleDateString()}</p>
        <p>{currentTime.toLocaleTimeString()}</p>
      </div>
    </>
  )
}

export default React.memo(TimeBox)