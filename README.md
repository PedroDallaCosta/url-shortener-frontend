# URL Shortener – Open Source Project

This is an open source project for a URL shortener with additional features such as:

- (Planned) Password protection  
- (Planned) Link expiration dates  
- (Working) Access statistics  

Both the backend and frontend are being developed publicly from the very beginning. The goal is to deliver a simple, secure, and functional solution while sharing the entire development process for educational and collaborative purposes.

Due to limited personal availability, progress may be gradual, but the project will be completed and maintained with care. Community participation is welcome at every stage.

## Architecture

- **Frontend:** React + Vite, organized in modular components, pages, and UI primitives.
- **Hooks:** Custom hooks should be placed in `src/hooks` for reusable logic.
- **Services:** API and business logic are in `src/service`.
- **Testing:** Automated tests should be placed in `__tests__` using Jest and React Testing Library.

## Contributing

Contributions, suggestions, and feedback are encouraged. Feel free to open issues or submit pull requests.

- Add new features using modular components and hooks.
- Place reusable logic in `src/hooks`.
- Add or update tests in `__tests__`.

## Getting Started

1. Make sure you have [Node.js](https://nodejs.org/) installed.  
2. Install `pnpm` globally if you haven't already:  
   ```sh
   npm install -g pnpm
   ```
3. Install project dependencies:
   ```sh
   pnpm install
   ```
4. Start the development server:
   ```sh
   pnpm dev
   ```
5. Open http://localhost:5173 in your browser to access the project.

## Running Tests

To run automated tests (after adding them):
```sh
pnpm test
```

## License

This project is licensed under the MIT License.

This README will be updated as the project evolves.