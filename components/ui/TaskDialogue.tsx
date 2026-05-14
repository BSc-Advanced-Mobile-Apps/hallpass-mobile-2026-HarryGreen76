import React from 'react';
import { View } from 'react-native';

import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';

import { ITask } from '@/app';

interface TaskDialogProps {
  onSave?: (task: ITask) => void;
  task: ITask;
  setTask: (task: ITask) => void;
  setShowDialog: (showDialog: boolean) => void;
  showDialog: boolean;
}

export function TaskDialogue({
  onSave,
  task,
  setTask,
  setShowDialog,
  showDialog,
}: TaskDialogProps) {
  const [editedTitle, setEditedTitle] = React.useState(task.title);
  const [editedCategory, setEditedCategory] = React.useState(task.category);

  const isNewtask = task.title === '' && task.category === '';

  // ✅ FIX: Sync modal fields whenever a task is opened
  React.useEffect(() => {
    if (showDialog) {
      setEditedTitle(task.title);
      setEditedCategory(task.category);
    }
  }, [task, showDialog]);

  const handleSave = () => {
    const nextTask = {
      ...task,
      title: editedTitle,
      category: editedCategory,
    };

    setTask(nextTask);

    if (onSave) {
      onSave(nextTask);
      return;
    }

    setEditedTitle('');
    setEditedCategory('');
    setShowDialog(false);
  };

  const handleDelete = () => {
    console.log('task Deleted');
  };

  return (
    <DialogContent className="w-96-w-5/6">
      <DialogHeader>
        <DialogTitle> {isNewtask ? 'Add Task' : 'Edit Task'}</DialogTitle>
        <DialogDescription>Make changes to your task details here.</DialogDescription>
      </DialogHeader>

      <View className="gap-4">
        <Input value={editedTitle} placeholder="Task title" onChangeText={setEditedTitle} />

        <Input value={editedCategory} placeholder="Category" onChangeText={setEditedCategory} />
      </View>

      <DialogFooter>
        <Button
          className="border-brand-primary flex-1 rounded-3xl border bg-transparent"
          onPress={() => setShowDialog(false)}>
          <Text className="text-brand-primary">Cancel</Text>
        </Button>

        <Button className="bg-brand-primary flex-1w-1/2 rounded-3xl" onPress={handleSave}>
          <Text>Save changes</Text>
        </Button>

        <Button className="bg-brand-primary flex-1w-1/2 rounded-3xl" onPress={handleDelete}>
          <Text> Delete Task </Text>
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
