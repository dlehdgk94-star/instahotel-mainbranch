final result: blocked

Reference:
- Marriott RYSE overview URL: https://www.marriott.com/ko/hotels/selsa-ryse-autograph-collection/overview/
- Target areas: top utility bar, main header, hotel sub-header, booking bar, hero sizing, rooms card layout.

Implemented:
- Header stack resized and simplified toward the Marriott layout.
- Booking bar rebuilt with fixed 96px height, Marriott-like column proportions, dashed dividers, and rounded search CTA.
- Hero height recalculated from the visible header stack: calc(100vh - 288px).
- Rooms section changed from fan/spread carousel to Marriott-style horizontal three-card layout with bordered cards.
- Existing fan carousel JS is disabled for the new card-grid mode.

Blocked:
- In-app browser screenshot capture failed in the Windows sandbox, so pixel-level visual comparison could not be completed in this run.

Next QA pass:
- Capture Marriott reference at 1920px desktop width.
- Capture local index.html at the same viewport.
- Compare header heights, booking bar column widths, card image ratio, card padding, and section vertical spacing.
