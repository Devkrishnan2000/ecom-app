-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 04, 2022 at 06:02 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fixme`
--

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `brandid` int(11) NOT NULL,
  `bname` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`brandid`, `bname`) VALUES
(1000, 'Samsung'),
(1001, 'Apple'),
(1002, 'Google'),
(1003, 'OnePlus'),
(1004, 'Acer'),
(1005, 'Dell'),
(1006, 'Ifixit'),
(1008, 'Black and Decker');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `cid` int(11) NOT NULL,
  `cname` varchar(50) NOT NULL,
  `caddr` text NOT NULL,
  `cmail` varchar(30) NOT NULL,
  `cphno` varchar(12) NOT NULL,
  `cpass` text NOT NULL,
  `pincode` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`cid`, `cname`, `caddr`, `cmail`, `cphno`, `cpass`, `pincode`) VALUES
(1, 'Devkrishnan', 'Aiswarya Nagar Flat no 207 thaikkatukara po aluva', 'des@gmail.com', '9074757442', '$2y$10$2H/GJx3tmSM5ZM/fvIN0iuazofT2wojDQ6gBbWsyKuuvUjrT42n7m', 683106),
(2, 'Anjali V A', 'Aiswarya Nagar Flat no 207 thaikkattukara po aluva', 'anjaliaswinikumar7@gmail.com', '9400531221', '$2y$10$INpO8hWCi7lmpIwgIMlrKO9IgIy/ayCYw7hHvoqw6PsC1qbsAwXTi', 683123),
(3, 'Aswinikumar V V', 'Aiswarya Nagar Flat no 207 thaikkatukara po aluva', 'aswinikumarjaya@gmail.com', '9847193950', '$2y$10$5NrKQ7qlenTHofmPNyVrO.tlYu8bmV1fvJPkejbmVuqNa74t7nKcC', 683106),
(17, 'Jayasree M J', 'fsf', 'jayasreeaswinikumar@gmail.com', '9074757442', '$2y$10$WeWbDlBY0Ywq.gwtVp5jQ.FAN2hCM9rnu3Umi5pGgJreJJUzw/L9S', 683106),
(18, 'Neeraj K Nair', 'kadvanthra ', 'imca-182@scmsgroup.org', '9074757442', '$2y$10$oq5VucepGyGI0mXScEdIBu92hLfWmIl0ivBExGpdo9AaNOF2wa4YO', 683123);

-- --------------------------------------------------------

--
-- Table structure for table `electronics`
--

CREATE TABLE `electronics` (
  `eid` int(11) NOT NULL,
  `ename` varchar(30) NOT NULL,
  `brandid` int(11) NOT NULL,
  `etype` varchar(20) NOT NULL,
  `eimage` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `electronics`
--

INSERT INTO `electronics` (`eid`, `ename`, `brandid`, `etype`, `eimage`) VALUES
(2000, 'Galaxy S20', 1000, 'mobile', 'images/Products/samsungs20.png'),
(2001, 'iPhone 12', 1001, 'mobile', 'images/Products/iphone_12.png'),
(2002, 'Pixel 6', 1002, 'mobile', 'images/Products/pixel6.png'),
(2003, 'OnePlus 8 Pro', 1003, 'mobile', 'images/Products/op8pro.png'),
(2004, 'Nitro 5', 1004, 'laptop', 'images/Products/nitro5.png'),
(2005, 'Predator', 1004, 'laptop', '/images/Products/predator.png'),
(2006, 'Alienware 15 R3', 1005, 'laptop', 'images/Products/A15r3.png'),
(2007, 'XPS 15', 1004, 'laptop', 'images/Products/delxps15.png');

-- --------------------------------------------------------

--
-- Table structure for table `pincode`
--

CREATE TABLE `pincode` (
  `pincode` int(11) NOT NULL,
  `place` varchar(50) NOT NULL,
  `dfrom` int(11) NOT NULL,
  `dto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pincode`
--

INSERT INTO `pincode` (`pincode`, `place`, `dfrom`, `dto`) VALUES
(683106, 'Kandungaloor', 1, 2),
(683123, 'Karumathra', 2, 5);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `pid` int(11) NOT NULL,
  `brandid` int(11) NOT NULL,
  `ptype` varchar(20) NOT NULL,
  `pname` varchar(30) NOT NULL,
  `pdesc` text NOT NULL,
  `pimage` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `oprice` int(11) NOT NULL,
  `discount` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `waranty` int(11) NOT NULL,
  `rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`pid`, `brandid`, `ptype`, `pname`, `pdesc`, `pimage`, `price`, `oprice`, `discount`, `stock`, `waranty`, `rating`) VALUES
(3000, 1006, 'tool', 'Morary Driver Kit', 'Meet the Moray, Minnow’s slightly bigger brother. Measuring a portable .9\" x 3.1\" x 4.9\", the Moray is the perfect every-day-carry toolkit or junk drawer standby to prevent your stuff from becoming junk.\r\n\r\nWe built the Moray using data from thousands of repair manuals and teardowns, ensuring you have a compact assortment of bits for electronics and home repair. Our 4 mm precision bit driver handle has an integrated SIM Eject pin, magnetic bit socket, knurled grip, and swivel top—and the 32 precision driver bits have a 4 mm hex shank and extended-reach long necks.\r\n\r\nStandard and security bits like Phillips and Pentalobes will get you into most electronic devices and small household appliances, and an assortment of Hex and specialty bits come in handy for furniture and older devices. Whether you\'re a professional fixer or a weekend warrior, the Moray has what you need to disassemble and repair smartphones, laptops, new and vintage game consoles, kitchen appliances, and more.', 'images/Tools/morary.png', 1500, -1, -1, 4, 6, 3),
(3001, 1006, 'tool', 'Pro Tech Tool Kit', 'At the heart of the toolkit, 64 steel screwdriver bits to service all your tech. The Pro Tech Toolkit has everything from a Y000 bit for next-gen Apple products to the Gamebit for vintage game consoles.\r\n\r\nWe’ve engineered this toolkit from the ground up—from the custom opening tools and spudgers to the iFixit-designed aluminum driver with knurled handle and swivel top.\r\n\r\n', 'images/Tools/protech.png', 2000, 1400, 30, 20, 6, 4),
(3002, 1008, 'tool', 'A7104-XJ  Screwdriver', 'Package Contents: Screwdriver bits (25 mm) Philips: 4x PH1, 4 x PH2, 2 x PH3. Pozidriv: 2x PZ1, 2 x PZ2, 2 x PZ3, Slotted: 2x SL4, 4x SL6, 2x SL7.2 Torx: 2x TX10, 2x TX15, 2x TX20, 2x TX25 Hex: 2x HEX3, 2x HEX4, 2x HEX5, 2x HEX6. Screwdriver bits (50 mm) Philips: PH1, PH2, PH3, Pozidriv: PZ1, PZ2, Slotted: SL6, and SL7.2. Sockets: 5, 6, 7, 8, 10, 11, 12 mm. 1x Hand Ratchet and 1x Magnetic Holder\r\nAn ergonomic ratchet screw driver, which makes the task of fastening screws and bolts a lot easier\r\nThe set can be used in electronics, electrical, wood working and other hardware maintenance task\r\nThe driver bits and sockets are made of high quality materials to withstand heavy duty usage.', 'images/Tools/bd_screw_driver_set.png', 2114, 1385, 34, 20, 6, 4),
(3003, 1006, 'tool', 'Precision Tweezers', 'Grab everything from screws to eyebrows with iFixit\'s Precision Tweezers Set. The complete tweezer kit for all holding, pulling, squeezing, picking up, and plucking jobs.\r\n\r\nIncluded are the three essential tips for DIY projects:\r\n\r\nPointed (extra fine!) - For ultimate precision\r\nAngled - For ergonomic accuracy\r\nBlunt - For heavy lifting\r\nMade with stainless steel and a protective coating that prevents ESD damage from harming sensitive electronics. Keep your tweezers organized with the portable fabric storage sleeve.', 'images/Tools/tweezers.png', 750, -1, -1, 20, 6, 5),
(3004, 1006, 'tool', 'Anti static tray', 'Organize and Store Your Projects\r\n\r\nInvaluable for all electronics projects and repairs.\r\nStore tiny components and screws in the 20 small compartments, store large components and tools in the larger compartments.\r\nMade from Anti-Static Plastic, so it\'s safe for delicate components.\r\nUse in conjunction with our screwmaps for repairs on our most popular smartphone guides.\r\nGreat for phone repair! Put your standard size smartphone in the side compartment, store your tools in the bottom compartment, and organize your screws and parts in the small compartments.', 'images/Tools/tray.png', 350, -1, -1, 20, 6, 4),
(3005, 1006, 'tool', 'Magnetic mat', 'Organize all your small parts while you work on a device.\r\nDry erase surface lets you keep notes and location sketches.\r\nReduces reassembly time by up to 40% while preventing errors.\r\nDesigned by fixers, for fixers, the 8”x10” Magnetic Project Mat catches and securely holds screws as you pull them out of a device.\r\n\r\nNow you can stop worrying about keeping track of all the loose screws and focus on your repair. Screws and small parts will remain right where you left them. For laptops with hundreds of screws, use the whole mat as a screw guide and keep careful location notes.\r\n\r\nThe included pen is uniquely suited for the Project Mat. It’s made by Staedtler, producer of top-of-the-line pens and pencils for artists and architects. Their Lumocolor Correctable pen resists smears and won\'t wipe away with a casual brush of your hand. When your repair is complete, the eraser tip or a dry cloth wipes the ink away clean.', 'images/Tools/mat.png', 150, -1, -1, 20, 6, 5);

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `cid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `rtitle` varchar(70) NOT NULL,
  `rdesc` text NOT NULL,
  `rrating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`cid`, `pid`, `rtitle`, `rdesc`, `rrating`) VALUES
(2, 3000, 'Easy to use very nice product', 'EaEasy to use very nice productEasy to use very nice productEasy to use very nice productEasy to use very nice productEasy to use very nice productEasy to use very nice productEasy to use very nice productEasy to use very nice productEasy to use very nice productEasy to use very nice productEasy to use very nice productEasy to use very nice productEasy to use very nice productEasy to use very nice productsy to use very nice product', 4),
(3, 3000, 'Very good product ill recommend it', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus nisi arcu, eu convallis dolor fringilla a. Fusce posuere euismod dui non vestibulum. Aenean finibus ex eget rutrum vehicula. Donec ornare massa sed ex facilisis, sed porttitor felis mattis. Etiam blandit pellentesque eros, non finibus lectus lacinia id. Ut vehicula finibus massa eget convallis. Phasellus et hendrerit diam. Aliquam facilisis molestie nulla sit amet semper. Curabitur in ornare arcu. In efficitur vitae tortor non posuere. Mauris sit amet velit aliquam, tincidunt augue at, pretium libero. Donec quis lorem vel turpis volutpat tempor vitae luctus mauris.', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`brandid`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`cid`),
  ADD KEY `pincode` (`pincode`);

--
-- Indexes for table `electronics`
--
ALTER TABLE `electronics`
  ADD PRIMARY KEY (`eid`),
  ADD KEY `brandid` (`brandid`);

--
-- Indexes for table `pincode`
--
ALTER TABLE `pincode`
  ADD PRIMARY KEY (`pincode`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`pid`),
  ADD KEY `brandid` (`brandid`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`cid`,`pid`),
  ADD KEY `pid` (`pid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `brandid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1009;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `electronics`
--
ALTER TABLE `electronics`
  MODIFY `eid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2008;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3006;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`pincode`) REFERENCES `pincode` (`pincode`);

--
-- Constraints for table `electronics`
--
ALTER TABLE `electronics`
  ADD CONSTRAINT `electronics_ibfk_1` FOREIGN KEY (`brandid`) REFERENCES `brand` (`brandid`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brandid`) REFERENCES `brand` (`brandid`);

--
-- Constraints for table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `customer` (`cid`),
  ADD CONSTRAINT `review_ibfk_2` FOREIGN KEY (`pid`) REFERENCES `products` (`pid`),
  ADD CONSTRAINT `review_ibfk_3` FOREIGN KEY (`cid`) REFERENCES `customer` (`cid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
