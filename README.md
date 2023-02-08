# WORDLE - FRONTEND

## Requirements

1. Layout the following Figma:
   It consists of 3 views:
   - Game instructions
   - Game board
   - Game result

![Captured from Figma](public/wordle-overview.png)

2. Detect the first entrance and show the game instructions

3. Automatically select a 5-letter word from the word catalog

4. When typing or clicking on a letter, show it in the first empty box

5. When completing a row of 5 letters, compare the letters with the selected word:

   - Correct letter and in the same place: box painted green
   - Correct letter but in a different place: box painted yellow
   - Incorrect letter: box painted gray

6. If the entered word matches the selected one, show the statistics modal and add one point to the win counter and game counter

7. If the user fails to match the word, show the statistics modal, add one point to the game counter, and show the selected word

8. Every 5 minutes, select a new word and clear the board without repeating

9. Show instructions modal when clicking on the icon

10. Show statistics modal when clicking on the icon

11. Show in dark mode when activating the toggle

12. Show in light mode when deactivating the toggle

## Recommended technologies

- React
- Typescript
- TailwindCSS

## Resources

- Word dictionary
- Figma

## Notes

- Upload code to a git repository and share the link
- Test duration: 2 days

### My personal notes start here

## Branch Strategy: Trunk-based

For development speed and being a one-person technical test, I have decided to use trunk-based as a strategy, establishing different commits to the main branch

[Trunk-based Development](https://trunkbaseddevelopment.
