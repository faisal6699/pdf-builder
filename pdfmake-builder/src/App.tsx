import React, {useState} from 'react';
import './App.css';
import ElementsContainer from "./containers/ElementsContainer";
import WorkSpaceContainer from "./containers/WorkSpaceContainer";

function App() {
    const [selectedElement, setSelectedElement] = useState('')
  return (
      <div className={'box-border w-full h-screen'}>
          <div className={'grid grid-cols-4'}>
              <div className={'col-span-3'}>
                  <WorkSpaceContainer element={selectedElement}/>
              </div>
              <div>
                  <ElementsContainer onSelectedElement={() => setSelectedElement('text')}/>
              </div>
          </div>
      </div>
  );
}

export default App;
