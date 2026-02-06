/**
 * Root tRPC router for Hogam.
 * Add sub-routers here as features are built (e.g., vocabRouter, reviewRouter).
 */
import { createTRPCRouter } from './init'

export const trpcRouter = createTRPCRouter({})
export type TRPCRouter = typeof trpcRouter
