import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import { Checkbox } from '@/components/ui/checkbox';

export default function HomeScreen() {
  return (
    <View className="bg-background flex flex-1">
      <View className="flex flex-row py-4">
        <View className="flex w-16 items-center justify-center">
          <Checkbox checked={false} className="border-2" />
        </View>
        <View className="border-foreground-transparent flex-1 border-b py-4">
          <Text className="text-foreground">Submit Assignment</Text>
          <Text className="text-muted-foreground">Due: Oct 20</Text>
        </View>
      </View>
    </View>
  );
}
