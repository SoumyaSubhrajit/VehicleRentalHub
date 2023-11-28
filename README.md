# VehicleRentalHub Project Documentation

## Overview
The VehicleRentalHub project is a web application that facilitates the rental of vehicles, including cars and bikes. This document provides a comprehensive overview of the project, its structure, and key components.

## Project Structure
The project is structured into several components:

- **Backend**: The backend server is implemented using Node.js and Express.js. It handles API requests, interacts with the database, and manages vehicle bookings.

- **Database**: MySQL is used as the database management system. The database schema includes tables for vehicles, bookings, and various models for cars and bikes.

## Database Schema
The MySQL database includes the following tables:

- `car_types`, `bike_types`: Tables for defining types of cars and bikes.
- `vehicles`: Table storing information about vehicles, including type, number of wheels, and references to specific car/bike types.
- `bookings`: Table for managing bookings, including information about the vehicle, user, and booking dates.

## Models
Specific models for car and bike types are included in separate tables:

- `cruiser_models`, `sports_models`: Tables for bike models.
- `hatchback_models`, `suv_models`, `sedan_models`: Tables for car models.

## API Endpoints
The API provides various endpoints for interacting with the application. Key endpoints include:

- **GET /api/vehicles**: Retrieve information about all vehicles.
- **POST /api/bookings**: Create a new booking.
- **GET /api/models**: Retrive all the models of respective car or bike types

**Note:** The specific details about API endpoints and request/response formats are not provided in the available information.

## Deployment
The deployment process involves setting up a Node.js environment, installing dependencies, configuring the database connection, and running the server. Dockerization is optional but can be implemented.

## CI/CD Pipeline
Continuous Integration and Continuous Deployment (CI/CD) can be set up using tools like GitHub Actions or Jenkins. The pipeline can include steps for testing, building, and deploying the application.

## Testing
Unit tests should be written using testing libraries like Jest. End-to-end testing using tools like Supertest is also recommended.

## Common Errors
- **Database Connection Error**: `ECONNREFUSED 127.0.0.1:3306` indicates a failure to connect to the MySQL database. Ensure the database server is running.

## Commands and Scripts
- **Start Server**: `npm start`
- **Run Tests**: `npm test`
- **Docker Build**: `docker build -t your-image-name .`

## Additional Notes
Include any additional notes, instructions, or considerations relevant to the project.

---

**Author:** Soumya Subhrajit Bag
**Last Updated:** 28/11/23
