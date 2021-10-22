/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import './Search.scss';
import { Transition } from 'react-transition-group';

const Search = (props) => {
  const searchInput = useRef();

  function activeInput() {
    setTimeout(() => {
      searchInput.current.focus();
    }, 800);
  }

  function clearinpur() {
    searchInput.current.value = '';
  }

  return (
    <Transition in={props.searchSize} timeout={10}>
      {(state) => (
        <div
          onClick={() => {
            props.showSearch(), activeInput();
          }}
          className={`Search ${!props.searchSize ? 'ShowBcg' : 's'} ${state}`}
        >
          <Transition in={props.searchSize} timeout={150}>
            {(state) => (
              <div className={`Search__content ${state}`}>
                <img src="/img/header/searchIcon.svg" alt="img" />
                <Transition in={props.searchSize} timeout={400}>
                  {(state) => (
                    <input
                      onChange={() => {
                        props.showItems(searchInput.current.value);
                      }}
                      defaultValue={props.myValue}
                      ref={searchInput}
                      onFocus={() => {
                        activeInput();
                      }}
                      onBlur={() => {
                        clearinpur();
                      }}
                      className={`${state} Search__input Search__input2 `}
                      type="text"
                      placeholder="Пошук"
                    />
                  )}
                </Transition>
              </div>
            )}
          </Transition>
        </div>
      )}
    </Transition>
  );
};
export default Search;
