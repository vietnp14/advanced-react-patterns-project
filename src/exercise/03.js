// Flexible Compound Components
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import {Switch} from '../switch'

const ToggleContext = React.createContext();
ToggleContext.displayName = 'ToggleContext'

const useToggleContext = () => {
  const toggleContext = React.useContext(ToggleContext);
  if (!toggleContext) {
    throw new Error('Must be used Toggle Context inside Toggle Component');
  }

  return toggleContext;
};

const AlterContext = React.createContext();
AlterContext.displayName = 'Alter Context';

const useAlter = () => {
  const alterContext = React.useContext(AlterContext);

  return alterContext;
}

const Alter = (props) => {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return <ToggleContext.Provider  value={[on, toggle]} {...props}/>
}

function Toggle(props) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return <ToggleContext.Provider  value={[on, toggle]} {...props}/>
}

function ToggleOn({children}) {
  const [on] = useToggleContext();
  return on ? children : null
}

function ToggleOff({children}) {
  const [on] = useToggleContext();
  return on ? null : children
}

function ToggleButton(props) {
  const [on, toggle] = useToggleContext();
  return <Switch on={on} onClick={toggle} {...props} />
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <div>
          <ToggleButton />
        </div>
        <Toggle>
          <ToggleOn>The button is on</ToggleOn>
          <ToggleOff>The button is off</ToggleOff>
          <div>
            <ToggleButton />
          </div>

          <Alter>
            <ToggleOn>The button is on</ToggleOn>
            <ToggleOff>The button is off</ToggleOff>
            <div>
              <ToggleButton />
            </div>
          </Alter>
          <Alter>
            <ToggleOn>The button is on</ToggleOn>
            <ToggleOff>The button is off</ToggleOff>
            <div>
              <ToggleButton />
            </div>
          </Alter>
        </Toggle>
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
