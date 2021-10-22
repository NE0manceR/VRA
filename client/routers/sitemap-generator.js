require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

const router = require('./sitemap-routes').default;
const Sitemap = require('react-router-sitemap').default;
const fetch = require('node-fetch');

async function generateSitemap() {
  try {
    const dataCases = await fetch('https://admin.vra.com.ua/items-all');
    const cases = await dataCases.json();
    let casesArray = [];
    for (let i = 0; i < cases.length; i++) {
      casesArray.push({ url: cases[i].Link });
    }
    const paramsConfigCases = {
      '/case/:url': casesArray,
    };
    const dataServices = await fetch('https://admin.vra.com.ua/menu');
    const Services = await dataServices.json();
    let ServicesArray = [];
    let caseCategoriesArray = [];
    let subMenuListsArray = [];
    let caseCategoryArray = [];

    for (let i = 0; i < Services.length; i++) {
      ServicesArray.push({ url: Services[i].Link });
      for (const el of Services[i].case_categories) {
        if (Services[i].Link === 'druk') {
          caseCategoryArray.push({ caseCategory: el.Link });
        } else {
          caseCategoriesArray.push({ item: el.Link });
        }
        for (const subEl of el.sub_menu_lists) {
          subMenuListsArray.push({ item: subEl.Link });
        }
      }
    }
    const paramsConfigServices = {
      '/services/:url': ServicesArray,
    };

    const paramsConfigCaseCategories = {
      '/sub-categories/:item': caseCategoriesArray,
    };
    const paramsConfigSubMenuLists = {
      '/sub-category/:item': subMenuListsArray,
    };
    const paramsConfigCaseCategory = {
      '/case-category/:caseCategory': caseCategoryArray,
    };

    const test = new Sitemap(router)
      .applyParams(paramsConfigCases)
      .applyParams(paramsConfigServices)
      .applyParams(paramsConfigCaseCategories)
      .applyParams(paramsConfigSubMenuLists)
      .applyParams(paramsConfigCaseCategory)
      .build('https://main.vra.com.ua');

    return test.save('./public/sitemap.xml');
  } catch (e) {
    console.log(e);
  }
}

generateSitemap();
