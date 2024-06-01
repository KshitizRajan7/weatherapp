import React from 'react'
import './App.css'
import WeatherApp from './components/weatherApp/WeatherApp'
import styled from 'styled-components'

const Body = styled.div`
  margin:0;
  padding:0;
  display:flex;
  justify-content:center;
`;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  background: white;
  display: flex;
  justify-content:center;
`;

const App = () => {
  return (
      <Wrapper>
      <WeatherApp/>
      </Wrapper>
  )
}

export default App
