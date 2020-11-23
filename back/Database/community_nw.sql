/*
 Navicat Premium Data Transfer

 Source Server         : COM69
 Source Server Type    : MySQL
 Source Server Version : 100113
 Source Host           : localhost:3306
 Source Schema         : community_nw

 Target Server Type    : MySQL
 Target Server Version : 100113
 File Encoding         : 65001

 Date: 23/11/2020 10:17:14
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for infirmary
-- ----------------------------
DROP TABLE IF EXISTS `infirmary`;
CREATE TABLE `infirmary`  (
  `inf_id` int(6) NOT NULL AUTO_INCREMENT,
  `id9` varchar(9) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `hos_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `apency` int(2) NOT NULL,
  `ministry` int(2) NOT NULL,
  `department` int(2) NOT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `province` int(2) NOT NULL,
  `amphur` int(2) NOT NULL,
  `district` int(2) NOT NULL,
  `swine` int(2) NOT NULL,
  `tel` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `fax` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `postcode` int(5) DEFAULT NULL,
  `id5` varchar(5) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `zone` int(1) NOT NULL,
  PRIMARY KEY (`inf_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1059 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for registration
-- ----------------------------
DROP TABLE IF EXISTS `registration`;
CREATE TABLE `registration`  (
  `reg_id` int(9) NOT NULL AUTO_INCREMENT,
  `role` int(2) NOT NULL,
  `pname` int(2) NOT NULL,
  `fname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `lname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cid` varchar(13) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `tell` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `line` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `inf_id` int(6) NOT NULL,
  `agency_tell` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `regdate` datetime(0) NOT NULL,
  `reg_status` int(1) NOT NULL DEFAULT 0,
  `confirmer` int(3) DEFAULT NULL,
  `confdate` datetime(0) DEFAULT NULL,
  PRIMARY KEY (`reg_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for request_log
-- ----------------------------
DROP TABLE IF EXISTS `request_log`;
CREATE TABLE `request_log`  (
  `log_id` int(9) NOT NULL AUTO_INCREMENT,
  `mem_id` int(9) NOT NULL,
  `an` varchar(9) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `process` int(2) NOT NULL COMMENT '1=EMR',
  `req_date` datetime(0) NOT NULL,
  PRIMARY KEY (`log_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for user_member
-- ----------------------------
DROP TABLE IF EXISTS `user_member`;
CREATE TABLE `user_member`  (
  `mem_id` int(9) NOT NULL AUTO_INCREMENT,
  `reg_id` int(9) NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `token_key` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `last_login` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`mem_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;
