import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

// Import custom components
// import PrivateRoute from './PrivateRoute';
import NotFound from '../components/error/NotFound';
import PublicRoute from './PublicRoute';

const AsyncHome = loadable(() => import('../containers/home/HomeContainer'));
const AsyncCase = loadable(() => import('../containers/cases/CasesContainers'));
const AsyncHeader = loadable(() => import('../containers/header/HeaderContainer'));
const AsyncCaseTemplate = loadable(() => import('../containers/case-template/CaseTemplate'));
const AsyncCaseLogotype = loadable(() => import('../containers/logotype/LogotypeContainer'));
const AsyncBrandBook = loadable(() => import('../containers/brand-book/BrandContainer'));
const AsyncCorporate = loadable(() => import('../containers/corporate/CorporateContainer'));
const AsyncCategory = loadable(() => import('../containers/category/CategoryContainer'));
const AsyncAbout = loadable(() => import('../containers/about/AboutContainer'));
const AsyncPayment = loadable(() => import('../containers/payment/PaymentContainer'));
const AsyncPartners = loadable(() => import('../containers/partners/PartnerContainer'));
const AsyncPrint = loadable(() => import('../containers/print/PrintContainer'));
const AsyncPage3D = loadable(() => import('../containers/page-3D/Page3DContainer'));

const AsyncRequirements = loadable(() =>
  import('../containers/requirements/RequirementsContainer')
);
const AsyncFaq = loadable(() => import('../containers/faq/FaqContainer.js'));
const AsyncOrderPage = loadable(() => import('../containers/order/OrderContainer.js'));

const AsyncSubCategoryItem = loadable(() =>
  import('../containers/sub-category/Sub-category-itemContainer')
);
const AsyncPrintingTech = loadable(() =>
  import('../containers/printing-technology/PrintingTechnologyContainer')
);

const Router = () => (
  <Fragment>
    <AsyncHeader />
    <Switch>
      <PublicRoute exact path="/" component={AsyncHome} />
      <PublicRoute exact path="/case" component={AsyncCase} />
      <PublicRoute exact path="/services/:url" component={AsyncCategory} />
      <PublicRoute exact path="/case/:url" component={AsyncCaseTemplate} />
      <PublicRoute exact path="/design/logotype" component={AsyncCaseLogotype} />
      <PublicRoute exact path="/design/brandbook" component={AsyncBrandBook} />
      <PublicRoute exact path="/design/corporate" component={AsyncCorporate} />
      <PublicRoute exact path="/sub-category/:item" component={AsyncSubCategoryItem} />
      <PublicRoute exact path="/sub-categories/:item" component={AsyncSubCategoryItem} />
      <PublicRoute exact path="/case-category/:caseCategory" component={AsyncPrint} />
      {/* <PublicRoute exact path="/case-category/:caseCategory/:subCategory" component={AsyncPrint} /> */}
      <PublicRoute exact path="/printing-technology" component={AsyncPrintingTech} />
      <PublicRoute exact path="/about" component={AsyncAbout} />
      <PublicRoute exact path="/about/payment" component={AsyncPayment} />
      <PublicRoute exact path="/about/requirements" component={AsyncRequirements} />
      <PublicRoute exact path="/about/faq" component={AsyncFaq} />
      <PublicRoute exact path="/order" component={AsyncOrderPage} />
      <PublicRoute exact path="/partners" component={AsyncPartners} />
      <PublicRoute exact path="/design/3d" component={AsyncPage3D} />
      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default Router;
