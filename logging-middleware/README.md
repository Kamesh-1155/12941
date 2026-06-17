## Logging Middleware

## Objective

The logging middleware is responsible for sending application logs to the provided evaluation logging service.

## API Validation

The following APIs were successfully tested:

1. Registration API
2. Authorization API
3. Logging API

A valid log entry was successfully created and a log identifier was returned by the service.

## Logging Strategy

The middleware is intended to capture:

### Frontend Events

* Page load events
* Notification fetch requests
* Filter changes
* Pagination actions
* User interaction events

### Error Events

* API failures
* Authorization failures
* Unexpected application exceptions

### Log Structure

Each log contains:

* Stack (`frontend`)
* Level (`info`, `warn`, `error`, etc.)
* Package (`component`, `page`, `api`, etc.)
* Message

## Example Use Cases

* User opens Notifications page
* Notifications API request succeeds
* Notifications API request fails
* User changes notification filter

## Current Status

Logging API integration was successfully verified. The middleware structure has been prepared for integration across frontend components and API calls.
