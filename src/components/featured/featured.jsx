import React from 'react';
import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ChangingProgressProvider from "./ChangingProgressProvider";

function Featured() {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className='title'>Average Values</h1>
        <MoreVertIcon fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <ChangingProgressProvider
            values={[10]}
          >
            {(percentage) => (
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  pathTransitionDuration:  10 ,
                  trailColor: "#82ca9d",
                  pathColor: "#210876",
                  textColor: "#210876",
                })}
              />
            )}
          </ChangingProgressProvider>
        </div>
        <p className='desc'>Performance</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">APPROVED</div>
            <div className={`itemResult positive`}>
              <ExpandMoreOutlinedIcon fontSize='small'/>   
              <div className="results">15</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">VERIFIED</div>
            <div className={`itemResult positive`}>
              <ExpandMoreOutlinedIcon fontSize='small'/>   
              <div className="results">15</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">NOT APPROVED</div>
            <div className={`itemResult negative`}>
              <ExpandMoreOutlinedIcon fontSize='small'/>   
              <div className="results">15</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">NOT VERIFIED</div>
            <div className={`itemResult negative`}>
              <ExpandMoreOutlinedIcon fontSize='small'/>   
              <div className="results">15</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured;
