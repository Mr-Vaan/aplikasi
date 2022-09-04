<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
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
define( 'DB_NAME', 'aplikasi' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Ld.OZ2yV!H%Q?LeGAzZ.ws]}=@+0][D7JP-BSvTxrn4EAlOB?>[d_vu*?`1k4p*v' );
define( 'SECURE_AUTH_KEY',  'X/+p2Ors%PR7CWfoPH-:q&2?Ajq]R(:f6Q#eg @N?bE@O;g6+Kf<002+FkXM>qXO' );
define( 'LOGGED_IN_KEY',    'l]wm@GgOSuk^F)4g2@B=;]INllE]k:r|-;s{_5y_*!l@j[$z55v sQ,F%8sp<^#+' );
define( 'NONCE_KEY',        'xC7?#-N_g[T@F69;l|q]!v&9nq[QcsJvQdGp~>;9m4;N11w:TG:2;*D217tqjo!#' );
define( 'AUTH_SALT',        '-IV1![au*;_00R>fPv1Y|r|;$J_S1@.k2{b/>LmJQ+5Fx#YE@N4oWx;;ubKAM9gp' );
define( 'SECURE_AUTH_SALT', 'WiMpx,L^MO/j^PA^&l4+k8}q[%MOWQ0XFnB8|h~!o_h9@qz1u5SVhdZ!tv@TF:8Q' );
define( 'LOGGED_IN_SALT',   '>otRI|*tldOe*0P)aWHW<UUj*0H%]Ha*F+G9#p9FgqPI}xxb}LW}Fk](e*lsSdp}' );
define( 'NONCE_SALT',       '#Ep^dBG~^6)3Qm34s-.+deDhAUNFG.Or{0-:0.d_8U;~^T`U?^FutE`*{iO.Y[.F' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
