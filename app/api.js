import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://oqxhmzfuillddhvkvzay.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xeGhtemZ1aWxsZGRodmt2emF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc0MjA3NDAsImV4cCI6MjAxMjk5Njc0MH0.jfNFzRw-ByzdBHy5SUZeqw_qCM7bFZeg3xnD9vw-CKA"
);

export default supabase;
