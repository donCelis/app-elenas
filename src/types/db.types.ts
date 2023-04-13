export type Json =
  | string
  | number
  | boolean
  | null
  | {[key: string]: Json}
  | Json[];

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          created_at: string | null;
          id: string;
          name: string;
          user: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          name: string;
          user?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          name?: string;
          user?: string | null;
        };
      };
      profiles: {
        Row: {
          avatar_url: string | null;
          cellphone: string | null;
          email: string | null;
          full_name: string | null;
          id: string;
          isFav: boolean | null;
          updated_at: string | null;
          username: string | null;
          website: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          cellphone?: string | null;
          email?: string | null;
          full_name?: string | null;
          id?: string;
          isFav?: boolean | null;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          cellphone?: string | null;
          email?: string | null;
          full_name?: string | null;
          id?: string;
          isFav?: boolean | null;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
