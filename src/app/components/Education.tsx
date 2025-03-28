import React from 'react';


const EducationSection = () => {
  return (
    <section id='education' className="education-section">
      <h2>Education</h2>

      <div className="cards-container">
        {/* Education Cards */}
        <div className="education-card">
          <h3>Secondary Schooling</h3>
          <p className="institution">Govt Boys Senior Sec. School</p>
          <p className="institution">Completed <b> Secondary Schooling</b> with strong foundation and participated in many extracurricular activities.</p>
          <p className="year">Passing Year: 2022</p>
        </div>

        <div className="education-card">
          <h3>Higher Secondary Schooling</h3>
          <p className="institution">Govt Boys Senior Sec. School</p>
          <p className="institution">Completed <b>Higher Secondary Schooling</b> with strong foundation in subjects like Mathematics and Physics.</p>
          <p className="year">Passing Year: 2024</p>
        </div>

        {/* Information Cards */}
        <div className="info-card">
          <h3>BTech. in Robotics and Artificial Intelligence</h3>
          <p className="institution">World College of Technology & Management</p>
          <p className="institution">Currently <b>Completing</b> my Btech. in Robotics and Artificial Intelligence.</p>
          <p className="year">2024 - present</p>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
