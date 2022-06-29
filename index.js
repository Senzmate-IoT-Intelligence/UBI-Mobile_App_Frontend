/**
 * @format
 */

 import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import Index from './app/index';
import {name as appName} from './app.json';
// import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications

AppRegistry.registerComponent(appName, () => Index);
