# Consultation workflow

The contact page now handles consultation requests through four steps: service selection, relevant details, priorities, and contact/review. The homepage consultation calls to action open a native dialog containing the same form. Closing and reopening preserves answers while the homepage remains mounted. Escape, the close button, and backdrop clicks dismiss it, with focus returned to the opener; dismissal is blocked during submission. Mobile uses a full-screen dialog. The contact page remains available directly and is the fallback when JavaScript or native dialog support is unavailable. The Contact navigation link remains a normal page link.

## Lead delivery

The form uses the existing `settings.formspreeURL` in `src/data/app.json`. It submits name, email, phone, a service-based subject, and a readable message containing only selected services and their measurements, materials, preferences, budget, timing and project ZIP. A honeypot uses Formspree's `_gotcha` field. No account, calendar integration or automatic booking is implied. Required fields are service selection, name, ZIP, contact preference and the corresponding email or phone. Measurements and budgeting information remain optional.

Pending requests disable navigation/submission. An error retains answers for retry. Success is shown only after an HTTP success response. Answers persist between steps in memory, not across page reloads. No real submission was sent during development. Verify Formspree receipt and notification delivery with an owner-authorized test before launch; an HTTP success alone does not verify inbox delivery.

## Measurement

The form emits the `consultation:analytics` browser event, with `detail.event` and one-based `detail.step`. Events: `start`, `step_view`, `validation_error`, `submit_attempt`, `submit_success`, `submit_error`. These hooks send no names, email, phone, ZIP, notes or other form answers. No analytics provider is currently configured, so these events are not persisted and no conversion dashboard exists yet.

Connect the hooks to an approved analytics provider before assessing results. Track:
- Unique successful requests / unique consultation visitors.
- Unique successful requests / unique form starts.
- Qualified consultations / successful requests (owner or CRM classification).
- Booked projects and gross profit by lead source.

Deduplicate by session/request as appropriate; retry attempts are not new leads. Compare mobile and desktop performance. Use a baseline before testing copy or required-field changes. No competitor conversion percentage has been verified or claimed.

## Research and design rationale

- Neil Kelly: https://www.neilkelly.com/get-started/ and https://www.neilkelly.com/schedule-consultation/ — clear consultation entry and a low-pressure offer.
- Great Day Improvements: https://www.greatdayimprovements.com/get-a-quote/ — service/product interest, location and contact collection.
- Baymard: https://baymard.com/research-articles/checkout-flow-average-form-fields and https://baymard.com/research-articles/required-optional-form-fields — reduce visible field burden and label requirements explicitly. This is ecommerce usability research applied as a design hypothesis, not proof of contractor lead-conversion uplift.

The four-step format and service-specific branching are our implementation choices. They are not asserted to be exact copies of competitors' forms. Clients can select more than one service and skip unknown technical details. No false urgency, invented ratings or unverified response-time promise is used.

## Validation

Run `node tests/consultation.test.js`. Covers all service branches, measurement units, invalid counts, contact preference, stale deselected answers, hidden target dates, mocked submission and error responses. JSX and Sass compilation were checked; initial form server rendering was checked. Browser QA remains blocked by the session's preview connection.

Before launch, check phone widths (320, 375 and 430 px) and desktop: select multiple services, move back and forth, change selections, expand review, submit with invalid fields, simulate an offline response, and confirm one owner-authorized live request. Check keyboard focus and mobile select/date controls. Confirm the contact page and footer remain visible when the form height changes.

Modal follow-up checks: open each homepage CTA, verify no route change, close/reopen after entering answers, tab through the modal, press Escape, verify focus returns to the opener and background scrolling resumes. Check the full-screen layout on phones and the direct contact-page fallback. Browser interaction QA remains unverified due to preview routing errors.
