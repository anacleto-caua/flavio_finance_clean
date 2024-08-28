
import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL || "https://xrxwwsttdoppsymwwqcj.supabase.co",
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyeHd3c3R0ZG9wcHN5bXd3cWNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxNTgxMDEsImV4cCI6MjAzOTczNDEwMX0.slqQkujOM_p1TcyKqavZeCaqgas0S9Z3uHBvqUKNoR8",
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  })