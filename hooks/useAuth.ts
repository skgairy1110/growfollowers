'use client';
import { useState, useEffect } from 'react';

export function useAuth() {
  const [user, setUser] = useState<{ email: string; name: string } | null>({
    email: 'alex@gairystudio.com',
    name: 'Alex Rivers',
  });
  const [loading, setLoading] = useState(false);

  return { user, loading, logout: () => setUser(null) };
}