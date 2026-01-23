import { ConvexProvider } from 'convex/react'
import { ConvexQueryClient } from '@convex-dev/react-query'

const CONVEX_URL = (import.meta as any).env.VITE_CONVEX_URL

// Only initialize Convex if URL is provided
let convexQueryClient: ConvexQueryClient | null = null
if (CONVEX_URL) {
  convexQueryClient = new ConvexQueryClient(CONVEX_URL)
}

export default function AppConvexProvider({
  children,
}: {
  children: React.ReactNode
}) {
  // Skip Convex provider if not configured
  if (!convexQueryClient) {
    return <>{children}</>
  }

  return (
    <ConvexProvider client={convexQueryClient.convexClient}>
      {children}
    </ConvexProvider>
  )
}
