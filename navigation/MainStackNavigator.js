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
import Oha2NMerliceRow from '../screens/Oha2NMerliceRow';
import Oha2SMerliceRow from '../screens/Oha2SMerliceRow';

import Oha1IntensePlantsRow1 from '../screens/Oha1IntensePlantsRow1';
import Oha1IntensePlantsRow2 from '../screens/Oha1IntensePlantsRow2';
import Oha2NMerlicePlantsRow1 from '../screens/Oha2NMerlicePlantsRow1';
import Oha2NMerlicePlantsRow2 from '../screens/Oha2NMerlicePlantsRow2';
import Oha2SMerlicePlantsRow1 from '../screens/Oha2SMerlicePlantsRow1';

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

import Oha2NMerliceRow1Plant1 from '../screens/Oha2NMerliceRow1Plant1';
import Oha2NMerliceRow1Plant2 from '../screens/Oha2NMerliceRow1Plant2';
import Oha2NMerliceRow1Plant3 from '../screens/Oha2NMerliceRow1Plant3';
import Oha2NMerliceRow1Plant4 from '../screens/Oha2NMerliceRow1Plant4';
import Oha2NMerliceRow1Plant5 from '../screens/Oha2NMerliceRow1Plant5';

import Oha2NMerliceRow2Plant1 from '../screens/Oha2NMerliceRow2Plant1';
import Oha2NMerliceRow2Plant2 from '../screens/Oha2NMerliceRow2Plant2';
import Oha2NMerliceRow2Plant3 from '../screens/Oha2NMerliceRow2Plant3';
import Oha2NMerliceRow2Plant4 from '../screens/Oha2NMerliceRow2Plant4';
import Oha2NMerliceRow2Plant5 from '../screens/Oha2NMerliceRow2Plant5';

import Oha2SMerliceRow1Plant1 from '../screens/Oha2SMerliceRow1Plant1';
import Oha2SMerliceRow1Plant2 from '../screens/Oha2SMerliceRow1Plant2';
import Oha2SMerliceRow1Plant3 from '../screens/Oha2SMerliceRow1Plant3';
import Oha2SMerliceRow1Plant4 from '../screens/Oha2SMerliceRow1Plant4';
import Oha2SMerliceRow1Plant5 from '../screens/Oha2SMerliceRow1Plant5';

import Ger1MerliceRow from '../screens/Ger1MerliceRow';
import Ger2MerliceRow from '../screens/Ger2MerliceRow';
import Ger3EndeavourRow from '../screens/Ger3EndeavourRow';
import Ger4MerliceRow from '../screens/Ger4MerliceRow';
import Ger5AngelleRow from '../screens/Ger5AngelleRow';
import Ger5DuelleRow from '../screens/Ger5DuelleRow';

import RepMerlicePlantsRow1 from '../screens/RepMerlicePlantsRow1';
import RepMerlicePlantsRow2 from '../screens/RepMerlicePlantsRow2';
import RepAngellePlantsRow1 from '../screens/RepAngellePlantsRow1';
import RepAngellePlantsRow2 from '../screens/RepAngellePlantsRow2';
import RepDuellePlantsRow1 from '../screens/RepDuellePlantsRow1';
import RepKmPlantsRow1 from '../screens/RepKmPlantsRow1';
import RepBambelloPlantsRow1 from '../screens/RepBambelloPlantsRow1';

import Ger1MerlicePlantsRow1 from '../screens/Ger1MerlicePlantsRow1';
import Ger1MerlicePlantsRow2 from '../screens/Ger1MerlicePlantsRow2';
import Ger2MerlicePlantsRow2 from '../screens/Ger2MerlicePlantsRow2';
import Ger2MerlicePlantsRow1 from '../screens/Ger2MerlicePlantsRow1';
import Ger3EndeavourPlantsRow1 from '../screens/Ger3EndeavourPlantsRow1';
import Ger3EndeavourPlantsRow2 from '../screens/Ger3EndeavourPlantsRow2';
import Ger4MerlicePlantsRow1 from '../screens/Ger4MerlicePlantsRow1';
import Ger4MerlicePlantsRow2 from '../screens/Ger4MerlicePlantsRow2';
import Ger5AngellePlantsRow1 from '../screens/Ger5AngellePlantsRow1';
import Ger5AngellePlantsRow2 from '../screens/Ger5AngellePlantsRow2';
import Ger5DuellePlantsRow1 from '../screens/Ger5DuellePlantsRow1';
import Ger5DuellePlantsRow2 from '../screens/Ger5DuellePlantsRow2';

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

import Har1MimosaRow from '../screens/Har1MimosaRow';
import Har1AvalantinoRow from '../screens/Har1AvalantinoRow';
import Har1SunsetDelightRow from '../screens/Har1SunsetDelightRow';
import Har2AngelleRow from '../screens/Har2AngelleRow';
import Har3AngelleRow from '../screens/Har3AngelleRow';
import Har4BambelloRow from '../screens/Har4BambelloRow';
import Har4AvalantinoRow from '../screens/Har4AvalantinoRow';
import Har4KM5512Row from '../screens/Har4KM5512Row';
import Har4MimosaRow from '../screens/Har4MimosaRow';
import Har4SunsetDelightRow from '../screens/Har4SunsetDelightRow';
import Har5AngelleRow from '../screens/Har5AngelleRow';
import Har6AngelleRow from '../screens/Har6AngelleRow';
import Har1LorenzoRow from '../screens/Har1LorenzoRow';
import Har3BambelloRow from '../screens/Har3BambelloRow';
import Har3KM5512Row from '../screens/Har3KM5512Row';

import Har1MimosaPlantsRow1 from '../screens/Har1MimosaPlantsRow1';
import Har1AvalantinoPlantsRow1 from '../screens/Har1AvalantinoPlantsRow1';
import Har1AvalantinoPlantsRow2 from '../screens/Har1AvalantinoPlantsRow2';
import Har1LorenzoPlantsRow1 from '../screens/Har1LorenzoPlantsRow1';
import Har1SunsetDelightPlantsRow1 from '../screens/Har1SunsetDelightPlantsRow1';
import Har2AngellePlantsRow1 from '../screens/Har2AngellePlantsRow1';
import Har2AngellePlantsRow2 from '../screens/Har2AngellePlantsRow2';
import Har3AngellePlantsRow1 from '../screens/Har3AngellePlantsRow1';
import Har3BambelloPlantsRow1 from '../screens/Har3BambelloPlantsRow1';
import Har3VespolinoRow from '../screens/Har3VespolinoRow';
import Har3VespolinoPlantsRow1 from '../screens/Har3VespolinoPlantsRow1';
import Har4BambelloPlantsRow1 from '../screens/Har4BambelloPlantsRow1';
import Har4KM5512PlantsRow1 from '../screens/Har4KM5512PlantsRow1';
import Har4MimosaPlantsRow1 from '../screens/Har4MimosaPlantsRow1';
import Har4SunsetDelightPlantsRow1 from '../screens/Har4SunsetDelightPlantsRow1';
import Har5AngellePlantsRow1 from '../screens/Har5AngellePlantsRow1';
import Har5AngellePlantsRow2 from '../screens/Har5AngellePlantsRow2';
import Har6AngellePlantsRow2 from '../screens/Har6AngellePlantsRow2';
import Har6AngellePlantsRow1 from '../screens/Har6AngellePlantsRow1';
import Har3KM5512PlantsRow1 from '../screens/Har3KM5512PlantsRow1';
import Har4AvalantinoPlantsRow1 from '../screens/Har4AvalantinoPlantsRow1';

import Har3KM5512Row1Plant1 from '../screens/Har3KM5512Row1Plant1';
import Har3KM5512Row1Plant2 from '../screens/Har3KM5512Row1Plant2';
import Har3KM5512Row1Plant3 from '../screens/Har3KM5512Row1Plant3';
import Har3KM5512Row1Plant4 from '../screens/Har3KM5512Row1Plant4';
import Har3KM5512Row1Plant5 from '../screens/Har3KM5512Row1Plant5';

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

import Har4MimosaRow1Plant1 from '../screens/Har4MimosaRow1Plant1';
import Har4MimosaRow1Plant2 from '../screens/Har4MimosaRow1Plant2';
import Har4MimosaRow1Plant3 from '../screens/Har4MimosaRow1Plant3';
import Har4MimosaRow1Plant4 from '../screens/Har4MimosaRow1Plant4';
import Har4MimosaRow1Plant5 from '../screens/Har4MimosaRow1Plant5';

import Har3VespolinoRow1Plant1 from '../screens/Har3VespolinoRow1Plant1';
import Har3VespolinoRow1Plant2 from '../screens/Har3VespolinoRow1Plant2';
import Har3VespolinoRow1Plant3 from '../screens/Har3VespolinoRow1Plant3';
import Har3VespolinoRow1Plant4 from '../screens/Har3VespolinoRow1Plant4';
import Har3VespolinoRow1Plant5 from '../screens/Har3VespolinoRow1Plant5';

import Har4BambelloRow1Plant1 from '../screens/Har4BambelloRow1Plant1';
import Har4BambelloRow1Plant2 from '../screens/Har4BambelloRow1Plant2';
import Har4BambelloRow1Plant3 from '../screens/Har4BambelloRow1Plant3';
import Har4BambelloRow1Plant4 from '../screens/Har4BambelloRow1Plant4';
import Har4BambelloRow1Plant5 from '../screens/Har4BambelloRow1Plant5';

import Har4AvalantinoRow1Plant1 from '../screens/Har4AvalantinoRow1Plant1';
import Har4AvalantinoRow1Plant2 from '../screens/Har4AvalantinoRow1Plant2';
import Har4AvalantinoRow1Plant3 from '../screens/Har4AvalantinoRow1Plant3';
import Har4AvalantinoRow1Plant4 from '../screens/Har4AvalantinoRow1Plant4';
import Har4AvalantinoRow1Plant5 from '../screens/Har4AvalantinoRow1Plant5';

import Har1MimosaRow1Plant1 from '../screens/Har1MimosaRow1Plant1';
import Har1MimosaRow1Plant2 from '../screens/Har1MimosaRow1Plant2';
import Har1MimosaRow1Plant3 from '../screens/Har1MimosaRow1Plant3';
import Har1MimosaRow1Plant4 from '../screens/Har1MimosaRow1Plant4';
import Har1MimosaRow1Plant5 from '../screens/Har1MimosaRow1Plant5';

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

import Har3AngelleRow1Plant1 from '../screens/Har3AngelleRow1Plant1';
import Har3AngelleRow1Plant2 from '../screens/Har3AngelleRow1Plant2';
import Har3AngelleRow1Plant3 from '../screens/Har3AngelleRow1Plant3';
import Har3AngelleRow1Plant4 from '../screens/Har3AngelleRow1Plant4';
import Har3AngelleRow1Plant5 from '../screens/Har3AngelleRow1Plant5';

import Har3BambelloRow1Plant1 from '../screens/Har3BambelloRow1Plant1';
import Har3BambelloRow1Plant2 from '../screens/Har3BambelloRow1Plant2';
import Har3BambelloRow1Plant3 from '../screens/Har3BambelloRow1Plant3';
import Har3BambelloRow1Plant4 from '../screens/Har3BambelloRow1Plant4';
import Har3BambelloRow1Plant5 from '../screens/Har3BambelloRow1Plant5';

import Har4KM5512Row1Plant1 from '../screens/Har4KM5512Row1Plant1';
import Har4KM5512Row1Plant2 from '../screens/Har4KM5512Row1Plant2';
import Har4KM5512Row1Plant3 from '../screens/Har4KM5512Row1Plant3';
import Har4KM5512Row1Plant4 from '../screens/Har4KM5512Row1Plant4';
import Har4KM5512Row1Plant5 from '../screens/Har4KM5512Row1Plant5';

import Har1AvalantinoRow1Plant1 from '../screens/Har1AvalantinoRow1Plant1';
import Har1AvalantinoRow1Plant2 from '../screens/Har1AvalantinoRow1Plant2';
import Har1AvalantinoRow1Plant3 from '../screens/Har1AvalantinoRow1Plant3';
import Har1AvalantinoRow1Plant4 from '../screens/Har1AvalantinoRow1Plant4';
import Har1AvalantinoRow1Plant5 from '../screens/Har1AvalantinoRow1Plant5';

import Har1AvalantinoRow2Plant1 from '../screens/Har1AvalantinoRow2Plant1';
import Har1AvalantinoRow2Plant2 from '../screens/Har1AvalantinoRow2Plant2';
import Har1AvalantinoRow2Plant3 from '../screens/Har1AvalantinoRow2Plant3';
import Har1AvalantinoRow2Plant4 from '../screens/Har1AvalantinoRow2Plant4';
import Har1AvalantinoRow2Plant5 from '../screens/Har1AvalantinoRow2Plant5';

import Har1LorenzoRow1Plant1 from '../screens/Har1LorenzoRow1Plant1';
import Har1LorenzoRow1Plant2 from '../screens/Har1LorenzoRow1Plant2';
import Har1LorenzoRow1Plant3 from '../screens/Har1LorenzoRow1Plant3';
import Har1LorenzoRow1Plant4 from '../screens/Har1LorenzoRow1Plant4';
import Har1LorenzoRow1Plant5 from '../screens/Har1LorenzoRow1Plant5';

import Har1SunsetDelightRow1Plant1 from '../screens/Har1SunsetDelightRow1Plant1';
import Har1SunsetDelightRow1Plant2 from '../screens/Har1SunsetDelightRow1Plant2';
import Har1SunsetDelightRow1Plant3 from '../screens/Har1SunsetDelightRow1Plant3';
import Har1SunsetDelightRow1Plant4 from '../screens/Har1SunsetDelightRow1Plant4';
import Har1SunsetDelightRow1Plant5 from '../screens/Har1SunsetDelightRow1Plant5';

import Ger1MerliceRow1Plant1 from '../screens/Ger1MerliceRow1Plant1';
import Ger1MerliceRow1Plant2 from '../screens/Ger1MerliceRow1Plant2';
import Ger1MerliceRow1Plant3 from '../screens/Ger1MerliceRow1Plant3';
import Ger1MerliceRow1Plant4 from '../screens/Ger1MerliceRow1Plant4';
import Ger1MerliceRow1Plant5 from '../screens/Ger1MerliceRow1Plant5';
import Ger1MerliceRow1Plant6 from '../screens/Ger1MerliceRow1Plant6';
import Ger1MerliceRow1Plant7 from '../screens/Ger1MerliceRow1Plant7';
import Ger1MerliceRow1Plant8 from '../screens/Ger1MerliceRow1Plant8';
import Ger1MerliceRow1Plant9 from '../screens/Ger1MerliceRow1Plant9';
import Ger1MerliceRow1Plant10 from '../screens/Ger1MerliceRow1Plant10';

import Ger1MerliceRow2Plant1 from '../screens/Ger1MerliceRow2Plant1';
import Ger1MerliceRow2Plant2 from '../screens/Ger1MerliceRow2Plant2';
import Ger1MerliceRow2Plant3 from '../screens/Ger1MerliceRow2Plant3';
import Ger1MerliceRow2Plant4 from '../screens/Ger1MerliceRow2Plant4';
import Ger1MerliceRow2Plant5 from '../screens/Ger1MerliceRow2Plant5';
import Ger1MerliceRow2Plant6 from '../screens/Ger1MerliceRow2Plant6';
import Ger1MerliceRow2Plant7 from '../screens/Ger1MerliceRow2Plant7';
import Ger1MerliceRow2Plant8 from '../screens/Ger1MerliceRow2Plant8';
import Ger1MerliceRow2Plant9 from '../screens/Ger1MerliceRow2Plant9';
import Ger1MerliceRow2Plant10 from '../screens/Ger1MerliceRow2Plant10';

import Ger2MerliceRow1Plant1 from '../screens/Ger2MerliceRow1Plant1';
import Ger2MerliceRow1Plant2 from '../screens/Ger2MerliceRow1Plant2';
import Ger2MerliceRow1Plant3 from '../screens/Ger2MerliceRow1Plant3';
import Ger2MerliceRow1Plant4 from '../screens/Ger2MerliceRow1Plant4';
import Ger2MerliceRow1Plant5 from '../screens/Ger2MerliceRow1Plant5';
import Ger2MerliceRow1Plant6 from '../screens/Ger2MerliceRow1Plant6';
import Ger2MerliceRow1Plant7 from '../screens/Ger2MerliceRow1Plant7';
import Ger2MerliceRow1Plant8 from '../screens/Ger2MerliceRow1Plant8';
import Ger2MerliceRow1Plant9 from '../screens/Ger2MerliceRow1Plant9';
import Ger2MerliceRow1Plant10 from '../screens/Ger2MerliceRow1Plant10';

import Ger2MerliceRow2Plant1 from '../screens/Ger2MerliceRow2Plant1';
import Ger2MerliceRow2Plant2 from '../screens/Ger2MerliceRow2Plant2';
import Ger2MerliceRow2Plant3 from '../screens/Ger2MerliceRow2Plant3';
import Ger2MerliceRow2Plant4 from '../screens/Ger2MerliceRow2Plant4';
import Ger2MerliceRow2Plant5 from '../screens/Ger2MerliceRow2Plant5';
import Ger2MerliceRow2Plant6 from '../screens/Ger2MerliceRow2Plant6';
import Ger2MerliceRow2Plant7 from '../screens/Ger2MerliceRow2Plant7';
import Ger2MerliceRow2Plant8 from '../screens/Ger2MerliceRow2Plant8';
import Ger2MerliceRow2Plant9 from '../screens/Ger2MerliceRow2Plant9';
import Ger2MerliceRow2Plant10 from '../screens/Ger2MerliceRow2Plant10';

import Ger3EndeavourRow1Plant1 from '../screens/Ger3EndeavourRow1Plant1';
import Ger3EndeavourRow1Plant2 from '../screens/Ger3EndeavourRow1Plant2';
import Ger3EndeavourRow1Plant3 from '../screens/Ger3EndeavourRow1Plant3';
import Ger3EndeavourRow1Plant4 from '../screens/Ger3EndeavourRow1Plant4';
import Ger3EndeavourRow1Plant5 from '../screens/Ger3EndeavourRow1Plant5';
import Ger3EndeavourRow1Plant6 from '../screens/Ger3EndeavourRow1Plant6';
import Ger3EndeavourRow1Plant7 from '../screens/Ger3EndeavourRow1Plant7';
import Ger3EndeavourRow1Plant8 from '../screens/Ger3EndeavourRow1Plant8';
import Ger3EndeavourRow1Plant9 from '../screens/Ger3EndeavourRow1Plant9';
import Ger3EndeavourRow1Plant10 from '../screens/Ger3EndeavourRow1Plant10';

import Ger3EndeavourRow2Plant1 from '../screens/Ger3EndeavourRow2Plant1';
import Ger3EndeavourRow2Plant2 from '../screens/Ger3EndeavourRow2Plant2';
import Ger3EndeavourRow2Plant3 from '../screens/Ger3EndeavourRow2Plant3';
import Ger3EndeavourRow2Plant4 from '../screens/Ger3EndeavourRow2Plant4';
import Ger3EndeavourRow2Plant5 from '../screens/Ger3EndeavourRow2Plant5';
import Ger3EndeavourRow2Plant6 from '../screens/Ger3EndeavourRow2Plant6';
import Ger3EndeavourRow2Plant7 from '../screens/Ger3EndeavourRow2Plant7';
import Ger3EndeavourRow2Plant8 from '../screens/Ger3EndeavourRow2Plant8';
import Ger3EndeavourRow2Plant9 from '../screens/Ger3EndeavourRow2Plant9';
import Ger3EndeavourRow2Plant10 from '../screens/Ger3EndeavourRow2Plant10';

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

import Ger5AngelleRow2Plant1 from '../screens/Ger5AngelleRow2Plant1';
import Ger5AngelleRow2Plant2 from '../screens/Ger5AngelleRow2Plant2';
import Ger5AngelleRow2Plant3 from '../screens/Ger5AngelleRow2Plant3';
import Ger5AngelleRow2Plant4 from '../screens/Ger5AngelleRow2Plant4';
import Ger5AngelleRow2Plant5 from '../screens/Ger5AngelleRow2Plant5';

import Ger5DuelleRow1Plant1 from '../screens/Ger5DuelleRow1Plant1';
import Ger5DuelleRow1Plant2 from '../screens/Ger5DuelleRow1Plant2';
import Ger5DuelleRow1Plant3 from '../screens/Ger5DuelleRow1Plant3';
import Ger5DuelleRow1Plant4 from '../screens/Ger5DuelleRow1Plant4';
import Ger5DuelleRow1Plant5 from '../screens/Ger5DuelleRow1Plant5';

import Ger5DuelleRow2Plant1 from '../screens/Ger5DuelleRow2Plant1';
import Ger5DuelleRow2Plant2 from '../screens/Ger5DuelleRow2Plant2';
import Ger5DuelleRow2Plant3 from '../screens/Ger5DuelleRow2Plant3';
import Ger5DuelleRow2Plant4 from '../screens/Ger5DuelleRow2Plant4';
import Ger5DuelleRow2Plant5 from '../screens/Ger5DuelleRow2Plant5';

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
          name="Har1MimosaRow"
          component={Har1MimosaRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1AvalantinoRow"
          component={Har1AvalantinoRow}
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
          name="Har3AngelleRow"
          component={Har3AngelleRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1MimosaPlantsRow1"
          component={Har1MimosaPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1MimosaRow1Plant1"
          component={Har1MimosaRow1Plant1}
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
          name="Har1LorenzoRow"
          component={Har1LorenzoRow}
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
          name="Har1MimosaRow1Plant2"
          component={Har1MimosaRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1MimosaRow1Plant3"
          component={Har1MimosaRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1MimosaRow1Plant4"
          component={Har1MimosaRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1MimosaRow1Plant5"
          component={Har1MimosaRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1AvalantinoPlantsRow1"
          component={Har1AvalantinoPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1AvalantinoPlantsRow2"
          component={Har1AvalantinoPlantsRow2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1LorenzoPlantsRow1"
          component={Har1LorenzoPlantsRow1}
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
          name="Har1AvalantinoRow1Plant1"
          component={Har1AvalantinoRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1AvalantinoRow1Plant2"
          component={Har1AvalantinoRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1AvalantinoRow1Plant3"
          component={Har1AvalantinoRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1AvalantinoRow1Plant4"
          component={Har1AvalantinoRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1AvalantinoRow1Plant5"
          component={Har1AvalantinoRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1AvalantinoRow2Plant1"
          component={Har1AvalantinoRow2Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1AvalantinoRow2Plant2"
          component={Har1AvalantinoRow2Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1AvalantinoRow2Plant3"
          component={Har1AvalantinoRow2Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1AvalantinoRow2Plant4"
          component={Har1AvalantinoRow2Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1AvalantinoRow2Plant5"
          component={Har1AvalantinoRow2Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1LorenzoRow1Plant1"
          component={Har1LorenzoRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1LorenzoRow1Plant2"
          component={Har1LorenzoRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1LorenzoRow1Plant3"
          component={Har1LorenzoRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1LorenzoRow1Plant4"
          component={Har1LorenzoRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har1LorenzoRow1Plant5"
          component={Har1LorenzoRow1Plant5}
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
          name="Ger1MerliceRow"
          component={Ger1MerliceRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2MerliceRow"
          component={Ger2MerliceRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3EndeavourRow"
          component={Ger3EndeavourRow}
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
          name="Ger1MerlicePlantsRow1"
          component={Ger1MerlicePlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1MerlicePlantsRow2"
          component={Ger1MerlicePlantsRow2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2MerlicePlantsRow1"
          component={Ger2MerlicePlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2MerlicePlantsRow2"
          component={Ger2MerlicePlantsRow2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3EndeavourPlantsRow1"
          component={Ger3EndeavourPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3EndeavourPlantsRow2"
          component={Ger3EndeavourPlantsRow2}
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
          name="Ger5AngellePlantsRow2"
          component={Ger5AngellePlantsRow2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5DuellePlantsRow1"
          component={Ger5DuellePlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5DuellePlantsRow2"
          component={Ger5DuellePlantsRow2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1MerliceRow1Plant1"
          component={Ger1MerliceRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1MerliceRow1Plant2"
          component={Ger1MerliceRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1MerliceRow1Plant3"
          component={Ger1MerliceRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1MerliceRow1Plant4"
          component={Ger1MerliceRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1MerliceRow1Plant5"
          component={Ger1MerliceRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1MerliceRow1Plant6"
          component={Ger1MerliceRow1Plant6}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1MerliceRow1Plant7"
          component={Ger1MerliceRow1Plant7}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1MerliceRow1Plant8"
          component={Ger1MerliceRow1Plant8}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1MerliceRow1Plant9"
          component={Ger1MerliceRow1Plant9}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1MerliceRow1Plant10"
          component={Ger1MerliceRow1Plant10}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1MerliceRow2Plant1"
          component={Ger1MerliceRow2Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1MerliceRow2Plant2"
          component={Ger1MerliceRow2Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1MerliceRow2Plant3"
          component={Ger1MerliceRow2Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1MerliceRow2Plant4"
          component={Ger1MerliceRow2Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1MerliceRow2Plant5"
          component={Ger1MerliceRow2Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1MerliceRow2Plant6"
          component={Ger1MerliceRow2Plant6}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1MerliceRow2Plant7"
          component={Ger1MerliceRow2Plant7}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1MerliceRow2Plant8"
          component={Ger1MerliceRow2Plant8}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1MerliceRow2Plant9"
          component={Ger1MerliceRow2Plant9}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger1MerliceRow2Plant10"
          component={Ger1MerliceRow2Plant10}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2MerliceRow1Plant1"
          component={Ger2MerliceRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2MerliceRow1Plant2"
          component={Ger2MerliceRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2MerliceRow1Plant3"
          component={Ger2MerliceRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2MerliceRow1Plant4"
          component={Ger2MerliceRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2MerliceRow1Plant5"
          component={Ger2MerliceRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2MerliceRow1Plant6"
          component={Ger2MerliceRow1Plant6}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2MerliceRow1Plant7"
          component={Ger2MerliceRow1Plant7}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2MerliceRow1Plant8"
          component={Ger2MerliceRow1Plant8}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2MerliceRow1Plant9"
          component={Ger2MerliceRow1Plant9}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2MerliceRow1Plant10"
          component={Ger2MerliceRow1Plant10}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2MerliceRow2Plant1"
          component={Ger2MerliceRow2Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2MerliceRow2Plant2"
          component={Ger2MerliceRow2Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2MerliceRow2Plant3"
          component={Ger2MerliceRow2Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2MerliceRow2Plant4"
          component={Ger2MerliceRow2Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2MerliceRow2Plant5"
          component={Ger2MerliceRow2Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2MerliceRow2Plant6"
          component={Ger2MerliceRow2Plant6}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2MerliceRow2Plant7"
          component={Ger2MerliceRow2Plant7}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2MerliceRow2Plant8"
          component={Ger2MerliceRow2Plant8}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2MerliceRow2Plant9"
          component={Ger2MerliceRow2Plant9}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger2MerliceRow2Plant10"
          component={Ger2MerliceRow2Plant10}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3EndeavourRow1Plant1"
          component={Ger3EndeavourRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3EndeavourRow1Plant2"
          component={Ger3EndeavourRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3EndeavourRow1Plant3"
          component={Ger3EndeavourRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3EndeavourRow1Plant4"
          component={Ger3EndeavourRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3EndeavourRow1Plant5"
          component={Ger3EndeavourRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3EndeavourRow1Plant6"
          component={Ger3EndeavourRow1Plant6}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3EndeavourRow1Plant7"
          component={Ger3EndeavourRow1Plant7}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3EndeavourRow1Plant8"
          component={Ger3EndeavourRow1Plant8}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3EndeavourRow1Plant9"
          component={Ger3EndeavourRow1Plant9}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3EndeavourRow1Plant10"
          component={Ger3EndeavourRow1Plant10}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3EndeavourRow2Plant1"
          component={Ger3EndeavourRow2Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3EndeavourRow2Plant2"
          component={Ger3EndeavourRow2Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3EndeavourRow2Plant3"
          component={Ger3EndeavourRow2Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3EndeavourRow2Plant4"
          component={Ger3EndeavourRow2Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3EndeavourRow2Plant5"
          component={Ger3EndeavourRow2Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3EndeavourRow2Plant6"
          component={Ger3EndeavourRow2Plant6}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3EndeavourRow2Plant7"
          component={Ger3EndeavourRow2Plant7}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3EndeavourRow2Plant8"
          component={Ger3EndeavourRow2Plant8}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3EndeavourRow2Plant9"
          component={Ger3EndeavourRow2Plant9}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger3EndeavourRow2Plant10"
          component={Ger3EndeavourRow2Plant10}
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
          name="Ger5AngelleRow2Plant1"
          component={Ger5AngelleRow2Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5AngelleRow2Plant2"
          component={Ger5AngelleRow2Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5AngelleRow2Plant3"
          component={Ger5AngelleRow2Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5AngelleRow2Plant4"
          component={Ger5AngelleRow2Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5AngelleRow2Plant5"
          component={Ger5AngelleRow2Plant5}
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
          name="Ger5DuelleRow2Plant1"
          component={Ger5DuelleRow2Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5DuelleRow2Plant2"
          component={Ger5DuelleRow2Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5DuelleRow2Plant3"
          component={Ger5DuelleRow2Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5DuelleRow2Plant4"
          component={Ger5DuelleRow2Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Ger5DuelleRow2Plant5"
          component={Ger5DuelleRow2Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3AngellePlantsRow1"
          component={Har3AngellePlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3BambelloPlantsRow1"
          component={Har3BambelloPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3AngelleRow1Plant1"
          component={Har3AngelleRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3AngelleRow1Plant2"
          component={Har3AngelleRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3AngelleRow1Plant3"
          component={Har3AngelleRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3AngelleRow1Plant4"
          component={Har3AngelleRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3AngelleRow1Plant5"
          component={Har3AngelleRow1Plant5}
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
          name="Har3VespolinoRow"
          component={Har3VespolinoRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3VespolinoPlantsRow1"
          component={Har3VespolinoPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3VespolinoRow1Plant1"
          component={Har3VespolinoRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3VespolinoRow1Plant2"
          component={Har3VespolinoRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3VespolinoRow1Plant3"
          component={Har3VespolinoRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3VespolinoRow1Plant4"
          component={Har3VespolinoRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3VespolinoRow1Plant5"
          component={Har3VespolinoRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har456"
          component={Har456}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4BambelloRow"
          component={Har4BambelloRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4BambelloPlantsRow1"
          component={Har4BambelloPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4BambelloRow1Plant1"
          component={Har4BambelloRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4BambelloRow1Plant2"
          component={Har4BambelloRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4BambelloRow1Plant3"
          component={Har4BambelloRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4BambelloRow1Plant4"
          component={Har4BambelloRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4BambelloRow1Plant5"
          component={Har4BambelloRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4KM5512Row"
          component={Har4KM5512Row}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4KM5512PlantsRow1"
          component={Har4KM5512PlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4KM5512Row1Plant1"
          component={Har4KM5512Row1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4KM5512Row1Plant2"
          component={Har4KM5512Row1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4KM5512Row1Plant3"
          component={Har4KM5512Row1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4KM5512Row1Plant4"
          component={Har4KM5512Row1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4KM5512Row1Plant5"
          component={Har4KM5512Row1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4MimosaRow"
          component={Har4MimosaRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4MimosaPlantsRow1"
          component={Har4MimosaPlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4MimosaRow1Plant1"
          component={Har4MimosaRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4MimosaRow1Plant2"
          component={Har4MimosaRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4MimosaRow1Plant3"
          component={Har4MimosaRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4MimosaRow1Plant4"
          component={Har4MimosaRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har4MimosaRow1Plant5"
          component={Har4MimosaRow1Plant5}
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
          name="Har3KM5512Row"
          component={Har3KM5512Row}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3KM5512PlantsRow1"
          component={Har3KM5512PlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3KM5512Row1Plant1"
          component={Har3KM5512Row1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3KM5512Row1Plant2"
          component={Har3KM5512Row1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3KM5512Row1Plant3"
          component={Har3KM5512Row1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3KM5512Row1Plant4"
          component={Har3KM5512Row1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Har3KM5512Row1Plant5"
          component={Har3KM5512Row1Plant5}
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
          name="Oha2NMerliceRow"
          component={Oha2NMerliceRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2SMerliceRow"
          component={Oha2SMerliceRow}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NMerlicePlantsRow1"
          component={Oha2NMerlicePlantsRow1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NMerlicePlantsRow2"
          component={Oha2NMerlicePlantsRow2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2SMerlicePlantsRow1"
          component={Oha2SMerlicePlantsRow1}
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
          name="Oha2NMerliceRow1Plant1"
          component={Oha2NMerliceRow1Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NMerliceRow1Plant2"
          component={Oha2NMerliceRow1Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NMerliceRow1Plant3"
          component={Oha2NMerliceRow1Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NMerliceRow1Plant4"
          component={Oha2NMerliceRow1Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NMerliceRow1Plant5"
          component={Oha2NMerliceRow1Plant5}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NMerliceRow2Plant1"
          component={Oha2NMerliceRow2Plant1}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NMerliceRow2Plant2"
          component={Oha2NMerliceRow2Plant2}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NMerliceRow2Plant3"
          component={Oha2NMerliceRow2Plant3}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NMerliceRow2Plant4"
          component={Oha2NMerliceRow2Plant4}
          options={{headerShown: false, title: 'T&G Global'}}
        />

        <Stack.Screen
          name="Oha2NMerliceRow2Plant5"
          component={Oha2NMerliceRow2Plant5}
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

         <Stack.Screen
          name="OhaDataChecker"
          component={OhaDataChecker}
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
