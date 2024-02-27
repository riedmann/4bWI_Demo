import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://kuzkonqvnmplroqqsggv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1emtvbnF2bm1wbHJvcXFzZ2d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU3NjE5NzksImV4cCI6MjAxMTMzNzk3OX0.3ytI8z5R64ip3MnMRdi9dwoNqamSRkxonUlBw86WrtM"
);
