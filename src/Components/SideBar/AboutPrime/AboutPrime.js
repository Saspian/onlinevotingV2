import React from 'react';

export default () => {
  const logoAdjust = {
    maxWidth: '150px',
    float: 'left',
    marginRight: '10px'
  };
  const paraAdjust = {
    textAlign: 'justify'
  };
  const headingAdjust = {
    fontFamily: 'Helvetica',
    textTransform: 'uppercase',
    fontSize: '15pt',
    fontWeight: '400',
    marginTop: '10px',
    marginBottom: '20px'
  };
  return (
    <div>
      <h1 style={headingAdjust}>Prime College</h1>
      <img
        src="/images/college_logo.png"
        alt="prime_college_logo"
        style={logoAdjust}
      />
      <p style={paraAdjust}>
        At Prime College, information technology is integral to academic life.
        IT facilitates seamless integration of teaching, learning, research,
        service and administrative roles to provide a cohesive and efficient
        learning environment. The technology will integrate learning and
        research at the college and enable researchers to compete effectively.
      </p>
      <br />
      <hr />
      <h1 style={headingAdjust}>Prime IT Club</h1>
      <img
        src="/images/primeit_logo.png"
        alt="primeit_logo"
        style={logoAdjust}
      />
      <p style={paraAdjust}>
        IT club is the foremost club which is managed by creative as well as
        tech enthusiast students keen to research on the latest technologies in
        the market and help the students to understand it in a simple and easy
        way. Established in 2004, the club organizes different workshops,
        seminars, training programs, etc. These practices ultimately help the
        students to get ready for their careers.
      </p>
    </div>
  );
};
