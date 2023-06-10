# Usage

1. Enter the password of which strength you would like to check, and click enter.\
   The provided password will be analyzed in terms of previous breaches, length, complexity, pattern, and language, and results will be provided on the screen.\
   Results will be separated into 3 tiers:
      1. Tier 1: The scale to the right will show a result in red. This means the provided password is less than 25% secure, making it extremely vulnerable.
      2. Tier 2: The scale to the right will show a result in yellow. This means the provided password is between 25% and 50% secure, making it mildly vulnerable.
      3. Tier 3: The scale to the right will show a result in green. This means the provided password is above 50% secure, making it relatively less vulnerable.
2. Click on the 'generate password' button to generate a new password.
3. Provided responses to the prompted questions. These are the answers that will be used to generate a password. Click on the prompts for more information...
4. You should be redirected to a new page with the new password displayed. Enjoy your new password! But wait...there's more!
5. Click the "regenerate" button to keep regenerating new passwords until you find one you like.
6. Click on the "check strength" to assess the strength of the newly generated password.

# Context 

The initial vague mission of the website was to create a tool that tackles the biggest security risk that ordinary users face in their day-to-day lives while using programs and websites that make use of passwords as a means of authentication. However, after careful consideration and discussion, I determined that the biggest security risk people face today isn't genius hackers with powerful computers, it's themselves. Overtime, softwares have evolved and attempted to create ways to keep our accounts secure from breaches. For example, 'requiring' passwords that are longer, and have more specifications with regards to symbols, capitalization, and the likes is used as a means of ensuring a password that is well outside the domain of easily leakable and/or guessable ones.

Even then, however, we (the users) still manage to come up with something like "Password#12345678900000000000". As long as we as human-beings remain lazy, no system can keep our information completely secure.

This website project targets one of Saltzer and Schroeder's guiding principles for security design: psychological acceptability. In order to come up with an idea, I listed out the following key observations:

1. Users tend to incorporate their personal information into their passwords as a means of making it easily memorable…in today's world, a simple google search of their birthday can lead to anyone having access to their personal accounts. Furthermore, including possibly private information in their passwords puts them at an even larger risk.
2. Users tend to use universally memorable combinations of letters and numbers in an attempt to make it memorable. Passwords like '123456' are extremely susceptible to what we call 'dictionary attacks.'
3. Users tend to make their passwords easy to regurgitate and type out so they can save time later on. For instance, 'QWERTY' is an example of a password that allows you to simply slide your finger across your keyboard.
4. This is the most important one:\
After asking some people, it turns out that users are simply unaware of the specific dangers following the passwords they select. Most people assume adding an extra '0' at the end of their birthday is all they need to be secure.

# Description

There will be several key features on the website:

1. Displaying password statistics:

This feature tackles the unawareness problem existent among users. A user can input a password, and using existing APIs and databases, the website will display the following information:

- Number of Breaches: How many times the password has been leaked before.
- Common Dictionary Words: Whether or not the password includes any basic english words that susceptible to guessing, and what they are.
- Length of the Password.
- Complexity: An analysis of how the password makes use of uppercase characters, numbers, and symbols.
- Common Patterns: Whether or not the password includes common password patterns that, again, can make it susceptible to a dictionary attack.

This will help users understand the importance of choosing strong passwords that are not easily guessable.

2. Visual Scale

The website includes a visual meter that allows the user to visualize the degree of how vulnerable their password is, on a scale of 1-100. Using animations and color schemes, visual learners can better comprehend the degree of their password's strength.

3. Custom Password

This website is also a password generator, but not ones that look like 'jdklf;ajkd;a$$$$%dfd' that chrome auto generates (no one wants to memorize that).

Instead, it will utilize a database of a plethora of questions (similar to the 'security questions' that most websites use). When a user wants a custom password, they can select 3 of those questions and provide their answers. It will then take the answers, and use an algorithm that scrambles, salts, and adds random elements to them to create a new password. This way, the password is less guessable and prone to attacks (like the dictionary attack), but more memorable for the user since it includes aspects of their personal information.

Ex:

Question: What is your last name?

    Smith

Question: When did you graduate high-school?

    2020

Question: What is your favorite vegetable?

    Tomato

    Auto Generated password: Th0tom20ato2Smi

4. Display statistics of new password

Yes, it's important to keep ourselves accountable as well! The website provides the option to check the strength of the newly provided password to gain a tangible understanding of its relative security. 

# Index

- Number of times a password has been leaked:

This information is directly imported from the [haveibeenpwned.com](https://haveibeenpwned.com/Passwords) public API.

- Common Dictionary Words:

A database of the simplest and most basic words of the English language, as put together by [Wiktionary.org](https://en.wiktionary.org/wiki/Appendix:1000_basic_English_words#:~:text=a%2C%20about%2C%20above%2C%20across,%2C%20aunt%2C%20autumn%2C%20away.)

- Common Password Patterns:

A database of the most common patterns found in passwords, as per ourselves and [cybernews.com.](https://cybernews.com/best-password-managers/most-common-passwords/)
