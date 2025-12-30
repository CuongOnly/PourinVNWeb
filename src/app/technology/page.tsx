'use client';
import { Suspense } from 'react';
import Header from "../../components/Header";
import LoadingSpinner from '../../components/LoadingSpinner';
import dynamic from 'next/dynamic'; // Thêm dòng này

const LayoutTechnology = dynamic(() => import('../../components/LayoutTechnology'), {
  ssr: false,
  loading: () => <LoadingSpinner />
});

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen pt-16">
        <Suspense fallback={<LoadingSpinner />}>
          <LayoutTechnology />
        </Suspense>
      </main>
    </>
  );
}