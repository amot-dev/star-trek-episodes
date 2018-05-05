# Contributing Guidelines

## Suggesting a new feature
Don't use the 'feature' tag for this. That tag is reserved for features that will be added for sure. The 'idea' tag is for suggestions and possible features/enhancements

## Seasons
- Seasons are `.season` sections with an id like `tos-season-2` for Season 2 of The Original Series
- Seasons have titles like `<h2>Season 2</h2>`. An exception is the TOS Pilot, which is its own season

## Episodes
- Episodes are `.episode` article tags with an id like `tos-episode-102` for S1E2 or `tos-episode-321` for S3E21
- They also have an `episode` metadata which simply identifies the number of the episode regardless of season or show
- Episode have an `<h3>` title, followed by a `.num` span denoting the season and episode number in a human readable way like 2x14 for S2E14
- Below that is attached the image from Memory Alpha for the episode
- Below that is the description of the epiode from Memory Alpha
- Finally, there is a link to the Memory Alpha page for the episode that opens in a new tab

## Tags
When adding tags to episodes, there are some guidelines to follow:
- Tags are to be added as additional classes to a `.episode` element
- Tags must start with a prefix (character, species, mood, etc)
- Use the 'Idea' label in issues to suggest a new tag or prefix
- Don't suggest random ensigns as characters. All characters should have a somewhat significant role in at least one of the episodes they're in

### Prefixes
- character: for a character that has appeared more than once (exception: important characters in movies)
- planet: for a planet that has appeared more than once (exception: important planets in movies)
- species: for a species that has appeared more than once and has more than one named member (exception: important species). To be used, there have to be multiple members of said species in the episode, excluding the main cast (eg. not all episodes with Spock will be mared Vulcan, nor all episodes with Worf marked Klingon)

### Tags
Tags are found at the beginning of all html files with episodes. I'm thinking of moving them all to an xml file though.
