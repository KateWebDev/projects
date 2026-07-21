import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xvraznqijqwatknepfoc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2cmF6bnFpanF3YXRrbmVwZm9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQzODY3OTEsImV4cCI6MjA5OTk2Mjc5MX0.IdNqrAouVbO7NRiORKsM4q2FTTaYfTDwjbwNsupl3Yk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
