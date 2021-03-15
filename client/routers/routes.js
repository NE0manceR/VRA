import React, { Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

// Import custom components
// import PrivateRoute from './PrivateRoute';
import NotFound from '../components/error/NotFound';
import PublicRoute from './PublicRoute';

const AsyncLoginForm = loadable(() => import('../containers/auth/LoginContainer'));
const AsyncHome = loadable(() => import('../containers/Home/HomeContainer'));
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
      <PublicRoute exact path="/login" component={AsyncLoginForm} />
      <PublicRoute exact path="/" component={AsyncHome} />
      <PublicRoute exact path="/case" component={AsyncCase} />
      <PublicRoute exact path="/caseTemplate" component={AsyncCaseTemplate} />
      <PublicRoute exact path="/logotype" component={AsyncCaseLogotype} />
      <PublicRoute exact path="/brandbook" component={AsyncBrandBook} />
      <PublicRoute exact path="/corporate" component={AsyncCorporate} />
      <PublicRoute exact path="/category" component={AsyncCategory} />
      <PublicRoute exact path="/subcategoryitem" component={AsyncSubCategoryItem} />
      <PublicRoute exact path="/printing-technology" component={AsyncPrintingTech} />
      <PublicRoute exact path="/about" component={AsyncAbout} />
      <PublicRoute exact path="/payment" component={AsyncPayment} />
      <PublicRoute exact path="/requirements" component={AsyncRequirements} />
      <PublicRoute exact path="/faq" component={AsyncFaq} />
      <PublicRoute exact path="/order" component={AsyncOrderPage} />
      <PublicRoute exact path="/partners" component={AsyncPartners} />
      <PublicRoute exact path="/print" component={AsyncPrint} />

      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default Router;
