## Overview

Took just under 2 hours.

I really enjoyed making this! Fairly happy with the result but would have liked to make it look a bit more refined.

Only real challenge was getting the modal to work - initially I had a separate Model component but it wouldn't let me render it using the parent's (Giph) state as a condition. Kept the two parts together and it now works as expected.

If I had more time I'd have done some nicer styling and perhaps added a skeleton for loading - when clicking through pages the gifs can take a moment to render... a skeleton would be nice there!

## Steps I took

Step 1
Create search box with state handled value - search box updates this state with onChange.
This should let me pass the value to the API as it updates.

Step 2
Create pagination with state handled value.
Again, I should be able to pass this to the API as an offset to reduce calls.

Will limit pagination to 10 pages of 10 gifs for now.

Add handleClick functions to pagination buttons so that it cannot exceed range of 1-10

Step 3

Set up Giphy API with params for api_key, offset (for pagination) and search query.

Step 4

Render the returned data in 'giph-mosaic'.

Turn off overflow for .App and set overflow-y to scroll for mosaic, keeping nav and footer in place.

Step 5

Create showModal state for each Giph - toggle this with onClick.

Then create the modal itself, setting h to 100vh and w to 100vw, z-index to 20 so that it displays above all other elements.

Add close button to modal as well as Giph info.

Step 6

Do some basic styling so the app looks presentable!
