import * as React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { View, Text } from 'react-native';
import Task from '@/components/Task';

export interface ITask {
  title: string;
  category: string;
  isChecked: boolean;
}

export default function HomeScreen() {
  const task: ITask = {
    title: 'AIgnninmehb',
    category: 'Tbehaj',
    isChecked: false,
  };

  const task2: ITask[] = [
    {
      title: 'Assigmnet 2',
      category: 'BLEH',
      isChecked: true,
    },
  ];

  return (
    <View className="bg-background flex-1 items-center justify-center gap-5 p-6">
      <Task task={task} />
    </View>
  );
}
