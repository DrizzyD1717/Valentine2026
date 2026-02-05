import { Suspense } from 'react';

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div className="h-screen bg-valentine-50" />}>
      {children}
    </Suspense>
  );
}