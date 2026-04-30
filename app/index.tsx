import * as React from 'react';
import { View } from 'react-native';
import { Task } from '@/components/Task';

export interface ITask {
  title: string;
  category: string;
  isChecked: boolean;
}

const task: ITask = {
  title: 'My test item',
  category: 'Test category',
  isChecked: false,
};

export default function HomeScreen() {
  return (
    <View className="bg-background flex-1 items-center justify-center gap-5 p-6">
      <Task task={task} />
    </View>
  );
}
