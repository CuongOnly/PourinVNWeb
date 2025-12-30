'use client';
import { Suspense } from 'react';
import Header from "../../components/Header";
import LoadingSpinner from '../../components/LoadingSpinner';
import dynamic from 'next/dynamic'; // Thêm dòng này

const LayoutHR = dynamic(() => import('../../components/LayoutHR'), {
  ssr: false,
  loading: () => <LoadingSpinner />
});

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen pt-16">
        <Suspense fallback={<LoadingSpinner />}>
          <LayoutHR />
        </Suspense>
      </main>
    </>
  );
}