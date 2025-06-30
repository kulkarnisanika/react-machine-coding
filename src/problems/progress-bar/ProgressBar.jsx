import { useState } from 'react'

const ProgressBar = () => {

  //  1. Input Range -0 - 100
  //  2. Div to show progress
  //  3. State to store info

  const [progressCount, setProgressCount] = useState(50);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div style={{ backgroundColor: "skyblue", borderRadius: "12px", height: "30px", width: "300px", textAlign: "end" }}>
        <div style={{
          backgroundColor: progressCount === 100 ? "green" : "yellow",
          borderRadius: "12px",
          height: "30px",
          width: `${progressCount}%`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "red"
        }}>
          {progressCount} %
        </div>
      </div>
      <div >
        <input style={{ width: "300px" }} type="range" min={0} max={100} value={progressCount} onChange={(e) => setProgressCount(Number(e.target.value))} aria-label="Progress Slider"></input>
      </div>
    </div>
  )
}

export default ProgressBar