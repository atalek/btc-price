# Bitcoin Price Checker

![Landing page](https://res.cloudinary.com/dkofkuquf/image/upload/v1705710748/nuxtshop/ahvofnnfwjtooptlxamk.png)

This simple project allows you to search for the best BTC prices in euros.
Simply enter an amount in euros, and the project will return the four best
offerings from various providers. The project is built with Nuxt3, Tailwind CSS,
and Turso SQLite DB to cache initial results.

## Features

- Search for BTC prices in euros
- Displays the top four offerings from various providers
- Caches initial results for enhanced performance

## Technologies

- Nuxt3
- Tailwind CSS
- Turso SQLite DB

## Usage

1. Enter an amount in euros in the dedicated input field.
2. The project will automatically display the top four offerings from various
   providers.

## Setup

1. **Clone the repository.**

   ```bash
   git clone https://github.com/Amphei/btc-price.git

   ```

2. **Navigate to the project directory.**

   ```bash
   cd btc-price

   ```

3. **Install dependencies.**

   ```bash
   npm install

   ```

4. **Configure environment variables.**

- Create a `.env` file in the root of the project.
- Add the necessary environment variables for your Turso db.

      ```env
      #Turso
      TURSO_DB_URL=your_turso_db_url
      TURSO_DB_TOKEN=your_turso_auth_token
      ```

5. **Run the development server.**

   ```bash
   npm run dev

   ```

6. **Open your browser and visit http://localhost:3000 to view the Bitcoin price
   checker.**

## Live Version

[https://btc-price.pages.dev/](https://btc-price.pages.dev/)

## Author

Github: [@Amphei](https://github.com/Amphei) <br> Linkedin:
[@Aleksandar Atanasovski](https://www.linkedin.com/in/aleksandar-atanasovski-16b123263/)
<br> [Portfolio] (soon...)
