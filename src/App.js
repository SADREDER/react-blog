import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [blogTitle, titleFunction] = useState(['Gatsby', 'Next', 'WordPress']);
  let [good, goodFunction] = useState([0, 0, 0]);

  let [modal, modalChange] = useState(false);
  let [clickedTitleNumber, clickedTitleChange] = useState(0);

  return (
    <div className='App'>
      <div className='black-nav'>
        <div>Developer Blog</div>
      </div>

      {blogTitle.map(function (blogTitle, i) {
        return (
          <div className='list'>
            <h3
              onClick={() => {
                clickedTitleChange(i);
              }}
            >
              {' '}
              {blogTitle}{' '}
              <span
                onClick={() => {
                  goodFunction(good[blogTitle] + 1);
                }}
              ></span>{' '}
              👍 {' ' + good[0]}
            </h3>
            <p>Published 18 March</p>
            <hr />
          </div>
        );
      })}

      <button
        onClick={() => {
          modalChange(!modal);
        }}
      >
        Open/Close
      </button>

      {modal === true ? (
        <Modal blogTitle={blogTitle} clickedTitleNumber={clickedTitleNumber} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h2> {props.blogTitle[props.clickedTitleNumber]} </h2>
      <p>Date</p>
      <p>Content</p>
    </div>
  );
}

export default App;
