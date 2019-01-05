type Env = 'development' | 'staging' | 'production';
const env: Env = <Env>process.env.NODE_ENV || 'development';
const config = {
  development: {
    db: {
      host: 'localhost',
      port: '5432',
      username: 'ayush',
      password: 'ayush123',
      database: 'poll',
    },
  },
  staging: {
    db: {
      host: 'localhost',
      port: '5432',
      username: 'ayush',
      password: 'ayush123',
      database: 'poll',
    },
  },
  production: {
    db: {
      host: 'localhost',
      port: '5432',
      username: 'ayush',
      password: 'ayush123',
      database: 'poll',
    },
  },
};

export default config[env];
