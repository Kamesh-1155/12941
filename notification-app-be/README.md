## Notification App Backend

# Backend Design Approach

## Overview

The backend requirement focuses on processing notification data and supporting prioritization of important notifications.

## Proposed Approach

### Notification Model

Each notification contains:

* Notification ID
* Type (Placement, Result, Event)
* Message
* Timestamp
* Read Status

### Priority Logic

Notifications can be prioritized using:

1. Placement notifications
2. Result notifications
3. Event notifications

Within the same category, newer notifications receive higher priority.

### Processing Strategy

* Filter unread notifications
* Assign priority weights
* Sort by priority and recency
* Return the top N notifications requested by the user

### Scalability Considerations

To efficiently maintain the top N notifications:

* Use a priority queue / heap structure
* Maintain sorted notification collections
* Update only when new notifications arrive

This approach minimizes repeated sorting and improves performance for large notification volumes.

## Current Status

Backend implementation was planned and documented. Frontend integration and API consumption were prioritized during the evaluation.
