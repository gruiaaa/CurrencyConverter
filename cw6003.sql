/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 50744 (5.7.44-log)
 Source Host           : localhost:3306
 Source Schema         : cw6003

 Target Server Type    : MySQL
 Target Server Version : 50744 (5.7.44-log)
 File Encoding         : 65001

 Date: 17/03/2024 20:51:25
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for currencies
-- ----------------------------
DROP TABLE IF EXISTS `currencies`;
CREATE TABLE `currencies`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `currency_code` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `currency_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `flag_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `currency_code`(`currency_code`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 58 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of currencies
-- ----------------------------
INSERT INTO `currencies` VALUES (1, 'AED', 'United Arab Emirates Dirham', 'https://flagcdn.com/ae.svg');
INSERT INTO `currencies` VALUES (2, 'ARS', 'Argentine Peso', 'https://flagcdn.com/ar.svg');
INSERT INTO `currencies` VALUES (3, 'AUD', 'Australian Dollar', 'https://flagcdn.com/au.svg');
INSERT INTO `currencies` VALUES (4, 'AZN', 'Azerbaijani Manat', 'https://flagcdn.com/az.svg');
INSERT INTO `currencies` VALUES (5, 'BGN', 'Bulgarian Lev', 'https://flagcdn.com/bg.svg');
INSERT INTO `currencies` VALUES (6, 'BHD', 'Bahraini Dinar', 'https://flagcdn.com/bh.svg');
INSERT INTO `currencies` VALUES (7, 'BND', 'Brunei Dollar', 'https://flagcdn.com/bn.svg');
INSERT INTO `currencies` VALUES (8, 'BRL', 'Brazilian Real', 'https://flagcdn.com/br.svg');
INSERT INTO `currencies` VALUES (9, 'CAD', 'Canadian Dollar', 'https://flagcdn.com/ca.svg');
INSERT INTO `currencies` VALUES (10, 'CHF', 'Swiss Franc', 'https://flagcdn.com/ch.svg');
INSERT INTO `currencies` VALUES (11, 'CLP', 'Chilean Peso', 'https://flagcdn.com/cl.svg');
INSERT INTO `currencies` VALUES (12, 'CNY', 'Chinese Yuan', 'https://flagcdn.com/cn.svg');
INSERT INTO `currencies` VALUES (13, 'CZK', 'Czech Koruna', 'https://flagcdn.com/cz.svg');
INSERT INTO `currencies` VALUES (14, 'DKK', 'Danish Krone', 'https://flagcdn.com/dk.svg');
INSERT INTO `currencies` VALUES (15, 'EGP', 'Egyptian Pound', 'https://flagcdn.com/eg.svg');
INSERT INTO `currencies` VALUES (16, 'EUR', 'Euro', 'https://flagcdn.com/eu.svg');
INSERT INTO `currencies` VALUES (17, 'FJD', 'Fiji Dollar', 'https://flagcdn.com/fj.svg');
INSERT INTO `currencies` VALUES (18, 'GBP', 'Pound Sterling', 'https://flagcdn.com/gb.svg');
INSERT INTO `currencies` VALUES (19, 'HKD', 'Hong Kong Dollar', 'https://flagcdn.com/hk.svg');
INSERT INTO `currencies` VALUES (20, 'HUF', 'Hungarian Forint', 'https://flagcdn.com/hu.svg');
INSERT INTO `currencies` VALUES (21, 'IDR', 'Indonesian rRpiah', 'https://flagcdn.com/id.svg');
INSERT INTO `currencies` VALUES (22, 'ILS', 'Israeli New Shekel', 'https://flagcdn.com/il.svg');
INSERT INTO `currencies` VALUES (23, 'INR', 'Indian Rupee', 'https://flagcdn.com/in.svg');
INSERT INTO `currencies` VALUES (24, 'JPY', 'Japanese Yen', 'https://flagcdn.com/jp.svg');
INSERT INTO `currencies` VALUES (25, 'KRW', 'South Korean Won', 'https://flagcdn.com/kr.svg');
INSERT INTO `currencies` VALUES (26, 'KWD', 'Kuwaiti Dinar', 'https://flagcdn.com/kw.svg');
INSERT INTO `currencies` VALUES (27, 'LKR', 'Sri Lankan Rupee', 'https://flagcdn.com/lk.svg');
INSERT INTO `currencies` VALUES (28, 'MAD', 'Moroccan Dirham', 'https://flagcdn.com/ma.svg');
INSERT INTO `currencies` VALUES (29, 'MGA', 'Malagasy Ariary', 'https://flagcdn.com/mg.svg');
INSERT INTO `currencies` VALUES (30, 'MXN', 'Mexican Peso', 'https://flagcdn.com/mx.svg');
INSERT INTO `currencies` VALUES (31, 'MYR', 'Malaysian Ringgit', 'https://flagcdn.com/my.svg');
INSERT INTO `currencies` VALUES (32, 'NOK', 'Norwegian Krone', 'https://flagcdn.com/no.svg');
INSERT INTO `currencies` VALUES (33, 'NZD', 'New Zealand Dollar', 'https://flagcdn.com/nz.svg');
INSERT INTO `currencies` VALUES (34, 'OMR', 'Omani Rial', 'https://flagcdn.com/om.svg');
INSERT INTO `currencies` VALUES (35, 'PEN', 'Peruvian Sol', 'https://flagcdn.com/pe.svg');
INSERT INTO `currencies` VALUES (36, 'PGK', 'Papua New Guinean Kina', 'https://flagcdn.com/pg.svg');
INSERT INTO `currencies` VALUES (37, 'PHP', 'Philippine Peso', 'https://flagcdn.com/ph.svg');
INSERT INTO `currencies` VALUES (38, 'PKR', 'Pakistani Rupee', 'https://flagcdn.com/pk.svg');
INSERT INTO `currencies` VALUES (39, 'PLN', 'Polish Złoty', 'https://flagcdn.com/pl.svg');
INSERT INTO `currencies` VALUES (40, 'RUB', 'Russian Ruble', 'https://flagcdn.com/ru.svg');
INSERT INTO `currencies` VALUES (41, 'SAR', 'Saudi Riyal', 'https://flagcdn.com/sa.svg');
INSERT INTO `currencies` VALUES (42, 'SBD', 'Solomon Islands Dollar', 'https://flagcdn.com/sb.svg');
INSERT INTO `currencies` VALUES (43, 'SCR', 'Seychelles Rupee', 'https://flagcdn.com/sc.svg');
INSERT INTO `currencies` VALUES (44, 'SEK', 'Swedish Krona/Kronor', 'https://flagcdn.com/se.svg');
INSERT INTO `currencies` VALUES (45, 'SGD', 'Singapore Dollar', 'https://flagcdn.com/sg.svg');
INSERT INTO `currencies` VALUES (46, 'THB', 'Thai Baht', 'https://flagcdn.com/th.svg');
INSERT INTO `currencies` VALUES (47, 'TOP', 'Tongan pPaʻanga', 'https://flagcdn.com/to.svg');
INSERT INTO `currencies` VALUES (48, 'TRY', 'Turkish Lira', 'https://flagcdn.com/tr.svg');
INSERT INTO `currencies` VALUES (49, 'TWD', 'New Taiwan Dollar', 'https://flagcdn.com/tw.svg');
INSERT INTO `currencies` VALUES (50, 'TZS', 'Tanzanian Shilling', 'https://flagcdn.com/tz.svg');
INSERT INTO `currencies` VALUES (51, 'USD', 'United States Dollar', 'https://flagcdn.com/us.svg');
INSERT INTO `currencies` VALUES (52, 'VEF', 'Venezuelan Bolívar', 'https://flagcdn.com/ve.svg');
INSERT INTO `currencies` VALUES (53, 'VND', 'Vietnamese Dồng', 'https://flagcdn.com/vn.svg');
INSERT INTO `currencies` VALUES (54, 'VUV', 'Vanuatu Vatu', 'https://flagcdn.com/vu.svg');
INSERT INTO `currencies` VALUES (55, 'WST', 'Samoan Tala', 'https://flagcdn.com/ws.svg');
INSERT INTO `currencies` VALUES (56, 'XOF', 'CFA Franc BCEAO', 'https://wise.com/web-art/assets/flags/xof.svg');
INSERT INTO `currencies` VALUES (57, 'ZAR', 'South African Rand', 'https://flagcdn.com/za.svg');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_email` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT '用户邮箱',
  `password` char(64) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT '密码',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `user_email`(`user_email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 39 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (4, '11@11.com', '$2a$10$qJR4LDZWpiuqW9WC9KXBP.MblHZ7ktbFhv3OjurOma6D5azAiUa2m', '2024-03-14 09:13:22', '2024-03-14 09:13:22');
INSERT INTO `users` VALUES (5, 'aaa@11.com', '$2a$10$r/J3SzvYf6ophmnEjxfgr.zrodRaF.tn/wIM5Mdb853KyoXE4wQsq', '2024-03-14 09:14:30', '2024-03-14 09:14:30');
INSERT INTO `users` VALUES (6, '2123@11.com', '$2a$10$J.v.PwVW5F6StwjD6xZOKut8n7clHg0j9KEDae7SJ1xrw0SPuY.DW', '2024-03-14 09:18:06', '2024-03-14 09:18:06');
INSERT INTO `users` VALUES (7, '213131@11.com', '$2a$10$tlvSk6/twMsJk8mst7Vppu/l6wN9AiUmO/aGj8lKOJh3SAM7A7qWa', '2024-03-14 09:18:39', '2024-03-14 09:18:39');
INSERT INTO `users` VALUES (8, 'aaa22@11.com', '$2a$10$eHz3i1xrc6hEL7btJ4gGauOyDcyakvR0ltMCMSiOXtSivPZkWsRI6', '2024-03-14 09:21:53', '2024-03-14 09:24:04');
INSERT INTO `users` VALUES (9, '212131323@11.com', '$2a$10$mKFFSepdUEZJuDZuNj6RJ.yP4kMPK0uw2bw8BYor1e4Pl0JKGTlgW', '2024-03-14 09:29:15', '2024-03-14 09:29:15');
INSERT INTO `users` VALUES (10, '212132121323@11.com', '$2a$10$/YZO.Tpy8twa1B51o6EX.OV2NcvxBIwnsurnPVancGnbBgcCkU5/y', '2024-03-14 09:30:14', '2024-03-14 09:30:14');
INSERT INTO `users` VALUES (11, '2121321211323@11.com', '$2a$10$DsTjyMccvYwWhi3Dqw9eWuK7Y1zQZaF7I9S6IRUavpHD2muCGUTy6', '2024-03-14 09:30:46', '2024-03-14 09:30:46');
INSERT INTO `users` VALUES (12, '212132121122323@11.com', '$2a$10$RBfn6D6v/xmvhpTBjzdis.32BjyoEQGHG8yfqzrtfC6waVjiHD07i', '2024-03-14 09:32:10', '2024-03-14 09:32:10');
INSERT INTO `users` VALUES (13, '21213212112222323@11.com', '$2a$10$fLOMuIEPdLsxSF7LoPDpz.s1XwODmooyYC75fsxRY5PNsOFIiIXBe', '2024-03-14 09:32:34', '2024-03-14 09:32:34');
INSERT INTO `users` VALUES (14, '22323@11.com', '$2a$10$svNdu4JkIN08nuVqL544cOeU5mj3/q1TPfNiZeaxfADIweZUAI6Du', '2024-03-14 09:33:30', '2024-03-14 09:33:30');
INSERT INTO `users` VALUES (15, '2112323@11.com', '$2a$10$y50NLds62esMDdG5M5CBkeCbAvFMn9EWoRIddefylzym5O8zObGA6', '2024-03-14 09:33:53', '2024-03-14 09:33:53');
INSERT INTO `users` VALUES (16, '21122323@11.com', '$2a$10$Tfk2LvJ2fhBmBXxgHXAoB.6.5wnu9a9Qq3EmZzCeYJgd30Ak2cNdi', '2024-03-14 09:37:31', '2024-03-14 09:37:31');
INSERT INTO `users` VALUES (17, 'zsdasd@qq.com', '$2a$10$K3Cf8uYoqVNZ.sXHNow0qe0fV6VFy.kk2A2lnkQuOy3DIu2cXJrmC', '2024-03-14 09:38:43', '2024-03-14 09:38:43');
INSERT INTO `users` VALUES (18, '2123zxc@11.com', '$2a$10$cHqR6pMWXKZmxKFuVyBVLeA1t2PorDokvQ3bpXaLQr4.kD1vTulZm', '2024-03-14 09:39:25', '2024-03-14 09:39:25');
INSERT INTO `users` VALUES (19, 'qqq@qq.com', '$2a$10$gNGjbGnSMVTlrRhjQB8UEu.g7f2IbfKj8rZkHOOZBp1BUTyRu7hfq', '2024-03-14 09:41:05', '2024-03-14 09:41:05');
INSERT INTO `users` VALUES (20, 'zzzz@qq.com', '$2a$10$/xtMjjJvHalSNUoPrpd/Ye2xPFD3EFHGodJONRGaLlAJZGBJxsAK.', '2024-03-14 09:47:19', '2024-03-14 09:47:19');
INSERT INTO `users` VALUES (21, 'xiaom', '$2a$10$YCYrzLRwP49VFYl6GHkATeuLwSgLKaMFbNqKnTq/kTOZtiCt94vUy', '2024-03-14 13:06:27', '2024-03-14 13:06:27');
INSERT INTO `users` VALUES (22, 'xiaom22', '$2a$10$ovv.NdvbB.8QVdW1ejAubuMxRRAOR1Qz4uLV1dtT54aZNXIkPwDwe', '2024-03-14 13:21:29', '2024-03-14 13:21:29');
INSERT INTO `users` VALUES (23, 'xiaom232', '$2a$10$SISGE5GrPfZZV/Qzw9gUEujJb6sHLjppLNi8YQfboM0L1mboDOQUS', '2024-03-14 13:23:54', '2024-03-14 13:23:54');
INSERT INTO `users` VALUES (24, 'xiaom2311112', '$2a$10$1iWBwak.qn.eXwSJuhFxPebhKVq0lH4hxsT5jTjPouQSPRtKrTEZS', '2024-03-14 13:59:00', '2024-03-14 13:59:00');
INSERT INTO `users` VALUES (25, '213122231@11.com', '$2a$10$iYjuqYNtVKlD6cNv4pkWcenQcbbjq/Wuk7RW3LTpawoG7l1CqvJvS', '2024-03-15 02:33:51', '2024-03-15 02:33:51');
INSERT INTO `users` VALUES (26, '21312222231@11.com', '$2a$10$doqeeqeeEUyMKDIZPCPIdeNCH9mbvCXyuCnHmN25Dj/Lftkzj3Vp2', '2024-03-15 02:34:32', '2024-03-15 02:34:32');
INSERT INTO `users` VALUES (27, 'tt@11.com', '$2a$10$LMhQZdhN16eEFC9XXt44aO6ruOcyNFHkgoZHxC6DxrXSM1vNp0/qW', '2024-03-15 02:38:15', '2024-03-15 02:59:26');
INSERT INTO `users` VALUES (28, 'x.ckpkve@cwodwuxc.cn', '$2a$10$330s64Js/TCPnQfoHFATjeKb6hVU8N2FPR06iivQOtu5Jof4bWCTq', '2024-03-15 06:51:00', '2024-03-15 06:51:00');
INSERT INTO `users` VALUES (29, 'd.qcguwry@mwpldzp.hk', '$2a$10$mx.w1HbrG8bG9ff7Am8vu.w3y/vpAiw5RaSvfLDmy5fAHCMxt5/sy', '2024-03-15 06:51:26', '2024-03-15 06:51:26');
INSERT INTO `users` VALUES (30, 'h.lwddkuihf@ucrlminjt.pe', '$2a$10$ummEsN1HKjn6VQaHY3nV.Osc5F/l1DLrha2iELr9GVke3HtIEVOM.', '2024-03-15 06:57:40', '2024-03-15 06:57:40');
INSERT INTO `users` VALUES (31, 'l.aar@detsgv.pg', '$2a$10$LBGr0.M0SotcRcuVgnkYye0OMF5THkYmdeE9tCT9rmghrUxqvjfbW', '2024-03-15 07:02:30', '2024-03-15 07:02:30');
INSERT INTO `users` VALUES (32, 'i.xypj@yglnin.nr', '$2a$10$IlMMmlcyuPJWPndZRhIyDONzJhbh6tKnJyvBxh4Q6.bk0eFHiNjg2', '2024-03-15 07:04:20', '2024-03-15 08:33:43');
INSERT INTO `users` VALUES (33, 'f.hbzxob@umydqztu.tv', '$2a$10$V/4g0RdYmjbtlwXusPyLguG9cG6mg0lpuFYjzHn/s3cQbQS2kj2au', '2024-03-15 07:08:01', '2024-03-15 07:08:01');
INSERT INTO `users` VALUES (34, 'm.pvino@ngrfty.az', '$2a$10$llx5nNF2GifyZ21Vy84Z1O3fiis2B9oenM3tD389DYm.FHFHwoJw2', '2024-03-15 07:12:33', '2024-03-15 07:12:33');
INSERT INTO `users` VALUES (35, '2131qq31@11.com', '$2a$10$ENTy8XCDSEJtxg9bqLCPteI/DfvbAndO6JYbgehO5ok0gl7dRogS6', '2024-03-15 07:27:12', '2024-03-15 07:27:23');
INSERT INTO `users` VALUES (36, 'h.jqoesvok@xnlvchb.coop', '$2a$10$qc5tncnlinJmPKeuinlrpOsX4jPb4bRqZcMcl5YTL.7/bEiywTUXK', '2024-03-15 07:35:06', '2024-03-15 07:35:06');
INSERT INTO `users` VALUES (37, 'a.hmojvhs@vwjbmhd.jm', '$2a$10$nt6OuMvG.Kt1EUGt4g75dexuns3kWB0jFPXnCsY2mEl4lWxECd0ge', '2024-03-15 07:53:59', '2024-03-15 07:53:59');
INSERT INTO `users` VALUES (38, 'hmojvhs@gmail.com', '$2a$10$nqcUBdJHPANIF3JN0qJHoee5bDT0Hp7oB3eo/XStFmqQTa8IOSyu2', '2024-03-15 09:06:06', '2024-03-15 09:06:06');

SET FOREIGN_KEY_CHECKS = 1;
