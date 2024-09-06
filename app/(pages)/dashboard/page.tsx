"use client"

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SideBar from '@/app/_components/SideBar/SideBar'
import NavBar from '@/app/_components/NavBar/NavBar'
import Overview from '@/app/_components/Overview/Overview'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* <SideBar /> */}
      <main className="flex-1 overflow-y-auto">
        {/* <NavBar /> */}
        <div className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Overview />
            </TabsContent>
            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics Content</CardTitle>
                  <CardDescription>Detailed analytics will be displayed here.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Analytics content goes here...</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reports">
              <Card>
                <CardHeader>
                  <CardTitle>Reports Content</CardTitle>
                  <CardDescription>Various reports will be available here.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Reports content goes here...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}