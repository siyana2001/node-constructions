-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.34 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table construct.hsconst
CREATE TABLE IF NOT EXISTS `hsconst` (
  `id` int NOT NULL AUTO_INCREMENT,
  `layimg` varchar(900) DEFAULT NULL,
  `description` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `image` varchar(900) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table construct.hsconst: ~3 rows (approximately)
INSERT INTO `hsconst` (`id`, `layimg`, `description`, `image`) VALUES
	(2, 'https://www.thehousedesigners.com/images/plans/01/ROD/bulk/5089/5089-floor-first_m.webp', 'Buildings are made of materials, including:Foundation, Walls, Floors, Roofs, Chimneys, Plumbing', 'https://i.pinimg.com/736x/ac/5c/7e/ac5c7eb15bd99888193541b9be5ffe56.jpg'),
	(3, 'https://www.thehousedesigners.com/images/plans/01/URD/bulk/6630/the-sunset-house-plan-floor-plans-1st_m.webp', ' Sustainable design with a proper balance of aesthetics, accessibility, cost-effectiveness, safety, and security. Superior indoor air quality, based on the specific requirements of the space. ', 'https://i.pinimg.com/1200x/1f/0e/03/1f0e03aae3bbfe851ca3757a8f48cbb5.jpg'),
	(4, 'https://www.thehousedesigners.com/images/plans/01/JAA/9307-1stflr_m.webp', 'This architectural design, refers to the broadly based architectural, engineering and technical applications to the design of buildings. All building projects require the services of a building designer, typically a licensed architect.', 'https://p.turbosquid.com/ts-thumb/MQ/wX7VEr/QZJX9oRO/1/jpg/1589306323/600x600/fit_q87/2e34be50a197e901359398775ba24c36a893c830/1.jpg');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
