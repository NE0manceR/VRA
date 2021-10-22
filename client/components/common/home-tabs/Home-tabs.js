import React, { Fragment, useEffect, useState } from 'react';
import './Home-tabs.scss';
import { subscriberDataHeaders } from '../../../services/dataService';

const HomeTabs = (props) => {
  let [styleList, setStyleList] = useState(false);
  let [tabsName, setTabsName] = useState([]);
  let [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    subscriberDataHeaders.subscribe((res) => {
      setTabsName(res);
    });
  }, []);

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 975) {
      setChangeStyle(true);
    } else {
      setChangeStyle(false);
    }
  });

  function changeMobTabTitle(id) {
    setStyleList((styleList = !styleList));
    setActiveTab(id);
  }

  const [changeStyle, setChangeStyle] = useState(false);

  return (
    <Fragment>
      {changeStyle || window.innerWidth <= 975 ? (
        // eslint-disable-next-line react/prop-types
        <div className={`MobTab_position ${props.classNameMob}`}>
          <div className="MobileTab">
            <div className={`MobileTab__list ${styleList ? 'MobileTab_list-active' : ''}`}>
              {tabsName.map((tab) => {
                return (
                  <div
                    onClick={() => {
                      changeMobTabTitle(tab.id);
                      props.changeCaseType(tab.id);
                    }}
                    // className={`MobileTab__bcg ${styleList ? 'MobileTab_bcg-active' : ''}`}
                    key={tab.id}
                    className={`MobileTab__bcg MobileTab_bcg-hover ${
                      activeTab === tab.id ? 'MobileTab__active-item' : ''
                    }`}
                  >
                    <span className="MobileTab__text">{tab.linkName}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        // eslint-disable-next-line react/prop-types
        <div className={`Tab ${props.classNameDesc}`}>
          <div
            onClick={() => {
              setActiveTab(0);
              // eslint-disable-next-line react/prop-types
              props.changeCaseType(0);
            }}
            className="Tab__wrap Tab__first-element"
          >
            <div className={`Tab__bcg ${activeTab === 0 ? 'Tab__active' : ''}`}>Всі роботи</div>
          </div>
          {tabsName.map((tab) => {
            return (
              <Fragment key={tab.id}>
                <div
                  onClick={() => {
                    setActiveTab(tab.id);
                    // eslint-disable-next-line react/prop-types
                    props.changeCaseType(tab.id);
                  }}
                  className={`Tab__wrap
                  ${tab.linkName === 'Текстиль' ? 'Tab__last-element' : ''}
                `}
                >
                  <div className={`Tab__bcg ${activeTab === tab.id ? 'Tab__active' : ''}`}>
                    {tab.linkName}
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      )}
    </Fragment>
  );
};

export default HomeTabs;
