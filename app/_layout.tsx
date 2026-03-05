import '@/global.css';

import { NAV_THEME } from '@/lib/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { useUniwind } from 'uniwind';

import { Home as HomeIcon } from '@/lib/icons/Home';
import { Info } from '@/lib/icons/Info';

import HomeScreen from './index';
import SettingsScreen from './settings';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  const { theme } = useUniwind();

  return (
    <>
      <ThemeProvider value={NAV_THEME['dark']}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: 'hsl(11, 72%, 3%)',
              borderTopColor: 'transparent',
            },
            tabBarActiveTintColor: 'hsl(11, 100%, 60%)',
            tabBarInactiveTintColor: 'hsla(11, 20%, 64%, 0.5)',
          }}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => <HomeIcon size={size} color={color} />,
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ color, size }) => <Info size={size} color={color} />,
            }}
          />
        </Tab.Navigator>
      </ThemeProvider>
      <PortalHost />
    </>
  );
}
