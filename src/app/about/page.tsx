'use client';
import { Suspense } from 'react';
import Header from "../../components/Header";
import LoadingSpinner from '../../components/LoadingSpinner';
import dynamic from 'next/dynamic'; // Thêm dòng này

const LayoutAbout = dynamic(() => import('../../components/LayoutAbout'), {
  ssr: false,
  loading: () => <LoadingSpinner />
});

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen pt-16">
        <Suspense fallback={<LoadingSpinner />}>
          <LayoutAbout />
        </Suspense>
      </main>
    </>
  );
}