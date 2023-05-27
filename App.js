import logo from './logo.svg';
import './App.css';
import PollDisplay from './PollDisplay';
import UserPart from './UserParticipation';
import UserTwo from './AnotherUserPart';
function App(prop) {
  return (
    <div>
       <PollDisplay/>
       <UserTwo/>

       <UserPart/>
       
    </div>
  );
}

export default App;
