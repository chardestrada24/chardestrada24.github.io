<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ecommerce_db' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ',KNKcQ{!9Irr6RT:gff lit3;^j/,hy1=pR^|V}0(-=Y1lRs%adiW:Hw-<S@.?;3' );
define( 'SECURE_AUTH_KEY',  'lm4<qaa~!cvJ7UANEhMAsw,x3D{8kl[XshJZItbi_mvES4[5I  JAZr)yd`W1cTw' );
define( 'LOGGED_IN_KEY',    '0m1j^>L6*Dn/$O2$h0<SM_]tfK`NlVcuLU1#9bOZK,Jl2tw)y9vJZuf0;86g&2I5' );
define( 'NONCE_KEY',        'k%.Isx/G=[:^;k&*Y[S-}vlgXIdf7e*rf}Ui--b;^*O+9ww4r3sRr#uDZLXutB{O' );
define( 'AUTH_SALT',        'S`n?ZZCMm5]`xHlumci467w><[6{N5ySDA{V@}fTqbP)2n@nt=*!Lo=u$~_$DI3^' );
define( 'SECURE_AUTH_SALT', '%qQX=D$X>h7T[L}XN6uInqBN][.ZY$JhDh`6zL|OR<fuJ|sR_XxGT$d6)(F4WYUi' );
define( 'LOGGED_IN_SALT',   '[cr&#N*0m=x=@IvPW8#q))?fmD/Zj%P22UtO~T=mG1}F9h.dG#@RNN<ZVo}2l]=K' );
define( 'NONCE_SALT',       'Ql>o?h-jEk?_g~-Tbp-BKeyvFYpu^Dk<X[6O*NW `@HjIMxh+tmE(]cGVk;k|#9;' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

@ini_set('upload_max_size' , '1000M' );

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
