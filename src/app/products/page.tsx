// app/products/page.tsx
'use client';
import { Suspense } from 'react';
import Header from "../../components/Header";
import LoadingSpinner from '../../components/LoadingSpinner';
import dynamic from 'next/dynamic';

const ProductLayout = dynamic(() => import('../../components/LayoutProduct'), {
  loading: () => <LoadingSpinner />
});

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="w-full">
        <Suspense fallback={<LoadingSpinner />}>
          <ProductLayout />
        </Suspense>
      </main>
    </>
  );
}