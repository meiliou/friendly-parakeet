# JavaScript: Password Generator

This is an application that generates a random password based on user-selected criteria. 
This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code. 
It has a clean and polished user interface and is responsive.

Website: meiliou.github.io/friendly-parakeet/

## Screenshot

![image](https://user-images.githubusercontent.com/83768277/219946040-083a77a3-bacd-46c5-8d29-b16532034e91.png)

## Coding Notes

I had many false starts and possibly complicated my life unnecessarily. I reverted to using duplicate if statements but decided this was simply unacceptable. The big neon DRY sign was flashing overhead and I finally managed to get the code optimised - well at least as far as my abilities will allow!


## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
