// app/page.tsx
'use client';
import { Suspense } from 'react';
import Header from "../components/Header";
import LoadingSpinner from '../components/LoadingSpinner';
import dynamic from 'next/dynamic';

// Dynamic imports
const LayoutHome = dynamic(() => import('../components/LayoutHome'), {
  loading: () => <LoadingSpinner />
});

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full ">
        <Suspense fallback={<LoadingSpinner />}>
          <LayoutHome />
        </Suspense>
      </main>
    </>
  );
}