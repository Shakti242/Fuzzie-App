import React from 'react'

const DashboardPage = () => {
    return (
        <div className="flex flex-col gap-4 relative">
            <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
                Dashboard
            </h1>
            <div className="p-6">
                {/* Your dashboard content goes here */}
                <p>Welcome to the dashboard!</p>
            </div>
        </div>
    )
}

export default DashboardPage
