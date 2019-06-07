-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 07, 2019 at 04:26 PM
-- Server version: 8.0.12
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `doublem`
--
CREATE DATABASE IF NOT EXISTS `doublem` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `doublem`;

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `login` varchar(150) NOT NULL,
  `id_product` int(11) NOT NULL,
  `id_size` int(11) NOT NULL,
  `qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`login`, `id_product`, `id_size`, `qty`) VALUES
('admin', 1, 2, 2),
('admin', 1, 3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `collections`
--

CREATE TABLE `collections` (
  `id_collection` int(11) NOT NULL,
  `name_collection` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `collections`
--

INSERT INTO `collections` (`id_collection`, `name_collection`) VALUES
(1, 'URBAN T-SHIRTS'),
(2, 'SWEATSHIRTS'),
(3, 'SALE');

-- --------------------------------------------------------

--
-- Table structure for table `photo`
--

CREATE TABLE `photo` (
  `id_photo` int(11) NOT NULL,
  `path_photo` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `photo`
--

INSERT INTO `photo` (`id_photo`, `path_photo`) VALUES
(1, 't-shirt1.jpg'),
(2, 't-shirt2.jpg'),
(3, 't-shirt3.jpg'),
(4, 't-shirt4.jpg'),
(5, 't-shirt5.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id_product` int(11) NOT NULL,
  `name_product` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `id_photo` int(11) NOT NULL,
  `description` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `id_collection` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id_product`, `name_product`, `price`, `id_photo`, `description`, `id_collection`) VALUES
(1, 'Dark Blue T-Shirt', 25.99, 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus dolor non venenatis auctor. Proin sodales neque enim, vitae lacinia tellus consequat vel. Donec aliquet ipsum nec massa rhoncus, in aliquet nibh suscipit. Phasellus vel cursus nibh. Maecenas lorem ipsum, consectetur in posuere vel, rutrum efficitur ipsum. Donec in libero aliquet, pulvinar ligula et, varius arcu. Nam facilisis nunc eget leo pulvinar, quis malesuada enim suscipit. Donec iaculis erat leo, vel commodo urna aliquet ac. Proin scelerisque erat nec pharetra finibus. Pellentesque dui purus, feugiat sed porttitor ut, suscipit facilisis diam. In semper accumsan ipsum ut laoreet. Etiam in accumsan nibh. Vestibulum sollicitudin dignissim ligula, at dictum elit.', 1),
(2, 'Black T-Shirt', 16.85, 2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus dolor non venenatis auctor. Proin sodales neque enim, vitae lacinia tellus consequat vel. Donec aliquet ipsum nec massa rhoncus, in aliquet nibh suscipit. Phasellus vel cursus nibh. Maecenas lorem ipsum, consectetur in posuere vel, rutrum efficitur ipsum. Donec in libero aliquet, pulvinar ligula et, varius arcu. Nam facilisis nunc eget leo pulvinar, quis malesuada enim suscipit. Donec iaculis erat leo, vel commodo urna aliquet ac. Proin scelerisque erat nec pharetra finibus. Pellentesque dui purus, feugiat sed porttitor ut, suscipit facilisis diam. In semper accumsan ipsum ut laoreet. Etiam in accumsan nibh. Vestibulum sollicitudin dignissim ligula, at dictum elit.', 1),
(3, 'Neptune T-Shirt', 20.25, 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus dolor non venenatis auctor. Proin sodales neque enim, vitae lacinia tellus consequat vel. Donec aliquet ipsum nec massa rhoncus, in aliquet nibh suscipit. Phasellus vel cursus nibh. Maecenas lorem ipsum, consectetur in posuere vel, rutrum efficitur ipsum. Donec in libero aliquet, pulvinar ligula et, varius arcu. Nam facilisis nunc eget leo pulvinar, quis malesuada enim suscipit. Donec iaculis erat leo, vel commodo urna aliquet ac. Proin scelerisque erat nec pharetra finibus. Pellentesque dui purus, feugiat sed porttitor ut, suscipit facilisis diam. In semper accumsan ipsum ut laoreet. Etiam in accumsan nibh. Vestibulum sollicitudin dignissim ligula, at dictum elit.', 1),
(4, 'Clock T-Shirt', 40.56, 4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus dolor non venenatis auctor. Proin sodales neque enim, vitae lacinia tellus consequat vel. Donec aliquet ipsum nec massa rhoncus, in aliquet nibh suscipit. Phasellus vel cursus nibh. Maecenas lorem ipsum, consectetur in posuere vel, rutrum efficitur ipsum. Donec in libero aliquet, pulvinar ligula et, varius arcu. Nam facilisis nunc eget leo pulvinar, quis malesuada enim suscipit. Donec iaculis erat leo, vel commodo urna aliquet ac. Proin scelerisque erat nec pharetra finibus. Pellentesque dui purus, feugiat sed porttitor ut, suscipit facilisis diam. In semper accumsan ipsum ut laoreet. Etiam in accumsan nibh. Vestibulum sollicitudin dignissim ligula, at dictum elit.', 1),
(5, 'Not Pink T-Shirt', 9.99, 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus dolor non venenatis auctor. Proin sodales neque enim, vitae lacinia tellus consequat vel. Donec aliquet ipsum nec massa rhoncus, in aliquet nibh suscipit. Phasellus vel cursus nibh. Maecenas lorem ipsum, consectetur in posuere vel, rutrum efficitur ipsum. Donec in libero aliquet, pulvinar ligula et, varius arcu. Nam facilisis nunc eget leo pulvinar, quis malesuada enim suscipit. Donec iaculis erat leo, vel commodo urna aliquet ac. Proin scelerisque erat nec pharetra finibus. Pellentesque dui purus, feugiat sed porttitor ut, suscipit facilisis diam. In semper accumsan ipsum ut laoreet. Etiam in accumsan nibh. Vestibulum sollicitudin dignissim ligula, at dictum elit.', 1);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id_role` int(11) NOT NULL,
  `name_role` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id_role`, `name_role`) VALUES
(1, 'admin'),
(2, 'user');

-- --------------------------------------------------------

--
-- Table structure for table `sizes`
--

CREATE TABLE `sizes` (
  `id_size` int(11) NOT NULL,
  `size` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sizes`
--

INSERT INTO `sizes` (`id_size`, `size`) VALUES
(1, 'XS'),
(2, 'S'),
(3, 'M'),
(4, 'L'),
(5, 'XL');

-- --------------------------------------------------------

--
-- Table structure for table `subscription`
--

CREATE TABLE `subscription` (
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `login` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL,
  `id_role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`login`, `password`, `id_role`) VALUES
('admin', 'admin', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD UNIQUE KEY `id_product` (`id_product`,`id_size`),
  ADD KEY `id_size` (`id_size`),
  ADD KEY `login` (`login`);

--
-- Indexes for table `collections`
--
ALTER TABLE `collections`
  ADD PRIMARY KEY (`id_collection`);

--
-- Indexes for table `photo`
--
ALTER TABLE `photo`
  ADD PRIMARY KEY (`id_photo`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_product`),
  ADD KEY `id_collection` (`id_collection`),
  ADD KEY `id_photo` (`id_photo`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id_role`);

--
-- Indexes for table `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id_size`);

--
-- Indexes for table `subscription`
--
ALTER TABLE `subscription`
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`login`),
  ADD KEY `id_role` (`id_role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `collections`
--
ALTER TABLE `collections`
  MODIFY `id_collection` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `photo`
--
ALTER TABLE `photo`
  MODIFY `id_photo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`id_size`) REFERENCES `sizes` (`id_size`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`),
  ADD CONSTRAINT `cart_ibfk_3` FOREIGN KEY (`login`) REFERENCES `user` (`login`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_collection`) REFERENCES `collections` (`id_collection`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`id_photo`) REFERENCES `photo` (`id_photo`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `role` (`id_role`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
