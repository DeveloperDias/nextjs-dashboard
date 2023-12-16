
import DashboardCards from '@/app/ui/dashboard/loading-page/dashboard_cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';

import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, DashboardCardsSkeleton } from '@/app/ui/skeletons';
 
export default async function Page() {


  return (
    <main>
      
        <Suspense fallback={<DashboardCardsSkeleton/>}>
          <DashboardCards/>
        </Suspense>
        
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton/>}>
          <RevenueChart />
        </Suspense>

        <Suspense fallback={<LatestInvoicesSkeleton/>}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}