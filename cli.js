#!/usr/bin/env node

const chalk = require('chalk');
const log = console.log;

log(chalk`
    {green.bold We tag our commits in the following way:}
     
        {white.italic type(scope): comment }
    
    {green where {white.italic type} could be:}

    {white **build**: Changes that affect the build system or external dependencies (example scopes: teacher, student, accounts)
    **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
    **docs**: Documentation only changes
    **feat**: A new feature
    **fix**: A bug fix
    **perf**: A code change that improves performance
    **refactor**: A code change that neither fixes a bug nor adds a feature
    **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    **test**: Adding missing tests or correcting existing tests}
    
    {green and {white.italic scope} is:}
    {white
    **accounts**
    **teacher**
    **student**
    **design system**
    **lesson item renderer**
    **chore**
    **util**
    **styles**
    **state**
    **ng**
    **components**
    **features**} 

    
`);

