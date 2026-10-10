import { supabase } from '@/utils/supabase';
import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Todo = {
  id: number | string;
  name: string;
};

export default function TodosScreen() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const loadTodos = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const { data, error } = await supabase.from('todos').select('id, name');

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      setTodos(data ?? []);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadTodos();
  }, [loadTodos]);

  return (
    <SafeAreaView style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Todo List</Text>
      {isLoading ? (
        <ActivityIndicator accessibilityLabel="Loading todos" />
      ) : errorMessage ? (
        <View>
          <Text accessibilityRole="alert" style={{ marginBottom: 12 }}>
            Could not load todos: {errorMessage}
          </Text>
          <Pressable accessibilityRole="button" onPress={() => void loadTodos()}>
            <Text style={{ color: '#2563eb' }}>Try again</Text>
          </Pressable>
        </View>
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text style={{ paddingVertical: 8 }}>{item.name}</Text>}
          ListEmptyComponent={<Text>No todos found.</Text>}
        />
      )}
    </SafeAreaView>
  );
}
