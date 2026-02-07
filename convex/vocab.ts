import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getWordsForLevel = query({
  args: { level: v.number() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("words")
      .withIndex("by_level", (q) => q.eq("level", args.level))
      .collect();
  },
});

export const getDueReviews = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db
      .query("srsItems")
      .withIndex("by_user_next_review", (q) =>
        q.eq("userId", args.userId).lte("nextReview", now)
      )
      .collect();
  },
});

export const recordReview = mutation({
  args: {
    srsItemId: v.id("srsItems"),
    correct: v.boolean(),
  },
  handler: async (ctx, args) => {
    const item = await ctx.db.get(args.srsItemId);
    if (!item) throw new Error("SRS item not found");

    const newStage = args.correct
      ? Math.min(item.stage + 1, 10)
      : Math.max(item.stage - 2, 0);

    const intervals = [
      4 * 60 * 60 * 1000,
      8 * 60 * 60 * 1000,
      24 * 60 * 60 * 1000,
      2 * 24 * 60 * 60 * 1000,
      4 * 24 * 60 * 60 * 1000,
      7 * 24 * 60 * 60 * 1000,
      14 * 24 * 60 * 60 * 1000,
      30 * 24 * 60 * 60 * 1000,
      60 * 24 * 60 * 60 * 1000,
      120 * 24 * 60 * 60 * 1000,
      180 * 24 * 60 * 60 * 1000,
    ];

    await ctx.db.patch(args.srsItemId, {
      stage: newStage,
      nextReview: Date.now() + intervals[newStage],
    });
  },
});
