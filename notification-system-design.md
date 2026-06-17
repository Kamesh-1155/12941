# Notification System Design
<img width="1913" height="1017" alt="image" src="https://github.com/user-attachments/assets/ba6126ec-7dd2-4207-b113-ab66d6a6f538" />


## Overview

The frontend application was developed using React and Material UI. The objective was to build a notification dashboard that allows users to view notifications, filter them by category, and navigate through pages of notifications.

## Features Implemented

* React-based notification dashboard
* Material UI components for consistent styling
* Notification filtering using:

  * All
  * Placement
  * Result
  * Event
* Pagination component
* Loading and error handling states
* Notification card component for displaying individual notifications
* Custom hook (`useNotifications`) for data fetching and state management

## Project Structure

* `api/notifications.js` – API integration layer
* `hooks/useNotifications.js` – Notification data management
* `components/NotificationFilter.jsx` – Filter controls
* `components/NotificationCard.jsx` – Notification display component
* `pages/NotificationsPage.jsx` – Main notifications screen

## Challenges Faced

During testing, the frontend was successfully connected to the authentication and logging APIs. However, the notifications endpoint returned HTTP 401 (Unauthorized) responses despite valid authentication tokens being generated earlier in the process.

The application has been structured to support API integration, and the remaining work involves validating the notification endpoint configuration and authorization requirements.

## Future Improvements

* Complete notifications API integration
* Add unread/read tracking
* Improve responsive design for mobile devices
* Add notification sorting and priority handling
* Integrate frontend logging middleware across user actions
