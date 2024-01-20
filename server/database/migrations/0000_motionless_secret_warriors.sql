CREATE TABLE `cached-prices` (
	`id` integer PRIMARY KEY NOT NULL,
	`provider` text,
	`btc` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP
);
