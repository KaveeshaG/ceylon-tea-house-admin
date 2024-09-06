import { Coffee, Home, Package, ShoppingCart, Users } from 'lucide-react'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black dark:bg-white-800 border-r border-white-200 dark:border-white-700">
      <div className="p-4">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-xl md:text-2xl font-bold text-white">C<span className="text-xl md:text-2xl font-bold text-red-600">T</span>H</span>
      </Link>
      </div>
      <nav className="mt-6">
        <Link href="/dashboard" className="flex items-center px-4 py-2 text-white-700 bg-white-100 dark:bg-white-700 dark:text-white-200">
          <Home className="mr-3" />
          Dashboard
        </Link>
        <Link href="/orders" className="flex items-center px-4 py-2 mt-2 text-white-600 hover:bg-white-100 dark:hover:bg-white-700 dark:text-white-400">
          <ShoppingCart className="mr-3" />
          Orders
        </Link>
        <Link href="/products" className="flex items-center px-4 py-2 mt-2 text-white-600 hover:bg-white-100 dark:hover:bg-white-700 dark:text-white-400">
          <Package className="mr-3" />
          Products
        </Link>
        <Link href="/customers" className="flex items-center px-4 py-2 mt-2 text-white-600 hover:bg-white-100 dark:hover:bg-white-700 dark:text-white-400">
          <Users className="mr-3" />
          Customers
        </Link>
      </nav>
    </aside>
  )
}