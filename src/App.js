import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [blogTitle, titleFunction] = useState(['Gatsby', 'Next', 'WordPress']);
  let [good, goodFunction] = useState([0, 0, 0]);

  let [modal, modalChange] = useState(false);

  return (
    <div className='App'>
      <div className='black-nav'>
        <div>Developer Blog</div>
      </div>
      <div className='list'>
        <h3>
          {blogTitle[0]}
          <span
            onClick={() => {
              goodFunction(good + 1);
            }}
          >
            {' '}
            👍
          </span>
          {' ' + good}
        </h3>
        <p>Published 17 February</p>
        <hr />
      </div>
      <div className='list'>
        <h3> {blogTitle[1]}</h3>
        <p>Published 18 March</p>
        <hr />
      </div>
      <div className='list'>
        <h3
          onClick={() => {
            modalChange(!modal);
          }}
        >
          {blogTitle[2]}
        </h3>
        <p>Published 27 May</p>
        <hr />
      </div>

      {blogTitle.map(function (title) {
        return (
          <div className='list'>
            <h3>
              {' '}
              {title}{' '}
              <span
                onClick={() => {
                  goodFunction(good[title] + 1);
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

      {modal === true ? <Modal blogTitle={blogTitle} /> : null}

    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h2> {props.blogTitle[0]} </h2>
      <p>Date</p>
      <p>Content</p>
    </div>
  );
}

export default App;
