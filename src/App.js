import { firebaseConfig } from './config/Config'
import { initializeApp, intializeApp} from 'firebase/app'
import './App.css';

import { Test } from './components/Test';

const FirebaseApp = initializeApp ( firebaseConfig )
function App() {
    return (
      <div className="App">
       <Test />
       <Test />
      </div>
    );
  }

export default App;
