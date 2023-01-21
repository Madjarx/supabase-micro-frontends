import { createClient } from '@supabase/supabase-js'

const supabaseUrl = '<your-supabase-api-url>'
const supabaseKey = '<your-supabase-access-token>'
export const supabase = createClient(supabaseUrl, supabaseKey)