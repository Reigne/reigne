export default function MockSchool() {
  return (
    <div className="mock">
      <div className="mock-bar">
        <div className="dots"><span className="r" /><span className="y" /><span className="g" /></div>
        <div className="url">school.app / grading</div>
      </div>
      <div className="mock-body">
        <div className="mock-table-2">
          <div className="mock-th">
            <span>Student</span><span>Average</span><span>Quarter</span><span>Status</span>
          </div>
          <div className="mock-tr"><span className="stu">Cruz, Maria</span><span className="grade">94.2</span><span className="grade">Q3</span><span className="badge pass">pass</span></div>
          <div className="mock-tr"><span className="stu">Reyes, J.</span><span className="grade">88.7</span><span className="grade">Q3</span><span className="badge pass">pass</span></div>
          <div className="mock-tr"><span className="stu">Santos, K.</span><span className="grade">75.4</span><span className="grade">Q3</span><span className="badge warn">review</span></div>
          <div className="mock-tr"><span className="stu">Dela Cruz, A.</span><span className="grade">91.0</span><span className="grade">Q3</span><span className="badge pass">pass</span></div>
          <div className="mock-tr"><span className="stu">Lim, R.</span><span className="grade">82.3</span><span className="grade">Q3</span><span className="badge pass">pass</span></div>
        </div>
      </div>
    </div>
  )
}
