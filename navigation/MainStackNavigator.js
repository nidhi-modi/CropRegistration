import React, {Component} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  Alert,
  Linking,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SiteSelection from '../screens/SiteSelection';
import ScreenNavigator from '../screens/ScreenNavigator';

import HarHome from '../screens/HarHome';
import RepHome from '../screens/RepHome';
import GerHome from '../screens/GerHome';
import OhaHome from '../screens/OhaHome';

import Har123 from '../screens/Har123';
import Har456 from '../screens/Har456';

import RepMerliceRow from '../screens/RepMerliceRow';
import RepAngelleRow from '../screens/RepAngelleRow';
import RepDuelleRow from '../screens/RepDuelleRow';
import RepKmRow from '../screens/RepKmRow';
import RepBambelloRow from '../screens/RepBambelloRow';

import Oha1IntenseRow from '../screens/Oha1IntenseRow';
import Oha2NAnnicoRow from '../screens/Oha2NAnnicoRow';
import Oha2NAvalantinoRow from '../screens/Oha2NAvalantinoRow';
import Oha2NDunistarRow from '../screens/Oha2NDunistarRow';
import Oha2SMerliceRow from '../screens/Oha2SMerliceRow';
import Oha2SClobagoRow from '../screens/Oha2SClobagoRow';

import Oha1IntensePlantsRow1 from '../screens/Oha1IntensePlantsRow1';
import Oha1IntensePlantsRow2 from '../screens/Oha1IntensePlantsRow2';
import Oha2NAnnicoPlantsRow1 from '../screens/Oha2NAnnicoPlantsRow1';
import Oha2NAvalantinoPlantsRow1 from '../screens/Oha2NAvalantinoPlantsRow1';
import Oha2NDunistarPlantsRow1 from '../screens/Oha2NDunistarPlantsRow1';
import Oha2SMerlicePlantsRow1 from '../screens/Oha2SMerlicePlantsRow1';
import Oha2SClobagoPlantsRow1 from '../screens/Oha2SClobagoPlantsRow1';

import Oha1IntenseRow1Plant1 from '../screens/Oha1IntenseRow1Plant1';
import Oha1IntenseRow1Plant2 from '../screens/Oha1IntenseRow1Plant2';
import Oha1IntenseRow1Plant3 from '../screens/Oha1IntenseRow1Plant3';
import Oha1IntenseRow1Plant4 from '../screens/Oha1IntenseRow1Plant4';
import Oha1IntenseRow1Plant5 from '../screens/Oha1IntenseRow1Plant5';

import Oha1IntenseRow2Plant1 from '../screens/Oha1IntenseRow2Plant1';
import Oha1IntenseRow2Plant2 from '../screens/Oha1IntenseRow2Plant2';
import Oha1IntenseRow2Plant3 from '../screens/Oha1IntenseRow2Plant3';
import Oha1IntenseRow2Plant4 from '../screens/Oha1IntenseRow2Plant4';
import Oha1IntenseRow2Plant5 from '../screens/Oha1IntenseRow2Plant5';

import Oha2NAnnicoRow1Plant1 from '../screens/Oha2NAnnicoRow1Plant1';
import Oha2NAnnicoRow1Plant2 from '../screens/Oha2NAnnicoRow1Plant2';
import Oha2NAnnicoRow1Plant3 from '../screens/Oha2NAnnicoRow1Plant3';
import Oha2NAnnicoRow1Plant4 from '../screens/Oha2NAnnicoRow1Plant4';
import Oha2NAnnicoRow1Plant5 from '../screens/Oha2NAnnicoRow1Plant5';

import Oha2NAvalantinoRow1Plant1 from '../screens/Oha2NAvalantinoRow1Plant1';
import Oha2NAvalantinoRow1Plant2 from '../screens/Oha2NAvalantinoRow1Plant2';
import Oha2NAvalantinoRow1Plant3 from '../screens/Oha2NAvalantinoRow1Plant3';
import Oha2NAvalantinoRow1Plant4 from '../screens/Oha2NAvalantinoRow1Plant4';
import Oha2NAvalantinoRow1Plant5 from '../screens/Oha2NAvalantinoRow1Plant5';

import Oha2NDunistarRow1Plant1 from '../screens/Oha2NDunistarRow1Plant1';
import Oha2NDunistarRow1Plant2 from '../screens/Oha2NDunistarRow1Plant2';
import Oha2NDunistarRow1Plant3 from '../screens/Oha2NDunistarRow1Plant3';
import Oha2NDunistarRow1Plant4 from '../screens/Oha2NDunistarRow1Plant4';
import Oha2NDunistarRow1Plant5 from '../screens/Oha2NDunistarRow1Plant5';

import Oha2NMonalisaRow1Plant1 from '../screens/Oha2NMonalisaRow1Plant1';
import Oha2NMonalisaRow1Plant2 from '../screens/Oha2NMonalisaRow1Plant2';
import Oha2NMonalisaRow1Plant3 from '../screens/Oha2NMonalisaRow1Plant3';
import Oha2NMonalisaRow1Plant4 from '../screens/Oha2NMonalisaRow1Plant4';
import Oha2NMonalisaRow1Plant5 from '../screens/Oha2NMonalisaRow1Plant5';

import Oha2SMerliceRow1Plant1 from '../screens/Oha2SMerliceRow1Plant1';
import Oha2SMerliceRow1Plant2 from '../screens/Oha2SMerliceRow1Plant2';
import Oha2SMerliceRow1Plant3 from '../screens/Oha2SMerliceRow1Plant3';
import Oha2SMerliceRow1Plant4 from '../screens/Oha2SMerliceRow1Plant4';
import Oha2SMerliceRow1Plant5 from '../screens/Oha2SMerliceRow1Plant5';

import Oha2SClobagoRow1Plant1 from '../screens/Oha2SClobagoRow1Plant1';
import Oha2SClobagoRow1Plant2 from '../screens/Oha2SClobagoRow1Plant2';
import Oha2SClobagoRow1Plant3 from '../screens/Oha2SClobagoRow1Plant3';
import Oha2SClobagoRow1Plant4 from '../screens/Oha2SClobagoRow1Plant4';
import Oha2SClobagoRow1Plant5 from '../screens/Oha2SClobagoRow1Plant5';

import Ger1DuelleRow from '../screens/Ger1DuelleRow';
import Ger2GrandiceRow from '../screens/Ger2GrandiceRow';
import Ger3GustelleRow from '../screens/Ger3GustelleRow';
import Ger3DuelleRow from '../screens/Ger3DuelleRow';
import Ger3DunistarRow from '../screens/Ger3DunistarRow';
import Ger4MerliceRow from '../screens/Ger4MerliceRow';
import Ger5AngelleRow from '../screens/Ger5AngelleRow';
import Ger5DuelleRow from '../screens/Ger5DuelleRow';
import Ger5BambelloRow from '../screens/Ger5BambelloRow';
import Ger3AngelleRow from '../screens/Ger3AngelleRow';

import RepMerlicePlantsRow1 from '../screens/RepMerlicePlantsRow1';
import RepMerlicePlantsRow2 from '../screens/RepMerlicePlantsRow2';
import RepAngellePlantsRow1 from '../screens/RepAngellePlantsRow1';
import RepAngellePlantsRow2 from '../screens/RepAngellePlantsRow2';
import RepDuellePlantsRow1 from '../screens/RepDuellePlantsRow1';
import RepKmPlantsRow1 from '../screens/RepKmPlantsRow1';
import RepBambelloPlantsRow1 from '../screens/RepBambelloPlantsRow1';

import Ger1DuellePlantsRow1 from '../screens/Ger1DuellePlantsRow1';
import Ger1DuellePlantsRow2 from '../screens/Ger1DuellePlantsRow2';
import Ger2GrandicePlantsRow2 from '../screens/Ger2GrandicePlantsRow2';
import Ger2GrandicePlantsRow1 from '../screens/Ger2GrandicePlantsRow1';
import Ger3DunistarPlantsRow2 from '../screens/Ger3DunistarPlantsRow2';
import Ger3GustellePlantsRow2 from '../screens/Ger3GustellePlantsRow2';
import Ger4MerlicePlantsRow1 from '../screens/Ger4MerlicePlantsRow1';
import Ger4MerlicePlantsRow2 from '../screens/Ger4MerlicePlantsRow2';
import Ger5AngellePlantsRow1 from '../screens/Ger5AngellePlantsRow1';
import Ger5DuellePlantsRow1 from '../screens/Ger5DuellePlantsRow1';
import Ger5BambelloPlantsRow1 from '../screens/Ger5BambelloPlantsRow1';
import Ger3DuellePlantsRow2 from '../screens/Ger3DuellePlantsRow2';
import Ger3AngellePlantsRow2 from '../screens/Ger3AngellePlantsRow2';

import RepBambelloPlant1 from '../screens/RepBambelloPlant1';
import RepBambelloPlant2 from '../screens/RepBambelloPlant2';
import RepBambelloPlant3 from '../screens/RepBambelloPlant3';
import RepBambelloPlant4 from '../screens/RepBambelloPlant4';
import RepBambelloPlant5 from '../screens/RepBambelloPlant5';
import RepBambelloPlant6 from '../screens/RepBambelloPlant6';
import RepBambelloPlant7 from '../screens/RepBambelloPlant7';
import RepBambelloPlant8 from '../screens/RepBambelloPlant8';
import RepBambelloPlant9 from '../screens/RepBambelloPlant9';
import RepBambelloPlant10 from '../screens/RepBambelloPlant10';

import RepKMPlant1 from '../screens/RepKMPlant1';
import RepKMPlant2 from '../screens/RepKMPlant2';
import RepKMPlant3 from '../screens/RepKMPlant3';
import RepKMPlant4 from '../screens/RepKMPlant4';
import RepKMPlant5 from '../screens/RepKMPlant5';
import RepKMPlant6 from '../screens/RepKMPlant6';
import RepKMPlant7 from '../screens/RepKMPlant7';
import RepKMPlant8 from '../screens/RepKMPlant8';
import RepKMPlant9 from '../screens/RepKMPlant9';
import RepKMPlant10 from '../screens/RepKMPlant10';

import RepDuellePlant1 from '../screens/RepDuellePlant1';
import RepDuellePlant2 from '../screens/RepDuellePlant2';
import RepDuellePlant3 from '../screens/RepDuellePlant3';
import RepDuellePlant4 from '../screens/RepDuellePlant4';
import RepDuellePlant5 from '../screens/RepDuellePlant5';
import RepDuellePlant6 from '../screens/RepDuellePlant6';
import RepDuellePlant7 from '../screens/RepDuellePlant7';
import RepDuellePlant8 from '../screens/RepDuellePlant8';
import RepDuellePlant9 from '../screens/RepDuellePlant9';
import RepDuellePlant10 from '../screens/RepDuellePlant10';

import RepAngelleRow1Plant1 from '../screens/RepAngelleRow1Plant1';
import RepAngelleRow1Plant2 from '../screens/RepAngelleRow1Plant2';
import RepAngelleRow1Plant3 from '../screens/RepAngelleRow1Plant3';
import RepAngelleRow1Plant4 from '../screens/RepAngelleRow1Plant4';
import RepAngelleRow1Plant5 from '../screens/RepAngelleRow1Plant5';
import RepAngelleRow1Plant6 from '../screens/RepAngelleRow1Plant6';
import RepAngelleRow1Plant7 from '../screens/RepAngelleRow1Plant7';
import RepAngelleRow1Plant8 from '../screens/RepAngelleRow1Plant8';
import RepAngelleRow1Plant9 from '../screens/RepAngelleRow1Plant9';
import RepAngelleRow1Plant10 from '../screens/RepAngelleRow1Plant10';

import RepAngelleRow2Plant1 from '../screens/RepAngelleRow2Plant1';
import RepAngelleRow2Plant2 from '../screens/RepAngelleRow2Plant2';
import RepAngelleRow2Plant3 from '../screens/RepAngelleRow2Plant3';
import RepAngelleRow2Plant4 from '../screens/RepAngelleRow2Plant4';
import RepAngelleRow2Plant5 from '../screens/RepAngelleRow2Plant5';
import RepAngelleRow2Plant6 from '../screens/RepAngelleRow2Plant6';
import RepAngelleRow2Plant7 from '../screens/RepAngelleRow2Plant7';
import RepAngelleRow2Plant8 from '../screens/RepAngelleRow2Plant8';
import RepAngelleRow2Plant9 from '../screens/RepAngelleRow2Plant9';
import RepAngelleRow2Plant10 from '../screens/RepAngelleRow2Plant10';

import RepMerliceRow1Plant1 from '../screens/RepMerliceRow1Plant1';
import RepMerliceRow1Plant2 from '../screens/RepMerliceRow1Plant2';
import RepMerliceRow1Plant3 from '../screens/RepMerliceRow1Plant3';
import RepMerliceRow1Plant4 from '../screens/RepMerliceRow1Plant4';
import RepMerliceRow1Plant5 from '../screens/RepMerliceRow1Plant5';
import RepMerliceRow1Plant6 from '../screens/RepMerliceRow1Plant6';
import RepMerliceRow1Plant7 from '../screens/RepMerliceRow1Plant7';
import RepMerliceRow1Plant8 from '../screens/RepMerliceRow1Plant8';
import RepMerliceRow1Plant9 from '../screens/RepMerliceRow1Plant9';
import RepMerliceRow1Plant10 from '../screens/RepMerliceRow1Plant10';

import RepMerliceRow2Plant1 from '../screens/RepMerliceRow2Plant1';
import RepMerliceRow2Plant2 from '../screens/RepMerliceRow2Plant2';
import RepMerliceRow2Plant3 from '../screens/RepMerliceRow2Plant3';
import RepMerliceRow2Plant4 from '../screens/RepMerliceRow2Plant4';
import RepMerliceRow2Plant5 from '../screens/RepMerliceRow2Plant5';
import RepMerliceRow2Plant6 from '../screens/RepMerliceRow2Plant6';
import RepMerliceRow2Plant7 from '../screens/RepMerliceRow2Plant7';
import RepMerliceRow2Plant8 from '../screens/RepMerliceRow2Plant8';
import RepMerliceRow2Plant9 from '../screens/RepMerliceRow2Plant9';
import RepMerliceRow2Plant10 from '../screens/RepMerliceRow2Plant10';

import ViewPlantTrussDetails from '../screens/viewPlantTrussDetails';
import GetAwsData from '../screens/getAwsData';

import Har1DunistarRow from '../screens/Har1DunistarRow';
import Har1IntenseRow from '../screens/Har1IntenseRow';
import Har1SunsetDelightRow from '../screens/Har1SunsetDelightRow';
import Har2AngelleRow from '../screens/Har2AngelleRow';
import Har33D17621Row from '../screens/Har33D17621Row';
import Har4HTL1606150Row from '../screens/Har4HTL1606150Row';
import Har4AvalantinoRow from '../screens/Har4AvalantinoRow';
import Har4FlavorinoRow from '../screens/Har4FlavorinoRow';
import Har4MonalisaRow from '../screens/Har4MonalisaRow';
import Har4AngelleRow from '../screens/Har4AngelleRow';
import Har4SunsetDelightRow from '../screens/Har4SunsetDelightRow';
import Har5AngelleRow from '../screens/Har5AngelleRow';
import Har6AngelleRow from '../screens/Har6AngelleRow';
import Har3DunistarRow from '../screens/Har3DunistarRow';
import Har3BambelloRow from '../screens/Har3BambelloRow';
import Har3OranjitaRow from '../screens/Har3OranjitaRow';
import Har3IvorinoRow from '../screens/Har3IvorinoRow';
import Har3SunfunRow from '../screens/Har3SunfunRow';

import Har1DunistarPlantsRow1 from '../screens/Har1DunistarPlantsRow1';
import Har1IntensePlantsRow1 from '../screens/Har1IntensePlantsRow1';
import Har1IntensePlantsRow2 from '../screens/Har1IntensePlantsRow2';
import Har3DunistarPlantsRow1 from '../screens/Har3DunistarPlantsRow1';
import Har1SunsetDelightPlantsRow1 from '../screens/Har1SunsetDelightPlantsRow1';
import Har2AngellePlantsRow1 from '../screens/Har2AngellePlantsRow1';
import Har2AngellePlantsRow2 from '../screens/Har2AngellePlantsRow2';
import Har33D17621PlantsRow1 from '../screens/Har33D17621PlantsRow1';
import Har3BambelloPlantsRow1 from '../screens/Har3BambelloPlantsRow1';
import Har3GustelleRow from '../screens/Har3GustelleRow';
import Har3GustellePlantsRow1 from '../screens/Har3GustellePlantsRow1';
import Har4HTL1606150PlantsRow1 from '../screens/Har4HTL1606150PlantsRow1';
import Har4FlavorinoPlantsRow1 from '../screens/Har4FlavorinoPlantsRow1';
import Har4MonalisaPlantsRow1 from '../screens/Har4MonalisaPlantsRow1';
import Har4AngellePlantsRow1 from '../screens/Har4AngellePlantsRow1';
import Har4SunsetDelightPlantsRow1 from '../screens/Har4SunsetDelightPlantsRow1';
import Har5AngellePlantsRow1 from '../screens/Har5AngellePlantsRow1';
import Har5AngellePlantsRow2 from '../screens/Har5AngellePlantsRow2';
import Har6AngellePlantsRow2 from '../screens/Har6AngellePlantsRow2';
import Har6AngellePlantsRow1 from '../screens/Har6AngellePlantsRow1';
import Har3OranjitaPlantsRow1 from '../screens/Har3OranjitaPlantsRow1';
import Har4AvalantinoPlantsRow1 from '../screens/Har4AvalantinoPlantsRow1';
import Har3IvorinoPlantsRow1 from '../screens/Har3IvorinoPlantsRow1';
import Har3SunfunPlantsRow1 from '../screens/Har3SunfunPlantsRow1';

import Har3OranjitaRow1Plant1 from '../screens/Har3OranjitaRow1Plant1';
import Har3OranjitaRow1Plant2 from '../screens/Har3OranjitaRow1Plant2';
import Har3OranjitaRow1Plant3 from '../screens/Har3OranjitaRow1Plant3';

import Har3SunfunRow1Plant1 from '../screens/Har3SunfunRow1Plant1';
import Har3SunfunRow1Plant2 from '../screens/Har3SunfunRow1Plant2';
import Har3SunfunRow1Plant3 from '../screens/Har3SunfunRow1Plant3';

import Har3IvorinoRow1Plant1 from '../screens/Har3IvorinoRow1Plant1';
import Har3IvorinoRow1Plant2 from '../screens/Har3IvorinoRow1Plant2';
import Har3IvorinoRow1Plant3 from '../screens/Har3IvorinoRow1Plant3';

import Har6AngelleRow1Plant1 from '../screens/Har6AngelleRow1Plant1';
import Har6AngelleRow1Plant2 from '../screens/Har6AngelleRow1Plant2';
import Har6AngelleRow1Plant3 from '../screens/Har6AngelleRow1Plant3';
import Har6AngelleRow1Plant4 from '../screens/Har6AngelleRow1Plant4';
import Har6AngelleRow1Plant5 from '../screens/Har6AngelleRow1Plant5';

import Har6AngelleRow2Plant1 from '../screens/Har6AngelleRow2Plant1';
import Har6AngelleRow2Plant2 from '../screens/Har6AngelleRow2Plant2';
import Har6AngelleRow2Plant3 from '../screens/Har6AngelleRow2Plant3';
import Har6AngelleRow2Plant4 from '../screens/Har6AngelleRow2Plant4';
import Har6AngelleRow2Plant5 from '../screens/Har6AngelleRow2Plant5';

import Har4SunsetDelightRow1Plant1 from '../screens/Har4SunsetDelightRow1Plant1';
import Har4SunsetDelightRow1Plant2 from '../screens/Har4SunsetDelightRow1Plant2';
import Har4SunsetDelightRow1Plant3 from '../screens/Har4SunsetDelightRow1Plant3';
import Har4SunsetDelightRow1Plant4 from '../screens/Har4SunsetDelightRow1Plant4';
import Har4SunsetDelightRow1Plant5 from '../screens/Har4SunsetDelightRow1Plant5';

import Har4AngelleRow1Plant1 from '../screens/Har4AngelleRow1Plant1';
import Har4AngelleRow1Plant2 from '../screens/Har4AngelleRow1Plant2';
import Har4AngelleRow1Plant3 from '../screens/Har4AngelleRow1Plant3';
import Har4AngelleRow1Plant4 from '../screens/Har4AngelleRow1Plant4';
import Har4AngelleRow1Plant5 from '../screens/Har4AngelleRow1Plant5';

import Har3GustelleRow1Plant1 from '../screens/Har3GustelleRow1Plant1';
import Har3GustelleRow1Plant2 from '../screens/Har3GustelleRow1Plant2';
import Har3GustelleRow1Plant3 from '../screens/Har3GustelleRow1Plant3';
import Har3GustelleRow1Plant4 from '../screens/Har3GustelleRow1Plant4';
import Har3GustelleRow1Plant5 from '../screens/Har3GustelleRow1Plant5';

import Har4HTL1606150Row1Plant1 from '../screens/Har4HTL1606150Row1Plant1';
import Har4HTL1606150Row1Plant2 from '../screens/Har4HTL1606150Row1Plant2';
import Har4HTL1606150Row1Plant3 from '../screens/Har4HTL1606150Row1Plant3';
import Har4HTL1606150Row1Plant4 from '../screens/Har4HTL1606150Row1Plant4';
import Har4HTL1606150Row1Plant5 from '../screens/Har4HTL1606150Row1Plant5';

import Har4AvalantinoRow1Plant1 from '../screens/Har4AvalantinoRow1Plant1';
import Har4AvalantinoRow1Plant2 from '../screens/Har4AvalantinoRow1Plant2';
import Har4AvalantinoRow1Plant3 from '../screens/Har4AvalantinoRow1Plant3';
import Har4AvalantinoRow1Plant4 from '../screens/Har4AvalantinoRow1Plant4';
import Har4AvalantinoRow1Plant5 from '../screens/Har4AvalantinoRow1Plant5';

import Har1DunistarRow1Plant1 from '../screens/Har1DunistarRow1Plant1';
import Har1DunistarRow1Plant2 from '../screens/Har1DunistarRow1Plant2';
import Har1DunistarRow1Plant3 from '../screens/Har1DunistarRow1Plant3';
import Har1DunistarRow1Plant4 from '../screens/Har1DunistarRow1Plant4';
import Har1DunistarRow1Plant5 from '../screens/Har1DunistarRow1Plant5';

import Har2AngelleRow1Plant1 from '../screens/Har2AngelleRow1Plant1';
import Har2AngelleRow1Plant2 from '../screens/Har2AngelleRow1Plant2';
import Har2AngelleRow1Plant3 from '../screens/Har2AngelleRow1Plant3';
import Har2AngelleRow1Plant4 from '../screens/Har2AngelleRow1Plant4';
import Har2AngelleRow1Plant5 from '../screens/Har2AngelleRow1Plant5';

import Har2AngelleRow2Plant1 from '../screens/Har2AngelleRow2Plant1';
import Har2AngelleRow2Plant2 from '../screens/Har2AngelleRow2Plant2';
import Har2AngelleRow2Plant3 from '../screens/Har2AngelleRow2Plant3';
import Har2AngelleRow2Plant4 from '../screens/Har2AngelleRow2Plant4';
import Har2AngelleRow2Plant5 from '../screens/Har2AngelleRow2Plant5';

import Har5AngelleRow1Plant1 from '../screens/Har5AngelleRow1Plant1';
import Har5AngelleRow1Plant2 from '../screens/Har5AngelleRow1Plant2';
import Har5AngelleRow1Plant3 from '../screens/Har5AngelleRow1Plant3';
import Har5AngelleRow1Plant4 from '../screens/Har5AngelleRow1Plant4';
import Har5AngelleRow1Plant5 from '../screens/Har5AngelleRow1Plant5';

import Har5AngelleRow2Plant1 from '../screens/Har5AngelleRow2Plant1';
import Har5AngelleRow2Plant2 from '../screens/Har5AngelleRow2Plant2';
import Har5AngelleRow2Plant3 from '../screens/Har5AngelleRow2Plant3';
import Har5AngelleRow2Plant4 from '../screens/Har5AngelleRow2Plant4';
import Har5AngelleRow2Plant5 from '../screens/Har5AngelleRow2Plant5';

import Har33D17621Row1Plant1 from '../screens/Har33D17621Row1Plant1';
import Har33D17621Row1Plant2 from '../screens/Har33D17621Row1Plant2';
import Har33D17621Row1Plant3 from '../screens/Har33D17621Row1Plant3';
import Har33D17621Row1Plant4 from '../screens/Har33D17621Row1Plant4';
import Har33D17621Row1Plant5 from '../screens/Har33D17621Row1Plant5';

import Har3BambelloRow1Plant1 from '../screens/Har3BambelloRow1Plant1';
import Har3BambelloRow1Plant2 from '../screens/Har3BambelloRow1Plant2';
import Har3BambelloRow1Plant3 from '../screens/Har3BambelloRow1Plant3';
import Har3BambelloRow1Plant4 from '../screens/Har3BambelloRow1Plant4';
import Har3BambelloRow1Plant5 from '../screens/Har3BambelloRow1Plant5';

import Har4FlavorinoRow1Plant1 from '../screens/Har4FlavorinoRow1Plant1';
import Har4FlavorinoRow1Plant2 from '../screens/Har4FlavorinoRow1Plant2';
import Har4FlavorinoRow1Plant3 from '../screens/Har4FlavorinoRow1Plant3';
import Har4FlavorinoRow1Plant4 from '../screens/Har4FlavorinoRow1Plant4';
import Har4FlavorinoRow1Plant5 from '../screens/Har4FlavorinoRow1Plant5';

import Har4MonalisaRow1Plant1 from '../screens/Har4MonalisaRow1Plant1';
import Har4MonalisaRow1Plant2 from '../screens/Har4MonalisaRow1Plant2';
import Har4MonalisaRow1Plant3 from '../screens/Har4MonalisaRow1Plant3';
import Har4MonalisaRow1Plant4 from '../screens/Har4MonalisaRow1Plant4';
import Har4MonalisaRow1Plant5 from '../screens/Har4MonalisaRow1Plant5';

import Har1IntenseRow1Plant1 from '../screens/Har1IntenseRow1Plant1';
import Har1IntenseRow1Plant2 from '../screens/Har1IntenseRow1Plant2';
import Har1IntenseRow1Plant3 from '../screens/Har1IntenseRow1Plant3';
import Har1IntenseRow1Plant4 from '../screens/Har1IntenseRow1Plant4';
import Har1IntenseRow1Plant5 from '../screens/Har1IntenseRow1Plant5';

import Har1IntenseRow2Plant1 from '../screens/Har1IntenseRow2Plant1';
import Har1IntenseRow2Plant2 from '../screens/Har1IntenseRow2Plant2';
import Har1IntenseRow2Plant3 from '../screens/Har1IntenseRow2Plant3';
import Har1IntenseRow2Plant4 from '../screens/Har1IntenseRow2Plant4';
import Har1IntenseRow2Plant5 from '../screens/Har1IntenseRow2Plant5';

import Har3DunistarRow1Plant1 from '../screens/Har3DunistarRow1Plant1';
import Har3DunistarRow1Plant2 from '../screens/Har3DunistarRow1Plant2';
import Har3DunistarRow1Plant3 from '../screens/Har3DunistarRow1Plant3';
import Har3DunistarRow1Plant4 from '../screens/Har3DunistarRow1Plant4';
import Har3DunistarRow1Plant5 from '../screens/Har3DunistarRow1Plant5';

import Har1SunsetDelightRow1Plant1 from '../screens/Har1SunsetDelightRow1Plant1';
import Har1SunsetDelightRow1Plant2 from '../screens/Har1SunsetDelightRow1Plant2';
import Har1SunsetDelightRow1Plant3 from '../screens/Har1SunsetDelightRow1Plant3';
import Har1SunsetDelightRow1Plant4 from '../screens/Har1SunsetDelightRow1Plant4';
import Har1SunsetDelightRow1Plant5 from '../screens/Har1SunsetDelightRow1Plant5';

import Ger1DuelleRow1Plant1 from '../screens/Ger1DuelleRow1Plant1';
import Ger1DuelleRow1Plant2 from '../screens/Ger1DuelleRow1Plant2';
import Ger1DuelleRow1Plant3 from '../screens/Ger1DuelleRow1Plant3';
import Ger1DuelleRow1Plant4 from '../screens/Ger1DuelleRow1Plant4';
import Ger1DuelleRow1Plant5 from '../screens/Ger1DuelleRow1Plant5';
import Ger1DuelleRow1Plant6 from '../screens/Ger1DuelleRow1Plant6';
import Ger1DuelleRow1Plant7 from '../screens/Ger1DuelleRow1Plant7';
import Ger1DuelleRow1Plant8 from '../screens/Ger1DuelleRow1Plant8';
import Ger1DuelleRow1Plant9 from '../screens/Ger1DuelleRow1Plant9';
import Ger1DuelleRow1Plant10 from '../screens/Ger1DuelleRow1Plant10';

import Ger1DuelleRow2Plant1 from '../screens/Ger1DuelleRow2Plant1';
import Ger1DuelleRow2Plant2 from '../screens/Ger1DuelleRow2Plant2';
import Ger1DuelleRow2Plant3 from '../screens/Ger1DuelleRow2Plant3';
import Ger1DuelleRow2Plant4 from '../screens/Ger1DuelleRow2Plant4';
import Ger1DuelleRow2Plant5 from '../screens/Ger1DuelleRow2Plant5';
import Ger1DuelleRow2Plant6 from '../screens/Ger1DuelleRow2Plant6';
import Ger1DuelleRow2Plant7 from '../screens/Ger1DuelleRow2Plant7';
import Ger1DuelleRow2Plant8 from '../screens/Ger1DuelleRow2Plant8';
import Ger1DuelleRow2Plant9 from '../screens/Ger1DuelleRow2Plant9';
import Ger1DuelleRow2Plant10 from '../screens/Ger1DuelleRow2Plant10';

import Ger2GrandiceRow1Plant1 from '../screens/Ger2GrandiceRow1Plant1';
import Ger2GrandiceRow1Plant2 from '../screens/Ger2GrandiceRow1Plant2';
import Ger2GrandiceRow1Plant3 from '../screens/Ger2GrandiceRow1Plant3';
import Ger2GrandiceRow1Plant4 from '../screens/Ger2GrandiceRow1Plant4';
import Ger2GrandiceRow1Plant5 from '../screens/Ger2GrandiceRow1Plant5';
import Ger2GrandiceRow1Plant6 from '../screens/Ger2GrandiceRow1Plant6';
import Ger2GrandiceRow1Plant7 from '../screens/Ger2GrandiceRow1Plant7';
import Ger2GrandiceRow1Plant8 from '../screens/Ger2GrandiceRow1Plant8';
import Ger2GrandiceRow1Plant9 from '../screens/Ger2GrandiceRow1Plant9';
import Ger2GrandiceRow1Plant10 from '../screens/Ger2GrandiceRow1Plant10';

import Ger2GrandiceRow2Plant1 from '../screens/Ger2GrandiceRow2Plant1';
import Ger2GrandiceRow2Plant2 from '../screens/Ger2GrandiceRow2Plant2';
import Ger2GrandiceRow2Plant3 from '../screens/Ger2GrandiceRow2Plant3';
import Ger2GrandiceRow2Plant4 from '../screens/Ger2GrandiceRow2Plant4';
import Ger2GrandiceRow2Plant5 from '../screens/Ger2GrandiceRow2Plant5';
import Ger2GrandiceRow2Plant6 from '../screens/Ger2GrandiceRow2Plant6';
import Ger2GrandiceRow2Plant7 from '../screens/Ger2GrandiceRow2Plant7';
import Ger2GrandiceRow2Plant8 from '../screens/Ger2GrandiceRow2Plant8';
import Ger2GrandiceRow2Plant9 from '../screens/Ger2GrandiceRow2Plant9';
import Ger2GrandiceRow2Plant10 from '../screens/Ger2GrandiceRow2Plant10';

import Ger3DunistarRow2Plant1 from '../screens/Ger3DunistarRow2Plant1';
import Ger3DunistarRow2Plant2 from '../screens/Ger3DunistarRow2Plant2';
import Ger3DunistarRow2Plant3 from '../screens/Ger3DunistarRow2Plant3';
import Ger3DunistarRow2Plant4 from '../screens/Ger3DunistarRow2Plant4';
import Ger3DunistarRow2Plant5 from '../screens/Ger3DunistarRow2Plant5';

import Ger3GustelleRow2Plant1 from '../screens/Ger3GustelleRow2Plant1';
import Ger3GustelleRow2Plant2 from '../screens/Ger3GustelleRow2Plant2';
import Ger3GustelleRow2Plant3 from '../screens/Ger3GustelleRow2Plant3';
import Ger3GustelleRow2Plant4 from '../screens/Ger3GustelleRow2Plant4';
import Ger3GustelleRow2Plant5 from '../screens/Ger3GustelleRow2Plant5';

import Ger3DuelleRow2Plant1 from '../screens/Ger3DuelleRow2Plant1';
import Ger3DuelleRow2Plant2 from '../screens/Ger3DuelleRow2Plant2';
import Ger3DuelleRow2Plant3 from '../screens/Ger3DuelleRow2Plant3';
import Ger3DuelleRow2Plant4 from '../screens/Ger3DuelleRow2Plant4';
import Ger3DuelleRow2Plant5 from '../screens/Ger3DuelleRow2Plant5';

import Ger3AngelleRow2Plant1 from '../screens/Ger3AngelleRow2Plant1';
import Ger3AngelleRow2Plant2 from '../screens/Ger3AngelleRow2Plant2';
import Ger3AngelleRow2Plant3 from '../screens/Ger3AngelleRow2Plant3';
import Ger3AngelleRow2Plant4 from '../screens/Ger3AngelleRow2Plant4';
import Ger3AngelleRow2Plant5 from '../screens/Ger3AngelleRow2Plant5';

import Ger4MerliceRow1Plant1 from '../screens/Ger4MerliceRow1Plant1';
import Ger4MerliceRow1Plant2 from '../screens/Ger4MerliceRow1Plant2';
import Ger4MerliceRow1Plant3 from '../screens/Ger4MerliceRow1Plant3';
import Ger4MerliceRow1Plant4 from '../screens/Ger4MerliceRow1Plant4';
import Ger4MerliceRow1Plant5 from '../screens/Ger4MerliceRow1Plant5';
import Ger4MerliceRow1Plant6 from '../screens/Ger4MerliceRow1Plant6';
import Ger4MerliceRow1Plant7 from '../screens/Ger4MerliceRow1Plant7';
import Ger4MerliceRow1Plant8 from '../screens/Ger4MerliceRow1Plant8';
import Ger4MerliceRow1Plant9 from '../screens/Ger4MerliceRow1Plant9';
import Ger4MerliceRow1Plant10 from '../screens/Ger4MerliceRow1Plant10';

import Ger4MerliceRow2Plant1 from '../screens/Ger4MerliceRow2Plant1';
import Ger4MerliceRow2Plant2 from '../screens/Ger4MerliceRow2Plant2';
import Ger4MerliceRow2Plant3 from '../screens/Ger4MerliceRow2Plant3';
import Ger4MerliceRow2Plant4 from '../screens/Ger4MerliceRow2Plant4';
import Ger4MerliceRow2Plant5 from '../screens/Ger4MerliceRow2Plant5';
import Ger4MerliceRow2Plant6 from '../screens/Ger4MerliceRow2Plant6';
import Ger4MerliceRow2Plant7 from '../screens/Ger4MerliceRow2Plant7';
import Ger4MerliceRow2Plant8 from '../screens/Ger4MerliceRow2Plant8';
import Ger4MerliceRow2Plant9 from '../screens/Ger4MerliceRow2Plant9';
import Ger4MerliceRow2Plant10 from '../screens/Ger4MerliceRow2Plant10';

import Ger5AngelleRow1Plant1 from '../screens/Ger5AngelleRow1Plant1';
import Ger5AngelleRow1Plant2 from '../screens/Ger5AngelleRow1Plant2';
import Ger5AngelleRow1Plant3 from '../screens/Ger5AngelleRow1Plant3';
import Ger5AngelleRow1Plant4 from '../screens/Ger5AngelleRow1Plant4';
import Ger5AngelleRow1Plant5 from '../screens/Ger5AngelleRow1Plant5';

import Ger5DuelleRow1Plant1 from '../screens/Ger5DuelleRow1Plant1';
import Ger5DuelleRow1Plant2 from '../screens/Ger5DuelleRow1Plant2';
import Ger5DuelleRow1Plant3 from '../screens/Ger5DuelleRow1Plant3';
import Ger5DuelleRow1Plant4 from '../screens/Ger5DuelleRow1Plant4';
import Ger5DuelleRow1Plant5 from '../screens/Ger5DuelleRow1Plant5';

import Ger5BambelloRow1Plant1 from '../screens/Ger5BambelloRow1Plant1';
import Ger5BambelloRow1Plant2 from '../screens/Ger5BambelloRow1Plant2';
import Ger5BambelloRow1Plant3 from '../screens/Ger5BambelloRow1Plant3';
import Ger5BambelloRow1Plant4 from '../screens/Ger5BambelloRow1Plant4';
import Ger5BambelloRow1Plant5 from '../screens/Ger5BambelloRow1Plant5';

import Ger1DataChecker from '../screens/Ger1DataChecker';
import Ger2DataChecker from '../screens/Ger2DataChecker';
import Ger3DataChecker from '../screens/Ger3DataChecker';
import Ger4DataChecker from '../screens/Ger4DataChecker';
import Ger5DataChecker from '../screens/Ger5DataChecker';
import Har1DataChecker from '../screens/Har1DataChecker';
import Har2DataChecker from '../screens/Har2DataChecker';
import Har3DataChecker from '../screens/Har3DataChecker';
import Har4DataChecker from '../screens/Har4DataChecker';
import Har5DataChecker from '../screens/Har5DataChecker';
import Har6DataChecker from '../screens/Har6DataChecker';
import OhaDataChecker from '../screens/OhaDataChecker';
import Oha2NMonalisaRow from '../screens/Oha2NMonalisaRow';
import Oha2NMonalisaPlantsNewRow1 from '../screens/Oha2NMonalisaPlantsNewRow1';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GetAwsData"
        screenOptions={{
          //gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#2C903D',
            height: 95,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: 'white',
          headerBackTitleVisible: false,
        }}
        headerMode="float">
        <Stack.Screen
          name="SiteSelection"
          component={SiteSelection}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="ScreenNavigator"
          component={ScreenNavigator}
          options={{
            headerLeft: () => null,
            headerShown: false,
            title: 'T&G Global',
          }}
        />

        <Stack.Screen
          name="HarHome"
          component={HarHome}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepHome"
          component={RepHome}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="GerHome"
          component={GerHome}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har123"
          component={Har123}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepMerliceRow"
          component={RepMerliceRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepAngelleRow"
          component={RepAngelleRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepDuelleRow"
          component={RepDuelleRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepKmRow"
          component={RepKmRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepBambelloRow"
          component={RepBambelloRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepMerlicePlantsRow1"
          component={RepMerlicePlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepMerlicePlantsRow2"
          component={RepMerlicePlantsRow2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepAngellePlantsRow1"
          component={RepAngellePlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepAngellePlantsRow2"
          component={RepAngellePlantsRow2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepDuellePlantsRow1"
          component={RepDuellePlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepBambelloPlantsRow1"
          component={RepBambelloPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepKmPlantsRow1"
          component={RepKmPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepBambelloPlant1"
          component={RepBambelloPlant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepBambelloPlant2"
          component={RepBambelloPlant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepBambelloPlant3"
          component={RepBambelloPlant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepBambelloPlant4"
          component={RepBambelloPlant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepBambelloPlant5"
          component={RepBambelloPlant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepBambelloPlant6"
          component={RepBambelloPlant6}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepBambelloPlant7"
          component={RepBambelloPlant7}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepBambelloPlant8"
          component={RepBambelloPlant8}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepBambelloPlant9"
          component={RepBambelloPlant9}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepBambelloPlant10"
          component={RepBambelloPlant10}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepKMPlant1"
          component={RepKMPlant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepKMPlant2"
          component={RepKMPlant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepKMPlant3"
          component={RepKMPlant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepKMPlant4"
          component={RepKMPlant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepKMPlant5"
          component={RepKMPlant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepKMPlant6"
          component={RepKMPlant6}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepKMPlant7"
          component={RepKMPlant7}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepKMPlant8"
          component={RepKMPlant8}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepKMPlant9"
          component={RepKMPlant9}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepKMPlant10"
          component={RepKMPlant10}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepDuellePlant1"
          component={RepDuellePlant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepDuellePlant2"
          component={RepDuellePlant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepDuellePlant3"
          component={RepDuellePlant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepDuellePlant4"
          component={RepDuellePlant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepDuellePlant5"
          component={RepDuellePlant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepDuellePlant6"
          component={RepDuellePlant6}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepDuellePlant7"
          component={RepDuellePlant7}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepDuellePlant8"
          component={RepDuellePlant8}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepDuellePlant9"
          component={RepDuellePlant9}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepDuellePlant10"
          component={RepDuellePlant10}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepAngelleRow1Plant1"
          component={RepAngelleRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepAngelleRow1Plant2"
          component={RepAngelleRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepAngelleRow1Plant3"
          component={RepAngelleRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepAngelleRow1Plant4"
          component={RepAngelleRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepAngelleRow1Plant5"
          component={RepAngelleRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepAngelleRow1Plant6"
          component={RepAngelleRow1Plant6}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepAngelleRow1Plant7"
          component={RepAngelleRow1Plant7}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepAngelleRow1Plant8"
          component={RepAngelleRow1Plant8}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepAngelleRow1Plant9"
          component={RepAngelleRow1Plant9}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepAngelleRow1Plant10"
          component={RepAngelleRow1Plant10}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepAngelleRow2Plant1"
          component={RepAngelleRow2Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepAngelleRow2Plant2"
          component={RepAngelleRow2Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepAngelleRow2Plant3"
          component={RepAngelleRow2Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepAngelleRow2Plant4"
          component={RepAngelleRow2Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepAngelleRow2Plant5"
          component={RepAngelleRow2Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepAngelleRow2Plant6"
          component={RepAngelleRow2Plant6}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepAngelleRow2Plant7"
          component={RepAngelleRow2Plant7}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepAngelleRow2Plant8"
          component={RepAngelleRow2Plant8}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepAngelleRow2Plant9"
          component={RepAngelleRow2Plant9}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepAngelleRow2Plant10"
          component={RepAngelleRow2Plant10}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepMerliceRow1Plant1"
          component={RepMerliceRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepMerliceRow1Plant2"
          component={RepMerliceRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepMerliceRow1Plant3"
          component={RepMerliceRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepMerliceRow1Plant4"
          component={RepMerliceRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepMerliceRow1Plant5"
          component={RepMerliceRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepMerliceRow1Plant6"
          component={RepMerliceRow1Plant6}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepMerliceRow1Plant7"
          component={RepMerliceRow1Plant7}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepMerliceRow1Plant8"
          component={RepMerliceRow1Plant8}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepMerliceRow1Plant9"
          component={RepMerliceRow1Plant9}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepMerliceRow1Plant10"
          component={RepMerliceRow1Plant10}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepMerliceRow2Plant1"
          component={RepMerliceRow2Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepMerliceRow2Plant2"
          component={RepMerliceRow2Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepMerliceRow2Plant3"
          component={RepMerliceRow2Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepMerliceRow2Plant4"
          component={RepMerliceRow2Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepMerliceRow2Plant5"
          component={RepMerliceRow2Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepMerliceRow2Plant6"
          component={RepMerliceRow2Plant6}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepMerliceRow2Plant7"
          component={RepMerliceRow2Plant7}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepMerliceRow2Plant8"
          component={RepMerliceRow2Plant8}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepMerliceRow2Plant9"
          component={RepMerliceRow2Plant9}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="RepMerliceRow2Plant10"
          component={RepMerliceRow2Plant10}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="ViewPlantTrussDetails"
          component={ViewPlantTrussDetails}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="GetAwsData"
          component={GetAwsData}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1DunistarRow"
          component={Har1DunistarRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1IntenseRow"
          component={Har1IntenseRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1SunsetDelightRow"
          component={Har1SunsetDelightRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har2AngelleRow"
          component={Har2AngelleRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har33D17621Row"
          component={Har33D17621Row}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1DunistarPlantsRow1"
          component={Har1DunistarPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1DunistarRow1Plant1"
          component={Har1DunistarRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har2AngelleRow1Plant1"
          component={Har2AngelleRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har2AngelleRow1Plant2"
          component={Har2AngelleRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har2AngelleRow1Plant3"
          component={Har2AngelleRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3DunistarRow"
          component={Har3DunistarRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har2AngelleRow1Plant4"
          component={Har2AngelleRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har2AngelleRow1Plant5"
          component={Har2AngelleRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har2AngelleRow2Plant1"
          component={Har2AngelleRow2Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har2AngelleRow2Plant2"
          component={Har2AngelleRow2Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har2AngelleRow2Plant3"
          component={Har2AngelleRow2Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har2AngelleRow2Plant4"
          component={Har2AngelleRow2Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har2AngelleRow2Plant5"
          component={Har2AngelleRow2Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1DunistarRow1Plant2"
          component={Har1DunistarRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1DunistarRow1Plant3"
          component={Har1DunistarRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1DunistarRow1Plant4"
          component={Har1DunistarRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1DunistarRow1Plant5"
          component={Har1DunistarRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1IntensePlantsRow1"
          component={Har1IntensePlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1IntensePlantsRow2"
          component={Har1IntensePlantsRow2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3DunistarPlantsRow1"
          component={Har3DunistarPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har2AngellePlantsRow1"
          component={Har2AngellePlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har2AngellePlantsRow2"
          component={Har2AngellePlantsRow2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1IntenseRow1Plant1"
          component={Har1IntenseRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1IntenseRow1Plant2"
          component={Har1IntenseRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1IntenseRow1Plant3"
          component={Har1IntenseRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1IntenseRow1Plant4"
          component={Har1IntenseRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1IntenseRow1Plant5"
          component={Har1IntenseRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1IntenseRow2Plant1"
          component={Har1IntenseRow2Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1IntenseRow2Plant2"
          component={Har1IntenseRow2Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1IntenseRow2Plant3"
          component={Har1IntenseRow2Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1IntenseRow2Plant4"
          component={Har1IntenseRow2Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1IntenseRow2Plant5"
          component={Har1IntenseRow2Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3DunistarRow1Plant1"
          component={Har3DunistarRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3DunistarRow1Plant2"
          component={Har3DunistarRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3DunistarRow1Plant3"
          component={Har3DunistarRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3DunistarRow1Plant4"
          component={Har3DunistarRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3DunistarRow1Plant5"
          component={Har3DunistarRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1SunsetDelightPlantsRow1"
          component={Har1SunsetDelightPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1SunsetDelightRow1Plant1"
          component={Har1SunsetDelightRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1SunsetDelightRow1Plant2"
          component={Har1SunsetDelightRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1SunsetDelightRow1Plant3"
          component={Har1SunsetDelightRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1SunsetDelightRow1Plant4"
          component={Har1SunsetDelightRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1SunsetDelightRow1Plant5"
          component={Har1SunsetDelightRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1DuelleRow"
          component={Ger1DuelleRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2GrandiceRow"
          component={Ger2GrandiceRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3GustelleRow"
          component={Ger3GustelleRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3DuelleRow"
          component={Ger3DuelleRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3AngelleRow"
          component={Ger3AngelleRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger4MerliceRow"
          component={Ger4MerliceRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5DuelleRow"
          component={Ger5DuelleRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5AngelleRow"
          component={Ger5AngelleRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5BambelloRow"
          component={Ger5BambelloRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1DuellePlantsRow1"
          component={Ger1DuellePlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1DuellePlantsRow2"
          component={Ger1DuellePlantsRow2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2GrandicePlantsRow1"
          component={Ger2GrandicePlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2GrandicePlantsRow2"
          component={Ger2GrandicePlantsRow2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3DunistarPlantsRow2"
          component={Ger3DunistarPlantsRow2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3GustellePlantsRow2"
          component={Ger3GustellePlantsRow2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3DuellePlantsRow2"
          component={Ger3DuellePlantsRow2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3AngellePlantsRow2"
          component={Ger3AngellePlantsRow2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger4MerlicePlantsRow1"
          component={Ger4MerlicePlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger4MerlicePlantsRow2"
          component={Ger4MerlicePlantsRow2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5AngellePlantsRow1"
          component={Ger5AngellePlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5DuellePlantsRow1"
          component={Ger5DuellePlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5BambelloPlantsRow1"
          component={Ger5BambelloPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1DuelleRow1Plant1"
          component={Ger1DuelleRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1DuelleRow1Plant2"
          component={Ger1DuelleRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1DuelleRow1Plant3"
          component={Ger1DuelleRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1DuelleRow1Plant4"
          component={Ger1DuelleRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1DuelleRow1Plant5"
          component={Ger1DuelleRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1DuelleRow1Plant6"
          component={Ger1DuelleRow1Plant6}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1DuelleRow1Plant7"
          component={Ger1DuelleRow1Plant7}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1DuelleRow1Plant8"
          component={Ger1DuelleRow1Plant8}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1DuelleRow1Plant9"
          component={Ger1DuelleRow1Plant9}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1DuelleRow1Plant10"
          component={Ger1DuelleRow1Plant10}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1DuelleRow2Plant1"
          component={Ger1DuelleRow2Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1DuelleRow2Plant2"
          component={Ger1DuelleRow2Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1DuelleRow2Plant3"
          component={Ger1DuelleRow2Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1DuelleRow2Plant4"
          component={Ger1DuelleRow2Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1DuelleRow2Plant5"
          component={Ger1DuelleRow2Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1DuelleRow2Plant6"
          component={Ger1DuelleRow2Plant6}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1DuelleRow2Plant7"
          component={Ger1DuelleRow2Plant7}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1DuelleRow2Plant8"
          component={Ger1DuelleRow2Plant8}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1DuelleRow2Plant9"
          component={Ger1DuelleRow2Plant9}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1DuelleRow2Plant10"
          component={Ger1DuelleRow2Plant10}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2GrandiceRow1Plant1"
          component={Ger2GrandiceRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2GrandiceRow1Plant2"
          component={Ger2GrandiceRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2GrandiceRow1Plant3"
          component={Ger2GrandiceRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2GrandiceRow1Plant4"
          component={Ger2GrandiceRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2GrandiceRow1Plant5"
          component={Ger2GrandiceRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2GrandiceRow1Plant6"
          component={Ger2GrandiceRow1Plant6}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2GrandiceRow1Plant7"
          component={Ger2GrandiceRow1Plant7}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2GrandiceRow1Plant8"
          component={Ger2GrandiceRow1Plant8}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2GrandiceRow1Plant9"
          component={Ger2GrandiceRow1Plant9}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2GrandiceRow1Plant10"
          component={Ger2GrandiceRow1Plant10}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2GrandiceRow2Plant1"
          component={Ger2GrandiceRow2Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2GrandiceRow2Plant2"
          component={Ger2GrandiceRow2Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2GrandiceRow2Plant3"
          component={Ger2GrandiceRow2Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2GrandiceRow2Plant4"
          component={Ger2GrandiceRow2Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2GrandiceRow2Plant5"
          component={Ger2GrandiceRow2Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2GrandiceRow2Plant6"
          component={Ger2GrandiceRow2Plant6}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2GrandiceRow2Plant7"
          component={Ger2GrandiceRow2Plant7}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2GrandiceRow2Plant8"
          component={Ger2GrandiceRow2Plant8}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2GrandiceRow2Plant9"
          component={Ger2GrandiceRow2Plant9}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2GrandiceRow2Plant10"
          component={Ger2GrandiceRow2Plant10}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3DunistarRow2Plant1"
          component={Ger3DunistarRow2Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3DunistarRow2Plant2"
          component={Ger3DunistarRow2Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3DunistarRow2Plant3"
          component={Ger3DunistarRow2Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3DunistarRow2Plant4"
          component={Ger3DunistarRow2Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3DunistarRow2Plant5"
          component={Ger3DunistarRow2Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3GustelleRow2Plant1"
          component={Ger3GustelleRow2Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3GustelleRow2Plant2"
          component={Ger3GustelleRow2Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3GustelleRow2Plant3"
          component={Ger3GustelleRow2Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3GustelleRow2Plant4"
          component={Ger3GustelleRow2Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3GustelleRow2Plant5"
          component={Ger3GustelleRow2Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger4MerliceRow1Plant1"
          component={Ger4MerliceRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger4MerliceRow1Plant2"
          component={Ger4MerliceRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger4MerliceRow1Plant3"
          component={Ger4MerliceRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger4MerliceRow1Plant4"
          component={Ger4MerliceRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger4MerliceRow1Plant5"
          component={Ger4MerliceRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger4MerliceRow1Plant6"
          component={Ger4MerliceRow1Plant6}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger4MerliceRow1Plant7"
          component={Ger4MerliceRow1Plant7}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger4MerliceRow1Plant8"
          component={Ger4MerliceRow1Plant8}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger4MerliceRow1Plant9"
          component={Ger4MerliceRow1Plant9}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger4MerliceRow1Plant10"
          component={Ger4MerliceRow1Plant10}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger4MerliceRow2Plant1"
          component={Ger4MerliceRow2Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger4MerliceRow2Plant2"
          component={Ger4MerliceRow2Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger4MerliceRow2Plant3"
          component={Ger4MerliceRow2Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger4MerliceRow2Plant4"
          component={Ger4MerliceRow2Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger4MerliceRow2Plant5"
          component={Ger4MerliceRow2Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger4MerliceRow2Plant6"
          component={Ger4MerliceRow2Plant6}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger4MerliceRow2Plant7"
          component={Ger4MerliceRow2Plant7}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger4MerliceRow2Plant8"
          component={Ger4MerliceRow2Plant8}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger4MerliceRow2Plant9"
          component={Ger4MerliceRow2Plant9}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger4MerliceRow2Plant10"
          component={Ger4MerliceRow2Plant10}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5AngelleRow1Plant1"
          component={Ger5AngelleRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5AngelleRow1Plant2"
          component={Ger5AngelleRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5AngelleRow1Plant3"
          component={Ger5AngelleRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5AngelleRow1Plant4"
          component={Ger5AngelleRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5AngelleRow1Plant5"
          component={Ger5AngelleRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5DuelleRow1Plant1"
          component={Ger5DuelleRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5DuelleRow1Plant2"
          component={Ger5DuelleRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5DuelleRow1Plant3"
          component={Ger5DuelleRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5DuelleRow1Plant4"
          component={Ger5DuelleRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5DuelleRow1Plant5"
          component={Ger5DuelleRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5BambelloRow1Plant1"
          component={Ger5BambelloRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5BambelloRow1Plant2"
          component={Ger5BambelloRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5BambelloRow1Plant3"
          component={Ger5BambelloRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5BambelloRow1Plant4"
          component={Ger5BambelloRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5BambelloRow1Plant5"
          component={Ger5BambelloRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har33D17621PlantsRow1"
          component={Har33D17621PlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3BambelloPlantsRow1"
          component={Har3BambelloPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har33D17621Row1Plant1"
          component={Har33D17621Row1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har33D17621Row1Plant2"
          component={Har33D17621Row1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har33D17621Row1Plant3"
          component={Har33D17621Row1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har33D17621Row1Plant4"
          component={Har33D17621Row1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har33D17621Row1Plant5"
          component={Har33D17621Row1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3BambelloRow1Plant1"
          component={Har3BambelloRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3BambelloRow1Plant2"
          component={Har3BambelloRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3BambelloRow1Plant3"
          component={Har3BambelloRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3BambelloRow1Plant4"
          component={Har3BambelloRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3BambelloRow1Plant5"
          component={Har3BambelloRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3GustelleRow"
          component={Har3GustelleRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3GustellePlantsRow1"
          component={Har3GustellePlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3GustelleRow1Plant1"
          component={Har3GustelleRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3GustelleRow1Plant2"
          component={Har3GustelleRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3GustelleRow1Plant3"
          component={Har3GustelleRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3GustelleRow1Plant4"
          component={Har3GustelleRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3GustelleRow1Plant5"
          component={Har3GustelleRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har456"
          component={Har456}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4HTL1606150Row"
          component={Har4HTL1606150Row}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4HTL1606150PlantsRow1"
          component={Har4HTL1606150PlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4HTL1606150Row1Plant1"
          component={Har4HTL1606150Row1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4HTL1606150Row1Plant2"
          component={Har4HTL1606150Row1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4HTL1606150Row1Plant3"
          component={Har4HTL1606150Row1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4HTL1606150Row1Plant4"
          component={Har4HTL1606150Row1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4HTL1606150Row1Plant5"
          component={Har4HTL1606150Row1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4FlavorinoRow"
          component={Har4FlavorinoRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4FlavorinoPlantsRow1"
          component={Har4FlavorinoPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4FlavorinoRow1Plant1"
          component={Har4FlavorinoRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4FlavorinoRow1Plant2"
          component={Har4FlavorinoRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4FlavorinoRow1Plant3"
          component={Har4FlavorinoRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4FlavorinoRow1Plant4"
          component={Har4FlavorinoRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4FlavorinoRow1Plant5"
          component={Har4FlavorinoRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4AngelleRow"
          component={Har4AngelleRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4MonalisaRow"
          component={Har4MonalisaRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4MonalisaPlantsRow1"
          component={Har4MonalisaPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4MonalisaRow1Plant1"
          component={Har4MonalisaRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4MonalisaRow1Plant2"
          component={Har4MonalisaRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4MonalisaRow1Plant3"
          component={Har4MonalisaRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4MonalisaRow1Plant4"
          component={Har4MonalisaRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4MonalisaRow1Plant5"
          component={Har4MonalisaRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4AngellePlantsRow1"
          component={Har4AngellePlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4AngelleRow1Plant1"
          component={Har4AngelleRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4AngelleRow1Plant2"
          component={Har4AngelleRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4AngelleRow1Plant3"
          component={Har4AngelleRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4AngelleRow1Plant4"
          component={Har4AngelleRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4AngelleRow1Plant5"
          component={Har4AngelleRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4SunsetDelightRow"
          component={Har4SunsetDelightRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4SunsetDelightPlantsRow1"
          component={Har4SunsetDelightPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4SunsetDelightRow1Plant1"
          component={Har4SunsetDelightRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4SunsetDelightRow1Plant2"
          component={Har4SunsetDelightRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4SunsetDelightRow1Plant3"
          component={Har4SunsetDelightRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4SunsetDelightRow1Plant4"
          component={Har4SunsetDelightRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4SunsetDelightRow1Plant5"
          component={Har4SunsetDelightRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har5AngelleRow"
          component={Har5AngelleRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har5AngellePlantsRow1"
          component={Har5AngellePlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har5AngellePlantsRow2"
          component={Har5AngellePlantsRow2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har5AngelleRow1Plant1"
          component={Har5AngelleRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har5AngelleRow1Plant3"
          component={Har5AngelleRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har5AngelleRow1Plant2"
          component={Har5AngelleRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har5AngelleRow1Plant4"
          component={Har5AngelleRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har5AngelleRow1Plant5"
          component={Har5AngelleRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har5AngelleRow2Plant1"
          component={Har5AngelleRow2Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har5AngelleRow2Plant2"
          component={Har5AngelleRow2Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har5AngelleRow2Plant3"
          component={Har5AngelleRow2Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har5AngelleRow2Plant4"
          component={Har5AngelleRow2Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har5AngelleRow2Plant5"
          component={Har5AngelleRow2Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har6AngelleRow"
          component={Har6AngelleRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har6AngellePlantsRow1"
          component={Har6AngellePlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har6AngellePlantsRow2"
          component={Har6AngellePlantsRow2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har6AngelleRow1Plant1"
          component={Har6AngelleRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har6AngelleRow1Plant2"
          component={Har6AngelleRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har6AngelleRow1Plant3"
          component={Har6AngelleRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har6AngelleRow1Plant4"
          component={Har6AngelleRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har6AngelleRow1Plant5"
          component={Har6AngelleRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har6AngelleRow2Plant1"
          component={Har6AngelleRow2Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har6AngelleRow2Plant2"
          component={Har6AngelleRow2Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har6AngelleRow2Plant3"
          component={Har6AngelleRow2Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har6AngelleRow2Plant4"
          component={Har6AngelleRow2Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har6AngelleRow2Plant5"
          component={Har6AngelleRow2Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3BambelloRow"
          component={Har3BambelloRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3OranjitaRow"
          component={Har3OranjitaRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3SunfunRow"
          component={Har3SunfunRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3IvorinoRow"
          component={Har3IvorinoRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3OranjitaPlantsRow1"
          component={Har3OranjitaPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3SunfunPlantsRow1"
          component={Har3SunfunPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3IvorinoPlantsRow1"
          component={Har3IvorinoPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3SunfunRow1Plant1"
          component={Har3SunfunRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3SunfunRow1Plant2"
          component={Har3SunfunRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3SunfunRow1Plant3"
          component={Har3SunfunRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3OranjitaRow1Plant1"
          component={Har3OranjitaRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3OranjitaRow1Plant2"
          component={Har3OranjitaRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3OranjitaRow1Plant3"
          component={Har3OranjitaRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3IvorinoRow1Plant1"
          component={Har3IvorinoRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3IvorinoRow1Plant2"
          component={Har3IvorinoRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3IvorinoRow1Plant3"
          component={Har3IvorinoRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="OhaHome"
          component={OhaHome}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha1IntenseRow"
          component={Oha1IntenseRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha1IntensePlantsRow1"
          component={Oha1IntensePlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha1IntensePlantsRow2"
          component={Oha1IntensePlantsRow2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NAnnicoRow"
          component={Oha2NAnnicoRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NAvalantinoRow"
          component={Oha2NAvalantinoRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NDunistarRow"
          component={Oha2NDunistarRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NMonalisaRow"
          component={Oha2NMonalisaRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2SMerliceRow"
          component={Oha2SMerliceRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2SClobagoRow"
          component={Oha2SClobagoRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NAnnicoPlantsRow1"
          component={Oha2NAnnicoPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NAvalantinoPlantsRow1"
          component={Oha2NAvalantinoPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NDunistarPlantsRow1"
          component={Oha2NDunistarPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NMonalisaPlantsNewRow1"
          component={Oha2NMonalisaPlantsNewRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2SMerlicePlantsRow1"
          component={Oha2SMerlicePlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2SClobagoPlantsRow1"
          component={Oha2SClobagoPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha1IntenseRow1Plant1"
          component={Oha1IntenseRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha1IntenseRow1Plant2"
          component={Oha1IntenseRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha1IntenseRow1Plant3"
          component={Oha1IntenseRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha1IntenseRow1Plant4"
          component={Oha1IntenseRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha1IntenseRow1Plant5"
          component={Oha1IntenseRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha1IntenseRow2Plant1"
          component={Oha1IntenseRow2Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha1IntenseRow2Plant2"
          component={Oha1IntenseRow2Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha1IntenseRow2Plant3"
          component={Oha1IntenseRow2Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha1IntenseRow2Plant4"
          component={Oha1IntenseRow2Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha1IntenseRow2Plant5"
          component={Oha1IntenseRow2Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NAnnicoRow1Plant1"
          component={Oha2NAnnicoRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NAnnicoRow1Plant2"
          component={Oha2NAnnicoRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NAnnicoRow1Plant3"
          component={Oha2NAnnicoRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NAnnicoRow1Plant4"
          component={Oha2NAnnicoRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NAnnicoRow1Plant5"
          component={Oha2NAnnicoRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NDunistarRow1Plant1"
          component={Oha2NDunistarRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NDunistarRow1Plant2"
          component={Oha2NDunistarRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NDunistarRow1Plant3"
          component={Oha2NDunistarRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NDunistarRow1Plant4"
          component={Oha2NDunistarRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NDunistarRow1Plant5"
          component={Oha2NDunistarRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NAvalantinoRow1Plant1"
          component={Oha2NAvalantinoRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NAvalantinoRow1Plant2"
          component={Oha2NAvalantinoRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NAvalantinoRow1Plant3"
          component={Oha2NAvalantinoRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NAvalantinoRow1Plant4"
          component={Oha2NAvalantinoRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NAvalantinoRow1Plant5"
          component={Oha2NAvalantinoRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NMonalisaRow1Plant1"
          component={Oha2NMonalisaRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NMonalisaRow1Plant2"
          component={Oha2NMonalisaRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NMonalisaRow1Plant3"
          component={Oha2NMonalisaRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NMonalisaRow1Plant4"
          component={Oha2NMonalisaRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NMonalisaRow1Plant5"
          component={Oha2NMonalisaRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2SMerliceRow1Plant1"
          component={Oha2SMerliceRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2SMerliceRow1Plant2"
          component={Oha2SMerliceRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2SMerliceRow1Plant3"
          component={Oha2SMerliceRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2SMerliceRow1Plant4"
          component={Oha2SMerliceRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2SMerliceRow1Plant5"
          component={Oha2SMerliceRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2SClobagoRow1Plant1"
          component={Oha2SClobagoRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2SClobagoRow1Plant2"
          component={Oha2SClobagoRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2SClobagoRow1Plant3"
          component={Oha2SClobagoRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2SClobagoRow1Plant4"
          component={Oha2SClobagoRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2SClobagoRow1Plant5"
          component={Oha2SClobagoRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4AvalantinoRow"
          component={Har4AvalantinoRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4AvalantinoPlantsRow1"
          component={Har4AvalantinoPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4AvalantinoRow1Plant1"
          component={Har4AvalantinoRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4AvalantinoRow1Plant2"
          component={Har4AvalantinoRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4AvalantinoRow1Plant3"
          component={Har4AvalantinoRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4AvalantinoRow1Plant4"
          component={Har4AvalantinoRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4AvalantinoRow1Plant5"
          component={Har4AvalantinoRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1DataChecker"
          component={Ger1DataChecker}
          options={{headerShown: false, title: 'T&G Global'}}
        />
        <Stack.Screen
          name="Ger2DataChecker"
          component={Ger2DataChecker}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3DataChecker"
          component={Ger3DataChecker}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger4DataChecker"
          component={Ger4DataChecker}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5DataChecker"
          component={Ger5DataChecker}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1DataChecker"
          component={Har1DataChecker}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har2DataChecker"
          component={Har2DataChecker}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3DataChecker"
          component={Har3DataChecker}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4DataChecker"
          component={Har4DataChecker}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har5DataChecker"
          component={Har5DataChecker}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har6DataChecker"
          component={Har6DataChecker}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen name="OhaDataChecker" component={OhaDataChecker} />

        <Stack.Screen
          name="Ger3DunistarRow"
          component={Ger3DunistarRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3DuelleRow2Plant1"
          component={Ger3DuelleRow2Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3DuelleRow2Plant2"
          component={Ger3DuelleRow2Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3DuelleRow2Plant3"
          component={Ger3DuelleRow2Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3DuelleRow2Plant4"
          component={Ger3DuelleRow2Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3DuelleRow2Plant5"
          component={Ger3DuelleRow2Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3AngelleRow2Plant1"
          component={Ger3AngelleRow2Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3AngelleRow2Plant2"
          component={Ger3AngelleRow2Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3AngelleRow2Plant3"
          component={Ger3AngelleRow2Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3AngelleRow2Plant4"
          component={Ger3AngelleRow2Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3AngelleRow2Plant5"
          component={Ger3AngelleRow2Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerLeftStyle: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 8,
  },

  alignTextView: {
    flexDirection: 'column',
  },

  headerLeftTopStyle: {
    color: '#BBB3B3',
    fontSize: 18,
    marginLeft: 8,
    marginBottom: 8,
  },

  headerRightStyle: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default MainStackNavigator;
