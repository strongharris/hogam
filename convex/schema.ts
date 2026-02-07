import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.optional(v.string()),
    email: v.string(),
    level: v.number(),
    createdAt: v.number(),
  }).index("by_clerk_id", ["clerkId"]),

  words: defineTable({
    korean: v.string(),
    english: v.string(),
    hanja: v.optional(v.string()),
    level: v.number(),
  }).index("by_level", ["level"]),

  srsItems: defineTable({
    userId: v.id("users"),
    wordId: v.id("words"),
    stage: v.number(),
    nextReview: v.number(),
    direction: v.union(v.literal("kr_en"), v.literal("en_kr")),
  })
    .index("by_user", ["userId"])
    .index("by_user_next_review", ["userId", "nextReview"]),
});
