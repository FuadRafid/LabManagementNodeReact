-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 15, 2018 at 09:17 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mist_lab`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `name` varchar(100) NOT NULL,
  `value` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`name`, `value`) VALUES
('Motors', 'Motors');

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` bigint(11) NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `amount` int(11) NOT NULL,
  `image` longtext NOT NULL,
  `category` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `title`, `description`, `amount`, `image`, `category`) VALUES
(1, 'Raspberry Pi', 'The Raspberry Pi is a low cost, credit-card sized computer that plugs into a computer monitor or TV, and uses a standard keyboard and mouse. It is a capable little device that enables people of all ages to explore computing, and to learn how to program in languages like Scratch and Python. It’s capable of doing everything you’d expect a desktop computer to do, from browsing the internet and playing high-definition video, to making spreadsheets, word-processing, and playing games.', 69, 'https://www.raspberrypi.org/app/uploads/2017/05/Raspberry-Pi-2-Ports-1-1856x1080.jpg', 'processor'),
(2, 'ROM', 'Read-only memory (ROM) is a type of non-volatile memory used in computers and other electronic devices. Data stored in ROM can only be modified slowly, with difficulty, or not at all, so it is mainly used to store firmware (software that is closely tied to specific hardware, and unlikely to need frequent updates) or application software in plug-in cartridges.', 85, 'https://i.ebayimg.com/images/g/lVQAAOSwymxVJ-BF/s-l640.jpg', 'memory'),
(3, 'AND Gate', 'The AND gate is a basic digital logic gate that implements logical conjunction - it behaves according to the truth table to the right. A HIGH output (1) results only if all the inputs to the AND gate are HIGH (1). If none or not all inputs to the AND gate are HIGH, a LOW output results. The function can be extended to any number of inputs.', 140, 'http://www.w11stop.com/image/cache/Components/semiconductores/GeneralIC/7408-IC-photo-800x800.jpg', 'gate'),
(4, 'NOR Gate', '7402 IC is a device containing four independent gates each of which performs the logic NOR function. 7402 package options include: plastic small outline, ceramic chip carriers, flat packages, plastic and ceramic DIPs. The SN7402, SN74LS02 and SN74S02 are characterized for operation from 0°C to 70°C.', 165, 'https://www.reddoko.com/uploads/14787/800x8001520312072.large-HD7402P-1.jpg', 'gate'),
(5, 'Voltmeter', 'A voltmeter is an instrument used for measuring electrical potential difference between two points in an electric circuit. Analog voltmeters move a pointer across a scale in proportion to the voltage of the circuit; digital voltmeters give a numerical display of voltage by use of an analog to digital converter.', 85, 'https://images-na.ssl-images-amazon.com/images/I/61T0dKVI5RL._SY450_.jpg', 'meters'),
(6, 'Ammeter', 'An ammeter (from Ampere Meter) is a measuring instrument used to measure the current in a circuit. Electric currents are measured in amperes (A), hence the name. ', 115, 'https://5.imimg.com/data5/KW/FJ/MY-34301493/dc-milli-ammeter-500x500.jpg', 'meters'),
(7, '1K Resistor', 'A resistor is a passive two-terminal electrical component that implements electrical resistance as a circuit element. In electronic circuits, resistors are used to reduce current flow, adjust signal levels, to divide voltages, bias active elements, and terminate transmission lines, among other uses. ', 1065, 'https://images-na.ssl-images-amazon.com/images/I/311bGhoaiPL._SX342_.jpg', 'passComp'),
(8, 'Capacitor 4.7 mF ', 'A capacitor is a passive two-terminal electrical component that stores potential energy in an electric field. The effect of a capacitor is known as capacitance. ', 165, 'https://media.rs-online.com/t_large/F3654650-01.jpg', 'passComp'),
(9, 'Transistor', 'A transistor is a semiconductor device used to amplify or switch electronic signals and electrical power. It is composed of semiconductor material usually with at least three terminals for connection to an external circuit.', 163, 'https://www.creatroninc.com/1661-large_default/2n6039-npn-darlington-power-transistor-80v-4a.jpg', 'actComp'),
(10, 'Wirecutter', 'Used to cut and cast high density foam mold with lowmelting point alloy blocks.', 85, 'https://www.creatroninc.com/1661-large_default/2n6039-npn-darlington-power-transistor-80v-4a.jpg', 'hardware'),
(11, 'Breadboard', 'A breadboard is a solderless device for temporary prototype with electronics and test circuit designs. Most electronic components in electronic circuits can be interconnected by inserting their leads or terminals into the holes and then making connections through wires where appropriate.', 105, 'https://cdn-shop.adafruit.com/970x728/64-00.jpg', 'others'),
(12, 'L293D', 'The Device is a monolithic integrated high voltage, high current four channel driver designed to accept standard DTL or TTL logic levels and drive inductive loads (such as relays solenoides, DC and stepping motors) and switching power transistors. To simplify use as two bridges each pair of channels is equipped with an enable input.\r\nA separate supply input is provided for the logic, allowing operation at a lower voltage and internal clamp diodes are included.', 75, '831f008daf74d813912e1caae77fa8ac', 'others'),
(13, 'Wire Cutter', 'Soft Grip Wire Cutter Pliers, Small 4.5 Inch Carbon Steel Tool ', 80, 'e4f6a614b1f9e196fd18604fb8bc3073', 'hardware'),
(14, 'Arduino', 'Arduino is an open source computer hardware and software company, projec\r\nt, and user community that designs and manufactures single-board microcontrollers and microcontroller kits for building digital devices and interactive objects that c\r\nan sense and control objects in the physical and digital world.', 75, '62a7baba3a15ed49154422d85bc55d20', 'processor'),
(15, 'Arduino', 'Arduino is an open source computer hardware and software company, project, and user community that designs and manufactures single-board microcontrollers and microcontroller kits for building digital devices and interactive objects that can sense and control objects in the physical and digital world.', 85, 'f1c2c1a565ac1ecde916596973408704', 'processor'),
(16, '4 Input NAND Gate', 'Abcd', 565, 'e5855a43efe9d1ca57e63fa58f7ef9a7', 'gate'),
(17, 'High Voltage Equipment', 'Very high voltage use with care', 75, '978b0c63df580199e24911748dd14466', 'hardware'),
(18, 'Servo Motor', 'Motor', 153, '7a19c8e4d67959e85bef68b879d276d1', 'Motors');

-- --------------------------------------------------------

--
-- Table structure for table `requested_item`
--

CREATE TABLE `requested_item` (
  `user_key` int(11) NOT NULL,
  `item_key` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `state` int(11) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `requested_item`
--

INSERT INTO `requested_item` (`user_key`, `item_key`, `amount`, `state`, `id`) VALUES
(1, 1, 10, 2, 1),
(1, 1, 10, 2, 2),
(1, 2, 10, 2, 3),
(1, 2, 10, 2, 4),
(3, 1, 10, 2, 5),
(3, 1, 10, 2, 6),
(3, 9, 5, 2, 7),
(3, 1, 12, 2, 8),
(3, 2, 34, 2, 9),
(3, 4, 12, 2, 10),
(3, 1, 12, 2, 11),
(3, 14, 45, 2, 12),
(3, 4, 12, 2, 13),
(3, 1, 12, 2, 14),
(3, 2, 10, 2, 15),
(1, 3, 80, 2, 16),
(1, 1, 100, 2, 23),
(1, 1, 19, 2, 24),
(1, 1, 12, 2, 25),
(1, 9, 2, 1, 35);

--
-- Triggers `requested_item`
--
DELIMITER $$
CREATE TRIGGER `requested_item_deleted` BEFORE DELETE ON `requested_item` FOR EACH ROW BEGIN

 UPDATE items SET amount=amount+OLD.amount where items.id=OLD.item_key;

END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `site_info`
--

CREATE TABLE `site_info` (
  `id` int(11) NOT NULL,
  `top_color` varchar(50) NOT NULL,
  `bottom_color` varchar(50) NOT NULL,
  `side_bar_color` varchar(50) NOT NULL,
  `logo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `site_info`
--

INSERT INTO `site_info` (`id`, `top_color`, `bottom_color`, `side_bar_color`, `logo`) VALUES
(2, 'null', '#eeeeee', '', 'ce060f714b4b988d4d9cd405d5456c83');

-- --------------------------------------------------------

--
-- Table structure for table `user_login`
--

CREATE TABLE `user_login` (
  `id` int(11) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `user_pass` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_login`
--

INSERT INTO `user_login` (`id`, `user_id`, `user_pass`, `type`) VALUES
(1, '201514093', 'sourav@', 'student'),
(2, 'shajal', 'shajal@', 'editor'),
(3, '201514090', 'sarah@', 'student');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD UNIQUE KEY `name` (`name`,`value`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `requested_item`
--
ALTER TABLE `requested_item`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `site_info`
--
ALTER TABLE `site_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_login`
--
ALTER TABLE `user_login`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `requested_item`
--
ALTER TABLE `requested_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `site_info`
--
ALTER TABLE `site_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user_login`
--
ALTER TABLE `user_login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
