-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 29 Bulan Mei 2023 pada 05.37
-- Versi server: 10.4.25-MariaDB
-- Versi PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `healthyme_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `makanan`
--

CREATE TABLE `makanan` (
  `id` varchar(255) NOT NULL,
  `name_food` varchar(255) NOT NULL,
  `kalori` varchar(255) NOT NULL,
  `protein` varchar(255) NOT NULL,
  `lemak` varchar(255) NOT NULL,
  `sodium` varchar(255) NOT NULL,
  `link_nutrisi` varchar(255) NOT NULL,
  `link_resep` varchar(255) NOT NULL,
  `ManisAsin` varchar(255) DEFAULT 'Manis',
  `KuahKering` varchar(255) DEFAULT 'Kering',
  `PedasTidak` varchar(255) DEFAULT 'Tidak Pedas',
  `tipeMakananVSD` varchar(255) DEFAULT NULL,
  `HalalHaram` varchar(255) DEFAULT 'Halal',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `makanan`
--

INSERT INTO `makanan` (`id`, `name_food`, `kalori`, `protein`, `lemak`, `sodium`, `link_nutrisi`, `link_resep`, `ManisAsin`, `KuahKering`, `PedasTidak`, `tipeMakananVSD`, `HalalHaram`, `createdAt`, `updatedAt`, `userId`) VALUES
('food-fexF6ed9yr', 'Rawon Babi', '800', '399', '888', '290', 'https://www.rawon.com', 'https://www.rawon.com', 'Asin', 'Kuah', 'Pedas', NULL, 'Haram', '2023-05-29 03:35:46', '2023-05-29 03:35:46', NULL),
('food-HqDijsBlac', 'soto', '200', '389', '40', '210', 'https://www.soto.com', 'https://www.soto.com', 'Manis', 'Kering', 'Tidak Pedas', NULL, 'Halal', '2023-05-29 03:01:16', '2023-05-29 03:01:16', NULL),
('food-mpR5pAdys4', 'Rawon', '800', '399', '888', '290', 'https://www.rawon.com', 'https://www.rawon.com', 'Manis', 'Kering', 'Tidak Pedas', NULL, 'Halal', '2023-05-29 03:33:54', '2023-05-29 03:33:54', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
('user-3eUcCml_j-', 'bunda', 'bunda@gmail.com', '$2b$10$xt2rPbNNArWdjl9XgGc39OrfJNk4gJLcSbM3g4Re7TfD8L4rBK4k.', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyLTNlVWNDbWxfai0iLCJuYW1lIjoiYnVuZGEiLCJ1c2VyRW1haWwiOiJidW5kYUBnbWFpbC5jb20iLCJpYXQiOjE2ODQ3NjU3MzQsImV4cCI6MTY4NDg1MjEzNH0.xZHweL9IzA0fPV0Is6dH8FM6g6rXbFjrqRLQa4ZJ3ug', '2023-05-22 14:25:37', '2023-05-22 14:28:54'),
('user-5beZbK3qkw', 'ggg', 'ggg@gmail.com', '$2b$10$1xR/bm836wsR6vYVBp7ZEOKBAaADnW7d0Hjw5jCkf.QCRcq/yXOCK', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyLTViZVpiSzNxa3ciLCJuYW1lIjoiZ2dnIiwidXNlckVtYWlsIjoiZ2dnQGdtYWlsLmNvbSIsImlhdCI6MTY4NTAyNjkxOCwiZXhwIjoxNjg1MTk5NzE4fQ.qjPGMA3sgh5-ongfWMcG7ld41tjVSt5D1Eh8tS147oQ', '2023-05-25 15:01:42', '2023-05-25 15:01:58'),
('user-a1cF9paHO8', 'zahra', 'email22@gmail.com', '$2b$10$bWQHNlj1nQgEoFYU6WSQseZ4BYGMxB0vqy0TRzvO2Uc1wUTOMGGsS', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyLWExY0Y5cGFITzgiLCJuYW1lIjoiemFocmEiLCJ1c2VyRW1haWwiOiJlbWFpbDIyQGdtYWlsLmNvbSIsImlhdCI6MTY4NDc2NTUwMCwiZXhwIjoxNjg0ODUxOTAwfQ.bbAvb9KNgqnPyIUz_ivjmLN8npE8gOlFR66fZ6ix7H4', '2023-05-22 14:02:00', '2023-05-22 14:25:00'),
('user-boSTWJiY6G', 'jakarta', 'jakarta@gmail.com', '$2b$10$82LIci1N2n1N/5jUTqFvveGX9R3UcCSQNAp8tBQHOvhhKyPIFBLj.', NULL, '2023-05-22 14:30:52', '2023-05-22 14:30:52'),
('user-c75dppQrIl', 'dimas', 'dimas@gmail.com', '$2b$10$Q3p4uZyoL3WE.o331ZC8LeSb408CMXqljf1X8f7h0zcOHaS283hma', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyLWM3NWRwcFFySWwiLCJuYW1lIjoiZGltYXMiLCJ1c2VyRW1haWwiOiJkaW1hc0BnbWFpbC5jb20iLCJpYXQiOjE2ODUwODMyMjMsImV4cCI6MTY4NTI1NjAyM30.OZOBRUOteDCfQXc92kMnCrSQQ6zA9x-kKVQhVzN_ij8', '2023-05-25 19:24:00', '2023-05-26 06:40:23'),
('user-hF_PNZLszG', 'v', 'v@gmail.com', '$2b$10$jGK2LV.QkOyFLrY2m/gmv.35/aO9f..wMb4zDrdumVdDV8icepfby', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyLWhGX1BOWkxzekciLCJuYW1lIjoidiIsInVzZXJFbWFpbCI6InZAZ21haWwuY29tIiwiaWF0IjoxNjg0Nzc1MjAxLCJleHAiOjE2ODQ5NDgwMDF9.HerG_TYfi2fnqdwgoaFtffWb553hDHbn4N4gJhotD38', '2023-05-22 17:06:11', '2023-05-22 17:06:41'),
('user-huKoBNBODX', 'dimas putra', 'email@gmail.com', '$2b$10$6XFEYCiwAEviFxj6.NkYCO0sPWC60MY.HwCp5t5oh8En.xdJRFYeS', NULL, '2023-05-22 13:32:32', '2023-05-22 13:32:32'),
('user-KmMTJal0oj', 'tajiku', 'tajiku@gmail.com', '$2b$10$icQKl1Q8zaP1bi0pJ4UXuu31UIsVtc.8REfb8FiFGzj545e4Y.jF2', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyLUttTVRKYWwwb2oiLCJuYW1lIjoidGFqaWt1IiwidXNlckVtYWlsIjoidGFqaWt1QGdtYWlsLmNvbSIsImlhdCI6MTY4NDc2ODgxNCwiZXhwIjoxNjg0ODU1MjE0fQ.OiQWzdmzKM_tUNCR4PZAMl7BaurcuRs62X7Vi2xuQlM', '2023-05-22 14:29:54', '2023-05-22 15:20:14'),
('user-MefnF_6eQw', 'dimas333', 'dimas333@gmail.com', '$2b$10$2C6pY4Y3sd74uopSiYQHq.QJOiafFtNsmlTAkJDH.tZeeCXvfDpWW', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyLU1lZm5GXzZlUXciLCJuYW1lIjoiZGltYXMzMzMiLCJ1c2VyRW1haWwiOiJkaW1hczMzM0BnbWFpbC5jb20iLCJpYXQiOjE2ODQ3NzQxMjksImV4cCI6MTY4NDk0NjkyOX0.eOoyDL2RgSSaNCZ123JsbJrrb4iR67aK-jnfh4-jMkY', '2023-05-22 16:27:40', '2023-05-22 16:48:49'),
('user-MJ6eCnz4Zk', 'sapi', 'sapi@gmail.com', '$2b$10$8ZfUTDW/EsL0n48/GGP6/uyPWhbguPh.J.ql1C2eRHjEfecDNE7da', NULL, '2023-05-22 14:20:12', '2023-05-22 14:20:12'),
('user-o5gv47B_ig', 'panggang', 'panggang@gmail.com', '$2b$10$lLI.amy374UjPbn4ZPb8We1aiA9zZkQlRlRevC41Ol2mWb/R2PLU2', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyLW81Z3Y0N0JfaWciLCJuYW1lIjoicGFuZ2dhbmciLCJ1c2VyRW1haWwiOiJwYW5nZ2FuZ0BnbWFpbC5jb20iLCJpYXQiOjE2ODQ3NzE3NTMsImV4cCI6MTY4NDg1ODE1M30.E2LhFkqs89n8h_7wH17vClotapO1JYl_V30ppHc8NXM', '2023-05-22 15:20:51', '2023-05-22 16:09:13'),
('user-RgadVqZELt', 'jennie', 'jennie@gmail.com', '$2b$10$9QXT.EdGUEEGRriRlY2U9uOYiRTmrCK5A9qlKznlHTUKZydDINEZq', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyLVJnYWRWcVpFTHQiLCJuYW1lIjoiamVubmllIiwidXNlckVtYWlsIjoiamVubmllQGdtYWlsLmNvbSIsImlhdCI6MTY4NDc3Mjg5OSwiZXhwIjoxNjg0ODU5Mjk5fQ.nBOlDecoDLCw4YJ6lqmBYA8Qnx3h4B_ilVdA5b1rHqo', '2023-05-22 16:11:11', '2023-05-22 16:28:19'),
('user-T8URkcmADB', 'mama', 'mama@gmail.com', '$2b$10$hEwT03AukZrsW3BRtwSAcOqIngwuxmY61KU16grOo0uGyD362Wit.', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyLVQ4VVJrY21BREIiLCJuYW1lIjoibWFtYSIsInVzZXJFbWFpbCI6Im1hbWFAZ21haWwuY29tIiwiaWF0IjoxNjg1MzI5MjE3LCJleHAiOjE2ODU1MDIwMTd9.WH-OUpXgCxe7NVh3kRh0jeINwBb7YJQrLc08p4hRfzI', '2023-05-26 06:47:48', '2023-05-29 03:00:17'),
('user-xX3v-_etOM', 'buaya', 'buaya@gmail.com', '$2b$10$MIMkYXrKx/fTXSu3lMG.y.raSkn/06fzgx4B9SKfAj.93CqdFUybi', NULL, '2023-05-22 16:51:35', '2023-05-22 17:08:30');

-- --------------------------------------------------------

--
-- Struktur dari tabel `workouts`
--

CREATE TABLE `workouts` (
  `id` varchar(255) NOT NULL,
  `name_workout` varchar(255) NOT NULL,
  `tipe_workout` varchar(255) NOT NULL,
  `kalori` int(11) NOT NULL,
  `photo` text DEFAULT NULL,
  `userId` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `makanan`
--
ALTER TABLE `makanan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `workouts`
--
ALTER TABLE `workouts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `makanan`
--
ALTER TABLE `makanan`
  ADD CONSTRAINT `makanan_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `workouts`
--
ALTER TABLE `workouts`
  ADD CONSTRAINT `workouts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
