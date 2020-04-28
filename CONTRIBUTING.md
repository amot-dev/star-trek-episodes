# Contributing Guidelines

## Suggesting a new feature
Don't use the 'feature' tag for this. That tag is reserved for features that will be added for sure. The 'idea' tag is for suggestions and possible features/enhancements

## Seasons
- Seasons are `.season` sections with an id like `season-2` for Season 2 of any show
- Seasons have titles like `<h2>Season 2</h2>`. An exception is the TOS Pilot, which is its own season

## Episodes
**None of the below should need to be done manually!**
- Episodes are `.episode` article tags
- Episode have an `<h3>` title, followed by a `.num` span denoting the season and episode number formatted like 2x14 for Episode 14 of Season 2
- Below that is attached the image from Memory Alpha for the episode
- Below that is the description of the epiode from Memory Alpha
- Finally, there is a link to the Memory Alpha page for the episode that opens in a new tab

## Tags
**Some episodes might be missing tags! Don't hesitate to add them if you notice!**

Tags are found in a separate xml file. When adding tags to episodes, there are some guidelines to follow:
- Tags are to be added as additional classes to a `.episode` element
- Tags must start with a prefix (character, species, mood, etc)
- Use the 'Idea' label in issues to suggest a new tag or prefix
- Don't suggest random ensigns as characters. All characters should have a somewhat significant role in at least one of the episodes they're in

### Prefixes
- character: for a recurring character (exception: important characters in movies)
- planet: for a recurring planet (exception: important planets in movies)
- species: for a recurring species that has more than one named member (exception: important species). To be used, there have to be multiple members of said species in the episode (or one very important member), excluding the main cast (eg. not all episodes with Spock will be marked Vulcan, nor all episodes with Worf marked Klingon)
