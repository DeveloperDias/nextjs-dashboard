import { Card } from "../cards"
import { fetchCardData } from "@/app/lib/data"
import { lusitana } from "@/app/ui/fonts"

export default async function DashboardInfo() {

const {totalPaidInvoices, totalPendingInvoices, numberOfInvoices, numberOfCustomers}:any = await fetchCardData()

  return (
    <>
    <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
    </>
  )

}