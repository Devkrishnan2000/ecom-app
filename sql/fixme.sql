-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 05, 2022 at 12:43 PM
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
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `aid` int(11) NOT NULL,
  `atype` int(11) NOT NULL,
  `aname` varchar(30) NOT NULL,
  `ausrname` varchar(50) NOT NULL,
  `apass` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`aid`, `atype`, `aname`, `ausrname`, `apass`) VALUES
(101, 0, 'Devkrishnan V A', 'dev1999', '$2y$10$2SwkZhy6aVY3zEuWYurMJ.Cwft8knhSnS3nmYA7FZ/p4crj0O2MaC'),
(102, 1, 'Neeraj', 'Nk2010', '$2y$10$BcOoXQjDsn8wHX5NC5VMQOa.W9I8mrvEpd3arF6FMToqNcKFQvorC');

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
(1008, 'Black and Decker'),
(1009, 'Huawei'),
(1010, 'MicroMax');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`cid`, `pid`, `qty`) VALUES
(1, 3010, 1),
(1, 3011, 1),
(1, 3013, 2),
(2, 3003, 1),
(17, 3001, 1),
(17, 3002, 1),
(17, 3007, 2),
(18, 3000, 1),
(18, 3004, 1),
(19, 3010, 1),
(19, 3012, 1);

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
(1, 'Devkrishnan V A', 'Aiswarya Nagar Flat no 207 thaikkatukara po aluva near pulincode metro station', 'des@gmail.com', '9074757442', '$2y$10$gB7fvV74TDKyrUF7Qhy5cuAnXlbacfE6QXDV/LCKF3hD0niSIUY0S', 683123),
(2, 'Anjali V A', 'Aiswarya Nagar Flat no 308 thaikkattukara po aluva', 'anjaliaswinikumar7@gmail.com', '9847193950', '$2y$10$w1fxdKIDS.k/r9SN/pw.0Ogep/fs1xvIcP0Q/UlMkOV340sqI.6qi', 683123),
(3, 'Aswinikumar V V', 'Aiswarya Nagar Flat no 207 thaikkatukara po aluva', 'aswinikumarjaya@gmail.com', '9847193950', '$2y$10$5NrKQ7qlenTHofmPNyVrO.tlYu8bmV1fvJPkejbmVuqNa74t7nKcC', 683106),
(17, 'Jayasree M J', 'fsf', 'jayasreeaswinikumar@gmail.com', '9446743339', '$2y$10$zgQvPcoV6UYSkZ/iT4NUC.Sf6ut9eAccKTMzW397H/bwiTborfPNy', 683106),
(18, 'Neeraj K Nair', 'kadvanthra ', 'imca-182@scmsgroup.org', '9074757442', '$2y$10$oq5VucepGyGI0mXScEdIBu92hLfWmIl0ivBExGpdo9AaNOF2wa4YO', 683123),
(19, 'MrX', 'sdfgsgagasdhlhsda', 'x@gmail.com', '9074757442', '$2y$10$QrUwuUHBVG9OfGcL3eQhCeeGeypk8PKPFV55ED2iU2QCJ8W5p3bqi', 683106);

-- --------------------------------------------------------

--
-- Table structure for table `document`
--

CREATE TABLE `document` (
  `did` int(11) NOT NULL,
  `dname` varchar(50) NOT NULL,
  `ddiff` varchar(20) NOT NULL,
  `dtime` int(11) NOT NULL,
  `intro` text NOT NULL,
  `video` text NOT NULL DEFAULT 'https://youtu.be/5qtLijnz1tc'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `document`
--

INSERT INTO `document` (`did`, `dname`, `ddiff`, `dtime`, `intro`, `video`) VALUES
(50, 'Samsung Galaxy  S20 Battery Replacement', 'easy', 1, 'If the battery in your Galaxy S20 Ultra has gone bad, but you’re not ready to part with the phone yet, you’re in the right place! This video will show you how to replace the battery in your S20 Ultra!', 'https://www.youtube.com/embed/5qtLijnz1tc'),
(61, 'iPhone 12 Battery Replacement', 'easy', 2, 'iPhone batteries are rated to hold 80% of their capacity for up to 500 charge cycles, which lasts roughly 18-24 months for most users. After that, your iPhone may need to be charged far more frequently, and iOS may warn you that performance is affected (in other words, your phone will run slower). Use this guide to replace your battery and restore your iPhone to like-new performance.\r\n\r\n', 'https://www.youtube.com/embed/5qtLijnz1tc'),
(63, 'iPhone 12 Display Replacement', 'moderate', 3, 'If your iPhone 12 screen is cracked, not responding to touch, or not showing a picture when your phone is powered on, use this guide to restore your iPhone to working order with a new screen, a.k.a. display assembly.\r\n\r\nThe combined earpiece speaker + sensor assembly affixed to the back of the display is paired to your individual iPhone from the factory, so you must transfer it from your old display to your new one during any display replacement. It contains the flood illuminator, which is part of the biometric Face ID security feature. If it is damaged or replaced, Face ID will cease to function, so take extra care not to damage any of these components during this procedure. If damaged, only Apple or an Apple-authorized technician can restore Face ID function.', 'https://www.youtube.com/embed/5qtLijnz1tc'),
(64, 'Nitro5 Battery Replacement', 'easy', 2, 'Battery power degrades over time, which reduces the portability and function of laptops.\r\n\r\nUse this guide to replace the battery in yourAcer Aspire V Nitro VN7-572G laptop.\r\n\r\nIt is very important to take appropriate precautions if the battery is swollen. This has occurred if the top of the battery is curving, rather than flat, and can be seen as a misshapen keyboard.\r\n\r\nBe sure to power down your laptop and unplug from the external charger prior to starting this repair.', 'https://www.youtube.com/embed/wlcR2P1FNFc');

-- --------------------------------------------------------

--
-- Table structure for table `elecproduct`
--

CREATE TABLE `elecproduct` (
  `pid` int(11) NOT NULL,
  `eid` int(11) NOT NULL,
  `parttype` varchar(20) NOT NULL,
  `did` int(11) NOT NULL DEFAULT 0,
  `rscore` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `elecproduct`
--

INSERT INTO `elecproduct` (`pid`, `eid`, `parttype`, `did`, `rscore`) VALUES
(3006, 2000, 'Battery', 50, 9),
(3007, 2000, 'Back Cover', 50, 9),
(3008, 2000, 'Back Cover(PINK)', 0, 0),
(3009, 2000, 'Back Cover(RED)', 0, 0),
(3010, 2001, 'Battery', 61, 9),
(3011, 2001, 'display', 63, 8),
(3012, 2001, 'camera', 50, 8),
(3014, 2000, 'camera', 50, 0),
(3015, 2002, 'display', 0, 0),
(3016, 2002, 'battery', 0, 0),
(3017, 2002, 'camera', 50, 0),
(3018, 2004, 'battery', 64, 0),
(3019, 2005, 'battery', 0, 0);

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
(2007, 'XPS 15', 1004, 'laptop', 'images/Products/delxps15.png'),
(2009, 'Pixel 5', 1002, 'mobile', 'images/Products/googlepixel5.png');

-- --------------------------------------------------------

--
-- Table structure for table `pincode`
--

CREATE TABLE `pincode` (
  `pincode` int(11) NOT NULL,
  `place` varchar(50) NOT NULL,
  `dfrom` int(11) NOT NULL,
  `dto` int(11) NOT NULL,
  `deliverable` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pincode`
--

INSERT INTO `pincode` (`pincode`, `place`, `dfrom`, `dto`, `deliverable`) VALUES
(683104, 'kalamasserry', 1, 2, 0),
(683106, 'Kandungaloor', 1, 2, 0),
(683107, 'Koratty', 2, 3, 0),
(683123, 'Karumathra', 2, 5, 0);

-- --------------------------------------------------------

--
-- Table structure for table `porder`
--

CREATE TABLE `porder` (
  `oid` bigint(20) NOT NULL,
  `cid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `oprice` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `ostatus` varchar(50) NOT NULL DEFAULT 'Waiting for Dispatch',
  `olocation` varchar(50) NOT NULL DEFAULT 'Warehouse',
  `odate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `porder`
--

INSERT INTO `porder` (`oid`, `cid`, `pid`, `oprice`, `qty`, `ostatus`, `olocation`, `odate`) VALUES
(100005, 1, 3005, 150, 1, 'Delivered', 'ALUVA', '2021-09-10'),
(100006, 1, 3001, 5600, 4, 'Canceled', 'Warehouse', '2022-09-10'),
(100007, 1, 3001, 7000, 5, 'Shipping', 'Tamil Nadu', '2022-09-10'),
(100009, 1, 3001, 5600, 4, 'Shipping', 'Warehouse', '2022-09-11'),
(100010, 17, 3008, 1500, 1, 'Canceled', 'Tamil Nadu', '2022-09-11'),
(100011, 17, 3008, 1500, 1, 'Shipping', 'CHENNAI', '2022-09-11'),
(100012, 1, 3007, 1350, 1, 'Delivered', 'ALUVA', '2022-09-15'),
(100013, 1, 3007, 1350, 1, 'Canceled', 'Warehouse', '2022-09-15'),
(100014, 17, 3002, 1385, 1, 'Set Reached Warehouse', 'ALUVA', '2022-09-15'),
(100015, 17, 3001, 1400, 1, 'Return Claim Rejected', 'ALUVA', '2022-09-15'),
(100016, 1, 3003, 750, 1, 'Shipping', 'Warehouse', '2022-09-15'),
(100017, 17, 3007, 1350, 1, 'Waiting for pickup', 'ALUVA', '2022-09-18'),
(100018, 1, 3006, 1400, 2, 'Delivered', 'Warehouse', '2022-09-24'),
(100019, 1, 3012, 3304, 1, 'Delivered', 'ALUVA', '2022-10-05'),
(100020, 1, 3011, 11250, 1, 'Delivered', 'ALUVA', '2022-10-05'),
(100021, 2, 3011, 11250, 1, 'Delivered', 'ALUVA', '2022-10-30'),
(100022, 2, 3010, 1920, 1, 'Delivered', 'ALUVA', '2022-10-30'),
(100023, 2, 3002, 1385, 1, 'Shipping', 'Warehouse', '2022-10-30'),
(100024, 2, 3009, 1400, 1, 'Delivered', 'ALUVA', '2022-10-30'),
(100025, 1, 3013, 1700, 2, 'Delivered', 'ALUVA', '2022-11-04'),
(100026, 2, 3000, 1500, 1, 'Delivered', 'ALUVA', '2022-11-04'),
(100027, 2, 3003, 750, 1, 'Shipping', 'Warehouse', '2022-11-04'),
(100028, 18, 3000, 1500, 1, 'Shipping', 'Warehouse', '2022-11-04'),
(100029, 18, 3004, 350, 1, 'Shipping', 'Warehouse', '2022-11-04'),
(100030, 19, 3010, 1920, 1, 'Canceled', 'Warehouse', '2022-11-04'),
(100031, 19, 3012, 3304, 1, 'Set Reached Warehouse', 'ALUVA', '2022-11-04'),
(100032, 1, 3010, 1920, 1, 'Delivered', 'ALUVA', '2022-11-05');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `pid` int(11) NOT NULL,
  `brandid` int(11) NOT NULL,
  `ptype` varchar(20) NOT NULL,
  `pname` varchar(50) NOT NULL,
  `pdesc` text NOT NULL,
  `pimage` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `oprice` int(11) NOT NULL,
  `discount` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `waranty` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `pcondition` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`pid`, `brandid`, `ptype`, `pname`, `pdesc`, `pimage`, `price`, `oprice`, `discount`, `stock`, `waranty`, `rating`, `pcondition`) VALUES
(3000, 1006, 'tool', 'Morary Driver Kit', 'Meet the Moray, Minnow’s slightly bigger brother. Measuring a portable .9\" x 3.1\" x 4.9\", the Moray is the perfect every-day-carry toolkit or junk drawer standby to prevent your stuff from becoming junk.\r\n\r\nWe built the Moray using data from thousands of repair manuals and teardowns, ensuring you have a compact assortment of bits for electronics and home repair. Our 4 mm precision bit driver handle has an integrated SIM Eject pin, magnetic bit socket, knurled grip, and swivel top—and the 32 precision driver bits have a 4 mm hex shank and extended-reach long necks.\r\n\r\nStandard and security bits like Phillips and Pentalobes will get you into most electronic devices and small household appliances, and an assortment of Hex and specialty bits come in handy for furniture and older devices. Whether you\'re a professional fixer or a weekend warrior, the Moray has what you need to disassemble and repair smartphones, laptops, new and vintage game consoles, kitchen appliances, and more.', 'images/Tools/morary.png', 1500, 1500, -1, 2, 6, 0, 0),
(3001, 1006, 'tool', 'Pro Tech Tool Kit', 'At the heart of the toolkit, 64 steel screwdriver bits to service all your tech. The Pro Tech Toolkit has everything from a Y000 bit for next-gen Apple products to the Gamebit for vintage game consoles.\r\n\r\nWe’ve engineered this toolkit from the ground up—from the custom opening tools and spudgers to the iFixit-designed aluminum driver with knurled handle and swivel top.\r\n\r\n', 'images/Tools/protech.png', 2000, 1400, 30, 14, 6, 4, 0),
(3002, 1008, 'tool', 'A7104-XJ  Screwdriver', 'Package Contents: Screwdriver bits (25 mm) Philips: 4x PH1, 4 x PH2, 2 x PH3. Pozidriv: 2x PZ1, 2 x PZ2, 2 x PZ3, Slotted: 2x SL4, 4x SL6, 2x SL7.2 Torx: 2x TX10, 2x TX15, 2x TX20, 2x TX25 Hex: 2x HEX3, 2x HEX4, 2x HEX5, 2x HEX6. Screwdriver bits (50 mm) Philips: PH1, PH2, PH3, Pozidriv: PZ1, PZ2, Slotted: SL6, and SL7.2. Sockets: 5, 6, 7, 8, 10, 11, 12 mm. 1x Hand Ratchet and 1x Magnetic Holder\r\nAn ergonomic ratchet screw driver, which makes the task of fastening screws and bolts a lot easier\r\nThe set can be used in electronics, electrical, wood working and other hardware maintenance task\r\nThe driver bits and sockets are made of high quality materials to withstand heavy duty usage.', 'images/Tools/bd_screw_driver_set.png', 2114, 1385, 34, 18, 6, 0, 0),
(3003, 1006, 'tool', 'Precision Tweezers', 'Grab everything from screws to eyebrows with iFixit\'s Precision Tweezers Set. The complete tweezer kit for all holding, pulling, squeezing, picking up, and plucking jobs.\r\n\r\nIncluded are the three essential tips for DIY projects:\r\n\r\nPointed (extra fine!) - For ultimate precision\r\nAngled - For ergonomic accuracy\r\nBlunt - For heavy lifting\r\nMade with stainless steel and a protective coating that prevents ESD damage from harming sensitive electronics. Keep your tweezers organized with the portable fabric storage sleeve.', 'images/Tools/tweezers.png', 750, 750, -1, 18, 6, 0, 0),
(3004, 1006, 'tool', 'Anti static tray', 'Organize and Store Your Projects\r\n\r\nInvaluable for all electronics projects and repairs.\r\nStore tiny components and screws in the 20 small compartments, store large components and tools in the larger compartments.\r\nMade from Anti-Static Plastic, so it\'s safe for delicate components.\r\nUse in conjunction with our screwmaps for repairs on our most popular smartphone guides.\r\nGreat for phone repair! Put your standard size smartphone in the side compartment, store your tools in the bottom compartment, and organize your screws and parts in the small compartments.', 'images/Tools/tray.png', 350, 350, -1, 19, 6, 0, 0),
(3005, 1006, 'tool', 'Magnetic mat', 'Organize all your small parts while you work on a device.\r\nDry erase surface lets you keep notes and location sketches.\r\nReduces reassembly time by up to 40% while preventing errors.\r\nDesigned by fixers, for fixers, the 8”x10” Magnetic Project Mat catches and securely holds screws as you pull them out of a device.\r\n\r\nNow you can stop worrying about keeping track of all the loose screws and focus on your repair. Screws and small parts will remain right where you left them. For laptops with hundreds of screws, use the whole mat as a screw guide and keep careful location notes.\r\n\r\nThe included pen is uniquely suited for the Project Mat. It’s made by Staedtler, producer of top-of-the-line pens and pencils for artists and architects. Their Lumocolor Correctable pen resists smears and won\'t wipe away with a casual brush of your hand. When your repair is complete, the eraser tip or a dry cloth wipes the ink away clean.', 'images/Tools/mat.png', 150, 150, -1, 20, 6, 4, 0),
(3006, 1000, 'part', 'GALAXY S20 BATTERY', 'This Samsung Galaxy S20 Ultra replacement battery is what you need to bring your dead smartphone back to life!\r\n\r\nBattery degradation is an inevitable part of your smartphone\'s lifespan — extend it with this replacement battery compatible with the S20 Ultra model Samsung Galaxy. If your phone won’t turn on, won’t hold a charge, or you simply experience poor battery life, this replacement battery may be what you need to fix it.', 'images\\parts\\samsungs20bat.png', 1000, 700, 30, 8, 6, 3, 0),
(3007, 1000, 'part', 'Galaxy S20 Rear  Panel', 'Replace a rear panel in your Samsung Galaxy S20 smartphones.\r\n\r\nFix issues like a broken or scratched rear cover.', 'images\\parts\\samsungs20back.png', 1500, 1500, -1, 1, 6, 4, 0),
(3008, 1000, 'part', 'Galaxy S20 Rear Panel PINK', 'Replace a rear panel in your Samsung Galaxy S20 smartphones.\r\n\r\nFix issues like a broken or scratched rear cover.', 'images\\parts\\samsungs20backpink.png', 1500, 1500, -1, 2, 6, 0, 0),
(3009, 1000, 'part', 'Galaxy S20 Rear Panel RED', '', 'images\\parts\\samsungs20backred.png', 1500, 1400, 5, 9, 6, 0, 0),
(3010, 1000, 'part', 'iPhone 12 Battery', ' \r\niPhone 12/12 Pro Battery\r\nItem code: IF442-002-1\r\n\r\nIdentify your iPhone\r\n\r\n$39.99\r\n\r\nAdd to Cart\r\nOnly 13 left\r\n\r\nShipping restrictions apply\r\n\r\n\r\nA new Galaxy of repair\r\nGenuine parts for Samsung Galaxy, now available.\r\n\r\nShop Samsung Parts\r\nFrequently Bought Together\r\nThis Item\r\n\r\n\r\n\r\n\r\n\r\n\r\n$53.97\r\nAdd to cart\r\nProduct Details\r\nDESCRIPTION\r\n\r\nThis iPhone 12 and 12 Pro replacement battery is what you need to bring your dead iPhone back to life!\r\n\r\nTested to confirm there are no cycles on the cell and the capacity is 95% or higher.\r\n100% factory tested with a customer return rate of only 1%.\r\nAssembled using high quality chipset from Texas Instruments.\r\nSpot tested by iFixit staff in San Luis Obispo, CA to ensure consistency of quality and capacity.\r\nBattery adhesive is preinstalled to improve the quality of your repair.', 'images\\parts\\iphone12bat.png', 2400, 1920, 20, 2, 6, 5, 0),
(3011, 1001, 'part', 'iPhone 12 Display', 'Replace a scratched or cracked front panel glass digitizer screen or a malfunctioning Super Retina XDR OLED display. This part is compatible with an iPhone 12 and iPhone 12 Pro.', 'images/parts/iphone_display.png', 15000, 11250, 25, 8, 6, 4, 1),
(3012, 1001, 'part', 'iPhone 12 Rear Camera', 'Replace a dual primary rear-facing camera assembly in your iPhone 12.\r\n\r\nIf your rear camera has sensor issues, focusing problems, or shows a blank image, you’ll want to replace this part.', 'images/parts/iphone12camera.png', 4130, 3304, 20, 8, 12, 5, 0),
(3013, 1000, 'tool', 'Precision Cleaning Kit', 'Regular cleaning of your devices is one of the best practices of preventative maintenance to enhance their lifespan. Unfortunately, many of today’s electronics contain increasingly small connections, ports and other tight spaces. Through regular use, these areas of our devices collect dirt, lint and other contaminants. iFixit has assembled a group of helpful and practical tools to tackle cleaning hard-to-reach areas. These are meant to be reused, so keep them clean between projects.', 'images/Tools/pre_cleaning_kit.png', 850, 850, -1, 8, 6, 0, 0),
(3014, 1000, 'part', 'Galaxy s20  Rear camera', 'Replace the rear-facing camera compatible with Samsung Galaxy S20 model smartphones. Fix issues like a blurry or scratched camera lens.', 'images/parts/s20campng.png', 3500, 3325, 5, 10, 1, 0, 1),
(3015, 1002, 'part', 'Pixel 6 screen', 'Replace a cracked or scratched front glass panel or malfunctioning AMOLED display on your phone. This screen and digitizer assembly will renew the appearance of your front panel, restore touch function, and eliminate the dead pixels or flickering on an aging display. The integrated fingerprint reader is included in the assembly.', 'images/parts/pixel6disp.png', 7500, 6375, 15, 10, 12, 0, 0),
(3016, 1002, 'part', 'Pixel 6 Battery', 'Replace a dead or damaged model GMSB3 battery for a Google Pixel 6 smartphone.\r\n\r\nInstallation adhesive is included.\r\niFixit sells genuine Google parts.\r\nGoogle offers online update and software repair for your Pixel smartphone. This resource may be helpful if you have software problems or need to calibrate a fingerprint sensor following your repair.', 'images/parts/pixel6bat.png', 3750, 3563, 5, 15, 12, 0, 0),
(3017, 1002, 'part', 'Pixel 6  Rear camera', 'Replace the rear-facing camera in your Google Pixel 6 smartphone.', 'images/parts/pixel6cam.png', 7500, 7125, 5, 10, 12, 0, 0),
(3018, 1004, 'part', 'Nitro 5 Battery', 'Replace that dead or dying battery. Does your battery die too quickly? Will your battery not charge? Are you having other issues with your battery? Replacing it may help!\r\n\r\nOur aftermarket replacement batteries lead the industry in quality and reliability. Rest assured youre getting the best part money can buy.', 'images/parts/nitrobat.png', 5925, 4740, 20, 15, 12, 0, 0),
(3019, 1004, 'part', 'Predator Battery', 'Replace that dead or dying battery. Does your battery die too quickly? Will your battery not charge? Are you having other issues with your battery? Replacing it may help!\r\n\r\nOur aftermarket replacement batteries lead the industry in quality and reliability. Rest assured youre getting the best part money can buy.', 'images/parts/predbat.png', 6000, 6000, -1, 10, 12, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `retprod`
--

CREATE TABLE `retprod` (
  `retid` int(11) NOT NULL,
  `oid` bigint(11) NOT NULL,
  `pid` int(20) NOT NULL,
  `rtime` date NOT NULL DEFAULT '2020-09-10',
  `pdinfo` varchar(50) NOT NULL,
  `rdesc` text NOT NULL,
  `dpimg` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `retprod`
--

INSERT INTO `retprod` (`retid`, `oid`, `pid`, `rtime`, `pdinfo`, `rdesc`, `dpimg`) VALUES
(1002, 100017, 3007, '2022-11-03', 'Shippment Damage', 'Display Broken', 'images/returns/cracked-iphone-screen.jpg'),
(1003, 100015, 3001, '2022-11-03', 'Defective Product', 'Damaged Tools set', 'images/returns/1-161024115610424.jpg'),
(1004, 100014, 3002, '2022-11-03', 'Shippment Damage', 'screw driver damaged', 'images/returns/samsung-s7-cracked-broken-6654-001.jpg'),
(1005, 100031, 3012, '2022-11-04', 'Shippment Damage', 'damaged product', 'images/returns/iphone12bat5.png');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `cid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `rtitle` varchar(70) NOT NULL,
  `rdesc` text NOT NULL,
  `rrating` int(11) NOT NULL,
  `rscore` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`cid`, `pid`, `rtitle`, `rdesc`, `rrating`, `rscore`) VALUES
(1, 3005, 'nice mart', 'strong magnets highly recommend for others', 4, 0),
(1, 3006, 'Very Good Battery', 'Very Nice Battery', 3, 9),
(1, 3007, 'good product', 'gsdgagdsfsg', 4, 8),
(1, 3012, 'Good replacement camera for iPhone 12', 'High Quality Camera installation was easy due to documentation 10/10 recommends it', 5, 10),
(2, 3010, 'Good Battery', 'Nice Battery now my phones battery lasts for days', 5, 9),
(2, 3011, 'Great display', 'Great display im really linking it', 4, 8),
(17, 3001, 'Awesome Product', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sem nec pulvinar faucibus. Curabitur viverra sodales libero. In dictum accumsan massa, a tempor ante vestibulum sed. Quisque nulla magna, placerat at turpis id, porta iaculis mi. Sed vel quam placerat, suscipit dolor vel, malesuada enim. Aliquam pharetra et quam ac accumsan. In interdum tellus elit, nec tincidunt quam commodo ac. Aenean sit amet pharetra urna. In eget metus ultrices nisi viverra dignissim. Praesent vulputate tristique pulvinar. Suspendisse vel ligula vel metus fermentum aliquam. Suspendisse vitae ante orci. Vestibulum auctor tortor quis volutpat fermentum. Sed ultricies porta velit.', 5, 0),
(17, 3007, 'Good Product', 'Not The Best but good', 3, 10),
(19, 3012, 'Nice product', 'very good', 4, 5);

-- --------------------------------------------------------

--
-- Table structure for table `steps`
--

CREATE TABLE `steps` (
  `did` int(11) NOT NULL,
  `stid` int(11) NOT NULL,
  `stitle` text NOT NULL,
  `stdesc` text NOT NULL,
  `stimg` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `steps`
--

INSERT INTO `steps` (`did`, `stid`, `stitle`, `stdesc`, `stimg`) VALUES
(50, 1, 'Removing back cover', 'Start by heating up an iOpener and place it on the bottom edge of the phone’s back cover. Leave it there for about two minutes. Then apply a suction handle on the spot you just heated and pull up with a strong steady force. This will create a gap between the cover and the frame for the next step.WARNING: Do not apply excessive force with the pick while cutting the adhesive during the next few steps, or you might crack the back cover glass.\r\n\r\nWhen you see the gap, grab an opening pick and insert the point into the gap so that the adhesive doesn’t re-adhere. This may take more than one attempt due to tight tolerances. If so, apply more heat.\r\n\r\nOnce you have your pick inserted, slide the pick back and forth along the bottom edge making sure you slice through all the adhesive. Leave a pick in the seam so that the adhesive doesn’t reseal.', 'images/documentation/samsungs20bat1.jpg'),
(50, 2, 'Separate the bottom edge adhesive', 'Apply a suction cup to the back of the phone, as close to the center of the bottom edge as possible.\r\n\r\nIf your display is badly cracked, covering it with a layer of clear packing tape may allow the suction cup to adhere. Alternatively, very strong tape may be used instead of the suction cup. If all else fails, you can superglue the suction cup to the broken glass.\r\n\r\nPull on the suction cup with strong, steady force to create a gap between the back cover and the frame.\r\n\r\nInsert the point of an opening pick into the gap.\r\n\r\nDue to tight tolerances, this may take multiple attempts of reheating with the iOpener and separating with the suction cup before you get it right.\r\n\r\nIf you are having trouble creating a gap, apply more heat to the edge and try again.\r\n\r\nDo not apply excessive force with the pick, or you risk cracking the back cover glass.', 'images/documentation/samsungs20bat2.jpg'),
(50, 3, 'Heat the left edge', 'Slide the pick back and forth along the bottom edge to slice through the adhesive.\r\n\r\nDo not attempt to cut the adhesive near the corners of the phone where the glass is curved or you risk cracking the glass panel.\r\n\r\nLeave your opening pick in the seam to prevent the adhesive from resealing.\r\n\r\nApply a heated iOpener to the left edge of the back cover for two minutes.', 'images/documentation/samsungs20bat3.jpg'),
(61, 1, 'Heat the lower edge of the iPhone', 'Use a hairdryer or heat gun or prepare an iOpener and apply it to the lower edge of the iPhone for about a minute in order to soften up the adhesive underneath.', 'images/documentation/iphone12bat1.png'),
(61, 2, 'Apply Suction Cups', 'If the plastic depth gauge is attached at the center of the iSclack, remove it nowits not needed for larger iPhones like the iPhone 12.\r\nPosition the suction cups near the bottom edge of the iPhoneone on the front, and one on the back.', 'images/documentation/iphone12bat2.png'),
(61, 3, 'Lift Display Slightly', 'Pull up on the suction cup with firm, constant pressure to create a slight gap between the front panel and rear case.', 'images/documentation/iphone12bat3.png'),
(61, 4, 'Unscrew the Battery and Battery cover', 'Throughout this repair, keep track of each screw and make sure it goes back exactly where it came from to avoid damaging your iPhone.', 'images/documentation/iphone12bat4.png'),
(61, 5, 'Disconnect front sensor', 'Use a spudger or a fingernail to disconnect the front sensor assembly cable connector.', 'images/documentation/iphone12bat5.png'),
(61, 6, 'Locate adhesive pull tabs', 'Each piece of adhesive has a black pull-tab at the end, which is lightly adhered to the edge of the battery.', 'images/documentation/iphone12bat6.png'),
(61, 7, 'Remove stretch-release adhesive', 'Grab the first pull-tab with your fingers and slowly pull it away from the battery, toward the bottom of the iPhone.\r\n\r\nPull hard enough to maintain tension on the strip, but dont force it. Give it plenty of time to stretch and un-stick from under the battery.\r\n\r\nDont press down on the battery. Hold the iPhone firmly by its sides.\r\nKeep the strip flat and unwrinkled. Try to pull evenly on the whole strip, rather than pulling mainly in the middle or on one side.\r\n\r\nPull at a low angle so the strip doesnt snag on the edge of the battery.', 'images/documentation/iphone12bat7.png'),
(61, 8, 'Remove the Battery', 'Remove the battery.\r\n\r\nIf theres any alcohol solution remaining in the phone, carefully wipe it off or allow it to air dry before installing your new battery.', 'images/documentation/iphone12bat8.png'),
(63, 1, 'Remove Pentalobe screws', 'Power off your iPhone before beginning disassembly.\r\nRemove the two 6.75 mm long pentalobe P2 screws at the bottom edge of the apple', 'images/documentation/iphone12disp1.png'),
(63, 2, 'Tap over any cracks', 'If your iPhone has a cracked screen, keep further breakage contained and prevent bodily harm during your repair by taping over the glass.\r\nLay overlapping strips of packing tape over the iPhones display until the whole face is covered', 'images/documentation/iphone12disp2.png'),
(63, 3, 'Lift the display slightly', 'Pull up on the suction cup with firm, constant pressure to create a slight gap between the front panel and rear case.\r\n\r\nInsert an opening pick into the gap.', 'images/documentation/iphone12disp3.png'),
(63, 4, 'Open iPhone', 'If you havent removed your suction handle or iSclack, remove it now.\r\nOpen the iPhone by swinging the display up from the right side, like the front cover of a book.', 'images/documentation/iphone12disp4.png'),
(63, 5, 'Disconnect cables', 'Use a spudger or a clean fingernail to pry the battery connector up from its socket on the logic board.Bend the connector slightly away from the logic board to prevent it from accidentally making contact with the socket and providing power to the phone during your repair.', 'images/documentation/iphone12disp5.png'),
(63, 6, 'Remove display assembly', 'Remove the display assembly.', 'images/documentation/iphone12disp6.png'),
(64, 1, 'Remove the back cover', 'Flip the laptop over so the bottom is exposed.\r\n\r\nUse the Phillips #00 screwdriver to remove the two 8 mm screws at the top-left and top-right of the laptop.\r\n\r\nRemove the remaining 7 mm screws from the bottom of the laptop using the Phillips #00 screwdriver', 'images/documentation/nitrobat1.png'),
(64, 2, 'Drain any residual power', 'Open the laptop and press the power button to drain any residual power.\r\n\r\nA safety feature prevents the battery from being used while the laptop is opened.\r\n\r\nUse a pick or spudger and insert it between the base and the palm rest. Slide it around the edge to undo the clips holding them together.', 'images/documentation/nitrobat2.png'),
(64, 3, 'Disconnect keyboard cable', 'Disconnect the keyboard flex cable by pushing each side of the locking tab to release the connector from the board.\r\n\r\nThis is a plunger-style ZIF (zero-insertion force) connector. More information can be found here.\r\n\r\nRelease the keyboard backlight connector from the board by levering up the tab with a finger.\r\n\r\nThis is the common ZIF connector. More information can be found here.\r\n\r\nRelease the touchpad ZIF connector.', 'images/documentation/nitrobat3.png'),
(64, 4, 'Remove the optical drive', 'Push the optical drive out with a finger or pick.\r\n\r\nAnother screw could be holding the optical drive in.', 'images/documentation/nitrobat4.png'),
(64, 5, 'Remove hard drive and USB connectors', 'Release the SATA hard drive and USB ZIF connectors from the board.\r\n\r\nRemoving the SATA connector is optional only if the battery screw is not easily accessible.\r\n\r\nIf the battery screw isnt more accessible, consider also releasing the SD card board ZIF connector and removing the SATA hard drive.\r\n\r\nRelease the USB ZIF connector from the breakout board.', 'images/documentation/nitrobat5.png'),
(64, 6, 'Disconnect  battery connector from board', 'Use the Phillips #00 to remove the screw holding the battery in place.\r\n\r\nThere may be a second screw holding the battery in at the bottom left.\r\n\r\nDisconnect the battery connector from the board. Grasp it between two fingers and slowly pull it loose.', 'images/documentation/nitrobat6.png'),
(64, 7, 'Remove the battery', 'Lift underneath the top of the battery to remove.', 'images/documentation/nitrobat7.png');

-- --------------------------------------------------------

--
-- Table structure for table `tool`
--

CREATE TABLE `tool` (
  `pid` int(11) NOT NULL,
  `tooltype` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tool`
--

INSERT INTO `tool` (`pid`, `tooltype`) VALUES
(3000, 'Drivers'),
(3001, 'Tool Kit'),
(3002, 'Drivers'),
(3004, 'Organization Tools'),
(3005, 'Organization Tools'),
(3013, 'Cleaning');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`aid`);

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`brandid`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cid`,`pid`),
  ADD KEY `pid` (`pid`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`cid`),
  ADD UNIQUE KEY `cmail` (`cmail`),
  ADD KEY `pincode` (`pincode`);

--
-- Indexes for table `document`
--
ALTER TABLE `document`
  ADD PRIMARY KEY (`did`);

--
-- Indexes for table `elecproduct`
--
ALTER TABLE `elecproduct`
  ADD PRIMARY KEY (`pid`,`eid`),
  ADD KEY `eid` (`eid`);

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
-- Indexes for table `porder`
--
ALTER TABLE `porder`
  ADD PRIMARY KEY (`oid`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`pid`),
  ADD UNIQUE KEY `pname` (`pname`),
  ADD KEY `brandid` (`brandid`);

--
-- Indexes for table `retprod`
--
ALTER TABLE `retprod`
  ADD PRIMARY KEY (`retid`),
  ADD KEY `oid` (`oid`),
  ADD KEY `pid` (`pid`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`cid`,`pid`),
  ADD KEY `pid` (`pid`);

--
-- Indexes for table `steps`
--
ALTER TABLE `steps`
  ADD PRIMARY KEY (`did`,`stid`);

--
-- Indexes for table `tool`
--
ALTER TABLE `tool`
  ADD UNIQUE KEY `pid` (`pid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `brandid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1017;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `document`
--
ALTER TABLE `document`
  MODIFY `did` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `electronics`
--
ALTER TABLE `electronics`
  MODIFY `eid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2010;

--
-- AUTO_INCREMENT for table `porder`
--
ALTER TABLE `porder`
  MODIFY `oid` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100033;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3020;

--
-- AUTO_INCREMENT for table `retprod`
--
ALTER TABLE `retprod`
  MODIFY `retid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1006;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `customer` (`cid`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`pid`) REFERENCES `products` (`pid`);

--
-- Constraints for table `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`pincode`) REFERENCES `pincode` (`pincode`);

--
-- Constraints for table `elecproduct`
--
ALTER TABLE `elecproduct`
  ADD CONSTRAINT `elecproduct_ibfk_1` FOREIGN KEY (`eid`) REFERENCES `electronics` (`eid`),
  ADD CONSTRAINT `elecproduct_ibfk_2` FOREIGN KEY (`pid`) REFERENCES `products` (`pid`);

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
-- Constraints for table `retprod`
--
ALTER TABLE `retprod`
  ADD CONSTRAINT `retprod_ibfk_1` FOREIGN KEY (`oid`) REFERENCES `porder` (`oid`),
  ADD CONSTRAINT `retprod_ibfk_2` FOREIGN KEY (`pid`) REFERENCES `products` (`pid`);

--
-- Constraints for table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `customer` (`cid`),
  ADD CONSTRAINT `review_ibfk_2` FOREIGN KEY (`pid`) REFERENCES `products` (`pid`),
  ADD CONSTRAINT `review_ibfk_3` FOREIGN KEY (`cid`) REFERENCES `customer` (`cid`);

--
-- Constraints for table `steps`
--
ALTER TABLE `steps`
  ADD CONSTRAINT `steps_ibfk_1` FOREIGN KEY (`did`) REFERENCES `document` (`did`);

--
-- Constraints for table `tool`
--
ALTER TABLE `tool`
  ADD CONSTRAINT `tool_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `products` (`pid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
