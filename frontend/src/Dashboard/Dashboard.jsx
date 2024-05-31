import React from 'react';
import './Dashboard.css';
import star from "./../assets/favourites.png";
import plus from "./../assets/cross.png";
import correct from "./../assets/correct.png"

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-admin'>
        Admin
        <img src={star} alt="star" style={{ marginLeft: "10px", height: "89px", width: "84px" }} />
        <div className='dashboard-add-user-box'>
        <div className='dashboard-add-user-text'>
          Add User
        </div>
        <img src={plus} alt="add" style={{ height: "105px", width: "108px", marginTop: "10px", marginLeft: "20px" }} />
      </div>
      </div>
      
      <div className='dashboard-time-section'>
        <div className='dashboard-time-text'>10:00 AM</div>
        <div className='dashboard-date-text'>31 May 2024</div>
      </div>
      <div className='dashboard-tiles'>
        <div className='dashboard-green-tile-first'>
          <div className='dashboard-name-text'>James</div>
          <img src={correct} alt="correct" style={{
            height:"149px",
            width:"216px",
            top:"381px",
            left:"114px"
          }}/>
        </div>
        <div className='dashboard-green-tile'>
        <div className='dashboard-name-text'>Michael</div>
          <img src={correct} alt="correct" style={{
            height:"149px",
            width:"216px",
            top:"381px",
            left:"114px"
          }}/>
        </div>
        <div className='dashboard-green-tile'>
        <div className='dashboard-name-text'>Robert</div>
          <img src={correct} alt="correct" style={{
            height:"149px",
            width:"216px",
            top:"381px",
            left:"114px"
          }}/>
        </div>
        <div className='dashboard-green-tile'>
        <div className='dashboard-name-text'>David</div>
          <img src={correct} alt="correct" style={{
            height:"149px",
            width:"216px",
            top:"381px",
            left:"114px"
          }}/>
        </div>
       
      </div>
      <div className='dashboard-tiles'>
        <div className='dashboard-green-tile-first'>
          <div className='dashboard-name-text'>James</div>
          <img src={correct} alt="correct" style={{
            height:"149px",
            width:"216px",
            top:"381px",
            left:"114px"
          }}/>
        </div>
        <div className='dashboard-green-tile'>
        <div className='dashboard-name-text'>Michael</div>
          <img src={correct} alt="correct" style={{
            height:"149px",
            width:"216px",
            top:"381px",
            left:"114px"
          }}/>
        </div>
        <div className='dashboard-green-tile'>
        <div className='dashboard-name-text'>Robert</div>
          <img src={correct} alt="correct" style={{
            height:"149px",
            width:"216px",
            top:"381px",
            left:"114px"
          }}/>
        </div>
        <div className='dashboard-green-tile'>
        <div className='dashboard-name-text'>David</div>
          <img src={correct} alt="correct" style={{
            height:"149px",
            width:"216px",
            top:"381px",
            left:"114px"
          }}/>
        </div>
       
      </div>
      <div className='dashboard-tiles'>
        <div className='dashboard-green-tile-first'>
          <div className='dashboard-name-text'>James</div>
          <img src={correct} alt="correct" style={{
            height:"149px",
            width:"216px",
            top:"381px",
            left:"114px"
          }}/>
        </div>
        <div className='dashboard-green-tile'>
        <div className='dashboard-name-text'>Michael</div>
          <img src={correct} alt="correct" style={{
            height:"149px",
            width:"216px",
            top:"381px",
            left:"114px"
          }}/>
        </div>
        <div className='dashboard-green-tile'>
        <div className='dashboard-name-text'>Robert</div>
          <img src={correct} alt="correct" style={{
            height:"149px",
            width:"216px",
            top:"381px",
            left:"114px"
          }}/>
        </div>
        <div className='dashboard-green-tile'>
        <div className='dashboard-name-text'>David</div>
          <img src={correct} alt="correct" style={{
            height:"149px",
            width:"216px",
            top:"381px",
            left:"114px"
          }}/>
        </div>
       
      </div>
      <div className='dashboard-tiles'>
        <div className='dashboard-green-tile-first'>
          <div className='dashboard-name-text'>James</div>
          <img src={correct} alt="correct" style={{
            height:"149px",
            width:"216px",
            top:"381px",
            left:"114px"
          }}/>
        </div>
        <div className='dashboard-green-tile'>
        <div className='dashboard-name-text'>Michael</div>
          <img src={correct} alt="correct" style={{
            height:"149px",
            width:"216px",
            top:"381px",
            left:"114px"
          }}/>
        </div>
        <div className='dashboard-green-tile'>
        <div className='dashboard-name-text'>Robert</div>
          <img src={correct} alt="correct" style={{
            height:"149px",
            width:"216px",
            top:"381px",
            left:"114px"
          }}/>
        </div>
        <div className='dashboard-green-tile'>
        <div className='dashboard-name-text'>David</div>
          <img src={correct} alt="correct" style={{
            height:"149px",
            width:"216px",
            top:"381px",
            left:"114px"
          }}/>
        </div>
       
      </div>
    </div>
  );
}

export default Dashboard;
