import * as React from 'react';
import { View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function SettingsScreen() {
  return (
    <View className="bg-background flex-1 items-center justify-center">
      <Text variant="h1" className="font-semibold">
        Settings Screen
      </Text>
    </View>
  );
}
