import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'
import type { Database } from '../overmind/graphql/graphql-types/graphql-global-types'

const supabaseUrl = 'https://lmhjkimeopnturxpsxby.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtaGpraW1lb3BudHVyeHBzeGJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQzMzMxOTMsImV4cCI6MTk4OTkwOTE5M30.0TNlbMptTp7MH4ZKLkhU_-LGgVlJjr4XC9noIRo_wvk'

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false
  }
})
