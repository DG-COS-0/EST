import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fgdiolanyxqrbxxamylg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZGlvbGFueXhxcmJ4eGFteWxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxNDE5MzYsImV4cCI6MjAxNDcxNzkzNn0.dSQEox37pWMfol6MrVVOZxaB7EjrIFMniWcF4WjhyIk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
