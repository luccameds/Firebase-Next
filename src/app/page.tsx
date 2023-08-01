'use client';

import React from 'react';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
function Page() {
  const user: object = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push('/');
    if (user != null) router.push('/Admin');
  }, [router, user]);

  return <h1>Only logged in users can view this page</h1>;
}

export default Page;
