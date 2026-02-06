# Hogam Product Requirements Document

## Overview

Hogam (호감) is a Korean vocabulary learning platform built around a Spaced Repetition System (SRS). Users learn new words through structured lessons and reinforce them through timed reviews, with the goal of moving words from initial exposure to permanent memory ("Burned" status).

---

## Core Learning Mechanics

### Two-Way Mastery

Each word requires mastery in both directions:

| Direction | Levels 1-4 | Level 5+ |
|-----------|------------|----------|
| **Korean → English** | Type English | Type English |
| **English → Korean** | Multiple choice (Korean text OR image) | Type Korean (required) |

- **Levels 1-4**: Users select from 4 Korean options or 4 images (mixed for variety)
- **Level 5+**: Users must type Korean directly (keyboard setup tutorial provided after Level 4)

### Typo Handling

- **English input**: Lenient (small typos forgiven, marked as "correct, watch spelling")
- **Korean input**: Strict (must be exact)

---

## SRS Stages

10 stages with exact wait times:

| Stage | Wait Time | Category |
|-------|-----------|----------|
| Learning | Same session | 🟡 Learning |
| Apprentice 1 | 4 hours | 🟠 Apprentice |
| Apprentice 2 | 8 hours | 🟠 Apprentice |
| Apprentice 3 | 1 day | 🟠 Apprentice |
| Apprentice 4 | 2 days | 🟠 Apprentice |
| Familiar 1 | 4 days | 🟣 Familiar |
| Familiar 2 | 1 week | 🟣 Familiar |
| Confident 1 | 2 weeks | 🔵 Confident |
| Confident 2 | 1 month | 🔵 Confident |
| Burned | Done forever | 🔥 Burned |

### Wrong Answer Handling

- Word drops 1-2 stages (not full reset)
- Higher stages (Familiar+) drop more harshly
- Minimum stage is Apprentice 1 (can never drop below)
- User sees correct answer and can add personal notes

---

## Level System

### Structure

Each level contains two types of learning content:

| Type | Count per Level | Description |
|------|-----------------|-------------|
| **Hanja (한자)** | 20 | Chinese-origin characters used in Korean |
| **Vocabularies** | ~120 | ~6 words per Hanja, all tied to that level's Hanja |

**Key concept**: No random vocabularies. Every vocabulary word is connected to a Hanja introduced in that level, helping users understand word roots and patterns.

### Hanja Structure

Each Hanja includes:
- The character (e.g., 중)
- Meaning (e.g., "middle")
- Mnemonic / fun way to remember
- 5-6 related vocabulary words (e.g., 중학교, 중간, 중심, etc.)

### Learning Flow (Interleaved)

1. Learn first 10 Hanja (introduction + quiz, must get all 10 correct)
2. Learn their ~60 related vocabularies
3. Learn next 10 Hanja
4. Learn their ~60 related vocabularies
5. Level complete

### Level Unlocking

| To Unlock | Requirement |
|-----------|-------------|
| Next Level | ALL Hanja at **Familiar** + 50% of Vocabularies at **Familiar** |

### Batch Unlocking

- 10 Hanja per learning session
- Related vocabularies unlock after their Hanja batch is learned
- 24 hour wait between batches

### Side Quests *(future)*

Topic packs (Food, Travel, K-drama, Business, etc.) - separate from main level track.

---

## Session Types

Sessions are **separated** (WaniKani-style, not mixed like Duolingo).

### Hanja Learn Session

**Phase 1: Introduction**
- Show Hanja character (e.g., 중)
- Show meaning (e.g., "middle")
- Show mnemonic / memory trick
- Preview related vocabulary words
- User taps "Next" to continue through all 10 Hanja

**Phase 2: Quiz**
- Button: "Ready to Quiz"
- Quiz all 10 Hanja (Hanja → Type meaning)
- **Must get all 10 correct to complete**
- Wrong answer: Continue to remaining, then circle back to missed
- Repeat until 10/10 correct

**Phase 3: SRS Entry**
- Upon completion, all 10 Hanja enter SRS at Apprentice 1
- Related vocabularies unlock for learning

### Vocabulary Learn Session

**Phase 1: Introduction**
- Show word: Korean text (e.g., 중학교)
- Show meaning: English (middle school)
- Show related Hanja: 중 (middle) + 학 (study) + 교 (school)
- Show pronunciation: Romanization + audio *(if available)*
- Show image
- Example sentence
- User taps "Next" to continue through all 10 words

**Phase 2: Quiz**
- Button: "Ready to Quiz"
- Quiz all 10 words (Korean → Type English)
- **Must get all 10 correct to complete**
- Wrong answer: Continue to remaining words, then circle back to missed words
- Repeat until 10/10 correct

**Phase 3: SRS Entry**
- Upon completion, all 10 words enter SRS at Apprentice 1
- 4-hour timer begins for first review

### Review Session

- No teaching phase - just quiz
- Includes both **Hanja** and **Vocabularies** that are due
- Only shows items that are **due** based on SRS timer
- Shows total count of reviews due (no batching - users see full queue)
- Each item shown in **one direction only** per review (randomly chosen)
- Single SRS track per item: correct = advance, incorrect = drop

---

## Dashboard

### Elements

| Element | Description |
|---------|-------------|
| **Current Level** | Large, prominent display (e.g., "Level 5") |
| **Reviews Due** | Count + "Start Review" button (includes both Hanja and Vocab) |
| **Hanja Lessons** | Count + "Learn Hanja" button |
| **Vocab Lessons** | Count + "Learn Vocab" button (unlocks after related Hanja learned) |
| **Streak** | Days count with fire icon |
| **Hanja Progress** | "14/20 Hanja learned" with progress bar |
| **Vocab Progress** | "67/120 words learned" with progress bar |
| **SRS Breakdown** | Visual showing items at each stage (Apprentice, Familiar, Confident, Burned) - clickable to see list |
| **Total Learned** | Lifetime count (Hanja + Vocab) |
| **Accuracy Rate** | Percentage |

### Level Completion

- Celebration moment when finishing all 30 words in a level
- Confetti animation, "Level X Unlocked!" message
- Badge earned

---

## Gamification

### Streaks

- **Maintained by**: Completing at least 1 lesson OR 1 review per day
- **Display**: Fire icon with day count on dashboard

### Streak Milestones & Rewards

| Milestone | Reward |
|-----------|--------|
| 7 days | Badge (displayed on profile) |
| 30 days | Badge + 1 Streak Freeze earned |
| 100 days | Special badge |
| 365 days | "Tiger Master" badge |

### Streak Freeze

- Protects streak if user misses a day
- Earned at 30-day milestone
- Auto-applied (no user action needed)

---

## Review Pile-Up Prevention

### SRS Natural Throttling

- Words only appear in review when their SRS timer expires
- Reviews trickle in naturally over time
- Level gating prevents users from adding too many new words before mastering previous ones
- Full review count always shown (no batching or hiding)

---

## Platform

- **Web only** (for now)
- **Responsive design** - works on desktop, tablet, mobile browsers
- Native mobile apps: not in scope for MVP

---

## Onboarding

### Requirements

- **Login required** to use the app
- Account creation before accessing lessons

### Landing Page Demo

- Mini demo available without login
- ~5 sample words to try
- Progress not saved
- Prompt to sign up to continue

---

## Word Data Structure

Each vocabulary word contains:

| Field | Required | Description |
|-------|----------|-------------|
| **Korean** | Yes | The word in Hangul (e.g., 딸기) |
| **English** | Yes | English meaning (e.g., Strawberry) |
| **Romanization** | Yes | Pronunciation guide (e.g., ttal-gi) |
| **Image** | Yes | Visual representation |
| **Example Sentence** | Yes | Word used in context |
| **Audio** | TBD | Native pronunciation audio file |
| **Category Tags** | Yes | For filtering (food, travel, emotion, etc.) |
| **Cultural Note** | Optional | Korean cultural context or fun fact |
| **Formality Level** | Optional | Casual, polite, formal, slang |
| **Frequency Rank** | Optional | How common (top 500, top 1000, etc.) |

### Multiple Choice Distractors

For Levels 1-4 multiple choice quizzes:
- 3 wrong answers pulled randomly from the same level
- Ensures similar difficulty among options

---

## Audio/Pronunciation

### Current Plan

- Romanization shown during introduction phase (not during quiz)
- Audio playback: **TBD** - dependent on finding quality AI/API solution at reasonable cost
- Native web speech synthesis not preferred (sounds unnatural)

### Research Needed

- Evaluate AI text-to-speech options (quality vs. cost)
- Options: Google Cloud TTS, Amazon Polly, ElevenLabs, OpenAI TTS, etc.

---

## Appendix

### Alternative Approaches (For PM Discussion)

#### Session Type: Mixed vs Separated

| Approach | Pro | Con |
|----------|-----|-----|
| **Separated** (current choice) | Clear mental model, user controls pace | Reviews can pile up, feels like work |
| **Mixed** (Duolingo-style) | Effortless, always fresh, gamified | Less control, can feel random |

**Middle ground option**: One "Study" button with smart preview showing breakdown ("5 new words + 23 reviews"), mixed behind the scenes.

#### Burned Items

- **Current**: Stay burned forever, shown in SRS breakdown count
- **Alternative**: Allow optional review of burned items
- **Decision needed**: Should users be able to revisit burned words?

### PM Questions

1. **Hanja vs Vocab learning order** - Should it be strictly interleaved (10 Hanja → their vocab → next 10 Hanja → their vocab), or should users have flexibility to learn Hanja first then all vocab?

---

## Summary

Hogam is a focused Korean vocabulary app with:

- **Hanja-based learning**: Every vocabulary ties back to Hanja roots, helping users decode new words
- **Clear progression**: 20 Hanja + ~120 vocab per level, gated by SRS mastery
- **Proven methodology**: Spaced repetition with 10 distinct stages
- **Beginner-friendly**: Multiple choice for Levels 1-4, typing required Level 5+
- **Sustainable pace**: Interleaved Hanja/vocab batches, natural SRS throttling
- **Motivation**: Streaks, badges, level celebrations

The separated Hanja/Vocab/Review model gives users control while the level gating ensures they don't outpace their retention.
