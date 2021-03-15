import React, { Fragment, useState } from 'react';
import './Home-tabs.scss';
import { data } from '../../../../public/data';

const HomeTabs = (props) => {
  let OurWorksTabs = data.OurWorksTabs;

  const [deskTab, setDeskTab] = useState(OurWorksTabs[0].tabsName);
  let [mobTab, setMobTab] = useState(OurWorksTabs[0].tabsName);
  let [styleList, setStyleList] = useState(false);

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 975) {
      setChangeStyle(true);
    } else {
      setChangeStyle(false);
    }
  });

  function changeMobTabTitle(key) {
    let newTabList = mobTab.slice();
    let zeroTab = newTabList[0].name;
    newTabList[0].name = newTabList[key].name;
    newTabList[key].name = zeroTab;
    setMobTab(newTabList);
  }

  let [activeTab, setActiveTab] = useState(0);
  const [changeStyle, setChangeStyle] = useState(false);

  return (
    <Fragment>
      {changeStyle || window.innerWidth <= 975 ? (
        <div className={`MobTab_position ${props.classNameMob}`}>
          <div className="MobileTab">
            <div
              onClick={() => {
                setStyleList((styleList = !styleList));
              }}
              className={`MobileTab__bcg ${styleList ? 'MobileTab_bcg-active' : ''}`}
            >
              <span className="MobileTab__text">{mobTab[0].name}</span>
              <img src="/img/HomePage/tabIcon.svg" alt="" />
            </div>
            <div className={`MobileTab__list ${styleList ? 'MobileTab_list-active' : ''}`}>
              {mobTab.map((tab) => {
                return tab.id !== 0 ? (
                  <div
                    key={tab.id}
                    onClick={() => {
                      changeMobTabTitle(tab.id),
                        setStyleList((styleList = !styleList)),
                        props.changeCaseType(tab.category),
                        props.changeHomeCategory(tab.category);
                    }}
                    className="MobileTab__bcg MobileTab_bcg-hover"
                  >
                    <span className="MobileTab__text">{tab.name}</span>
                  </div>
                ) : (
                  ''
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className={`Tab ${props.classNameDesc}`}>
          {deskTab.map((tab) => {
            return (
              <div
                onClick={() => {
                  setActiveTab(tab.id);
                  props.changeCaseType(tab.category);
                  props.changeHomeCategory(tab.category);
                }}
                key={tab.id}
                className="Tab__wrap"
              >
                <div className={` Tab__bcg ${activeTab === tab.id ? 'Tab__active' : ''}`}>
                  {tab.name}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Fragment>
  );
};

export default HomeTabs;
