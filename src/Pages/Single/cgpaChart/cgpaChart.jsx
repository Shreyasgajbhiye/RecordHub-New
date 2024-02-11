import React from 'react'
import './cgpaChart.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ChangingProgressProvider from "./ChangingProgressProvider";
function CGPA() {
  return (
    <div className='featured'>
      <div className="top">
        <div className="title">Last sem cgpa</div>
        <MoreVertIcon fontSize='small'/>
      </div>
        <div className="bottom">
        <div className="featuredChart">
          <ChangingProgressProvider
            values={[0]}
          >
            {(percentage) => (
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  pathTransitionDuration: 10000,
                  trailColor: "#82ca9d",
                  pathColor: "#210876",
                  textColor: "#210876",
                })}
              />
            )}
          </ChangingProgressProvider>
        </div>
        <div className="summary">
            <div className="item">
                <div className="itemTitle">CGPA</div>
                <div className="itemResult absent">
                    <div className="results">8.3</div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CGPA
