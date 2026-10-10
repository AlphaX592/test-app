import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { Platform } from 'react-native';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'Missing Supabase configuration. Set EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_KEY.',
  );
}

const isWebServer = Platform.OS === 'web' && typeof window === 'undefined';
const authStorage = isWebServer
  ? {
      getItem: async (_key: string) => null,
      setItem: async (_key: string, _value: string) => {},
      removeItem: async (_key: string) => {},
    }
  : AsyncStorage;

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: authStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
