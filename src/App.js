import logo from './logo.svg';
import './App.css';
import './SkillSection.jsx';
import SkillSection from './SkillSection.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>This is a demo resume</p>
        {/* <Person ></Person> */}
        <SkillSection
        name="Shadat Hossain" 
        fName="Babul Mia"
        mName="Bibi Chakina"
        education="B.Sc in Mechanical Engineering"
        contact= "01690002778"
        mail = "mdshadatniloy@gmail.com"
        skill={ ["js" , "React" , "python"]}
        designation="Software engineer"
        about = "I have more than 5 years experence in this sector.I will build up more than 1000 software. "
         />
         <hr></hr>
        <SkillSection
        name="Ismail Hossain" 
        fName="Babul Mia"
        mName="Bibi Chakina"
        education="B.Sc in Computer Engineering"
        contact= "01613044946"
        mail = "mdshadatniloy@gmail.com"
        skill={ ["js" ,"php" , "React" , "python"]}
        designation="Web Developer"
        about = "I have more than 1 years experence in this sector.I will build up more than 5000 software. "
         />
         <hr></hr>
      </header>
      
      
    </div>
  );
}
export default App;
