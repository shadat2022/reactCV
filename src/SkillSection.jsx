
  const SkillSection = (props) =>{
    return (
        <div>
          <h2>Name : {props.name}</h2>
          <p>Fathers Name : {props.fName}</p>
          <p>Mothers Name : {props.mName}</p>
          <p>Eduction : {props.education}</p>
          <p>Contact : {props.contact}</p>
          <p>Email : {props.mail}</p>
            <h6>Skill :</h6>
            <ul>
                {props.skill.map(
                    (skill) =>(
                        <li key={skill}>
                            {skill}
                        </li>
                    ))}
            </ul>

            <div className="cardsec">
            <h2> {props.designation} </h2>
            <p> {props.about} </p>

        </div>
        </div>
      )
  }
  export default SkillSection;
