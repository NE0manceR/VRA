/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';

import './Order.scss';
import { Link } from 'react-router-dom';
import MateBtn from '../buttons/mate-btn/Mate-btn';
import axios from 'axios';
import GradientBtn1 from '../buttons/gradient-btn/Gradient-btn';
import { sendEmail } from '../../../services/dataService';

function Order(props) {
  let inputName = useRef();
  let inputMail = useRef();
  let inputArea = useRef();
  let fileInput = useRef();

  let [name, setName] = useState(false);
  let [mail, setMail] = useState(false);
  let [textArea, setTextArea] = useState(false);

  let [nameErr, setNameErr] = useState(false);
  let [mailErr, setMailErr] = useState(false);
  let [areaErr, setAreaErr] = useState(false);

  let [statusLoad, setStatusLoad] = useState(false);
  let [loadProcent, setLoadProcent] = useState(0);
  let [popapStatus, setPopapStatus] = useState(false);

  function resetForm() {
    setNameErr(false);
    setMailErr(false);
    setAreaErr(false);
    setName(false);
    setMail(false);
    setTextArea(false);
    setStatusLoad(false);
    setBtnStatus(false);
    setLoadProcent(0);
    inputName.current.value = '';
    inputMail.current.value = '';
    inputArea.current.value = '';
    fileInput.current.value = '';
    setFileErr(false);
    setUserFiles([]);
    allFilessize = [];
  }

  function loadStatus() {
    let procent = setInterval(addProcent, 31);

    function addProcent() {
      if (loadProcent === 100) {
        clearInterval(procent);
        setPopapStatus(true);
      }
      setLoadProcent(loadProcent++);
    }
    setStatusLoad(true);
  }

  function blur() {
    let reg = /\S+@\S+\.\S+/;
    let checkMail = inputMail.current.value;

    if (inputName.current.value === '') {
      setName(false);
      setNameErr(false);
      inputName.current.placeholder = 'Ваше ім’я';
    } else {
      setName(true);
    }

    if (inputMail.current.value === '') {
      setMailErr(false);
      setMail(false);
      inputMail.current.placeholder = 'Ваш email';
    } else {
      setMail(true);
      setMailErr(false);
    }

    if (inputMail.current.value !== '' && !reg.test(checkMail)) {
      setMail(false);
      setMailErr(true);
    }

    if (inputArea.current.value === '') {
      setAreaErr(false);
      setTextArea(false);
      inputArea.current.placeholder = 'Розкажіть про вашу ідею';
    } else {
      setTextArea(true);
    }
  }

  function focus(inputKey) {
    setClose(true);
    if (inputKey === 'mail') {
      setMail(true);
      inputMail.current.placeholder = '';
    }

    if (inputKey === 'name') {
      setName(true);
      inputName.current.placeholder = '';
    }

    if (inputKey === 'textarea') {
      setTextArea(true);
      inputArea.current.placeholder = '';
    }
  }

  function inputErr() {
    if (inputName.current.value === '') {
      setNameErr(true);
    }

    if (inputMail.current.value === '') {
      setMailErr(true);
    }

    if (inputArea.current.value === '') {
      setAreaErr(true);
    }
  }

  let [fileErr, setFileErr] = useState(false);
  let [userFilse, setUserFiles] = useState([]);
  let [btnStatus, setBtnStatus] = useState(false);
  let [close, setClose] = useState(true);
  let allFilessize = [];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  function validationSize(changeArr) {
    if (changeArr.length === 0) {
      return;
    }
    for (let j = 0; j < changeArr.length; j++) {
      allFilessize.push(changeArr[j].size);
    }
    if (allFilessize.reduce(reducer) / 1048576 > 100.0) {
      setFileErr(true);
    } else {
      setFileErr(false);
    }
  }

  function checkFiles() {
    let changeArr = [...userFilse];
    check: for (let i = 0; i < fileInput.current.files.length; i++) {
      for (let l = 0; l < changeArr.length; l++) {
        if (changeArr[l].name === fileInput.current.files[i].name) {
          continue check;
        }
      }
      changeArr.push(fileInput.current.files[i]);
    }

    fileInput.current.value = '';
    validationSize(changeArr);
    setUserFiles(changeArr);
  }

  function deleteFile(name) {
    let changeArr = [...userFilse];
    for (const key in changeArr) {
      if (changeArr[key].name === name) {
        changeArr.splice(key, 1);
      }
    }
    setUserFiles(changeArr);
    validationSize(changeArr);
  }

  let [userName, setUserName] = useState();
  let [userEmail, setUserEmail] = useState();
  let [userText, setUserText] = useState();

  function adduserData(data) {
    if (data === 'name') {
      setUserName(inputName.current.value);
    }

    if (data === 'email') {
      setUserEmail(inputMail.current.value);
    }

    if (data === 'text') {
      setUserText(inputArea.current.value);
    }
  }

  function sendFile() {
    if (
      btnStatus === false &&
      nameErr === false &&
      mailErr === false &&
      areaErr === false &&
      allFilessize <= 100.0
    ) {
      setBtnStatus(true);
      let filesID = [];
      let formData = new FormData();

      for (const file of userFilse) {
        formData.append('files', file);
      }

      if (userFilse.length) {
        axios({
          method: 'post',
          url: 'https://admin.vra.com.ua/upload',
          data: formData,
        })
          .then(function (response) {
            loadStatus(response);
            sendEmail(userName, userEmail)
              .then(function () {})
              .catch(function () {
                setClose(false);
              });

            for (const item of response.data) {
              filesID.push(item.id);
            }

            axios({
              method: 'post',
              url: 'https://admin.vra.com.ua/formas',
              data: {
                name: userName,
                email: userEmail,
                description: userText,
                files: filesID,
              },
            })
              .then(function () {})
              .catch(function () {});
          })
          .catch(function () {
            setBtnStatus(false);
          });
      } else {
        sendEmail(userName, userEmail)
          .then(function () {})
          .catch(function () {
            setClose(false);
          });
        axios({
          method: 'post',
          url: 'https://admin.vra.com.ua/formas',
          data: {
            name: userName,
            email: userEmail,
            description: userText,
            files: filesID,
          },
        })
          .then(function () {
            setPopapStatus(true);
          })
          .catch(function () {});
      }
    }
  }

  function closeWindow() {
    setPopapStatus(false);
    resetForm();
  }

  function checkEmail() {
    setStatusLoad(false);
    setBtnStatus(false);
    setLoadProcent(0);
    setPopapStatus(false);
  }

  return (
    <div className="Order">
      <div className={`Order__send-done ${popapStatus ? 'popapActive' : ''}`}>
        <div className={`Order__send-done-text`}>
          {' '}
          <p className="Order__description">
            {close ? 'Ваш запит успішно надіслано' : 'Введіть коректний Email'}
          </p>
          <GradientBtn1
            close={close}
            closeWindow={closeWindow}
            checkEmail={checkEmail}
            className="Order__send-done-btn"
          >
            OK
          </GradientBtn1>
        </div>
      </div>
      <h2
        // eslint-disable-next-line react/prop-types
        style={{ fontFamily: props.newText ? 'Montserrat-Bold' : 'Montserrat' }}
        className="Order__title"
      >
        {props.newText ? props.children : 'Давайте реалізуємо вашу ідею разом!'}
      </h2>
      <p className="Order__description">
        Залиште свої контактні дані та макет і ми найближчим часом повідомимо вартість друку.
      </p>
      <form action="">
        <div
          className={`Input-border ${name ? 'input-active' : ''} ${nameErr ? 'input-err' : ''} `}
        >
          <input
            onBlur={() => {
              blur();
            }}
            onFocus={() => {
              focus('name');
            }}
            type="text"
            name="userName"
            placeholder="Ваше ім’я"
            onChange={() => {
              adduserData('name');
            }}
            ref={inputName}
          />
        </div>
        <div
          className={`Input-border ${mail ? 'input-active' : ''} ${mailErr ? 'input-err' : ''} `}
        >
          <input
            className={close === false ? 'mail-error' : ''}
            type="text"
            pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
            required
            placeholder="Ваш email"
            onBlur={() => {
              blur();
            }}
            onFocus={() => {
              focus('mail');
            }}
            onChange={() => {
              adduserData('email');
            }}
            ref={inputMail}
          />
        </div>

        <div
          className={`Input-border text-area ${textArea ? 'input-active' : ''} ${
            areaErr ? 'input-err' : ''
          } `}
        >
          <textarea
            onFocus={() => {
              focus('textarea');
            }}
            ref={inputArea}
            name="message"
            id=""
            placeholder="Розкажіть про вашу ідею"
            onBlur={() => {
              blur();
            }}
            onChange={() => {
              adduserData('text');
            }}
          />
        </div>
        {/* ===============================load progres============================ */}
        <div className="Order__files-wrap">
          {userFilse?.map(({ name, size }) => {
            return (
              <div key={name} className="Order__file">
                <span className="Order__file-name">{name}</span>
                <div className="Order__file-data">
                  <span className={`Order__file-size ${fileErr ? 'Order__file-err' : ''}`}>
                    {(size / 1048576).toFixed(2)} MB
                  </span>
                  <div className="Order__file-status">
                    <div className={`status-line ${statusLoad ? 'status-line-ready' : ''}`}></div>
                  </div>
                  <span className="Order__status-procent">{loadProcent}%</span>
                  <img
                    onClick={() => {
                      deleteFile(name);
                    }}
                    src="/close-file-ic.svg"
                    alt="img"
                  />
                </div>
              </div>
            );
          })}
        </div>
        {/* ===============================load progres============================ */}
        <p>
          <span className="form-alert">Зверніть увагу!</span> Якщо розмір ваших файлів перевищує{' '}
          <span className="file-weight">100MB</span>, прикріпляйте у повідомлення посилання на
          хмарне сховище (Google Drive, Dropbox тощо){' '}
        </p>
        <div className="btn-wrap">
          <div className="items-wrap">
            <div className="file-wrap">
              <svg
                width="14"
                height="24"
                viewBox="0 0 14 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 5V17C12 19.757 9.757 22 7 22C4.243 22 2 19.757 2 17V5C2 3.346 3.346 2 5 2C6.654 2 8 3.346 8 5V14C8 14.551 7.551 15 7 15C6.449 15 6 14.551 6 14V6H4V14C4 15.657 5.343 17 7 17C8.657 17 10 15.657 10 14V5C10 2.239 7.761 0 5 0C2.239 0 0 2.239 0 5V17C0 20.866 3.134 24 7 24C10.866 24 14 20.866 14 17V5H12Z"
                  fill="black"
                  fillOpacity="0.6"
                />
              </svg>
              <span>Прикріпити файл</span>
              <input
                multiple
                ref={fileInput}
                onChange={() => {
                  checkFiles(this);
                }}
                name="fileName"
                type="file"
              />
            </div>
            <div className="info-block-wrap">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10 8C10.5128 8 10.9355 8.22519 10.9933 8.5153L11 8.58333V14.4167C11 14.7388 10.5523 15 10 15C9.48716 15 9.06449 14.7748 9.00673 14.4847L9 14.4167V8.58333C9 8.26117 9.44772 8 10 8ZM10 5C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7C9.44772 7 9 6.55228 9 6C9 5.44772 9.44772 5 10 5Z"
                  fill="black"
                  fillOpacity="0.38"
                />
              </svg>
              <div className="info-block">
                <span> Приймаємо макети у форматі PSD, PDF, Ai, CDR, EPS</span>
                <Link to={'/about/requirements'}>Детальніше</Link>
              </div>
            </div>
          </div>
          <MateBtn sendFile={sendFile} checkInput={inputErr} className="OrderBtn">
            Надіслати
          </MateBtn>
        </div>
      </form>
    </div>
  );
}

export default Order;
