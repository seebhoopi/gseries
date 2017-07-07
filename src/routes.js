import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';

import HomePage from './components/home/HomePage';
import Dashboard from './components/dashboard/Dashboard';
import HomeRemedy from './components/homeremedy/HomeRemedy';
import LabtestsPage from './components/labtest/LabtestsPage';
import LabtestsForm from './components/labtest/LabtestsForm';
import PatientDiagnosticReport from './components/patientdiagnosticreport/PatientDiagnosticReport';
import SpecialityAvailability from './components/specialityavailability/SpecialityAvailability';
import UserProfile from './components/userprofile/UserProfile';




export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="homeremedy" component={HomeRemedy} />
     <Route path="patientdiagnosticreport" component={PatientDiagnosticReport} />
     <Route path="specialityavailability" component={SpecialityAvailability} />
     <Route path="userprofile" component={UserProfile} />
     <Route path="labtests" component={LabtestsPage} />
    <Route path="labtestsf" component={LabtestsForm} />
    <Route path="labtestsf/:id" component={LabtestsForm} />

  </Route>
);