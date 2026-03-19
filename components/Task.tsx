import { ITask } from '@/app';
import * as React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { View, Text } from 'react-native';

export default function Task({ task }: { task: ITask }) {
  const [checked, setChecked] = React.useState(task.isChecked);
  return (
    <View className="flex w-full flex-row">
      <View className="flex h-full w-24 px-8 py-5">
        <Checkbox
          className="border-foreground checked:bg-foreground"
          checked={checked}
          onCheckedChange={setChecked}
        />
      </View>
      <View className="border-foreground-transparent flex h-full flex-1 gap-1 border-b py-4">
        <Text className="text-foreground text-xl">{task.title}</Text>
        <Text className="text-foreground-transparent text-xl">{task.category}</Text>
      </View>
    </View>
  );
}
